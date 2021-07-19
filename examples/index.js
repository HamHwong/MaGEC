import { GamePadFactory, Player, IMap } from '../package/main.umd.js'
window.onload = async () => {
  let GameBoardCanvas = document.getElementById('canvas')
  let GameManager = null
  GameManager = GamePadFactory.getCanvasManager(GameBoardCanvas)
  await GameManager.init({
    height: 300,
    width: 600,
    debug: false,
    document: window.document,
  })
  var player = new Player()
  player.x = 0
  player.y = 200
  GameManager.Player = player
  GameManager.addInstance(player)
  var map = new IMap()

  map.w = 1000
  map.h = 600
  map.x = 0
  map.y = 0
  GameManager.loadMap(map)
  GameManager.start()
}
