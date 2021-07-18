/*
 * @Author: your name
 * @Date: 2021-04-17 16:07:32
 * @LastEditTime: 2021-04-27 16:09:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MPANDA.STUDIO.HOMEPAGE\src\components\Game\lib\WSManager\utils\index.js
 */
import Events from '../default.event.status'
import {
  defaultEvent
} from '../default.event.class'
import {
  Player
} from '../../Sprints/models/Player'
export class WSEventsManager {
  constructor(WSManager) {
    this.WSManager = WSManager
  }
  handleEvents(event) {
    try {
      var e = JSON.parse(event)
      const {
        $event,
        data,
        from
      } = e
      switch ($event) {
        case Events.NEWBORN:
          var ball = new Player(from)
          this.WSManager.CanvasManager.addInstance(ball)
          this.WSManager.Send(new defaultEvent({
            $event: Events.UPDATE_USERS,
            data: {
              id: this.WSManager.CanvasManager.Player.id
            }
          }))
          break
        case Events.UPDATE:
          this.WSManager.CanvasManager.sprints.filter(o => o.id === from).map(i => {
            const {
              x,
              y,
              z,
              w,
              h,
              xv,
              yv,
              zv,
              xa,
              ya,
              za,
              gap,
              rotation,
              vector,
              currentFrame,
              _status,
            } = data
            var {x:myX,y:myY} = this.WSManager.CanvasManager.Player
            var {x:myXToMap,y:myYToMap} = this.WSManager.CanvasManager.Player.getGapToMAP()
            var {x:yourXToMap,y:yourYToMap} = gap 
            i.x = yourXToMap-myXToMap+myX
            i.y =  yourYToMap-myYToMap+myY
            i.z = z
            i.w = w
            i.h = h
            i.xv = xv
            i.yv = yv
            i.zv = zv
            i.xa = xa
            i.ya = ya
            i.za = za
            i.rotation = rotation
            i.vector = vector
            i.currentFrame = currentFrame
            i._status = _status
          })
          break
        case Events.UPDATE_USERS: 
          if (from&&from !== this.WSManager.CanvasManager.Player.id) { 
            var b = new Player(from); 
            this.WSManager.CanvasManager.addInstance(b)
          }
          break;
        case Events.LEAVE:
          this.WSManager.CanvasManager.sprints= this.WSManager.CanvasManager.sprints.filter(o => o.id !== from)
          break 
        case Events.LISTEN:
          this.WSManager.CanvasManager.sprints.filter(o => o.id === from).map(i=>{
            // console.log(i)
            i.SaySomeThing = data.words
          })
          break
        default:
          break
      }
    } catch (e) {
      console.log('err', e)
    }
  }
}