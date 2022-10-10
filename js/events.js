import {
  playBtn,
  pauseBtn,
  stopBtn,
  soundOnBtn,
  soundOffBtn,
  setTimerBtn
} from "./elements.js";

export default function ({ controls, timer, sound }) {

  playBtn.addEventListener('click', function () {
    controls.play();
    timer.countdown();
    sound.pressBtn();
  });

  pauseBtn.addEventListener('click', function () {
    controls.pause();
    timer.hold();
    sound.pressBtn();
  });

  stopBtn.addEventListener('click', function () {
    controls.reset();
    timer.reset();
    sound.pressBtn();
  });

  soundOnBtn.addEventListener('click', function () {
    soundOnBtn.classList.add('hide');
    soundOffBtn.classList.remove('hide');
    sound.bgAudio.pause();
  });

  soundOffBtn.addEventListener('click', function () {
    soundOffBtn.classList.add('hide');
    soundOnBtn.classList.remove('hide');
    sound.bgAudio.play();
  });

  setTimerBtn.addEventListener('click', function () {
    sound.pressBtn();
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });
}