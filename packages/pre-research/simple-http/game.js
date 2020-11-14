const {Enum} = require('./utils')

const GAME_TYPE = Enum('rock', 'paper','scissors')
const GAME_RESULT = Enum('victory','failure','deuce')

exports.GAME_TYPE = GAME_TYPE

exports.GAME_RESULT = GAME_RESULT

exports.game = function(action) {

    const computer = ~~(Math.random()*3)
    // console.log('电脑出了：' + GAME_TYPE[computer])
    const player = GAME_TYPE[action]

    const {paper, rock, scissors} = GAME_TYPE
    const {victory, failure, deuce} = GAME_RESULT

    // 结果导向,用户的结果
    if (computer === player) {
        return {result: GAME_RESULT[deuce], computer: GAME_TYPE[computer]}
    } else if (
        computer === paper && player === scissors ||
        computer === rock && player === paper ||
        computer === scissors && paper === rock
    ) {
        return {result: GAME_RESULT[victory], computer: GAME_TYPE[computer]}
    } else {
        return {result: GAME_RESULT[failure], computer: GAME_TYPE[computer]}
    }
}