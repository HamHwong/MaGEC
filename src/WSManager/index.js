/*
 * @Author: your name
 * @Date: 2021-04-16 16:18:16
 * @LastEditTime: 2021-04-23 17:59:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MPANDA.STUDIO.HOMEPAGE/src/components/Game/lib/networkManager/index.js
 */
import EVENTS from './default.event.status'
import {
  defaultEvent
} from './default.event.class'
import {
  WSEventsManager
} from './WSEventsManager'


export class WSManager {
  constructor() {
    var port = process.env.NODE_ENV === `production` ? 8111 : 8110;
    this.WSUrl = `${location.protocol==='https:'?'wss':'ws'}://${location.hostname}:${port}`
    this.WS = null
    this.CanvasManager = null
    this.ISCONNECTED = false
    this.WSEventsManager = new WSEventsManager(this)
  }
  Init(CanvasManager) {
    this.WS.onmessage = (val) => {
      const {
        data
      } = val
      this.WSEventsManager.handleEvents(data)
    }
    this.WS.onclose = () => {
      this.Send(new defaultEvent({
        $event: EVENTS.LEAVE
      }))
    }
    this.WS.onopen = () => {
      this.ISCONNECTED = true
      this.Send(new defaultEvent({
        $event: EVENTS.NEWBORN
      }))
    }
    this.CanvasManager = CanvasManager || this.CanvasManager
  }
  Connect(CanvasManager) {
    try {
      this.WS = new WebSocket(this.WSUrl)
      this.Init(CanvasManager)
    } catch (e) {
      console.log('无法连接!')
      this.WS.close()
    }
  }
  Send(event) {
    event.from = this.CanvasManager.Player.id
    // if(!this.WS)
    // this.Connect()
    try {
      if (this.ISCONNECTED)
        this.WS.send(JSON.stringify(event))
    } catch (e) {
      this.ISCONNECTED = false
    }

  }

  Close() {
    this.WS.close()
    this.ISCONNECTED = false
    this.WS = null
  }
}