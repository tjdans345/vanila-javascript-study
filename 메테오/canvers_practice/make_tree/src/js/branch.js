export class Branch {
  constructor(startX, startY, endX, endY, lineWidth) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.colorArray = ["#efff51", "#FFE400"];
    this.color = "#efff51";
    this.color2 = "#ffffff";

    this.lineWidth = lineWidth;

    this.frame = 10; // 가지의 전체 frame 100등분
    this.cntFrame = 0; // 현재 frame

    // 가지의 길이를 frame으로 나누어 구간별 길이를 구함
    this.gapX = (this.endX - this.startX) / this.frame;
    this.gapY = (this.endY - this.startY) / this.frame;

    // 구간별 가지가 그려질 때 끝 좌표값
    this.currentX = this.startX;
    this.currentY = this.startY;
  }

  draw(ctx) {
    // 가지를 다 그리면 true 리턴
    if (this.cntFrame === this.frame) return true;

    ctx.beginPath();

    // 구간별 길이를 더해주어 다음 구간의 끝 좌표를 구함
    this.currentX += this.gapX;
    this.currentY += this.gapY;

    ctx.moveTo(this.startX, this.startY); // 선의 시작 위치 지정
    ctx.lineTo(this.currentX, this.currentY); // // 끝 좌표를 currentX,Y로

    ctx.lineWidth = this.lineWidth; // 선의 두깨
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.colorArray[Math.floor(Math.random() * 3)];

    ctx.stroke();
    ctx.closePath();

    this.cntFrame++; // 현재 프레임수 증가

    return false; // 그리는 중일 때 false 반환
  }
}
