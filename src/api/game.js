import axios from 'axios'
export function init(){
  return axios({
    url: '/api/v1/game/init',
    method:'post'
  })
}