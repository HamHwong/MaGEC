import { Instance } from "../lib/Instance";
import Enums from './Type.Enums'
/*
 * @Author: your name
 * @Date: 2021-04-23 11:21:02
 * @LastEditTime: 2021-04-24 17:57:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MPANDA.STUDIO.HOMEPAGE/src/components/Game/lib/Sprints/Imodels/Map.js
 */ 
export class IMap extends Instance{
  constructor(id){
    super(id)
    this.type=Enums.MAP
    this.gravity = 0.9
    this.mapFrames = []

  }
  async _loadImgs() {
    this.activeFrames = (ctx)=>{
      ctx.fillStyle = '#ddd';
      ctx.fillRect(this.x,this.y,this.w,this.h); 
    }
  }
  updating() { 
        
  }
}