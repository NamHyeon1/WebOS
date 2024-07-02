const pkgInfo = require("./package.json");
const Service = require("webos-service");
const player = require("play-sound")((opts = {}));

const service = new Service(pkgInfo.name); // Create service by service name on package.json
const logHeader = "[" + pkgInfo.name + "]";

let audioProcess = null;

// playAudioService 메서드를 등록합니다.
service.register("playAudioService", function (message) {
  // [개발] playAudioService 기능 구현
});

// Stop current audio path
service.register("stopAudioService", function (message) {
  // [개발] Stop audio service 기능 구현
});

// Pause current audio path
service.register("pauseAudioService", function (message) {
  // [개발] Pause audio service 기능 구현
});
