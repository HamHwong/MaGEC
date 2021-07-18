/*
 * @Author: your name
 * @Date: 2021-03-24 16:52:32
 * @LastEditTime: 2021-04-08 11:06:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MPANDA.STUDIO.HOMEPAGE/src/components/Game/lib/load.js
 */
import { CanvasManager } from './CanvasManager'
import { IMap } from './Sprints/Imodels/IMap'
import { Instance } from './Sprints/lib/Instance'
import { Player } from './Sprints/models/Player'

export const GamePadFactory = {
  CanvasManager: null,
  getCanvasManager: function (canvas) {
    if (!this.CanvasManager) this.CanvasManager = new CanvasManager(canvas)
    return this.CanvasManager
  },
}
export { Instance, Player, IMap }
