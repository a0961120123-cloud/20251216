// 宣告背景圖片變數和背景位置變數
let bgImg;
let bgX = 0;
let scrollSpeed = 5; // 背景滾動的速度

function preload() {
  // 載入背景圖片
  // 請確保 'platformer_background_2.png' 檔案與您的 sketch.js 在同一個資料夾中
  bgImg = loadImage('platformer_background_2.png');

  // ... 您原有的其他 preload 內容，例如載入角色動畫等 ...
  // 例如:
  // playerAnimations = {
  //   walk: loadAnimation('player_walk_1.png', 'player_walk_4.png'),
  //   idle: loadAnimation('player_idle.png')
  // };
}

function setup() {
  // 創建畫布，尺寸可依您的遊戲需求調整
  createCanvas(800, 600);

  // ... 您原有的 character1 初始化設定 ...
  // 將角色1的位置固定在畫面的某個地方，例如中央
  // character1 = createSprite(width / 2, height - 100, 50, 100);
  // character1.addAnimation('walk', playerAnimations.walk);
  // character1.addAnimation('idle', playerAnimations.idle);
  // character1.scale = 0.5;
}

function draw() {
  // 清除畫布並繪製背景
  background(200);

  // 繪製三張背景圖來創造連續滾動的效果
  // 為了確保圖片能填滿畫布高度，我們使用 width 和 height
  // 1. 中間的背景圖
  image(bgImg, bgX, 0, width, height);
  // 2. 左邊的背景圖
  image(bgImg, bgX - width, 0, width, height);
  // 3. 右邊的背景圖
  image(bgImg, bgX + width, 0, width, height);

  // 處理玩家輸入
  handlePlayerInput();

  // ... 您原有的繪製所有 sprites 或其他物件的程式碼 ...
  // 例如: drawSprites();
}

function handlePlayerInput() {
  // 按下向右鍵
  if (keyIsDown(RIGHT_ARROW)) {
    // 背景向左移動
    bgX -= scrollSpeed;
    // 播放角色走路動畫 (假設您使用 p5.play.js)
    // character1.changeAnimation('walk');
    // character1.mirrorX(1); // 角色面向右邊

  // 按下向左鍵
  } else if (keyIsDown(LEFT_ARROW)) {
    // 背景向右移動
    bgX += scrollSpeed;
    // 播放角色走路動畫
    // character1.changeAnimation('walk');
    // character1.mirrorX(-1); // 角色面向左邊

  // 沒有按鍵時
  } else {
    // 角色恢復站立動畫
    // character1.changeAnimation('idle');
  }

  // 讓背景循環滾動
  // 當中間的背景完全移出左邊畫面時，重置位置
  if (bgX <= -width) {
    bgX = 0;
  }
  // 當左邊的背景填滿整個畫面時，重置位置
  if (bgX >= width) {
    bgX = 0;
  }

  // ... 您原有的跳躍或其他控制程式碼可以保留 ...
  // 例如:
  // if (keyWentDown(' ')) {
  //   character1.velocity.y = -10;
  // }
}

// ... 您其他的自訂函數 ...
