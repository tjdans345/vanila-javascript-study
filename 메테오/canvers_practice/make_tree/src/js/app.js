import { Tree } from "./tree.js";

class App {
  constructor() {
    // 캔버스 생성 후 랜더링
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);

    // context 생성
    this.ctx = this.canvas.getContext("2d");
    // 레티나 디스플레이에서도 제대로 보이기 위한 설정
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    window.addEventListener("click", this.click.bind(this), false);

    this.resize();
  }

  resize() {
    // body의 너비와 높이 저장
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // 디스플레이 비율에 맞추어 캔버스 사이즈와 비율 조정
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    // 리사이즈시 캔버스를 비워주기
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
  }

  click(event) {
    console.log(event.clientX);
    const { clientX } = event;
    new Tree(this.ctx, clientX, this.stageHeight);
  }
}

window.onload = () => {
  new App();
};
