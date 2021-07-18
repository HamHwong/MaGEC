/*
 * @Author: your name
 * @Date: 2021-03-30 16:20:48
 * @LastEditTime: 2021-04-24 18:00:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MPANDA.STUDIO.HOMEPAGE/src/components/Game/lib/actions/index.js
 */
export function switchStatus() {
    if (this.pause)
        this.pause = false
    else
        this.pause = true
}
// export function reset(){  
//     this.broadcast('$myevent',12)
// }
export function walkLeft(){
    this.broadcast('$walk.left') 
}
export function walkRight(){
    this.broadcast('$walk.right')  
}
export function walkUp(){
    this.broadcast('$walk.up') 
}
export function walkDown(){
    this.broadcast('$walk.down')  
}
export function keyup(){
    
}
export function updateDB(){
    this.AssetsManager.dropDB()
    location.reload()
}
