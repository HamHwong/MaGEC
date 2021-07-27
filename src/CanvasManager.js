/*
 * @Author: your name
 * @Date: 2021-03-25 14:50:15
 * @LastEditTime: 2021-04-27 16:09:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MPANDA.STUDIO.HOMEPAGE/src/components/Game/lib/CanvasManager.js
 */
import {
    EventManager
} from "./EventManager";
import {
    AssetsManager
} from './AssetsManager';
import {
    WSManager
} from './WSManager';
import {
    KeyboardManager
} from './KeyboardManager';
import {
    CameraManager
} from "./CameraManager";
import {
    IMap
} from "./Sprints/Imodels/IMap";
import ClientType from './Emuns/ClientType'
export class CanvasManager {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.messageBus = []
        this.sprints = []
        this.preRenderSprints = []
        this.AnimationFrameTimer = null
        this.pause = false
        this.devicePixelRatio = window.devicePixelRatio || 1;
        this.backingStoreRatio = this.ctx.webkitBackingStorePixelRatio ||
            this.ctx.mozBackingStorePixelRatio ||
            this.ctx.msBackingStorePixelRatio ||
            this.ctx.oBackingStorePixelRatio ||
            this.ctx.backingStorePixelRatio || 1;
        this.ratio = this.devicePixelRatio / this.backingStoreRatio
        this.FPS = 120
        this.EventManager = new EventManager()
        this.AssetsManager = null
        this.KeyboardManager = new KeyboardManager()
        this.WSManager = null
        this.Debug = false
        this.Player = null
        this.Camera = null
        this.MapManager = null
        this.PauseControls = false
        this.ClientType = ClientType.OFFLINE
    }
    async init({
        width = document.documentElement.clientWidth,
        height = 500,
        online = false,
        debug = false
    }) {
        this.Debug = debug
        this._init_Canvas(width, height)
        this._init_EventManager()
        this._init_KeyboardManager()
        this._init_Cursor()
        await this._init_AssetsManager()
        this._init_WSManager()
        return this
    }
    _init_Canvas(width, height) {
        //HiDPI
        this.canvas.height = height * this.ratio
        this.canvas.width = width * this.ratio
        this.canvas.style.height = height + 'px'
        this.canvas.style.width = width + 'px'
        this.ctx.scale(this.ratio, this.ratio);
    }
    _init_Camera() {
        this.Camera = new CameraManager(0,0,this.canvas.width,this.canvas.height)
        // console.log(this.canvas.height,this.canvas.width)
        this.Camera.follow(this.Player)
    }
    _init_EventManager() {
        if (!this.EventManager)
            this.EventManager = new EventManager()
    }
    _init_KeyboardManager() {
        if (!this.KeyboardManager)
            this.KeyboardManager = new KeyboardManager()
        this.KeyboardManager.init(this)
    }
    async _init_AssetsManager() {  
        this.AssetsManager = new AssetsManager(this)
        await this.AssetsManager.init()
        this.preloadSprints()
    }
    _init_WSManager() {
        this.WSManager = new WSManager()
        this.WSManager.Connect(this)
    }
    start() {
        this.AnimationFrameTimer = this.draw()
        return this
    }
    _init_Cursor() {
        this.canvas.addEventListener('mousemove', (e) => {
            e.preventDefault();
            //offsetX
            //offsetY
            // console.log(e.offsetX, e.offsetY)
        })
    }
    preloadSprints() {
        this.preRenderSprints.map(func => func())
        this._init_Camera()
    }
    draw() {
        setTimeout(() => {
            var timer = window.requestAnimationFrame(this.draw.bind(this))
            if (!this.AnimationFrameTimer) this.AnimationFrameTimer = timer
            if (!this.pause) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                // 画精灵
                this.sprints.map(sprint => {
                    sprint._update()
                })
                // this.Camera.goForward()
            }
        }, 1000 / this.FPS);
    }
    loadMap(map) {
        if (map instanceof IMap){
            this.MapManager = map
            map.CanvasManager = this
            this.sprints.unshift(map)
            this.preloadSprints()
            console.log('Loaded Map')
        }
    }
    addInstance(instance) {
        instance.CanvasManager = this
        if (!this.sprints.find(i => i.id === instance.id)) {
            this.sprints.push(instance)
            this.preloadSprints()
        }
        return this
    }
    removeInstance(id) {
        this.sprints = this.sprints.filter(sprint => sprint.id === id)
        return this
    }
    registerEvent(instance, $event, callback) {
        this.EventManager.subscribe($event, callback.bind(instance))
        return this
    }
    broadcast($event, data) {
        if (!data) {
            data = {}
        }
        if (typeof data === 'string') {
            var value = data
            data = {
                value
            }
        }
        data.OriginId = this.Player.id
        data.TargetId = this.Player.id
        this.EventManager.trigger($event, data)
        return this
    }
    drop() {
        this.pause = true
        this.canvas.remove();
        if (this.WSManager)
            this.WSManager.Close();
        this.WSManager = null
        if (this.KeyboardManager)
            this.KeyboardManager.removeKeyboardEvents();
        this.KeyboardManager = null
        this.AssetsManager = null
    }
}