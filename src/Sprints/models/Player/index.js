/*
 * @Author: your name
 * @Date: 2021-03-30 16:38:32
 * @LastEditTime: 2021-04-24 18:05:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MPANDA.STUDIO.HOMEPAGE/src/components/Game/lib/Sprints/ball.js
 */
import {
    ICharacter
} from '../../Imodels/ICharacter'

export class Player extends ICharacter {
    constructor(id) {
        super(id)
    }
    init() { 
        this.on('$keyup', ({value:keyCode}) => {
            switch (keyCode) {
                case 'KeyA':
                case 'KeyD': 
                case 'KeyS': 
                case 'KeyW':
                    this.status = 'init'
                    this.xa = -0.5
                    this.ya = -0.5
                    break;
            }
        })
        this.on('$walk.left', (data) => { 
            this.status = 'walk.left' 
            this.xa = 0
            this.xv = 4
            this.vector[0] = -1
        })
        this.on('$walk.right', (data) => {
            this.status = 'walk.right' 
            this.xa = 0
            this.xv = 4
            this.vector[0] = 1
        })
        this.on('$walk.up', (data) => {
            this.status = 'walk.right' 
            this.ya = 0
            this.yv = 4
            this.vector[1] = -1
        })
        this.on('$walk.down', (data) => {
            this.status = 'walk.right' 
            this.ya = 0
            this.yv = 4
            this.vector[1] = 1
        }) 
        this.w = 80 
        this.h = 110 
        this.FramesDurationOfEachFrame = 12
        this.enableDebug()
    }
}