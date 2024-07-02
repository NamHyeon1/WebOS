// Video Control
var video = document.getElementById("myVideo");
var btn_play_video = document.getElementById("btn-play-video");
var btn_stop_video = document.getElementById("btn-stop-video");
var btn_pause_video = document.getElementById("btn-pause-video");
var btn_full_video = document.getElementById("btn-full-video");

video.addEventListener("play", function () {
  btn_play_video.classList.add("hidden");
  btn_pause_video.classList.remove("hidden");
  btn_stop_video.removeAttribute("disabled");
});
video.addEventListener("pause", function () {
  btn_pause_video.classList.add("hidden");
  btn_play_video.classList.remove("hidden");
});

btn_play_video.addEventListener("click", function (e) {
  // [개발] 비디오 재생 구현
});

btn_pause_video.addEventListener("click", function (e) {
  // [개발] 비디오 일시정지 구현
});

btn_stop_video.addEventListener("click", function (e) {
  // [개발] 비디오 정지 구현
});

btn_full_video.addEventListener("click", function (e) {
  console.log("Full screen video");
  video.requestFullscreen();
});

document.addEventListener("DOMContentLoaded", function () {
  video.addEventListener("timeupdate", checkPlayTime);
});

/**
 * 비디오의 현재 재생 시간을 확인하고 재생 시간이 제한을 초과하는 경우 동작을 수행합니다.
 */
function checkPlayTime() {
  var playTime = video.currentTime;
  var limitTime = 10 * 60; // 10 minutes
  console.log(`playTime: ${Math.floor(playTime / 60)} 분`);
  if (playTime >= limitTime) {
    nofityUserPlayTime(playTime);
    video.pause();
    setTimeout(function () {
      video.currentTime = 0;
    }, 5000);
  }
}

/**
 * 비디오의 재생 시간에 대해 사용자에게 알립니다.
 * @param {number} playTime - 비디오의 재생 시간(분).
 *
 * API 사용 - luna://com.webos.notification/createToast
 */
function nofityUserPlayTime(playTime) {
  // [개발] 사용자에게 알림 구현
}

/**
 * 지정된 URI와 매개변수를 사용하여 서비스를 호출합니다.
 * @param {string} uri - 호출할 서비스의 URI입니다.
 * @param {Object} params - 서비스에 전달할 매개변수입니다.
 * @returns {Promise} 성공한 경우 서비스의 응답으로 해결되는 프로미스이며, 실패한 경우 응답으로 거부됩니다.
 */
function callService(uri, params) {
  return new Promise((resolve, reject) => {
    // [개발] webOSServiceBridge 객체 생성 구현

    console.log(`uri: ${uri}`);
    // [개발] service callback 호출 구현

    // [개발] service call 호출 구현
  });
}
