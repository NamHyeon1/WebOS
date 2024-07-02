var btn_to_home = document.getElementById("btn-to-home");
var btn_to_music = document.getElementById("btn-to-music");

btn_to_home.addEventListener("click", function () {
  console.log("Go to Home");
  switchApp("com.automotive.infotainment");
});
btn_to_music.addEventListener("click", function () {
  console.log("Go to Music");
  switchApp("com.automotive.media");
});

/**
 * 지정된 appId로 애플리케이션을 전환합니다.
 *
 * @param {string} appId - 전환할 앱의 ID입니다.
 *
 * API 사용 - com.webos.service.applicationmanager/launch
 */
function switchApp(appId) {
  // [개발] com.webos.service.applicationmanager/launch를 사용하여 앱 전환 구현

  


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
