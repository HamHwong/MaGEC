/*
 * @Author: your name
 * @Date: 2021-04-23 10:13:58
 * @LastEditTime: 2021-04-25 16:01:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MPANDA.STUDIO.HOMEPAGE/src/components/Game/lib/CameraManager/index.js
 */
export class CameraManager {
  constructor(x, y, w, h) {
    this.viewX = x
    this.viewY = y
    this.x = x
    this.y = y 
    this.viewW = w
    this.viewH = h
    this.followObj = null
  }

  follow(Instance) {
    this.followObj = Instance
  }
  goForward() {

  }
  go() {
    var {
      x: mapX,
      y: mapY,
      w: mapW,
      h: mapH
    } = this.followObj.CanvasManager.MapManager
    var centerXGap = (this.viewW - this.followObj.w) / 2
    var bottomYGap = (this.viewH - this.followObj.h) / 3 * 2 
    var{ x:X2Map,y:Y2Map} = this.CameraToCanvasMap(this.viewX , this.viewY)  
    if(
      (X2Map<=0&&this.followObj.x<=this.viewW/2)
      ||
      ((X2Map+this.viewW)>=mapW&&this.followObj.x>=(this.viewW-this.followObj.w)/2)){ 
      this.viewX = 0
    }else{
      this.viewX = -this.followObj.x+ centerXGap 
    } 

    if(Y2Map<0)
    {
      this.viewY = 0
      if(this.followObj.y>bottomYGap){
        //向上 
        this.viewY = -this.followObj.y+ bottomYGap  
      }
    }else if(Y2Map+this.viewH>mapH){
      this.viewY = 0
      if(this.followObj.y<bottomYGap){
        //向下 
        this.viewY = -this.followObj.y+ bottomYGap  
      } 
    }else{
      this.viewY = -this.followObj.y+ bottomYGap 
    } 

 
  }
  CameraToCanvasMap(viewX, viewY) {
    var {
      x: mapX,
      y: mapY,
    } = this.followObj.CanvasManager.MapManager
    return {
      x: viewX - mapX,
      y: viewY - mapY
    }
  }
  CanvasToCameraMap(x,y){
    var {
      x: mapX,
      y: mapY,
    } = this.followObj.CanvasManager.MapManager
    return {
      viewX:x+mapX,
      viewY:y+mapY
    }
  }
  Obj2Camera(objX,objY){
    return this.CanvasToCameraMap(objX,objY)
  }
  Camera2Obj(viewX,viewY){
    return this.CameraToCanvasMap(viewX,viewY)
  }  
  
  draw(context) {
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.strokeRect(this.x, this.y, this.viewW, this.viewH);
    var fontsize = 8;
    context.lineWidth = 1;
    context.font = `${fontsize}px Verdana`;
    context.fillStyle = '#333'
    var {x,y} = this.CameraToCanvasMap(this.viewX , this.viewY)  
    context.strokeText(`
    this.viewW:${this.viewW},
    this.viewH:${this.viewH},
    this.viewX:${this.viewX},
    this.viewY:${this.viewY},
    X2Map:${x}, 
    Y2Map:${y}`, 100, this.followObj.y+this.followObj.h/2)
  }
}