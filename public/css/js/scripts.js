function init () {
  var musicContainer1 = document.querySelector('.musicquestions1')
  var musicContainer2 = document.querySelector('.musicquestions2')
    var musicContainer3 = document.querySelector('.musicquestions3')
      var thankyou = document.querySelector('.thankyou')
  var body = document.body
  var startBtn = document.querySelector('#startBtn')
  var submitBtn = document.querySelector('#submitBtn')
  var audio1 = document.querySelector('#audio1')
  var hintsingerjohn = document.querySelector('.hint-singerjohn')
  var goodjob = document.querySelector('.yay-goodjob')
  var guessdiv = document.querySelector('#guess')
  var containercontent = document.querySelector('.container-content')
  var restartgame = document.querySelector('.restart-game')
  document.getElementById('audio1').pause()
  var instructioncontainer = document.querySelector('.container-instruction-details')

  var modal = document.querySelector('#myModal')

  // Get the button that opens the modal
  var modalbtn = document.querySelector('#modalbtn')

  // Get the <span> element that closes the modal
  var closemodal = document.querySelector('.modalclose')

  musicContainer1.style.display = 'none'
  musicContainer2.style.display = 'none'
  musicContainer3.style.display = 'none'
    thankyou.style.display = 'none'
  hintsingerjohn.style.display = 'none'
  goodjob.style.display = 'none'

  startBtn.addEventListener('click', musicBegins)

  function musicBegins () {
    body.removeChild(instructioncontainer)
    body.classList = 'musicquestions1'
    musicContainer1.style.display = 'block'
    guessdiv.style.display = 'none'
    startBtn.style.display = 'none'
    audio1.play()

    function showHint () {
      closemodal.onclick = function () {
        modal.style.display = 'none'
        input.value = ''
        hintsingerjohn.style.display = 'block'
        $('.hint-singerjohn').delay(6000).fadeIn(500)
        guessdiv.style.display = 'block'
      }
    }

    function showGoodJobAndHide () {
      guessdiv.style.display = 'none'
      goodjob.style.display = 'block'
    }

    var word = 'everybody knows',
      input = document.querySelector('input'),
      submitBtn = document.querySelector('#submitBtn'),
      guess = document.querySelector('.num')

    function checkValueofWord () {
      var guessVal = guess.innerHTML
      if (input.value != word.toLowerCase()) {
        input.classList.add('wrong')
        modal.style.display = 'block'
        showHint()
        input.classList.remove('correct')
        if (input.value != word.toLowerCase() && guessVal <= 0) {
          alert('no more guesses!')
            location.reload();
        } else {
          guess.innerHTML = guessVal -= 1
        }
      }
      else if (input.value == word.toLowerCase()) {
        audio1.pause()
        showGoodJobAndHide()

        setTimeout(
          function () {
            musicBegins2()
          }, 5000)
      }
    } // end of check value word

    submitBtn.addEventListener('click', checkValueofWord)
  } // endoffunctionmusic begins

  function musicBegins2 () {
    var musicContainer2 = document.querySelector('.musicquestions2')
    var startBtn2 = document.querySelector('#startBtn2')
    var submitBtn2 = document.querySelector('#submitBtn2')
    var audio2 = document.querySelector('#audio2')
    var hintsingercharlie = document.querySelector('.hint-singercharlie')
    var goodjob2 = document.querySelector('.yay-goodjob2')
    var guessdiv2 = document.querySelector('#guess2')
    var containercontent2 = document.querySelector('.container-content2')
    document.getElementById('audio2').pause()

    var modal2 = document.querySelector('#myModal2')

    // Get the button that opens the modal
    var modalbtn2 = document.querySelector('#modalbtn2')

    // Get the <span> element that closes the modal
    var closemodal2 = document.querySelector('.modalclose2')

    body.classList = 'musicquestions1'
    musicContainer1.style.display = 'none'
    musicContainer2.style.display = 'block'
    hintsingercharlie.style.display = 'none'
    goodjob2.style.display = 'none'
    guessdiv2.style.display = 'none'
    audio1.pause()
    audio2.play()

    function showHint2 () {
      closemodal2.onclick = function () {
        modal2.style.display = 'none'
        input2.value = ''
        hintsingercharlie.style.display = 'block'
        $('.hint-singercharlie').delay(6000).fadeIn(500)
        guessdiv2.style.display = 'block'
      }
    }

    function showGoodJobAndHide2 () {
      guessdiv2.style.display = 'none'
      goodjob2.style.display = 'block'
    }

    var word2 = 'we don\'t talk anymore',
      input2 = document.querySelector('.input2'),
      submitBtn2 = document.querySelector('#submitBtn2'),
      guess2 = document.querySelector('.num2')

    function checkValueofWord2 () {
      var guessVal2 = guess2.innerHTML
      if (input2.value != word2.toLowerCase()) {
        input2.classList.add('wrong')
        modal2.style.display = 'block'
        showHint2()
        input2.classList.remove('correct')
        if (input2.value != word2.toLowerCase() && guessVal2 <= 0) {
          alert('no more guesses!')
            location.reload();
        } else {
          guess2.innerHTML = guessVal2 -= 1
        }
      }
      else if (input2.value == word2.toLowerCase()) {
        audio2.pause()
        showGoodJobAndHide2()

        setTimeout(
          function () {
            musicBegins3()
          }, 5000)
      }
    } // end of check value word

    submitBtn2.addEventListener('click', checkValueofWord2)
  } // endoffunctionmusic2 begins


  function musicBegins3 () {
    var musicContainer3 = document.querySelector('.musicquestions3')
    var startBtn3 = document.querySelector('#startBtn3')
    var submitBtn3 = document.querySelector('#submitBtn3')
    var audio3 = document.querySelector('#audio3')
    var hintsingerrihanna = document.querySelector('.hint-singerrihanna')
    var goodjob3 = document.querySelector('.yay-goodjob3')
    var guessdiv3 = document.querySelector('#guess3')
    var containercontent3 = document.querySelector('.container-content3')
    document.getElementById('audio3').pause()

    var modal3 = document.querySelector('#myModal3')

    // Get the button that opens the modal
    var modalbtn3 = document.querySelector('#modalbtn3')

    // Get the <span> element that closes the modal
    var closemodal3 = document.querySelector('.modalclose3')

    body.classList = 'musicquestions1'
    musicContainer1.style.display = 'none'
    musicContainer2.style.display = 'none'
    musicContainer3.style.display = 'block'
    hintsingerrihanna.style.display = 'none'
    goodjob3.style.display = 'none'
    guessdiv3.style.display = 'none'
    audio1.pause()
    audio2.pause()
    audio3.play()

    function showHint3 () {
      closemodal3.onclick = function () {
        modal3.style.display = 'none'
        input3.value = ''
        hintsingerrihanna.style.display = 'block'
        $('.hint-singerrihanna').delay(6000).fadeIn(500)
        guessdiv3.style.display = 'block'
      }
    }

    function showGoodJobAndHide3 () {
      guessdiv3.style.display = 'none'
      goodjob3.style.display = 'block'
    }

    var word3 = 'diamonds',
      input3 = document.querySelector('.input3'),
      submitBtn3 = document.querySelector('#submitBtn3'),
      guess3 = document.querySelector('.num3')

    function checkValueofWord3 () {
      var guessVal3 = guess3.innerHTML
      if (input3.value != word3.toLowerCase()) {
        input3.classList.add('wrong')
        modal3.style.display = 'block'
        showHint3()
        input3.classList.remove('correct')
        if (input3.value != word3.toLowerCase() && guessVal3 <= 0) {
          alert('no more guesses!')
            location.reload();
        } else {
          guess3.innerHTML = guessVal3 -= 1
        }
      }
      else if (input3.value == word3.toLowerCase()) {
        audio3.pause()
        showGoodJobAndHide3()

        setTimeout(
          function () {
          theend()
          }, 5000)
      }
    } // end of check value word

    submitBtn3.addEventListener('click', checkValueofWord3)
  } // endoffunctionmusic2 begins

  function theend(){
musicContainer3.style.display = 'none';
body.classList = ''
thankyou.style.display='block';
restartgame.addEventListener('click', restartAgain)
  }

  function restartAgain(){
    location.reload();
  }

}

init()
