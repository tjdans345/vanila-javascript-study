import { Branch } from "./branch.js";

export class Tree {
  constructor(ctx, posX, posY) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.branches = []; // 가지들을 담을 배열
    this.depth = 11;

    this.cntDepth = 0; // depth 별로 그리기 위한 현재 depth 변수 선언
    this.animation = null; // 현재 동작하는 애니메이션

    this.init();
  }

  init() {
    // depth별로 가지를 저장하기 위해 branches에 depth만큼 빈배열 추가
    for (let i = 0; i < this.depth; i++) {
      this.branches.push([]);
    }

    // 시작 각도 -> -90도로 아래에서 위로 나무 기둥 자라게 배치
    // 시작 depth는 0
    this.createBranch(this.posX, this.posY, -90, 0);
    this.draw(this.ctx);
  }

  createBranch(startX, startY, angle, depth) {
    if (depth === this.depth) return;

    // random 함수 추가 가지 길이 랜덤 대입
    // depth는 0 즉, 최초에 나무 기둥 을 그릴때 최소, 최대 길이 다르게 줌 기둥은 좀 더 두껍게
    const len = depth === 0 ? this.random(10, 13) : this.random(0, 11);

    // 현재 depth의 역을 곱해서 depth가 점점 늘어날 수록 길이가 짧아지게 함
    const endX = startX + this.cos(angle) * len * (this.depth - depth);
    const endY = startY + this.sin(angle) * len * (this.depth - depth);

    // depth에 해당하는 위치의 배열에 가지를 추가
    this.branches[depth].push(
      new Branch(startX, startY, endX, endY, this.depth - depth) // 굵기를 가늘게 함
    );

    // 재귀함수 이용
    this.createBranch(endX, endY, angle - this.random(15, 23), depth + 1);
    this.createBranch(endX, endY, angle + this.random(15, 23), depth + 1);
  }

  draw() {
    // 다 그렸으면 requestAnimationFrame을 중단해 메모리 누수가 없게 함.
    if (this.cntDepth === this.depth) {
      cancelAnimationFrame(this.animation);
    }

    for (let i = this.cntDepth; i < this.branches.length; i++) {
      let pass = true;

      for (let j = 0; j < this.branches[i].length; j++) {
        pass = this.branches[i][j].draw(this.ctx);
      }

      if (!pass) break;
      this.cntDepth++;
    }

    this.animation = requestAnimationFrame(this.draw.bind(this));
  }

  // 각도 구하기
  cos(angle) {
    return Math.cos(this.degToRad(angle));
  }

  sin(angle) {
    return Math.sin(this.degToRad(angle));
  }

  degToRad(angle) {
    return (angle / 180.0) * Math.PI;
  }

  random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
}
