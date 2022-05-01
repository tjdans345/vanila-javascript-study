import { Visual } from "./Visual.js";
import { Img } from "./img.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.stageWidth = document.body.clientWidth;
    this.stageHeigh = document.body.clientHeight;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeigh;

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this));

    const img = new Img(this.ctx, this.stageWidth, this.stageHeigh);
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeigh = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeigh * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeigh);
    this.visual.animate(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
