const action = process.argv[process.argv.length - 1]
const compunterAction = ~~(Math.random() * 3 + 1)
const actionList = {
  rock: 1,
  scissor: 2,
  paper: 3
}
if (!actionList[action]) {
  console.error('请出rock/scissor/paper')
  return
}
if (actionList[action] === compunterAction) {
  console.log('平局')
} else if (
  (actionList[action] === actionList.rock && compunterAction === actionList.scissor) || 
  (actionList[action] === actionList.scissor && compunterAction === actionList.paper) || 
  (actionList[action] === actionList.paper && compunterAction === actionList.rock)
) {
  console.log('你赢了')
} else {
  console.log('你输了')
}