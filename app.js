
document.addEventListener('DOMContentLoaded', () => {
  const holes = document.querySelectorAll('.hole')
  const timer = document.querySelector('.timer')
  const start = document.querySelector('#start')

  let  score = 0

  const scoreBoard = document.querySelector('.score')

  start.addEventListener('click', startGame)



  function startGame(){

    start.style.visibility = 'hidden'

    // initial timer starts
    let currentTime = +timer.textContent
    function countdown() {
      currentTime--
      timer.textContent = currentTime
      if(currentTime === 0) {
        clearInterval(timerId)
        endGame()
      }
    }
    const timerId = setInterval(countdown, 1000)



    // mole selector starts
    function peep() {
      // get a random square
      const holeIdx = Math.floor(Math.random() * holes.length)
      const hole = holes[holeIdx]
      // add a class of mole
      hole.classList.add('mole')
      // wait 750ms, then remove the class of mole
      const peepID = setTimeout(() => {
        hole.classList.remove('mole')
      }, 750)

    }
    // mole selector ends


    // method to increment score
    function hit(e){
      if(e.target.classList.contains('mole')) score++
      scoreBoard.innerHTML = score
    }

    holes.forEach(hole => hole.addEventListener('click', hit))

    const moleId = setInterval(peep, 1000)


  }

  function endGame(){
    location.reload()
  }


})
