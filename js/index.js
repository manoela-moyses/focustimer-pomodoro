import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import {
  playBtn,
  pauseBtn,
  stopBtn,
  setTimerBtn,
  minutesDisplay,
  secondsDisplay
} from "./elements.js";

const controls = Controls({
  playBtn,
  pauseBtn,
  stopBtn,
  setTimerBtn
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound();

Events({ controls, timer, sound });