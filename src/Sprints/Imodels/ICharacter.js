/*
 * @Author: your name
 * @Date: 2021-04-08 15:13:57
 * @LastEditTime: 2021-04-25 18:16:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MPANDA.STUDIO.HOMEPAGE/src/components/Game/lib/Sprints/character.js
 */ 
import Enums from './Type.Enums'
import {
  Instance
} from '../lib/Instance'
import EVENTS from '../../WSManager/default.event.status'
import {
  defaultEvent
} from '../../WSManager/default.event.class'

export class ICharacter extends Instance {
  constructor(id) {
    super(id)
    this.type = Enums.CHARACTER
    this._SaySomeThing = null
    Object.defineProperty(this, 'SaySomeThing', {
      get: () => {
        return this._SaySomeThing
      },
      set: (val) => {
        if (val !== this._SaySomeThing) {
          clearTimeout(this.SaySomeThingTimer)
          this._SaySomeThing = val
          this.SaySomeThingTimer = setTimeout(() => {
            this.SaySomeThing = null
            this.SaySomeThingTimer = null
          }, 5000);
        }
      }
    })
    this.SaySomeThingTimer = null
  }
  updating() {
    this.framesCount = this.actionsFrames[this.status] ? this.actionsFrames[this.status].length || 1 : 1
    this._frameCounter += 1
    if (this.framesCount > this.CanvasManager.FPS) {
      //this.currentFrame += 1
      this.currentFrame = this._frameCounter % this.framesCount
    } else {
      if ((this._frameCounter / this.FramesDurationOfEachFrame) > 1) {
        this._currentFrame += 1
        this._currentFrame = this._currentFrame % this.framesCount
        this.currentFrame = this._currentFrame
        this._frameCounter = 0
      }
    }
    this.activeFrames = this.actionsFrames[this.status]
  }
  draw_addition() {
    this.draw_word()
  }
  draw_word() {
    if (this.SaySomeThing) {
      var minH = 50
      var minW = 150 
      var charPerLine = 15
      var lineHeightOfPerLine = 15
      var fontsize = 15;
      var {height,width} = this.meatureSize(this.SaySomeThing,fontsize,lineHeightOfPerLine,charPerLine)
      this.drawRoundDialog(this.x + this.w, this.y,  width,height, 12, 10)
      this.ctx.font = `${fontsize}px Verdana`;
      this.ctx.fillStyle = '#333'; 
      this.writeTextOnCanvas(lineHeightOfPerLine,charPerLine,this.x + this.w + 20, this.y +10 ,this.SaySomeThing)
      if (this.CanvasManager.Player.id === this.id) {
        this.CanvasManager.WSManager.Send(new defaultEvent({
          $event: EVENTS.LISTEN,
          data: {
            words: this.SaySomeThing
          }
        }))
      }
    }
  }
  drawRoundDialog( x, y, minW, minH, r, e) {
    var d = minH / 2 - r - e;
    // 我觉得这两个if判断的不完全  还有minW minH都小于2r的情况
    if (minW < 2 * r) {
      r = minW / 2;
    }

    if (minH < 2 * r) {
      r = minH / 2;
      d = 0;
    }
    this.ctx.beginPath();
    this.ctx.moveTo(x + r, y);
    this.ctx.arcTo(x + minW, y, x + minW, y + minH, r);
    this.ctx.arcTo(x + minW, y + minH, x, y + minH, r);
    this.ctx.arcTo(x, y + minH, x, y, r);
    this.ctx.lineTo(x, y + minH / 2 + e);
    this.ctx.lineTo(x - e, y + minH / 2);
    this.ctx.lineTo(x, y + minH / 2 - e);
    this.ctx.lineTo(x, y + r);
    this.ctx.arcTo(x, y, x + minW, y, r);
    this.ctx.closePath();
    this.ctx.fillStyle = '#eee';
    this.ctx.fill();
    return this;
  }

  writeTextOnCanvas(lineheight, length, posX,posY, text) {  
    //length 每行多少个字节
    for (var i = 1; this.getTrueLength(text) > 0; i++) {
      var tl = this.cutString(text, length);
      this.ctx.fillText(text.substr(0, tl).replace(/^\s+|\s+$/, ""), posX, i * lineheight + posY);
      text = text.substr(tl);
    }
  }
  getTrueLength(str) { //获取字符串的真实长度（字节长度）
    var len = str.length,
      truelen = 0;
    for (var x = 0; x < len; x++) {
      if (str.charCodeAt(x) > 128) {
        truelen += 2;
      } else {
        truelen += 1;
      }
    }
    return truelen;
  }
  cutString(str, leng) { //按字节长度截取字符串，返回substr截取位置
    var len = str.length,
      tlen = len,
      nlen = 0;
    for (var x = 0; x < len; x++) {
      if (str.charCodeAt(x) > 128) {
        if (nlen + 2 < leng) {
          nlen += 2;
        } else {
          tlen = x;
          break;
        }
      } else {
        if (nlen + 1 < leng) {
          nlen += 1;
        } else {
          tlen = x;
          break;
        }
      }
    }
    return tlen;
  }
  meatureSize(words,fontSize,lineHeight,CharPerLine){
    var totleChars = this.getTrueLength(words)
    var lines = Math.ceil(totleChars/CharPerLine) 
    var height = (fontSize+lineHeight)*lines
    var width = fontSize*CharPerLine 
    return {height,width}
  }
}