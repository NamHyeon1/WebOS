let bt_start_btn;
let bt_search_btn;
let bt_paried_btn;
let device_list_container;

/**
 * BT 설정 메뉴를 로드합니다.
 */
function loadBTSetting() {
  document.body.innerHTML = `
      <div id="container" class="p-5 text-white bg-[#1a1a2e] p-[100px] text-center h-dvh items-center">
        <h1 class="text-[45px] ">BT Setting</h1>
        <h2>이곳은 BT Setting 메뉴입니다.</h2>
      
      
        <!-- BT device search and start -->
        <div class ="m-auto max-w-7xl my-[80px]">
          
          <div id="search-container" class=" flex-col bg-[#16213e] border-[#0f3460] border-[2px] rounded p-[20px] mb-5">
            <h2 class="text-[25px] text-center mb-5">Bluetooth Controller</h2>

            <!-- Seached Button --!>
            <div class="flex flex-wrap">
              <div id="bt-adapter" class="bg-zinc-600 rounded p-5 w-[33%] mr-[10px]">
                <fieldset>
                  <div class="field items-center flex flex-wrap flex-col text-2xl">
                      <button id="bt-Start" class="min-w-[250px] mt-[30px] bg-[#5A8DEE] font-bold text-[#ffffff] p-2 rounded px-5 cursor-pointer" data-target="modal-js-example">
                          Start BT Adapter 
                      </button>
                      <button id="bt-search" class="min-w-[250px] mt-[30px] bg-[#5A8DEE] font-bold text-[#ffffff] p-2 rounded px-5 cursor-pointer" data-target="modal-js-example">
                          Search BT Devices 
                      </button>
                      <button id="bt-paired" class="min-w-[250px] my-[30px] bg-[#5A8DEE] font-bold text-[#ffffff] p-2 rounded px-5 cursor-pointer" data-target="modal-js-example">
                          Paired BT Devices 
                      </button>
                  </div>
                </fieldset>
              </div>

              <!-- Seached Lists --!>
              <div id="bt-devices" class="bg-zinc-600 rounded p-5 w-[65%]">
                <h2 class="text-2xl">Device List</h2>
                <div id="device-list" class="bg-black rounded">
                </div>                
              </div>
            </div>              
          </div>         
        </div>        
        
        <script src="./js/bluetoothsetting.js"></script>
      </div>`;

  // init button variables
  bt_start_btn = document.getElementById("bt-Start");
  bt_search_btn = document.getElementById("bt-search");
  bt_paried_btn = document.getElementById("bt-paired");
  device_list_container = document.getElementById("device-list");

  // event listener
  bt_start_btn.addEventListener("click", setBTAdapterStart);
  bt_search_btn.addEventListener("click", discoverBTDevice);
  bt_paried_btn.addEventListener("click", getPairedDevice);

  var backbutton = createBackButton();
  document.getElementById("container").appendChild(backbutton);
}

/**
 * Bluetooth 어댑터의 상태를 가져옵니다.
 *
 * API 사용 - luna://com.webos.service.bluetooth2/adapter/getStatus
 */
function getBTAdapterStatus() {
  // [개발] adapter 상태 가져오기 구현
}

/**
 * Bluetooth 어댑터를 시작하고 Bluetooth 기능을 초기화합니다.
 *
 * API 사용 - luna://com.webos.service.bluetooth2/adapter/setState
 */
function setBTAdapterStart() {
  // [개발] start 기능 구현
}

/**
 * Bluetooth 기기를 검색합니다.
 *
 * API 사용 - luna://com.webos.service.bluetooth2/adapter/startDiscovery
 */
function discoverBTDevice() {
  // [개발] discover 기능 구현
}

/**
 * Bluetooth 상태를 가져와서 기기 목록을 표시합니다.
 *
 * API 사용 - luna://com.webos.service.bluetooth2/device/getStatus
 */
function getBTStatus() {
  // [개발] BT 상태 가져오기 구현
}

/**
 * 주어진 주소로 Bluetooth 기기를 페어링합니다.
 * @param {string} btAddress - 페어링할 Bluetooth 기기의 주소입니다.
 * @param {HTMLElement} statusSpan - 페어링 상태를 표시할 HTML 요소입니다.
 *
 * API 사용 - luna://com.webos.service.bluetooth2/adapter/pair
 */
function pairBTDevice(btAddress, statusSpan) {
  // [개발] pair 기능 구현
}

/**
 * 페어링된 BT 기기 정보를 가져와 화면에 표시합니다.
 *
 * API 사용 - luna://com.webos.service.bluetooth2/device/getPairedDevices
 */
function getPairedDevice() {
  // [개발] get paired device 기능 구현
}

/**
 * 지정된 Bluetooth 주소를 사용하여 Bluetooth 기기에 연결합니다.
 * @param {string} btAddress - 연결할 Bluetooth 기기의 주소입니다.
 * @param {HTMLElement} statusSpan - 연결 상태를 표시할 HTML 요소입니다.
 *
 * API 사용 - luna://com.webos.service.bluetooth2/a2dp/connect
 */
function connectBTDevice(btAddress, statusSpan) {
  // [개발] connect 기능 구현
}

/**
 * Bluetooth 기기의 페어링을 해제합니다.
 *
 * @param {string} btAddress - 페어링을 해제할 Bluetooth 기기의 주소입니다.
 * @param {HTMLElement} statusSpan - 페어링 상태를 표시할 HTML 요소입니다.
 *
 * API 사용 - luna://com.webos.service.bluetooth2/adapter/unpair
 */
function unpairBTDevice(btAddress, statusSpan) {
  // [개발] unpair 기능 구현
}

/**
 * 지정된 URI와 매개변수를 사용하여 서비스를 호출합니다.
 * @param {string} uri - 호출할 서비스의 URI입니다.
 * @param {Object} params - 서비스에 전달할 매개변수입니다.
 * @returns {Promise} 성공 시 서비스의 응답을 resolve하는 프로미스이며, 실패 시 응답을 reject합니다.
 *
 * WebOSServiceBridge 사용 예
 */
function callService(uri, params) {
  return new Promise((resolve, reject) => {
    var bridge = new WebOSServiceBridge();

    console.log(`uri: ${uri}`);
    bridge.onservicecallback = function (msg) {
      var response = JSON.parse(msg);
      console.log(response.returnValue);

      if (response.returnValue) {
        resolve(response);
      } else {
        reject(response);
      }
    };

    bridge.call(uri, params);
  });
}

/**
 * 뒤로 가기 버튼 요소를 생성합니다.
 * @returns {HTMLDivElement} 생성된 뒤로 가기 버튼 요소입니다.
 */
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
