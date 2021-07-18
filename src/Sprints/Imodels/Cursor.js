/*
 * @Author: your name
 * @Date: 2021-04-18 19:50:03
 * @LastEditTime: 2021-04-23 14:25:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MPANDA.STUDIO.HOMEPAGE\src\components\Game\lib\sprints\Imodels\Cursor.js
 */
import {
  Instance
} from '../lib/Instance'
import Enums from './Type.Enums'
export class Cursor extends Instance{
  constructor(){
    super()
    this.type = Enums.CURSOR
  }
}