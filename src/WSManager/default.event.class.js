/*
 * @Author: your name
 * @Date: 2021-04-17 21:48:14
 * @LastEditTime: 2021-04-17 21:48:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MPANDA.STUDIO.HOMEPAGE\src\components\Game\lib\WSManager\default.event.class.js
 */
export class defaultEvent {
  constructor({$event,data,from,to='ALL'}){
    this.$event = $event
    this.data = data
    this.from = from
    this.to = to
  }
}