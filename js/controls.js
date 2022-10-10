export default function Controls({
  playBtn,
  pauseBtn,
  stopBtn,
  setTimerBtn
}) {

  function play() {
    playBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
    setTimerBtn.classList.add('hide');
    stopBtn.classList.remove('hide');
  }

  function pause() {
    pauseBtn.classList.add('hide');
    playBtn.classList.remove('hide');
  }

  function reset() {
    playBtn.classList.remove('hide');
    pauseBtn.classList.add('hide');
    setTimerBtn.classList.remove('hide');
    stopBtn.classList.add('hide');
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?');
    if (!newMinutes) {
      return false;
    }

    return newMinutes;
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}