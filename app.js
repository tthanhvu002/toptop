const hotView = document.querySelector('.hot')
const gameView = document.querySelector('.game')
const ltView = document.querySelector('.lt')
const ktView = document.querySelector('.kt')
const bhView = document.querySelector('.bh')
const vlogView = document.querySelector('.vlog')


hotView.onclick = () => {
    document.querySelector('.hot-list').scrollIntoView()
}

gameView.onclick = () => {
    document.querySelector('.game-list').scrollIntoView()
}
ltView.onclick = () => {
    document.querySelector('.lt-list').scrollIntoView()
}
ktView.onclick = () => {
    document.querySelector('.kt-list').scrollIntoView()
}
bhView.onclick = () => {
    document.querySelector('.bh-list').scrollIntoView()
}

vlogView.onclick = () => {
    document.querySelector('.vlog-list').scrollIntoView()
}
