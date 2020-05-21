exports.games = function (action) {
  const compunterAction = ~~(Math.random() * 3 + 1)
  const {Enum} = require('../../utils/tools')
  const actionList = Enum(['rock=1', 'scissor', 'paper'])
  if (!actionList[action]) {
    console.error('请出rock/scissor/paper')
    process.exit(-1)
  } else {
    console.log(`电脑出${actionList[compunterAction]}`)
  }
  if (actionList[action] === compunterAction) {
    console.log('平局')
    return 0
  } else if (
    (actionList[action] === actionList.rock && compunterAction === actionList.scissor) || 
    (actionList[action] === actionList.scissor && compunterAction === actionList.paper) || 
    (actionList[action] === actionList.paper && compunterAction === actionList.rock)
  ) {
    console.log('你赢了')
    return +1
  } else {
    console.log('你输了')
    return -1
  }
}