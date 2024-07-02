/**
 * Othello 게임 애플리케이션을 로드합니다.
 *
 * API 사용 - luna://com.webos.service.applicationmanager/launch
 */
function loadOthelloGame() {
  // [개발] Game 앱 호출 구현
}

/**
 * 지정된 URI와 매개변수를 사용하여 서비스를 호출합니다.
 * @param {string} uri - 호출할 서비스의 URI입니다.
 * @param {Object} params - 서비스에 전달할 매개변수입니다.
 * @returns {Promise} 성공 시 서비스로부터의 응답을 resolve하는 프로미스이며, 실패 시 응답을 reject합니다.
 */
function callService(uri, params) {
  return new Promise((resolve, reject) => {
    // [개발] webOSServiceBridge 객체 생성 구현

    console.log(`uri: ${uri}`);
    // [개발] service callback 호축 구현

    // [개발] service call 호출 구현
  });
}
