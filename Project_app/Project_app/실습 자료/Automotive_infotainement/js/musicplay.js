/**
 * 응용 프로그램 관리자를 사용하여 Music Play 앱을 로드합니다.
 *
 * API 사용 - com.webos.service.applicationmanager/launch
 */
function loadMusicPlay() {
  // [개발] Application Manager를 이용해 Music Play 앱 호출 구현
  // [개발] Media Player 앱 호출 구현
}

// LS2 API Common Module
function callService(uri, params) {
  return new Promise((resolve, reject) => {
    // [개발] webOSServiceBridge 객체 생성 구현

    console.log(`uri: ${uri}`);
    // [개발] service callback 호축 구현

    // [개발] service call 호출 구현
  });
}

function createBackButton() {
  var buttonDiv = document.createElement("div");
  buttonDiv.id = "backbtn";
  var backButton = document.createElement("button");
  backButton.id = "backbutton";
  backButton.textContent = "뒤로 가기";
  backButton.className = "font-black p-[10px] text-white bg-[#a50034] rounded";
  backButton.addEventListener("click", function () {
    console.log("back button clicked");
    window.history.back();
  });

  buttonDiv.appendChild(backButton);

  return buttonDiv;
}
