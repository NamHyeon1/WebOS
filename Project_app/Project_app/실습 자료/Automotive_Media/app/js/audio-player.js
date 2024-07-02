// Control audio
var audio = new Audio("./resource/media/chopin.mp3");
const audio_play_btn = document.getElementById("audio-play-btn");
const audio_pause_btn = document.getElementById("audio-pause-btn");
const audio_stop_btn = document.getElementById("audio-stop-btn");
const progress = document.getElementById("progress");

// Control audio with JS service
var btn_play_service = document.getElementById("btn-play-service");
var btn_stop_service = document.getElementById("btn-stop-service");
var btn_pause_service = document.getElementById("btn-pause-service");

audio.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  const percentage = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${percentage}%`;
}

document
  .getElementById("progress-container")
  .addEventListener("click", setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// JavaScript Audio control - event listener
audio_play_btn.addEventListener("click", function (e) {
  // [개발] audio play 기능 구현
});

audio_pause_btn.addEventListener("click", function (e) {
  // [개발] audio pause 기능 구현
});

audio_stop_btn.addEventListener("click", function (e) {
  // [개발] audio stop 기능 구현
});

// JavaScript Service Audio control - event listener
btn_play_service.addEventListener("click", function (e) {
  console.log("Play audio with JS Service");
  playAudioService();
});

btn_stop_service.addEventListener("click", function (e) {
  console.log("Stop audio with JS Service");
  stopAudioService();
});

btn_pause_service.addEventListener("click", function (e) {
  console.log("Pause audio with JS Service");
  pauseAudioService();
});

/**
 * 오디오 서비스를 사용하여 오디오를 재생합니다.
 * @function playAudioService
 * @returns {void}
 *
 * API 사용 - luna://com.automotive.media.service/playAudioService
 */
function playAudioService() {
  //[개발] Play 서비스 호출 구현
}

/**
 * Pauses audio using the audio service.
 * @function pauseAudioService
 * @returns {void}
 *
 * API 사용 - luna://com.automotive.media.service/pauseAudioService
 */
function pauseAudioService() {
  // [개발] pause 서비스 호출 구현
}

/**
 * 오디오 서비스를 중지합니다.
 * @function stopAudioService
 * @memberof module:audio-player
 * @returns {void}
 *
 * API 사용 - luna://com.automotive.media.service/stopAudioService
 */
function stopAudioService() {
  // [개발] stop 서비스 호출 구현
}

/**
 * 지정된 URL과 매개변수로 오디오 서비스를 호출하고 응답으로 콜백 함수를 호출합니다.
 *
 * @param {string} url - 오디오 서비스의 URL입니다.
 * @param {Object} params - 오디오 서비스로 전송할 매개변수입니다.
 * @param {Function} callback - 오디오 서비스의 응답과 함께 호출될 콜백 함수입니다.
 */
function callAudioService(url, params, callback) {
  // [개발] webOSServiceBridge 객체 생성 및 호출 구현
}
