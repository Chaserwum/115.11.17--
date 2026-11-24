let idleFrames = []; // 儲存 Ryu 站立動畫的圖片影格
let walkFrames = []; // 儲存 Ryu 行走動畫的圖片影格
let backWalkFrames = []; // 儲存 Ryu 後退動畫的圖片影格
let turnFrames = []; // 儲存 Ryu 轉向動畫的圖片影格
let jumpFrames = []; // 儲存 Ryu 原地跳躍動畫的圖片影格
let directionJumpFrames = []; // 儲存 Ryu 方向跳躍動畫的圖片影格
let landFrames = []; // 儲存 Ryu 落地動畫的圖片影格
let hadoukenFrames = []; // 儲存 Ryu 發射氣功的動畫圖片影格
let projectileFrames = []; // 儲存氣功彈飛行動畫的圖片影格
let shoryukenFrames = []; // 儲存 Ryu 升龍拳動畫的圖片影格
let senfukyakuFrames = []; // 儲存 Ryu 旋風腿動畫的圖片影格
let lightPunchFrames = []; // 儲存 Ryu 輕拳動畫的圖片影格
let mediumPunchFrames = []; // 儲存 Ryu 中拳動畫的圖片影格
let heavyPunchFrames = []; // 儲存 Ryu 重拳動畫的圖片影格
let chunliIdleFrames = []; // 儲存 Chun-Li 站立動畫的圖片影格
let chunliWalkFrames = []; // 儲存 Chun-Li 前進動畫的圖片影格
let chunliBackWalkFrames = []; // 儲存 Chun-Li 後退動畫的圖片影格
let chunliDashRunFrames = []; // 儲存 Chun-Li 衝刺奔跑動畫的圖片影格
let chunliJumpFrames = []; // 儲存 Chun-Li 原地跳躍動畫的圖片影格
let chunliDirectionJumpFrames = []; // 儲存 Chun-Li 方向跳躍動畫的圖片影格
let chunliLandFrames = []; // 儲存 Chun-Li 落地動畫的圖片影格
let chunliLightPunchFrames = []; // 儲存 Chun-Li 輕拳動畫的圖片影格
let chunliMediumPunchFrames = []; // 儲存 Chun-Li 中拳動畫的圖片影格
let chunliHeavyPunchFrames = []; // 儲存 Chun-Li 重拳動畫的圖片影格
let chunliLightKickFrames = []; // 儲存 Chun-Li 輕踢動畫的圖片影格
let chunliMediumKickFrames = []; // 儲存 Chun-Li 中踢動畫的圖片影格
let chunliHeavyKickFrames = []; // 儲存 Chun-Li 重踢動畫的圖片影格
let chunliKikokenFrames = []; // 儲存 Chun-Li 氣功拳動畫的圖片影格
let chunliLightningLegFrames = []; // 儲存 Chun-Li 百裂腳動畫的圖片影格
let guileStopFrames = []; // 儲存 Guile 站立待機動畫的圖片影格
let guileWalkFrames = []; // 儲存 Guile 行走動畫的圖片影格
let guileJumpFrames = []; // 儲存 Guile 跳躍動畫的圖片影格（答對時的慶祝動作）
let guileMagicFrames = []; // 儲存 Guile 音速手刀施法動畫的圖片影格（答錯時的反擊動作）
let guileMagicEffectFrames = []; // 儲存 Guile 音速手刀氣功波特效影格
let effectSpriteSheet; // 儲存 Effect 資料夾中的閃電與藍色爆炸特效精靈圖
let lightningEffectFrames = []; // 儲存由精靈圖切出的由上往下閃電特效影格
let blueExplosionFrames = []; // 儲存由精靈圖切出的底部藍色爆炸特效影格
let backgroundImage; // 儲存教堂背景圖片
let projectiles = []; // 儲存畫面上正在飛行的氣功彈
let currentCharacter = "ryu"; // 記錄目前選擇的角色（"ryu" 或 "chunli"）
let playerX = 0; // 記錄角色在畫布中的水平位置
let playerY = 0; // 記錄角色在畫布中的垂直位置
let backgroundX = 0; // 記錄背景卷軸目前的水平滾動位移
let floorY = 0; // 記錄地板在畫布中的垂直位置
let groundPlayerY = 0; // 記錄角色站在地板上時的中心位置
let animationFrame = 0; // 記錄目前播放的動畫影格
let animationTimer = 0; // 累計切換動畫影格的時間
let isWalking = false; // 記錄角色目前是否正在移動
let isJumping = false; // 記錄角色目前是否正在跳躍飛行中
let isDirectionalJump = false; // 記錄目前是否為方向跳躍
let jumpElapsed = 0; // 記錄跳躍已進行的毫秒數
let jumpAnimationFrame = 0; // 記錄跳躍本身的動畫影格
let jumpAnimationTimer = 0; // 記錄跳躍本身的影格計時
let isLanding = false; // 記錄角色目前是否正在播放落地動畫
let isAttacking = false; // 記錄角色目前是否正在播放氣功招式（Hadouken / Kikoken）
let isShoryuken = false; // 記錄角色目前是否正在播放升龍拳
let isSenfukyaku = false; // 記錄角色目前是否正在播放旋風腿
let isLightningLeg = false; // 記錄 Chun-Li 目前是否正在播放百裂腳
let currentNormalAttack = ""; // 記錄目前正在播放的一般攻擊種類（lp/mp/hp/lk/mk/hk）
let wasJumpKeyDown = false; // 記錄上一畫格是否按住 W 鍵
let wasUKeyDown = false; // 記錄上一畫格是否按住 U 鍵
let wasIKeyDown = false; // 記錄上一畫格是否按住 I 鍵
let wasOKeyDown = false; // 記錄上一畫格是否按住 O 鍵
let wasJKeyDown = false; // 記錄上一畫格是否按住 J 鍵
let wasKKeyDown = false; // 記錄上一畫格是否按住 K 鍵
let wasLKeyDown = false; // 記錄上一畫格是否按住 L 鍵
let hadoukenCommandStage = 0; // 記錄順轉氣功指令目前完成的輸入階段
let hadoukenCommandTimer = 0; // 累計順轉氣功指令輸入經過的時間
let hadoukenCommandDirection = 1; // 記錄順轉指令對應的發射方向
let shoryukenCommandStage = 0; // 記錄升龍拳指令目前完成的輸入階段
let shoryukenCommandTimer = 0; // 累計升龍拳指令輸入經過的時間
let senfukyakuCommandStage = 0; // 記錄逆轉腿技指令目前完成的輸入階段
let senfukyakuCommandTimer = 0; // 累計逆轉腿技指令輸入經過的時間
let senfukyakuCommandDirection = -1; // 記錄逆轉指令開始時對應的面向
let attackDirection = -1; // 記錄本次特殊招式的施展方向
let projectileSpeed = 520; // 記錄本次發射氣功彈的飛行速度
let facingDirection = -1; // 記錄角色目前面向的水平方向
let isTurning = false; // 記錄角色目前是否正在播放轉向動畫
let turnFrame = 0; // 記錄目前播放的轉向動畫影格
let shoryukenStartY = 0; // 記錄升龍拳起跳時角色的垂直位置
let isDashing = false; // 記錄 Chun-Li 目前是否正在進行衝刺奔跑
let lastMoveDirection = 0; // 記錄上一畫格的水平移動方向
let lastTapDirection = 0; // 記錄上一次連按方向鍵的方向
let dashTapTimer = 999; // 累計距離上一次按下方向鍵的毫秒數
let rightEdgeEffectTimer = 0; // 記錄背景到最右端時閃電與藍色爆炸循環特效的計時（毫秒）
let isRightEdgeEffectActive = false; // 記錄右端閃電與爆炸特效是否正在播放（含隨背景往回捲退出畫面期間）
let lastLightningStrikeIndex = -1; // 記錄上一次已播放打雷聲的閃電次數索引（0、1、2）
let activeThunderGain = null; // 儲存目前正在發聲的打雷音效音量節點以便離開畫面時停止
const playerSpeed = 320; // 設定角色每秒移動的像素數
const dashSpeedMultiplier = 1.85; // 設定 Chun-Li 衝刺奔跑時的移動速度倍率
const dashDoubleTapWindow = 280; // 設定短時間連按兩次方向鍵的判定毫秒數
const frameDuration = 100; // 設定每張動畫影格播放的毫秒數
const jumpDuration = 720; // 設定一次完整跳躍滯空的毫秒數
const spriteScale = 3.5; // 設定 Ryu 像素角色的放大倍率
const chunliScale = 1.85; // 設定 Chun-Li 角色的放大倍率
const shoryukenHeight = 100 * spriteScale; // 設定升龍拳向上移動的高度
const senfukyakuDistance = 300; // 設定旋風腿向前移動的距離
const guileQuizQuestions = [ // 定義 Guile 提問事件使用的選擇題題庫
  {
    question: "Guile 的招牌氣功必殺技名稱是什麼？",
    options: ["波動拳 (Hadouken)", "音速手刀 (Sonic Boom)", "氣功拳 (Kikoken)", "升龍拳 (Shoryuken)"],
    correctIndex: 1
  },
  {
    question: "在本遊戲中，按哪一個按鍵可以讓角色跳躍？",
    options: ["W 鍵", "S 鍵", "J 鍵", "U 鍵"],
    correctIndex: 0
  },
  {
    question: "Chun-Li 連按兩次同方向鍵會觸發什麼動作？",
    options: ["百裂腳", "旋風腿", "衝刺奔跑", "升龍拳"],
    correctIndex: 2
  },
  {
    question: "Ryu 向前旋轉踢擊的必殺技名稱是哪一招？",
    options: ["音速手刀", "旋風腿 (Senfukyaku)", "氣功拳", "百裂腳"],
    correctIndex: 1
  },
  {
    question: "在本遊戲中，要如何切換操控 Ryu 與 Chun-Li？",
    options: ["按下空白鍵", "連按 S 鍵兩次", "點擊畫面上方的角色頭像", "走到畫面最左端"],
    correctIndex: 2
  }
]; // 完成 Guile 選擇題題庫
let guileState = "idle"; // 記錄 Guile 目前狀態（"idle"、"question"、"correct"、"wrong"）
let guileFacing = -1; // 記錄 Guile 目前面向的方向（1 朝右，-1 朝左）
let guileAnimFrame = 0; // 記錄 Guile 目前播放的動畫影格
let guileAnimTimer = 0; // 累計 Guile 動畫切換時間
let guileReactionTimer = 0; // 記錄答題後反應動作已播放的毫秒數
let guileWaitingForLeave = false; // 避免答題結束後站在原地重複觸發提問
let guileQuestionIndex = 0; // 記錄目前出題的題庫索引
let guileFeedbackMessage = ""; // 記錄答題後的回饋訊息文字
let guileLastResultCorrect = false; // 記錄最近一次答題是否正確
let guileProjectiles = []; // 儲存 Guile 答錯時發射的音速手刀氣功波
let guileHasFiredSonicBoom = false; // 記錄本次答錯反應是否已發射音速手刀
let guileOptionRects = []; // 儲存目前選擇題各選項按鈕的畫面座標供滑鼠點擊判斷
const guileCorrectDuration = 2000; // 設定答對時跳躍慶祝動作的持續毫秒數
const guileWrongDuration = 2000; // 設定答錯時發射音速手刀反應的持續毫秒數

function loadSequence(folderPath, prefix, startIndex, endIndex, padLength) { // 依序載入連續編號圖片的輔助函式
  const frames = []; // 建立儲存影格的陣列
  for (let index = startIndex; index <= endIndex; index += 1) { // 逐一處理每個編號
    const numberText = padLength > 0 ? String(index).padStart(padLength, "0") : String(index); // 格式化檔案編號字串
    frames.push(loadImage(`${folderPath}/${prefix}${numberText}.png`)); // 載入對應路徑的圖片並加入陣列
  } // 結束編號迴圈
  return frames; // 回傳載入完成的影格陣列
} // 結束連續圖片載入函式

function preload() { // 在程式啟動前載入所有角色與背景圖片
  idleFrames = loadSequence("Ryu Animation/StandStill", "", 0, 2, 0); // 載入 Ryu 站立動畫圖片
  walkFrames = loadSequence("Ryu Animation/Frontwalk", "", 0, 4, 0); // 載入 Ryu 前進動畫圖片
  backWalkFrames = loadSequence("Ryu Animation/Backwalk", "", 0, 5, 0); // 載入 Ryu 後退動畫圖片
  turnFrames = loadSequence("Ryu Animation/Turn", "", 0, 2, 0); // 載入 Ryu 轉向動畫圖片
  jumpFrames = loadSequence("Ryu Animation/Jump", "", 0, 5, 0); // 載入 Ryu 原地跳躍動畫圖片
  directionJumpFrames = loadSequence("Ryu Animation/Directionjump", "", 0, 4, 0); // 載入 Ryu 方向跳躍動畫圖片
  landFrames = [loadImage("Ryu Animation/land/land.png")]; // 載入 Ryu 落地動畫圖片
  hadoukenFrames = loadSequence("Ryu Animation/hadouken", "", 0, 3, 0); // 載入 Ryu 波動拳動畫圖片
  projectileFrames = loadSequence("Ryu Animation/hadou", "", 0, 4, 0); // 載入氣功彈飛行動畫圖片
  shoryukenFrames = loadSequence("Ryu Animation/shoryuken", "", 0, 5, 0); // 載入 Ryu 升龍拳動畫圖片
  senfukyakuFrames = loadSequence("Ryu Animation/Senfukyaku", "", 0, 11, 0); // 載入 Ryu 旋風腿動畫圖片
  lightPunchFrames = loadSequence("Ryu Animation/l-punch", "", 0, 1, 0); // 載入 Ryu 輕拳動畫圖片
  mediumPunchFrames = loadSequence("Ryu Animation/m-punch", "", 0, 2, 0); // 載入 Ryu 中拳動畫圖片
  heavyPunchFrames = loadSequence("Ryu Animation/h-punch", "", 0, 2, 0); // 載入 Ryu 重拳動畫圖片
  chunliIdleFrames = loadSequence("Chunli Animation/03_combat_ready_1", "frame_", 1, 6, 2); // 載入 Chun-Li 戰鬥待機動畫圖片
  chunliWalkFrames = loadSequence("Chunli Animation/07_walk_forward", "frame_", 1, 8, 2); // 載入 Chun-Li 前進動畫圖片
  chunliBackWalkFrames = loadSequence("Chunli Animation/08_walk_backward", "frame_", 1, 5, 2); // 載入 Chun-Li 後退動畫圖片
  chunliDashRunFrames = [ // 組合 Chun-Li 衝刺起步與高速奔跑影格
    ...loadSequence("Chunli Animation/09_dash_run_1", "frame_", 1, 5, 2), // 載入 Chun-Li 衝刺第一段影格
    ...loadSequence("Chunli Animation/10_dash_run_2", "frame_", 1, 6, 2) // 載入 Chun-Li 衝刺第二段奔跑影格
  ]; // 完成 Chun-Li 衝刺奔跑動畫清單
  chunliJumpFrames = loadSequence("Chunli Animation/jump", "", 11, 20, 0); // 載入 Chun-Li 原地跳躍動畫圖片
  chunliDirectionJumpFrames = loadSequence("Chunli Animation/43_air_somersault", "frame_", 1, 4, 2); // 載入 Chun-Li 方向空翻跳躍圖片
  chunliLandFrames = loadSequence("Chunli Animation/26_crouch_down", "frame_", 1, 2, 2); // 載入 Chun-Li 落地緩衝動畫圖片
  chunliLightPunchFrames = loadSequence("Chunli Animation/14_light_punch_1", "frame_", 1, 6, 2); // 載入 Chun-Li 輕拳動畫圖片
  chunliMediumPunchFrames = loadSequence("Chunli Animation/17_medium_punch_1", "frame_", 1, 6, 2); // 載入 Chun-Li 中拳動畫圖片
  chunliHeavyPunchFrames = loadSequence("Chunli Animation/19_heavy_punch_1", "frame_", 1, 6, 2); // 載入 Chun-Li 重拳動畫圖片
  chunliLightKickFrames = loadSequence("Chunli Animation/34_kick_light", "frame_", 1, 6, 2); // 載入 Chun-Li 輕踢動畫圖片
  chunliMediumKickFrames = loadSequence("Chunli Animation/35_kick_medium", "frame_", 1, 6, 2); // 載入 Chun-Li 中踢動畫圖片
  chunliHeavyKickFrames = loadSequence("Chunli Animation/36_kick_heavy", "frame_", 1, 6, 2); // 載入 Chun-Li 重踢動畫圖片
  chunliKikokenFrames = [ // 組合 Chun-Li 氣功拳蓄力、發射與收招影格
    ...loadSequence("Chunli Animation/31_kikoken_charge", "frame_", 1, 4, 2), // 載入氣功拳蓄力影格
    ...loadSequence("Chunli Animation/32_kikoken_release", "frame_", 1, 4, 2), // 載入氣功拳發射影格
    ...loadSequence("Chunli Animation/33_kikoken_followthrough", "frame_", 1, 3, 2) // 載入氣功拳收招影格
  ]; // 完成 Chun-Li 氣功拳動畫清單
  chunliLightningLegFrames = [ // 組合 Chun-Li 百裂腳第一段與第二段影格
    ...loadSequence("Chunli Animation/37_lightning_legs_1", "frame_", 1, 7, 2), // 載入百裂腳前段連續踢擊影格
    ...loadSequence("Chunli Animation/38_lightning_legs_2", "frame_", 1, 6, 2) // 載入百裂腳後段連續踢擊影格
  ]; // 完成 Chun-Li 百裂腳動畫清單
  guileStopFrames = loadSequence("Gulie Animation/stop", "", 0, 9, 0); // 載入 Guile 站立待機動畫影格
  guileWalkFrames = loadSequence("Gulie Animation/walk", "", 0, 8, 0); // 載入 Guile 行走動畫影格
  guileJumpFrames = loadSequence("Gulie Animation/jump", "", 0, 7, 0); // 載入 Guile 跳躍動畫影格
  guileMagicFrames = loadSequence("Gulie Animation/magic", "", 0, 3, 0); // 載入 Guile 音速手刀施法動畫影格
  guileMagicEffectFrames = loadSequence("Gulie Animation/magic_effect", "", 0, 4, 0); // 載入 Guile 音速手刀特效影格
  backgroundImage = loadImage("Background/Church.jpg"); // 載入教堂背景圖片
  effectSpriteSheet = loadImage("Effect/Free-Animated-Explosion-Sprite5.jpg"); // 載入閃電與藍色爆炸特效圖片
} // 結束圖片載入設定

function getActiveScale() { // 依畫布高度的 1/3 計算目前角色的縮放倍率
  const baseFrame = currentCharacter === "chunli" ? chunliIdleFrames[0] : idleFrames[0]; // 取得目前角色的站立基準影格
  return (height / 3) / baseFrame.height; // 讓角色站立高度等於畫布高度的 1/3
} // 結束縮放倍率取得函式

function getStandingHeight() { // 取得目前角色站立時的顯示高度
  return height / 3; // 角色站立高度固定為畫布高度的 1/3
} // 結束站立高度計算函式

function updateGroundPosition() { // 更新角色在地板上的基準垂直座標
  floorY = height * 0.82; // 設定地板在畫面下方的高度位置
  groundPlayerY = floorY - getStandingHeight() / 2; // 依目前角色身高計算站在地板上的中心高度
  if (!isJumping && !isShoryuken) { // 若角色不在空中則同步更新垂直位置
    playerY = groundPlayerY; // 將角色貼齊地板高度
  } // 結束地面高度同步判斷
} // 結束地板座標更新函式

function switchCharacter(targetCharacter) { // 切換目前操控的角色
  if (currentCharacter === targetCharacter) { // 若點擊的已是目前角色則不重複切換
    return; // 直接結束函式
  } // 結束相同角色判斷
  currentCharacter = targetCharacter; // 更新目前選擇的角色名稱
  animationFrame = 0; // 重設動作動畫影格
  animationTimer = 0; // 重設動作動畫計時
  isJumping = false; // 清除跳躍狀態
  isDirectionalJump = false; // 清除方向跳躍狀態
  jumpElapsed = 0; // 重設跳躍滯空時間
  isLanding = false; // 清除落地狀態
  isAttacking = false; // 清除氣功招式狀態
  isShoryuken = false; // 清除升龍拳狀態
  isSenfukyaku = false; // 清除旋風腿狀態
  isLightningLeg = false; // 清除百裂腳狀態
  currentNormalAttack = ""; // 清除一般攻擊狀態
  isTurning = false; // 清除轉向狀態
  isDashing = false; // 清除衝刺奔跑狀態
  lastMoveDirection = 0; // 重設上一畫格移動方向
  lastTapDirection = 0; // 重設連按方向紀錄
  dashTapTimer = 999; // 重設連按方向鍵計時
  hadoukenCommandStage = 0; // 重設順轉指令階段
  shoryukenCommandStage = 0; // 重設升龍拳指令階段
  senfukyakuCommandStage = 0; // 重設逆轉指令階段
  updateGroundPosition(); // 重新計算新角色站在地板上的高度
} // 結束角色切換函式

function setup() { // 設定畫布與角色初始狀態
  createCanvas(windowWidth, windowHeight); // 建立填滿瀏覽器視窗的畫布
  imageMode(CENTER); // 讓圖片以中心點作為繪製座標
  noSmooth(); // 保留像素圖片放大後的清晰邊緣
  document.body.style.overflow = "hidden"; // 避免全螢幕畫布出現捲動條
  removeBlueBackground(idleFrames); // 將 Ryu 站立影格的藍色底色轉為透明
  removeBlueBackground(walkFrames); // 將 Ryu 行走影格的藍色底色轉為透明
  removeBlueBackground(backWalkFrames); // 將 Ryu 後退影格的藍色底色轉為透明
  removeBlueBackground(turnFrames); // 將 Ryu 轉向影格的藍色底色轉為透明
  removeBlueBackground(jumpFrames); // 將 Ryu 跳躍影格的藍色底色轉為透明
  removeBlueBackground(directionJumpFrames); // 將 Ryu 方向跳躍影格的藍色底色轉為透明
  removeBlueBackground(landFrames); // 將 Ryu 落地影格的藍色底色轉為透明
  removeBlueBackground(hadoukenFrames); // 將 Ryu 氣功影格的藍色底色轉為透明
  removeBlueBackground(projectileFrames); // 將氣功彈影格的藍色底色轉為透明
  removeBlueBackground(shoryukenFrames); // 將 Ryu 升龍拳影格的藍色底色轉為透明
  removeBlueBackground(senfukyakuFrames); // 將 Ryu 旋風腿影格的藍色底色轉為透明
  removeBlueBackground(lightPunchFrames); // 將 Ryu 輕拳影格的藍色底色轉為透明
  removeBlueBackground(mediumPunchFrames); // 將 Ryu 中拳影格的藍色底色轉為透明
  removeBlueBackground(heavyPunchFrames); // 將 Ryu 重拳影格的藍色底色轉為透明
  prepareEffectFrames(); // 切割 Effect 特效圖片並將深色背景轉為透明
  playerX = width / 2; // 將角色放在畫面水平中央
  updateGroundPosition(); // 計算地板與角色初始站立位置
  playerY = groundPlayerY; // 將角色放在地板上方
} // 結束畫布初始化

function getNormalAttackFrames(attackType) { // 依攻擊代號取得對應的動畫影格陣列
  if (currentCharacter === "chunli") { // 當目前角色為 Chun-Li 時回傳 Chun-Li 的拳腳影格
    if (attackType === "lp") return chunliLightPunchFrames; // 回傳 Chun-Li 輕拳影格
    if (attackType === "mp") return chunliMediumPunchFrames; // 回傳 Chun-Li 中拳影格
    if (attackType === "hp") return chunliHeavyPunchFrames; // 回傳 Chun-Li 重拳影格
    if (attackType === "lk") return chunliLightKickFrames; // 回傳 Chun-Li 輕踢影格
    if (attackType === "mk") return chunliMediumKickFrames; // 回傳 Chun-Li 中踢影格
    if (attackType === "hk") return chunliHeavyKickFrames; // 回傳 Chun-Li 重踢影格
  } else { // 當目前角色為 Ryu 時回傳 Ryu 的攻擊影格
    if (attackType === "lp") return lightPunchFrames; // 回傳 Ryu 輕拳影格
    if (attackType === "mp") return mediumPunchFrames; // 回傳 Ryu 中拳影格
    if (attackType === "hp") return heavyPunchFrames; // 回傳 Ryu 重拳影格
    if (attackType === "lk" || attackType === "mk" || attackType === "hk") return senfukyakuFrames.slice(3, 7); // 使用旋風腿踢擊影格作為 Ryu 一般踢擊
  } // 結束角色攻擊影格判斷
  return lightPunchFrames; // 預設回傳輕拳影格
} // 結束一般攻擊影格取得函式

function drawCharacterSelector() { // 在畫面上方繪製角色頭像切換列
  const boxWidth = 130; // 設定每個角色頭像框的寬度
  const boxHeight = 86; // 設定每個角色頭像框的高度
  const gap = 24; // 設定兩個頭像框之間的間距
  const centerY = 58; // 設定頭像框在畫面上方的垂直中心位置
  const ryuCenterX = width / 2 - (boxWidth / 2 + gap / 2); // 計算 Ryu 頭像框的水平中心位置
  const chunliCenterX = width / 2 + (boxWidth / 2 + gap / 2); // 計算 Chun-Li 頭像框的水平中心位置
  const cards = [ // 定義兩個角色切換卡的顯示資訊
    { id: "ryu", label: "RYU", x: ryuCenterX, y: centerY, frame: idleFrames[0], cropY: 0, cropH: 42 }, // Ryu 頭像卡設定
    { id: "chunli", label: "CHUN-LI", x: chunliCenterX, y: centerY, frame: chunliIdleFrames[0], cropY: 0, cropH: 72 } // Chun-Li 頭像卡設定
  ]; // 完成角色切換卡清單
  push(); // 暫存繪圖狀態以繪製 UI
  rectMode(CENTER); // 將矩形繪製模式設為中心對齊
  textAlign(CENTER, CENTER); // 將文字對齊方式設為置中
  for (const card of cards) { // 逐一繪製每個角色的頭像切換框
    const isSelected = currentCharacter === card.id; // 判斷此角色是否為目前選中角色
    stroke(isSelected ? "#ffd166" : "#ffffff"); // 選中時使用金色邊框，未選中時使用白色邊框
    strokeWeight(isSelected ? 4 : 2); // 選中時加粗邊框
    fill(isSelected ? "rgba(35, 25, 66, 0.88)" : "rgba(20, 20, 30, 0.68)"); // 設定頭像框底色
    rect(card.x, card.y, boxWidth, boxHeight, 12); // 繪製圓角矩形頭像框
    const iconSize = 52; // 設定頭像縮圖顯示尺寸
    image(card.frame, card.x - 26, card.y, iconSize, iconSize, 0, card.cropY, card.frame.width, card.cropH); // 擷取角色上半身繪製為頭像
    noStroke(); // 移除文字外框
    fill(isSelected ? "#ffd166" : "#f1faee"); // 設定角色名稱文字顏色
    textSize(15); // 設定角色名稱字體大小
    textStyle(BOLD); // 設定粗體文字
    text(card.label, card.x + 24, card.y - 8); // 繪製角色英文名稱
    fill("#a8dadc"); // 設定提示文字顏色
    textSize(11); // 設定提示文字大小
    textStyle(NORMAL); // 還原一般字體樣式
    text(isSelected ? "使用中" : "點擊切換", card.x + 24, card.y + 14); // 顯示使用狀態或點擊切換提示
  } // 結束頭像框繪製迴圈
  pop(); // 還原繪圖狀態
} // 結束角色頭像切換列繪製函式

function getGuileScale() { // 依畫布高度的 1/3 計算 Guile 的縮放倍率
  return (height / 3) / guileStopFrames[0].height; // 讓 Guile 站立高度與操控角色一致
} // 結束 Guile 縮放倍率函式

function getGuileScreenX() { // 取得 Guile 隨背景捲動後的畫面水平座標
  const guileWorldOffsetX = Math.min(360, width * 0.34); // 將 Guile 放在起始畫面右側方便玩家靠近觸發
  return width / 2 + backgroundX + guileWorldOffsetX; // 讓 Guile 固定於場景背景上隨卷軸移動
} // 結束 Guile 座標計算函式

function playQuizFeedbackSound(isCorrect) { // 依答對或答錯使用 Web Audio 播放對應提示音效
  const audioCtx = typeof getAudioContext === "function" ? getAudioContext() : (window.AudioContext || window.webkitAudioContext ? new (window.AudioContext || window.webkitAudioContext)() : null); // 取得瀏覽器音效環境
  if (!audioCtx) return; // 若環境不支援音效則返回
  if (audioCtx.state === "suspended") { // 若音效尚未解鎖則喚醒
    audioCtx.resume(); // 恢復音效播放狀態
  } // 結束音效喚醒
  const now = audioCtx.currentTime; // 取得目前音訊時間
  const notes = isCorrect ? [523.25, 659.25, 783.99] : [260, 175]; // 答對播放上行和弦，答錯播放低沉警示音
  notes.forEach((freq, idx) => { // 依序排程每個音符
    const osc = audioCtx.createOscillator(); // 建立振盪器
    const gain = audioCtx.createGain(); // 建立音量節點
    osc.type = isCorrect ? "triangle" : "sawtooth"; // 答對使用清亮三角波，答錯使用鋸齒波
    const startTime = now + idx * (isCorrect ? 0.09 : 0.14); // 計算音符起始時間
    const noteDuration = isCorrect ? 0.18 : 0.24; // 計算音符持續時間
    osc.frequency.setValueAtTime(freq, startTime); // 設定音高頻率
    gain.gain.setValueAtTime(0.001, startTime); // 初始微弱音量避免爆音
    gain.gain.linearRampToValueAtTime(isCorrect ? 0.16 : 0.14, startTime + 0.02); // 快速淡入
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + noteDuration); // 平滑淡出
    osc.connect(gain); // 連接振盪器與音量節點
    gain.connect(audioCtx.destination); // 輸出至喇叭
    osc.start(startTime); // 開始發聲
    osc.stop(startTime + noteDuration + 0.02); // 結束發聲
  }); // 結束音符排程
} // 結束答題提示音效函式

function submitGuileAnswer(optionIndex) { // 處理玩家選擇的選項並切換 Guile 反應動作
  if (guileState !== "question") return; // 僅在提問視窗開啟時接受作答
  const currentQuiz = guileQuizQuestions[guileQuestionIndex % guileQuizQuestions.length]; // 取得目前題目資料
  if (optionIndex < 0 || optionIndex >= currentQuiz.options.length) return; // 防呆檢查選項索引範圍
  const isCorrect = optionIndex === currentQuiz.correctIndex; // 判斷玩家是否答對
  guileLastResultCorrect = isCorrect; // 記錄本次作答結果
  guileState = isCorrect ? "correct" : "wrong"; // 切換為答對慶祝或答錯反擊狀態
  guileAnimFrame = 0; // 重設 Guile 反應動作影格
  guileAnimTimer = 0; // 重設 Guile 動畫計時器
  guileReactionTimer = 0; // 重設反應持續計時器
  guileHasFiredSonicBoom = false; // 重設音速手刀發射旗標
  guileOptionRects = []; // 清空選項點擊區域
  if (isCorrect) { // 設定答對時的回饋文字
    guileFeedbackMessage = "答對了！Guile 開心跳躍為你喝采！"; // 答對提示訊息
  } else { // 設定答錯時的回饋文字與正確解答
    const answerText = currentQuiz.options[currentQuiz.correctIndex]; // 取得正確選項文字
    guileFeedbackMessage = `答錯了！吃我一記音速手刀！（正確答案：${answerText}）`; // 答錯提示訊息
  } // 結束回饋訊息設定
  playQuizFeedbackSound(isCorrect); // 播放對應的答對或答錯音效
  guileQuestionIndex = (guileQuestionIndex + 1) % guileQuizQuestions.length; // 切換至下一題供下次靠近提問使用
} // 結束作答處理函式

function updateAndDrawGuile(actualBgScroll) { // 更新 Guile 靠近觸發、動畫狀態與繪製 Guile 及氣功波
  const guileX = getGuileScreenX(); // 取得 Guile 目前畫面水平座標
  const guileScale = getGuileScale(); // 取得 Guile 顯示縮放倍率
  const horizontalDistance = Math.abs(playerX - guileX); // 計算操控角色與 Guile 的水平距離
  const triggerDistance = Math.max(150, height * 0.22); // 設定靠近觸發提問的距離門檻
  const resetDistance = triggerDistance + 90; // 設定離開後解除冷卻的距離門檻
  guileFacing = playerX >= guileX ? 1 : -1; // 讓 Guile 隨時面向操控角色
  if (guileState === "idle") { // 當 Guile 處於待機狀態時檢查玩家是否靠近或離開
    if (guileWaitingForLeave && horizontalDistance > resetDistance) { // 玩家離開一段距離後重置觸發狀態
      guileWaitingForLeave = false; // 允許下次靠近時再次觸發提問
    } else if (!guileWaitingForLeave && horizontalDistance <= triggerDistance) { // 玩家靠近到範圍內時觸發提問事件
      guileState = "question"; // 進入選擇題問答狀態
      guileWaitingForLeave = true; // 標記本次靠近已觸發，答完需先離開再靠近才出下一題
      guileAnimFrame = 0; // 重設 Guile 影格
      guileAnimTimer = 0; // 重設 Guile 計時器
      isWalking = false; // 停下角色移動狀態
      isDashing = false; // 停止衝刺狀態
    } // 結束靠近觸發檢查
  } // 結束待機觸發檢查
  let guileJumpLift = 0; // 記錄 Guile 跳躍反應時的垂直抬升高度
  let guileImage = guileStopFrames[0]; // 預設使用站立影格
  if (guileState === "correct") { // 答對時播放兩次開心的跳躍慶祝動作（jump 動畫 + 拋物線起跳）
    guileReactionTimer += deltaTime; // 累計反應經過時間
    const hopCount = 2; // 設定連續跳躍慶祝次數
    const singleHopDuration = guileCorrectDuration / hopCount; // 計算單次跳躍時間
    const hopProgress = constrain((guileReactionTimer % singleHopDuration) / singleHopDuration, 0, 1); // 計算單次跳躍進度
    guileJumpLift = Math.sin(hopProgress * Math.PI) * (height * 0.16); // 計算平滑跳躍上升高度
    const jumpFrameIdx = Math.min(guileJumpFrames.length - 1, Math.floor(hopProgress * guileJumpFrames.length)); // 依進度選擇對應跳躍影格
    guileImage = guileJumpFrames[jumpFrameIdx]; // 取得跳躍動作圖片
    if (guileReactionTimer >= guileCorrectDuration) { // 慶祝動作結束後恢復待機
      guileState = "idle"; // 回復待機狀態
      guileAnimFrame = 0; // 重設影格
      guileAnimTimer = 0; // 重設計時器
    } // 結束答對動作完成檢查
  } else if (guileState === "wrong") { // 答錯時播放音速手刀施法動作（magic）並朝玩家發射氣功波（magic_effect）
    guileReactionTimer += deltaTime; // 累計反應經過時間
    guileAnimTimer += deltaTime; // 累計施法影格計時
    const magicFrameDuration = 115; // 設定音速手刀施法每格播放時間
    while (guileAnimTimer >= magicFrameDuration) { // 推進施法影格
      guileAnimTimer -= magicFrameDuration; // 扣除單格時間
      if (guileAnimFrame < guileMagicFrames.length - 1) { // 播放至最後一張出招姿勢後保持收招
        guileAnimFrame += 1; // 前進至下一張施法影格
      } // 結束影格上限判斷
    } // 結束施法影格更新
    if (!guileHasFiredSonicBoom && guileAnimFrame >= 2) { // 在出招影格發射音速手刀氣功波
      guileHasFiredSonicBoom = true; // 標記本次已發射
      guileProjectiles.push({ // 新增一發音速手刀氣功波
        x: guileX + guileFacing * (height / 3) * 0.42, // 自 Guile 手部前方生成
        y: floorY - (height / 3) * 0.56, // 設定氣功波飛行高度
        direction: guileFacing, // 朝向操控角色方向飛行
        speed: 580, // 設定音速手刀飛行速度
        frame: 0, // 從第 1 張特效影格開始
        timer: 0 // 重設特效動畫計時
      }); // 完成音速手刀建立
    } // 結束發射時機判斷
    guileImage = guileMagicFrames[Math.min(guileAnimFrame, guileMagicFrames.length - 1)]; // 取得目前施法動作圖片
    if (guileReactionTimer >= guileWrongDuration) { // 反擊反應時間結束後恢復待機
      guileState = "idle"; // 回復待機狀態
      guileAnimFrame = 0; // 重設影格
      guileAnimTimer = 0; // 重設計時器
    } // 結束答錯動作完成檢查
  } else { // 待機或提問期間循環播放 Guile 站立待機動畫（stop）
    guileAnimTimer += deltaTime; // 累計待機影格時間
    while (guileAnimTimer >= 120) { // 每 120 毫秒切換一張待機影格
      guileAnimTimer -= 120; // 扣除單格時間
      guileAnimFrame = (guileAnimFrame + 1) % guileStopFrames.length; // 循環待機影格
    } // 結束待機影格更新
    guileImage = guileStopFrames[guileAnimFrame]; // 取得待機影格圖片
  } // 結束 Guile 動作影格分支
  push(); // 暫存繪圖狀態以繪製 Guile
  const guileDrawH = guileImage.height * guileScale; // 計算 Guile 顯示高度
  const guileDrawW = guileImage.width * guileScale; // 計算 Guile 顯示寬度
  const guileFootY = floorY - guileDrawH / 2 - guileJumpLift; // 讓 Guile 雙腳貼齊地板並套用跳躍抬升
  translate(guileX, guileFootY); // 移至 Guile 繪製中心
  scale(guileFacing, 1); // Guile 素材原生朝右，依面向決定是否水平翻轉
  image(guileImage, 0, 0, guileDrawW, guileDrawH); // 繪製 Guile 目前動作影格
  pop(); // 還原繪圖狀態
  if (guileState === "correct") { // 答對跳躍時在 Guile 周圍繪製慶祝金色星芒
    push(); // 暫存繪圖狀態
    noStroke(); // 移除星芒外框
    for (let i = 0; i < 6; i += 1) { // 繪製 6 顆環繞星光
      const angle = (guileReactionTimer * 0.004) + (i * TWO_PI) / 6; // 計算旋轉角度
      const radiusX = guileDrawW * 0.55; // 水平環繞半徑
      const radiusY = guileDrawH * 0.42; // 垂直環繞半徑
      const starX = guileX + Math.cos(angle) * radiusX; // 星光 X 座標
      const starY = guileFootY - guileDrawH * 0.1 + Math.sin(angle) * radiusY; // 星光 Y 座標
      fill(255, 224, 102, 220); // 金黃色光點
      circle(starX, starY, 10 + Math.sin(guileReactionTimer * 0.015 + i) * 4); // 繪製閃爍光點
    } // 結束星光繪製
    pop(); // 還原繪圖狀態
  } // 結束答對星芒特效
  for (const boom of guileProjectiles) { // 更新所有飛行中的 Guile 音速手刀氣功波
    boom.x += boom.direction * boom.speed * (deltaTime / 1000) - actualBgScroll; // 推進氣功波並同步背景卷軸
    boom.timer += deltaTime; // 累計氣功波影格時間
    while (boom.timer >= 65) { // 每 65 毫秒切換一張特效影格
      boom.timer -= 65; // 扣除單格時間
      boom.frame = (boom.frame + 1) % guileMagicEffectFrames.length; // 循環播放氣功波影格
    } // 結束氣功波影格更新
  } // 結束氣功波位置更新
  guileProjectiles = guileProjectiles.filter((boom) => boom.x > -240 && boom.x < width + 240); // 移除飛出畫面的音速手刀
  for (const boom of guileProjectiles) { // 繪製所有飛行中的音速手刀氣功波
    push(); // 暫存繪圖狀態
    translate(boom.x, boom.y); // 移至氣功波座標
    scale(boom.direction, 1); // 依飛行方向翻轉氣功波貼圖
    const boomImg = guileMagicEffectFrames[boom.frame]; // 取得目前特效影格
    const boomScale = guileScale * 1.35; // 放大音速手刀特效提升視覺張力
    image(boomImg, 0, 0, boomImg.width * boomScale, boomImg.height * boomScale); // 繪製音速手刀特效
    pop(); // 還原繪圖狀態
  } // 結束音速手刀繪製
  if (guileX > -120 && guileX < width + 120) { // 當 Guile 位於畫面內時在頭頂顯示提示標籤或氣泡
    push(); // 暫存繪圖狀態
    rectMode(CENTER); // 矩形置中對齊
    textAlign(CENTER, CENTER); // 文字置中對齊
    const badgeY = floorY - getStandingHeight() - 34 - guileJumpLift; // 計算頭頂提示框垂直座標
    if (guileState === "idle") { // 待機時顯示靠近提問提示
      const promptText = guileWaitingForLeave ? "離開後再靠近可挑戰下一題" : "GUILE：靠近回答問題！"; // 依冷卻狀態切換提示文字
      const badgeW = promptText.length * 14 + 28; // 依文字長度計算提示框寬度
      stroke("#ffd166"); // 金色邊框
      strokeWeight(2); // 邊框粗細
      fill("rgba(20, 24, 38, 0.82)"); // 深色半透明底色
      rect(guileX, badgeY, badgeW, 32, 10); // 繪製提示框
      noStroke(); // 移除文字外框
      fill("#ffd166"); // 金黃色文字
      textSize(13); // 設定字體大小
      textStyle(BOLD); // 粗體顯示
      text(promptText, guileX, badgeY); // 繪製提示文字
    } else if (guileState === "correct" || guileState === "wrong") { // 反應期間在頭頂顯示簡短對話氣泡
      const bubbleText = guileState === "correct" ? "NICE! 答對了！" : "SONIC BOOM! 答錯囉！"; // 依結果設定台詞
      const bubbleW = 190; // 對話氣泡寬度
      stroke(guileState === "correct" ? "#52b788" : "#ff6b6b"); // 答對綠框、答錯紅框
      strokeWeight(2.5); // 邊框粗細
      fill("rgba(18, 22, 34, 0.9)"); // 深色半透明底色
      rect(guileX, badgeY, bubbleW, 34, 12); // 繪製對話氣泡
      noStroke(); // 移除文字外框
      fill(guileState === "correct" ? "#95d5b2" : "#ffadad"); // 依結果設定文字顏色
      textSize(14); // 設定字體大小
      textStyle(BOLD); // 粗體顯示
      text(bubbleText, guileX, badgeY); // 繪製氣泡台詞
    } // 結束頭頂標籤狀態分支
    pop(); // 還原繪圖狀態
  } // 結束頭頂提示標籤繪製
} // 結束 Guile 更新與繪製函式

function drawGuileQuizUI() { // 繪製 Guile 選擇題視窗或答題結果橫幅
  if (guileState === "question") { // 提問狀態時繪製置中的選擇題面板
    const currentQuiz = guileQuizQuestions[guileQuestionIndex % guileQuizQuestions.length]; // 取得目前選擇題
    const panelW = Math.min(620, width - 48); // 計算面板寬度並兼顧小視窗
    const panelH = Math.min(390, height - 150); // 計算面板高度避免遮蓋上方頭像列
    const panelX = width / 2; // 面板水平中心
    const panelY = Math.max(height * 0.54, 125 + panelH / 2); // 面板垂直中心位於角色頭像列下方
    push(); // 暫存繪圖狀態
    rectMode(CENTER); // 矩形置中對齊
    noStroke(); // 無外框
    fill("rgba(10, 12, 22, 0.52)"); // 輕微壓暗背景聚焦於題目
    rect(width / 2, height / 2, width, height); // 繪製全畫面半透明遮罩
    stroke("#ffd166"); // 面板金色外框
    strokeWeight(3); // 外框線寬
    fill("rgba(22, 26, 44, 0.94)"); // 深藍紫半透明面板底色
    rect(panelX, panelY, panelW, panelH, 16); // 繪製主問答視窗
    const topY = panelY - panelH / 2; // 計算面板上緣座標
    const headerY = topY + 40; // 標題區垂直座標
    image(guileStopFrames[0], panelX - panelW / 2 + 46, headerY + 4, 46, 46, 0, 0, guileStopFrames[0].width, 92); // 繪製 Guile 頭像縮圖
    noStroke(); // 移除文字外框
    textAlign(LEFT, CENTER); // 標題靠左對齊
    fill("#ffd166"); // 金色標題文字
    textSize(18); // 設定標題字級
    textStyle(BOLD); // 粗體標題
    text(`GUILE 的選擇題挑戰 (${(guileQuestionIndex % guileQuizQuestions.length) + 1}/${guileQuizQuestions.length})`, panelX - panelW / 2 + 80, headerY); // 繪製視窗標題
    textAlign(CENTER, CENTER); // 題目置中對齊
    fill("#ffffff"); // 白色題目文字
    textSize(Math.min(20, panelW * 0.036)); // 依面板寬度調整題目字級
    textStyle(BOLD); // 粗體題目
    text(currentQuiz.question, panelX, topY + 94, panelW - 48, 60); // 繪製題目內容（自動換行）
    guileOptionRects = []; // 重建本畫格的選項點擊矩形陣列
    const optionW = panelW - 56; // 選項按鈕寬度
    const optionH = Math.min(46, (panelH - 180) / currentQuiz.options.length - 8); // 依面板空間計算單個選項高度
    const firstOptionY = topY + 146; // 第一個選項的垂直中心
    const optionStep = optionH + 10; // 相鄰選項間距
    for (let i = 0; i < currentQuiz.options.length; i += 1) { // 逐一繪製 4 個選擇題選項
      const optY = firstOptionY + i * optionStep; // 計算目前選項中心 Y
      const isHovered = Math.abs(mouseX - panelX) <= optionW / 2 && Math.abs(mouseY - optY) <= optionH / 2; // 偵測滑鼠懸停狀態
      guileOptionRects.push({ x: panelX, y: optY, w: optionW, h: optionH, index: i }); // 記錄選項點擊範圍
      stroke(isHovered ? "#ffd166" : "rgba(168, 218, 220, 0.55)"); // 懸停時亮金框
      strokeWeight(isHovered ? 3 : 1.5); // 懸停時加粗外框
      fill(isHovered ? "rgba(68, 56, 118, 0.95)" : "rgba(34, 40, 66, 0.88)"); // 懸停時提亮底色
      rect(panelX, optY, optionW, optionH, 10); // 繪製選項按鈕
      noStroke(); // 移除文字外框
      textAlign(LEFT, CENTER); // 選項文字靠左顯示
      fill(isHovered ? "#ffd166" : "#f1faee"); // 選項文字顏色
      textSize(16); // 設定選項字級
      textStyle(isHovered ? BOLD : NORMAL); // 懸停時改為粗體
      text(`${i + 1}.  ${currentQuiz.options[i]}`, panelX - optionW / 2 + 20, optY); // 繪製選項編號與文字
    } // 結束選項繪製迴圈
    noStroke(); // 移除提示文字外框
    textAlign(CENTER, CENTER); // 底部操作提示置中
    fill("#a8dadc"); // 淺青色提示文字
    textSize(13); // 設定提示字級
    textStyle(NORMAL); // 一般字重
    text("點擊選項或按鍵盤數字鍵 1 ~ 4 作答", panelX, panelY + panelH / 2 - 22); // 繪製操作說明
    pop(); // 還原繪圖狀態
  } else if ((guileState === "correct" || guileState === "wrong") && guileFeedbackMessage !== "") { // 反應動作期間在上方顯示不遮擋角色的結果橫幅
    push(); // 暫存繪圖狀態
    rectMode(CENTER); // 矩形置中對齊
    textAlign(CENTER, CENTER); // 文字置中對齊
    const bannerW = Math.min(640, width - 40); // 結果橫幅寬度
    const bannerH = 48; // 結果橫幅高度
    const bannerY = 128; // 置於角色切換頭像列正下方
    stroke(guileLastResultCorrect ? "#52b788" : "#ff6b6b"); // 答對為綠色、答錯為紅色邊框
    strokeWeight(3); // 外框寬度
    fill(guileLastResultCorrect ? "rgba(20, 66, 44, 0.9)" : "rgba(78, 22, 28, 0.9)"); // 對應結果底色
    rect(width / 2, bannerY, bannerW, bannerH, 12); // 繪製結果橫幅
    noStroke(); // 移除文字外框
    fill("#ffffff"); // 白色結果文字
    textSize(16); // 設定文字大小
    textStyle(BOLD); // 粗體顯示
    text(guileFeedbackMessage, width / 2, bannerY); // 繪製答題結果與正確答案提示
    pop(); // 還原繪圖狀態
  } // 結束答題結果橫幅判斷
} // 結束 Guile 問答 UI 繪製函式

function keyPressed() { // 偵測鍵盤數字鍵 1~4 快速回答 Guile 選擇題
  if (guileState === "question") { // 僅在選擇題開啟時攔截 1~4 作答
    if (key === "1") submitGuileAnswer(0); // 按下 1 選擇第 1 個選項
    else if (key === "2") submitGuileAnswer(1); // 按下 2 選擇第 2 個選項
    else if (key === "3") submitGuileAnswer(2); // 按下 3 選擇第 3 個選項
    else if (key === "4") submitGuileAnswer(3); // 按下 4 選擇第 4 個選項
  } // 結束選擇題按鍵判斷
} // 結束鍵盤按下事件

function mousePressed() { // 偵測滑鼠點擊以回答選擇題或切換上方角色頭像
  if (guileState === "question") { // 選擇題開啟時優先處理選項按鈕點擊
    for (const optionRect of guileOptionRects) { // 逐一檢查每個選項的點擊範圍
      if (Math.abs(mouseX - optionRect.x) <= optionRect.w / 2 && Math.abs(mouseY - optionRect.y) <= optionRect.h / 2) { // 若滑鼠落在選項按鈕內
        submitGuileAnswer(optionRect.index); // 送出該選項並觸發對應動作反應
        return; // 處理完成直接返回
      } // 結束單一選項碰撞判斷
    } // 結束選項點擊迴圈
    return; // 提問視窗開啟時避免誤觸背景角色切換
  } // 結束選擇題點擊攔截
  const boxWidth = 130; // 頭像框寬度
  const boxHeight = 86; // 頭像框高度
  const gap = 24; // 頭像框間距
  const centerY = 58; // 頭像框垂直中心
  const ryuCenterX = width / 2 - (boxWidth / 2 + gap / 2); // Ryu 頭像框水平中心
  const chunliCenterX = width / 2 + (boxWidth / 2 + gap / 2); // Chun-Li 頭像框水平中心
  if (Math.abs(mouseX - ryuCenterX) <= boxWidth / 2 && Math.abs(mouseY - centerY) <= boxHeight / 2) { // 檢查是否點擊 Ryu 頭像框
    switchCharacter("ryu"); // 切換為 Ryu
  } else if (Math.abs(mouseX - chunliCenterX) <= boxWidth / 2 && Math.abs(mouseY - centerY) <= boxHeight / 2) { // 檢查是否點擊 Chun-Li 頭像框
    switchCharacter("chunli"); // 切換為 Chun-Li
  } // 結束頭像點擊範圍判斷
} // 結束滑鼠點擊事件

function prepareEffectFrames() { // 從 Effect/Free-Animated-Explosion-Sprite5.jpg 切出閃電與藍色爆炸影格並去背
  const lightningBoxes = [ // 定義精靈圖第一排由上往下落雷的 8 張連續影格範圍
    { x: 140, y: 60, w: 100, h: 375 }, // 第 1 張：閃電自頂端出現
    { x: 246, y: 60, w: 100, h: 375 }, // 第 2 張：閃電向下延伸
    { x: 352, y: 60, w: 100, h: 375 }, // 第 3 張：閃電劈至底端產生火花
    { x: 459, y: 60, w: 100, h: 375 }, // 第 4 張：閃電強烈放電
    { x: 573, y: 60, w: 100, h: 375 }, // 第 5 張：閃電持續落雷
    { x: 750, y: 60, w: 100, h: 375 }, // 第 6 張：閃電餘暉電弧 1
    { x: 851, y: 60, w: 100, h: 375 }, // 第 7 張：閃電餘暉電弧 2
    { x: 965, y: 60, w: 100, h: 375 } // 第 8 張：閃電消散電弧
  ]; // 完成閃電影格座標清單
  lightningEffectFrames = lightningBoxes.map((box) => effectSpriteSheet.get(box.x, box.y, box.w, box.h)); // 依座標切出每張閃電影格
  const explosionCols = [145, 450, 752, 1055, 1358]; // 定義精靈圖下方兩排藍色爆炸的 5 個欄位水平起點
  const explosionRows = [620, 935]; // 定義精靈圖下方兩排藍色爆炸的垂直起點
  blueExplosionFrames = []; // 初始化藍色爆炸影格陣列
  for (const rowY of explosionRows) { // 依序處理第 3 排與第 4 排的藍色爆炸影格
    for (const colX of explosionCols) { // 依序處理每一排的 5 張爆炸影格
      blueExplosionFrames.push(effectSpriteSheet.get(colX, rowY, 275, 195)); // 切出單張藍色爆炸影格並加入陣列
    } // 結束單排爆炸影格切割
  } // 結束所有藍色爆炸影格切割
  removeDarkEffectBackground(lightningEffectFrames); // 將閃電影格的深色底色轉為透明
  removeDarkEffectBackground(blueExplosionFrames); // 將藍色爆炸影格的深色底色轉為透明
} // 結束特效影格準備函式

function removeDarkEffectBackground(frames) { // 將 Effect 精靈圖的深色背景（約 RGB 36,35,41）設為透明
  for (const frame of frames) { // 逐一處理每張特效影格
    frame.loadPixels(); // 載入像素資料
    for (let i = 0; i < frame.pixels.length; i += 4) { // 逐一檢查每個 RGBA 像素
      const r = frame.pixels[i]; // 讀取紅色通道值
      const g = frame.pixels[i + 1]; // 讀取綠色通道值
      const b = frame.pixels[i + 2]; // 讀取藍色通道值
      const diff = Math.max(Math.abs(r - 36), Math.abs(g - 35), Math.abs(b - 41)); // 計算與深灰背景色的最大色差
      if (diff < 18) { // 若接近深灰背景色則設為完全透明
        frame.pixels[i + 3] = 0; // 設定透明度為 0
      } else if (diff < 48) { // 若為特效邊緣光暈則平滑過渡透明度
        frame.pixels[i + 3] = Math.floor(map(diff, 18, 48, 0, 255)); // 依色差平滑設定 Alpha 值
      } // 結束背景色差判斷
    } // 結束單張特效像素處理
    frame.updatePixels(); // 更新圖片像素資料
  } // 結束所有特效影格去背
} // 結束特效去背函式

function playThunderSound() { // 每次閃電出現時合成並播放一次轟隆打雷聲
  const audioCtx = typeof getAudioContext === "function" ? getAudioContext() : (window.AudioContext || window.webkitAudioContext ? new (window.AudioContext || window.webkitAudioContext)() : null); // 取得瀏覽器音效環境
  if (!audioCtx) { // 若環境不支援音效則直接返回
    return; // 結束函式
  } // 結束音效環境檢查
  if (audioCtx.state === "suspended") { // 若瀏覽器音效尚未解鎖則喚醒音效環境
    audioCtx.resume(); // 恢復音效播放狀態
  } // 結束音效喚醒檢查
  stopThunderSound(); // 先停止前一次未播完的打雷聲避免重疊破音
  const duration = 0.9; // 設定單次打雷聲持續約 0.9 秒
  const bufferSize = Math.floor(audioCtx.sampleRate * duration); // 計算打雷噪音緩衝區取樣數
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate); // 建立單聲道音訊緩衝區
  const output = noiseBuffer.getChannelData(0); // 取得緩衝區資料陣列
  let lastOut = 0; // 記錄前一個取樣值以產生低沉雷鳴噪音
  for (let i = 0; i < bufferSize; i += 1) { // 逐一填寫每個音訊取樣
    const white = Math.random() * 2 - 1; // 產生白噪音隨機值
    lastOut = (lastOut + 0.06 * white) / 1.06; // 濾出低頻轟鳴成分
    const progress = i / bufferSize; // 計算目前取樣時間進度
    const envelope = Math.pow(1 - progress, 1.5) * (0.65 + 0.35 * Math.sin(progress * 28)); // 模擬落雷瞬間爆裂與後續滾動雷聲包絡線
    output[i] = (lastOut * 2.8 + white * 0.25 * Math.exp(-progress * 10)) * envelope; // 混合落雷脆響與低頻轟隆聲
  } // 結束音訊取樣產生
  const noiseSource = audioCtx.createBufferSource(); // 建立音源節點
  noiseSource.buffer = noiseBuffer; // 指定打雷音訊緩衝區
  const filter = audioCtx.createBiquadFilter(); // 建立低通濾波器強化打雷悶響感
  filter.type = "lowpass"; // 設定為低通濾波模式
  filter.frequency.setValueAtTime(520, audioCtx.currentTime); // 落雷瞬間保留中高頻撕裂聲
  filter.frequency.exponentialRampToValueAtTime(110, audioCtx.currentTime + duration); // 隨時間衰減為深沉遠雷聲
  const masterGain = audioCtx.createGain(); // 建立音量控制節點
  masterGain.gain.setValueAtTime(0.85, audioCtx.currentTime); // 設定打雷初始音量
  masterGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration); // 在 0.9 秒內平滑淡出
  noiseSource.connect(filter); // 將音源接至濾波器
  filter.connect(masterGain); // 將濾波器接至音量節點
  masterGain.connect(audioCtx.destination); // 將音量節點輸出至喇叭
  noiseSource.start(); // 開始播放打雷聲
  activeThunderGain = { gainNode: masterGain, sourceNode: noiseSource, ctx: audioCtx }; // 記錄目前播放中的打雷音效以便隨時停止
} // 結束打雷音效播放函式

function stopThunderSound() { // 立即停止正在播放的打雷聲
  if (activeThunderGain) { // 檢查是否有正在播放的打雷音效
    try { // 安全地關閉音源與音量
      activeThunderGain.gainNode.gain.cancelScheduledValues(activeThunderGain.ctx.currentTime); // 取消預定的音量衰減排程
      activeThunderGain.gainNode.gain.setValueAtTime(0, activeThunderGain.ctx.currentTime); // 將打雷音量立即歸零
      activeThunderGain.sourceNode.stop(); // 停止打雷音源播放
    } catch (e) {} // 忽略已自然結束的音源錯誤
    activeThunderGain = null; // 清除打雷音效參考
  } // 結束打雷音效停止處理
} // 結束停止打雷音效函式

function getRightEdgeEffectHalfWidth() { // 計算右端閃電或藍色爆炸特效的最大半寬以判斷是否完全離開畫面
  const boltScaleW = lightningEffectFrames.length > 0 ? lightningEffectFrames[0].width * (height / lightningEffectFrames[0].height) * 1.35 : 180; // 計算閃電顯示寬度
  const expScaleW = blueExplosionFrames.length > 0 ? blueExplosionFrames[0].width * ((height * 0.36) / blueExplosionFrames[0].height) : 260; // 計算藍色爆炸顯示寬度
  return Math.max(boltScaleW, expScaleW) / 2; // 回傳兩者較大的半寬
} // 結束特效半寬計算函式

function drawRightEdgeEffect(cycleTime, effectX) { // 在指定背景同步座標 effectX 繪製 3 次由上往下閃電與 1 次底部藍色爆炸
  push(); // 暫存繪圖狀態
  if (cycleTime < 3000) { // 前 3 秒（0~3000ms）由上往下打 3 次閃電，每次 1 秒（1000ms）
    const strikeIndex = Math.floor(cycleTime / 1000); // 計算目前為第幾次閃電（0、1、2）
    if (strikeIndex !== lastLightningStrikeIndex) { // 當新的一次閃電剛出現時
      lastLightningStrikeIndex = strikeIndex; // 更新已觸發打雷聲的閃電索引
      playThunderSound(); // 每次閃電出現時播放一次打雷聲
    } // 結束打雷聲觸發判斷
    const strikeProgress = (cycleTime % 1000) / 1000; // 計算單次 1 秒閃電的播放進度（0 到 1）
    const frameIndex = Math.min(lightningEffectFrames.length - 1, Math.floor(strikeProgress * lightningEffectFrames.length)); // 依進度選擇對應的閃電影格
    const lightningImage = lightningEffectFrames[frameIndex]; // 取得目前要顯示的閃電圖片
    const boltHeight = height; // 讓閃電高度涵蓋整個視窗（由上往下劈到底端）
    const boltWidth = lightningImage.width * (boltHeight / lightningImage.height) * 1.35; // 依比例放大閃電寬度
    image(lightningImage, effectX, height / 2, boltWidth, boltHeight); // 在隨背景移動的位置繪製由上往下的閃電圖片
  } else { // 第 4 秒（3000~4000ms）在視窗底端播放 1 次藍色爆炸（持續 1 秒）
    lastLightningStrikeIndex = -1; // 進入爆炸階段時重設閃電索引，供下一輪第 1 次閃電再次觸發打雷聲
    const explosionProgress = (cycleTime - 3000) / 1000; // 計算 1 秒藍色爆炸的播放進度（0 到 1）
    const frameIndex = Math.min(blueExplosionFrames.length - 1, Math.floor(explosionProgress * blueExplosionFrames.length)); // 依進度選擇對應的藍色爆炸影格
    const explosionImage = blueExplosionFrames[frameIndex]; // 取得目前要顯示的藍色爆炸圖片
    const explosionScale = (height * 0.36) / explosionImage.height; // 設定藍色爆炸的顯示縮放比例
    const explosionW = explosionImage.width * explosionScale; // 計算藍色爆炸顯示寬度
    const explosionH = explosionImage.height * explosionScale; // 計算藍色爆炸顯示高度
    image(explosionImage, effectX, height - explosionH * 0.42, explosionW, explosionH); // 在視窗底端隨背景移動的位置繪製藍色爆炸特效圖片
  } // 結束閃電與藍色爆炸階段判斷
  pop(); // 還原繪圖狀態
} // 結束右端閃電與爆炸特效函式

function draw() { // 每個畫格更新角色並繪製畫面
  const activeScale = getActiveScale(); // 取得目前角色的放大倍率
  const bgScale = Math.max((width * 1.8) / backgroundImage.width, (height * 1.2) / backgroundImage.height); // 計算放大後的教堂背景縮放倍率
  const bgWidth = backgroundImage.width * bgScale; // 計算放大後的背景寬度
  const bgHeight = backgroundImage.height * bgScale; // 計算放大後的背景高度
  const maxBgOffset = (bgWidth - width) / 2; // 計算背景卷軸可滾動的左右端極限距離
  const bgY = floorY + (0.5 - 0.82) * bgHeight; // 對齊教堂背景地板與角色地板高度
  backgroundX = constrain(backgroundX, -maxBgOffset, maxBgOffset); // 限制背景卷軸在最左端與最右端之間滾動
  image(backgroundImage, width / 2 + backgroundX, bgY, bgWidth, bgHeight); // 繪製放大後的卷軸教堂背景
  let direction = 0; // 預設本畫格角色沒有水平移動
  const isQuizOpen = guileState === "question"; // 判斷目前是否正在顯示 Guile 選擇題視窗
  if (!isQuizOpen && (keyIsDown(LEFT_ARROW) || keyIsDown(65))) { // 檢查是否按下左方向鍵或 A 鍵（答題中暫停移動）
    direction -= 1; // 設定角色向左移動
  } // 結束左移輸入判斷
  if (!isQuizOpen && (keyIsDown(RIGHT_ARROW) || keyIsDown(68))) { // 檢查是否按下右方向鍵或 D 鍵（答題中暫停移動）
    direction += 1; // 設定角色向右移動
  } // 結束右移輸入判斷
  const jumpKeyDown = !isQuizOpen && keyIsDown(87); // 檢查是否按住 W 鍵（答題中暫停跳躍）
  const downKeyDown = !isQuizOpen && keyIsDown(83); // 檢查是否按住 S 鍵
  const aKeyDown = !isQuizOpen && keyIsDown(65); // 檢查是否按住 A 鍵
  const dKeyDown = !isQuizOpen && keyIsDown(68); // 檢查是否按住 D 鍵
  const forwardKeyDown = !isQuizOpen && keyIsDown(facingDirection > 0 ? 68 : 65); // 依角色面向判斷前方向鍵
  const uKeyDown = !isQuizOpen && keyIsDown(85); // 檢查是否按下 U 鍵（輕拳）
  const iKeyDown = !isQuizOpen && keyIsDown(73); // 檢查是否按下 I 鍵（中拳）
  const oKeyDown = !isQuizOpen && keyIsDown(79); // 檢查是否按下 O 鍵（重拳）
  const jKeyDown = !isQuizOpen && keyIsDown(74); // 檢查是否按下 J 鍵（輕踢）
  const kKeyDown = !isQuizOpen && keyIsDown(75); // 檢查是否按下 K 鍵（中踢）
  const lKeyDown = !isQuizOpen && keyIsDown(76); // 檢查是否按下 L 鍵（重踢）
  const punchPressed = (uKeyDown && !wasUKeyDown) || (iKeyDown && !wasIKeyDown) || (oKeyDown && !wasOKeyDown); // 檢查本畫格是否新按下任一拳鍵
  const kickPressed = (jKeyDown && !wasJKeyDown) || (kKeyDown && !wasKKeyDown) || (lKeyDown && !wasLKeyDown); // 檢查本畫格是否新按下任一踢鍵
  const busyWithGroundSpecial = isAttacking || isShoryuken || isSenfukyaku || isLightningLeg; // 檢查是否正在執行特殊必殺技
  let specialMoveStarted = false; // 記錄本畫格是否已由指令觸發特殊招式
  if (senfukyakuCommandStage > 0) { // 正在輸入逆轉指令（S -> SA -> A）時累計時間
    senfukyakuCommandTimer += deltaTime; // 累計逆轉指令經過時間
    if (senfukyakuCommandTimer > 800) { // 超過輸入時限時重設指令
      senfukyakuCommandStage = 0; // 重設逆轉指令階段
      senfukyakuCommandTimer = 0; // 重設逆轉指令計時
    } // 結束逆轉指令逾時判斷
  } // 結束逆轉指令計時
  const reverseDirDown = currentCharacter === "chunli" ? aKeyDown : keyIsDown((senfukyakuCommandStage > 0 ? senfukyakuCommandDirection : facingDirection) > 0 ? 65 : 68); // 判斷逆轉方向鍵（Chun-Li 為 A，Ryu 依面向後退鍵或 A）
  if (senfukyakuCommandStage === 0 && downKeyDown && !aKeyDown && !dKeyDown) { // 按下 S 開始逆轉指令第一階段
    senfukyakuCommandStage = 1; // 記錄已完成 S 輸入
    senfukyakuCommandTimer = 0; // 開始計時
    senfukyakuCommandDirection = currentCharacter === "chunli" ? -1 : facingDirection; // 記錄逆轉招式施展方向
  } else if (senfukyakuCommandStage === 1 && downKeyDown && (reverseDirDown || aKeyDown)) { // 同時按住 S+A 完成斜下輸入
    senfukyakuCommandStage = 2; // 記錄已完成 S+A 輸入
    if (aKeyDown && currentCharacter === "chunli") { // Chun-Li 輸入 S+A 時鎖定逆轉面向
      senfukyakuCommandDirection = -1; // 設定向左施展或保持逆轉方向
    } // 結束方向設定
  } else if (senfukyakuCommandStage === 2 && !downKeyDown && (reverseDirDown || aKeyDown)) { // 放開 S 並保留 A 完成逆轉方向輸入
    senfukyakuCommandStage = 3; // 記錄逆轉方向指令已完成
  } // 結束逆轉方向指令階段更新
  if (currentCharacter === "ryu") { // 當角色為 Ryu 時檢查升龍拳指令（前 -> 下 -> 斜下前）
    if (shoryukenCommandStage > 0) { // 正在輸入升龍拳指令時累計時間
      shoryukenCommandTimer += deltaTime; // 累計升龍拳指令時間
      if (shoryukenCommandTimer > 800) { // 逾時重設升龍拳指令
        shoryukenCommandStage = 0; // 重設升龍拳階段
        shoryukenCommandTimer = 0; // 重設升龍拳計時
      } // 結束逾時判斷
    } // 結束升龍拳計時
    if (shoryukenCommandStage === 0 && forwardKeyDown && !downKeyDown) { // 按下前方向開始升龍拳指令
      shoryukenCommandStage = 1; // 記錄已輸入前方向
      shoryukenCommandTimer = 0; // 重設升龍拳計時
    } else if (shoryukenCommandStage === 1 && downKeyDown && !forwardKeyDown) { // 接著只按下 S
      shoryukenCommandStage = 2; // 記錄已輸入下方向
    } else if (shoryukenCommandStage === 2 && downKeyDown && forwardKeyDown) { // 最後輸入 S+前方向
      shoryukenCommandStage = 3; // 記錄升龍拳方向指令完成
    } // 結束升龍拳方向判斷
    if (shoryukenCommandStage === 3 && downKeyDown && forwardKeyDown && punchPressed && !isJumping && !isLanding && !busyWithGroundSpecial) { // 完成升龍拳指令後按拳發動
      isShoryuken = true; // 開始播放升龍拳
      specialMoveStarted = true; // 標記已觸發特殊招式
      shoryukenStartY = groundPlayerY; // 記錄起跳地面高度
      attackDirection = facingDirection; // 鎖定升龍拳面向
      currentNormalAttack = ""; // 清除一般攻擊
      isTurning = false; // 取消轉向動畫
      animationFrame = 0; // 從第 1 張影格開始
      animationTimer = 0; // 重設動畫計時
      shoryukenCommandStage = 0; // 清除升龍拳指令階段
      shoryukenCommandTimer = 0; // 重設升龍拳指令計時
      hadoukenCommandStage = 0; // 避免同時觸發波動拳
      hadoukenCommandTimer = 0; // 重設波動拳計時
    } // 結束升龍拳觸發
  } // 結束 Ryu 升龍拳檢查
  if (hadoukenCommandStage > 0) { // 正在輸入順轉指令（S -> SD -> D）時累計時間
    hadoukenCommandTimer += deltaTime; // 累計順轉指令時間
    if (hadoukenCommandTimer > 800) { // 超過時限時重設順轉指令
      hadoukenCommandStage = 0; // 重設順轉階段
      hadoukenCommandTimer = 0; // 重設順轉計時
    } // 結束逾時判斷
  } // 結束順轉指令計時
  const clockwiseForwardDown = currentCharacter === "chunli" ? dKeyDown || forwardKeyDown : forwardKeyDown; // 支援 S->SD->D 順轉與面向前方向輸入
  if (downKeyDown && hadoukenCommandStage === 0 && !aKeyDown && !dKeyDown) { // 按下 S 開始順轉指令第一階段
    hadoukenCommandStage = 1; // 記錄已輸入下方向
    hadoukenCommandTimer = 0; // 開始計時
    hadoukenCommandDirection = facingDirection; // 預設使用目前面向
  } else if (hadoukenCommandStage === 1 && downKeyDown && clockwiseForwardDown) { // 按住 S+D（或 S+前）完成第二階段
    hadoukenCommandStage = 2; // 記錄已輸入斜下前方向
    hadoukenCommandDirection = dKeyDown ? 1 : -1; // 依按下的方向鍵記錄發射面向
  } else if (hadoukenCommandStage === 2 && !downKeyDown && clockwiseForwardDown) { // 放開 S 並保留 D（或前）完成第三階段
    hadoukenCommandStage = 3; // 記錄順轉方向指令完成
    hadoukenCommandDirection = dKeyDown ? 1 : -1; // 更新順轉完成時的面向
  } // 結束順轉方向指令階段更新
  if (hadoukenCommandStage === 3 && punchPressed && !isLanding && !busyWithGroundSpecial) { // 完成 S->SD->D 後按 U/I/O 發動 Kikoken 或 Hadouken（支援空中與地面）
    isAttacking = true; // 開始播放氣功招式動畫
    specialMoveStarted = true; // 標記本畫格已觸發特殊招式
    facingDirection = currentCharacter === "chunli" ? hadoukenCommandDirection : facingDirection; // 更新 Chun-Li 順轉發招面向
    attackDirection = facingDirection; // 鎖定本次氣功彈發射方向
    projectileSpeed = oKeyDown ? 640 : iKeyDown ? 540 : 450; // 依 U/I/O 輕中重拳決定氣功飛行速度
    currentNormalAttack = ""; // 清除一般攻擊狀態
    isTurning = false; // 招式期間不播放轉向動畫
    animationFrame = 0; // 從氣功動畫第 1 張影格開始播放
    animationTimer = 0; // 重設影格計時
    hadoukenCommandStage = 0; // 清除已完成的順轉指令
    hadoukenCommandTimer = 0; // 重設順轉計時
  } // 結束氣功招式觸發判斷
  if (senfukyakuCommandStage === 3 && kickPressed && !isLanding && !busyWithGroundSpecial) { // 完成 S->SA->A 後按 J/K/L 發動 Lightning Leg 或旋風腿（支援空中與地面）
    specialMoveStarted = true; // 標記本畫格已觸發特殊招式
    currentNormalAttack = ""; // 清除一般攻擊狀態
    isTurning = false; // 招式期間不播放轉向動畫
    animationFrame = 0; // 從招式動畫第 1 張影格開始播放
    animationTimer = 0; // 重設影格計時
    if (currentCharacter === "chunli") { // 若為 Chun-Li 則發動百裂腳（Lightning Leg）
      isLightningLeg = true; // 啟動 Chun-Li 百裂腳狀態
      if (aKeyDown && !dKeyDown) { // 若以 S->SA->A 逆轉觸發則面向左側或保持目前面向
        facingDirection = -1; // 將面向設為逆轉方向左側
      } // 結束面向更新
      attackDirection = facingDirection; // 鎖定百裂腳面向
    } else { // 若為 Ryu 則發動旋風腿
      isSenfukyaku = true; // 啟動 Ryu 旋風腿狀態
      attackDirection = senfukyakuCommandDirection; // 鎖定旋風腿推進方向
      facingDirection = attackDirection; // 同步角色面向
    } // 結束角色腿技分支
    senfukyakuCommandStage = 0; // 清除逆轉指令階段
    senfukyakuCommandTimer = 0; // 重設逆轉指令計時
    hadoukenCommandStage = 0; // 清除順轉指令階段
    hadoukenCommandTimer = 0; // 重設順轉指令計時
    shoryukenCommandStage = 0; // 清除升龍拳指令階段
    shoryukenCommandTimer = 0; // 重設升龍拳指令計時
  } // 結束逆轉腿技觸發判斷
  if (!specialMoveStarted && !isLanding && !busyWithGroundSpecial && currentNormalAttack === "") { // 在地面或空中飛行途中皆可觸發 U/I/O 與 J/K/L 一般攻擊
    let triggeredAttack = ""; // 記錄本畫格觸發的一般攻擊代號
    if (uKeyDown && !wasUKeyDown) triggeredAttack = "lp"; // 按下 U 觸發輕拳
    else if (iKeyDown && !wasIKeyDown) triggeredAttack = "mp"; // 按下 I 觸發中拳
    else if (oKeyDown && !wasOKeyDown) triggeredAttack = "hp"; // 按下 O 觸發重拳
    else if (jKeyDown && !wasJKeyDown) triggeredAttack = "lk"; // 按下 J 觸發輕踢
    else if (kKeyDown && !wasKKeyDown) triggeredAttack = "mk"; // 按下 K 觸發中踢
    else if (lKeyDown && !wasLKeyDown) triggeredAttack = "hk"; // 按下 L 觸發重踢
    if (triggeredAttack !== "") { // 若有按下任一攻擊鍵則開始播放攻擊動畫
      currentNormalAttack = triggeredAttack; // 設定目前的一般攻擊種類
      isTurning = false; // 攻擊期間不播放轉向動畫
      animationFrame = 0; // 從攻擊動畫第 1 張影格開始播放
      animationTimer = 0; // 重設攻擊動畫計時
    } // 結束一般攻擊啟動
  } // 結束一般攻擊輸入判斷
  wasUKeyDown = uKeyDown; // 更新 U 鍵狀態
  wasIKeyDown = iKeyDown; // 更新 I 鍵狀態
  wasOKeyDown = oKeyDown; // 更新 O 鍵狀態
  wasJKeyDown = jKeyDown; // 更新 J 鍵狀態
  wasKKeyDown = kKeyDown; // 更新 K 鍵狀態
  wasLKeyDown = lKeyDown; // 更新 L 鍵狀態
  if (jumpKeyDown && !wasJumpKeyDown && !isJumping && !isLanding && !busyWithGroundSpecial && currentNormalAttack === "") { // 按下 W 時開始跳躍並產生 Y 軸高度變化
    isJumping = true; // 進入跳躍飛行狀態
    isDirectionalJump = direction !== 0; // 依是否同時按左右方向鍵決定原地跳或方向跳
    jumpElapsed = 0; // 重設跳躍經過時間
    jumpAnimationFrame = 0; // 從跳躍動畫第 1 張影格開始
    jumpAnimationTimer = 0; // 重設跳躍影格計時
    isTurning = false; // 跳躍期間不播放轉向動畫
  } else if (jumpKeyDown && direction !== 0 && isJumping && !isDirectionalJump) { // 跳躍途中按方向鍵可轉為方向跳躍姿態
    isDirectionalJump = true; // 切換為方向跳躍
    jumpAnimationFrame = 0; // 重設方向跳躍影格
  } // 結束跳躍觸發判斷
  wasJumpKeyDown = jumpKeyDown; // 記錄 W 鍵狀態避免長按連跳
  dashTapTimer += deltaTime; // 累計距離上一次按下水平方向鍵的時間
  if (currentCharacter === "chunli") { // 僅在操控 Chun-Li 時啟用雙擊方向鍵衝刺奔跑功能
    if (direction !== 0 && lastMoveDirection === 0) { // 偵測本畫格剛按下左或右方向鍵
      if (direction === lastTapDirection && dashTapTimer <= dashDoubleTapWindow) { // 短時間內同方向連按第 2 次時觸發 dash_run
        isDashing = true; // 進入衝刺奔跑狀態
        animationFrame = 0; // 從衝刺動畫第 1 張影格開始播放
        animationTimer = 0; // 重設動畫影格計時
      } else { // 第一次按下方向鍵或超過連按時限時
        lastTapDirection = direction; // 記錄本次按下的方向
        dashTapTimer = 0; // 重新開始連按計時
      } // 結束連按兩次方向鍵判斷
    } // 結束方向鍵剛按下判斷
    if (direction === 0 || direction !== lastTapDirection || busyWithGroundSpecial || currentNormalAttack !== "") { // 放開方向鍵或發動招式時停止衝刺
      isDashing = false; // 結束衝刺奔跑狀態
    } // 結束衝刺中斷判斷
  } else { // 操控其他角色時不啟用衝刺狀態
    isDashing = false; // 確保非 Chun-Li 角色不會處於衝刺狀態
  } // 結束角色衝刺判定
  lastMoveDirection = direction; // 記錄本畫格方向供下一畫格比對是否剛按下
  isWalking = direction !== 0; // 記錄本畫格是否有水平移動輸入
  const isPerformingGroundLockedMove = (!isJumping && (busyWithGroundSpecial || currentNormalAttack !== "")); // 判斷是否在地面施展固定位置的招式
  if (!busyWithGroundSpecial && currentNormalAttack === "" && isWalking && direction !== facingDirection) { // 非攻擊期間改變移動方向時更新面向
    facingDirection = direction; // 更新角色面向
    if (!isJumping && currentCharacter === "ryu") { // Ryu 在地面轉向時播放轉向過場動畫
      isTurning = true; // 開始播放轉向動畫
      turnFrame = 0; // 從第 1 張轉向影格開始
      animationFrame = 0; // 重設一般動畫影格
      animationTimer = 0; // 重設動畫計時
    } // 結束地面轉向判斷
  } // 結束面向更新判斷
  let scrollDeltaX = 0; // 記錄本畫格背景卷軸的水平滾動量
  if ((!isPerformingGroundLockedMove || isSenfukyaku) && isWalking && !isSenfukyaku) { // 在地面行走、衝刺奔跑或空中跳躍飛行期間皆可水平移動
    const activeMoveSpeed = isDashing && currentCharacter === "chunli" ? playerSpeed * dashSpeedMultiplier : playerSpeed; // 衝刺期間加快移動速度
    const walkDeltaX = direction * activeMoveSpeed * (deltaTime / 1000); // 計算本畫格角色水平移動距離
    scrollDeltaX += walkDeltaX; // 將水平移動量加入背景卷軸滾動
    playerX += walkDeltaX * 0.35; // 讓角色在畫面中央範圍移動並帶動卷軸
  } // 結束水平移動更新
  const minPlayerX = backgroundX >= maxBgOffset - 1 ? width * 0.12 : width * 0.25; // 背景到最左端時放寬角色左邊界
  const maxPlayerX = backgroundX <= -maxBgOffset + 1 ? width * 0.88 : width * 0.75; // 背景到最右端時放寬角色右邊界
  playerX = constrain(playerX, minPlayerX, maxPlayerX); // 將角色限制在對應的畫面移動範圍內
  if (isJumping) { // 跳躍飛行期間計算 Y 軸拋物線高度變化並允许空中攻擊
    jumpElapsed += deltaTime; // 累計跳躍滯空時間
    jumpAnimationTimer += deltaTime; // 累計跳躍動畫影格時間
    const activeJumpFrames = currentCharacter === "chunli" ? (isDirectionalJump ? chunliDirectionJumpFrames : chunliJumpFrames) : (isDirectionalJump ? directionJumpFrames : jumpFrames); // 取得目前角色的跳躍影格清單
    const jumpFrameDuration = jumpDuration / activeJumpFrames.length; // 依跳躍總時長平均分配每張跳躍影格時間
    while (jumpAnimationTimer >= jumpFrameDuration) { // 更新跳躍底層動畫影格
      jumpAnimationTimer -= jumpFrameDuration; // 扣除單張跳躍影格時間
      jumpAnimationFrame = Math.min(jumpAnimationFrame + 1, activeJumpFrames.length - 1); // 推進跳躍影格直到最後一張
    } // 結束跳躍底層影格更新
    const jumpProgress = constrain(jumpElapsed / jumpDuration, 0, 1); // 計算跳躍進度（0 到 1）
    const maxJumpLift = 290; // 設定跳躍在 Y 軸上升的最大像素高度
    playerY = groundPlayerY - Math.sin(jumpProgress * Math.PI) * maxJumpLift; // 隨跳躍進度平滑改變角色 Y 軸座標
    if (jumpElapsed >= jumpDuration) { // 當滯空時間結束時角色落回地面
      isJumping = false; // 結束跳躍飛行狀態
      isDirectionalJump = false; // 重設方向跳躍狀態
      jumpElapsed = 0; // 重設滯空時間
      playerY = groundPlayerY; // 將角色 Y 座標放回地面高度
      currentNormalAttack = ""; // 落地時結束未完成的空中一般攻擊
      isLightningLeg = false; // 落地時結束空中百裂腳
      isAttacking = false; // 落地時結束空中氣功動作
      isLanding = true; // 進入落地緩衝動畫狀態
      animationFrame = 0; // 從落地第 1 張影格開始
      animationTimer = 0; // 重設動畫計時
    } // 結束跳躍落地判斷
  } // 結束跳躍 Y 軸更新
  animationTimer += deltaTime; // 累計目前動作的動畫時間
  while (animationTimer >= frameDuration) { // 到達單格時間時推進動畫影格
    animationTimer -= frameDuration; // 扣除一張影格播放時間
    if (isTurning) { // 正在轉向時推進轉向影格
      turnFrame += 1; // 前進至下一張轉向影格
      if (turnFrame >= turnFrames.length) { // 轉向動畫播放完畢時
        isTurning = false; // 結束轉向狀態
        turnFrame = 0; // 重設轉向影格
      } // 結束轉向完成判斷
    } else if (isLanding) { // 正在播放落地緩衝動畫時
      animationFrame += 1; // 前進至下一張落地影格
      const activeLandFrames = currentCharacter === "chunli" ? chunliLandFrames : landFrames; // 取得目前角色的落地影格
      if (animationFrame >= activeLandFrames.length) { // 落地動畫播放完畢時
        isLanding = false; // 結束落地狀態
        animationFrame = 0; // 重設動作影格
      } // 結束落地完成判斷
    } else if (isShoryuken) { // 正在播放 Ryu 升龍拳動畫時
      animationFrame += 1; // 前進至下一張升龍拳影格
      if (animationFrame >= shoryukenFrames.length) { // 升龍拳播放完畢時
        isShoryuken = false; // 結束升龍拳狀態
        playerY = groundPlayerY; // 回到地面高度
        isLanding = true; // 銜接落地動畫
        animationFrame = 0; // 重設動畫影格
        animationTimer = 0; // 重設動畫計時
        break; // 跳出本次影格更新迴圈
      } // 結束升龍拳完成判斷
    } else if (isSenfukyaku) { // 正在播放 Ryu 旋風腿動畫時
      animationFrame += 1; // 前進至下一張旋風腿影格
      if (animationFrame >= senfukyakuFrames.length) { // 旋風腿播放完畢時
        isSenfukyaku = false; // 結束旋風腿狀態
        animationFrame = 0; // 重設動畫影格
      } // 結束旋風腿完成判斷
    } else if (isLightningLeg) { // 正在播放 Chun-Li 百裂腳動畫時
      animationFrame += 1; // 前進至下一張百裂腳影格
      if (animationFrame >= chunliLightningLegFrames.length) { // 百裂腳播放完畢時
        isLightningLeg = false; // 結束百裂腳狀態
        animationFrame = 0; // 重設動畫影格
      } // 結束百裂腳完成判斷
    } else if (isAttacking) { // 正在播放氣功招式（Hadouken / Kikoken）動畫時
      animationFrame += 1; // 前進至下一張氣功招式影格
      const activeSpecialFrames = currentCharacter === "chunli" ? chunliKikokenFrames : hadoukenFrames; // 取得目前角色的氣功影格清單
      if (currentCharacter === "chunli" && animationFrame === 6) { // Chun-Li 在發射影格時產生氣功彈
        projectiles.push({ // 新增一顆 Kikoken 氣功彈
          x: playerX + attackDirection * (height / 3) * 0.65, // 依角色高度比例設定氣功彈生成水平位置
          y: playerY - (height / 3) * 0.08, // 依角色高度比例設定氣功彈生成垂直位置（支援空中發射高度）
          direction: attackDirection, // 設定氣功彈飛行方向
          speed: projectileSpeed, // 設定氣功彈飛行速度
          character: "chunli", // 標記為 Chun-Li 的氣功彈
          frame: 0, // 從第 1 張氣功彈影格開始
          timer: 0 // 重設氣功彈計時
        }); // 完成 Chun-Li 氣功彈建立
      } // 結束 Chun-Li 氣功彈發射時機判斷
      if (animationFrame >= activeSpecialFrames.length) { // 當氣功招式動畫播放完畢時
        if (currentCharacter === "ryu") { // Ryu 在最後一張影格發射波動拳氣功彈
          projectiles.push({ // 新增一顆 Hadouken 氣功彈
            x: playerX + attackDirection * (height / 3) * 0.7, // 依角色高度比例設定氣功彈生成水平位置
            y: playerY - (height / 3) * 0.12, // 依角色高度比例設定氣功彈生成垂直位置
            direction: attackDirection, // 設定氣功彈飛行方向
            speed: projectileSpeed, // 設定氣功彈飛行速度
            character: "ryu", // 標記為 Ryu 的氣功彈
            frame: 0, // 從第 1 張氣功彈影格開始
            timer: 0 // 重設氣功彈計時
          }); // 完成 Ryu 氣功彈建立
        } // 結束 Ryu 氣功彈建立判斷
        isAttacking = false; // 結束氣功招式狀態
        animationFrame = 0; // 重設動畫影格
      } // 結束氣功招式完成判斷
    } else if (currentNormalAttack !== "") { // 正在播放一般拳腳攻擊（地面或空中飛行途中）時
      animationFrame += 1; // 前進至下一張攻擊影格
      const attackFrames = getNormalAttackFrames(currentNormalAttack); // 取得目前一般攻擊的影格清單
      if (animationFrame >= attackFrames.length) { // 當一般攻擊動畫播放完畢時
        currentNormalAttack = ""; // 清除一般攻擊狀態（若在空中則自動恢復為跳躍飛行姿態）
        animationFrame = 0; // 重設動畫影格
      } // 結束一般攻擊完成判斷
    } else { // 一般站立或行走狀態時
      animationFrame += 1; // 持續推進循環動畫影格
    } // 結束動畫狀態分支
  } // 結束動畫計時迴圈
  if (isShoryuken) { // Ryu 升龍拳期間依進度更新 Y 軸上升與下降
    const shoryukenProgress = constrain((animationFrame + animationTimer / frameDuration) / shoryukenFrames.length, 0, 1); // 計算升龍拳進度
    const availableLift = shoryukenStartY - shoryukenFrames[0].height * activeScale / 2 - 8 * activeScale; // 計算畫面可容納的最大上升高度
    const shoryukenLift = Math.max(0, Math.min(shoryukenHeight, availableLift)); // 限制升龍拳最大高度
    playerY = shoryukenStartY - Math.sin(shoryukenProgress * Math.PI) * shoryukenLift; // 更新升龍拳期間的 Y 座標
  } // 結束升龍拳高度更新
  if (isSenfukyaku) { // Ryu 旋風腿期間向前推進並帶動背景卷軸
    const senfukyakuStep = attackDirection * (senfukyakuDistance / (senfukyakuFrames.length * frameDuration)) * deltaTime; // 計算本畫格旋風腿推進距離
    scrollDeltaX += senfukyakuStep; // 將推進距離加入卷軸滾動
    playerX = constrain(playerX + senfukyakuStep * 0.35, width * 0.25, width * 0.75); // 更新畫面上的角色位置
  } // 結束旋風腿位移更新
  const previousBgX = backgroundX; // 記錄滾動前的背景位置
  backgroundX = constrain(backgroundX - scrollDeltaX, -maxBgOffset, maxBgOffset); // 依角色移動滾動背景並限制在最左端與最右端範圍內
  const actualBgScroll = previousBgX - backgroundX; // 計算本畫格背景實際發生的滾動位移
  if (Math.abs(scrollDeltaX - actualBgScroll) > 0.001) { // 當背景已達最右端或最左端無法再滾動時
    playerX = constrain(playerX + (scrollDeltaX - actualBgScroll) * 0.65, width * 0.12, width * 0.88); // 允許角色繼續往畫面邊緣移動
  } // 結束背景邊界角色移動補償
  for (const projectile of projectiles) { // 更新所有飛行中的氣功彈
    projectile.x += projectile.direction * (projectile.speed || 520) * (deltaTime / 1000) - actualBgScroll; // 更新氣功彈位置並配合背景實際滾動位移
    projectile.timer += deltaTime; // 累計氣功彈動畫時間
    while (projectile.timer >= frameDuration) { // 推進氣功彈動畫影格
      projectile.timer -= frameDuration; // 扣除單格時間
      projectile.frame = (projectile.frame + 1) % projectileFrames.length; // 循環播放氣功彈影格
    } // 結束氣功彈影格更新
  } // 結束所有氣功彈更新
  projectiles = projectiles.filter((projectile) => projectile.x > -150 && projectile.x < width + 150); // 移除飛出畫面外的氣功彈
  for (const projectile of projectiles) { // 繪製畫面上所有氣功彈
    push(); // 暫存繪圖狀態
    translate(projectile.x, projectile.y); // 移至氣功彈座標
    scale(projectile.direction > 0 ? -1 : 1, 1); // 依飛行方向翻轉氣功彈貼圖
    if (projectile.character === "chunli") { // 若為 Chun-Li 的 Kikoken 則套用亮藍氣功色調
      tint(140, 230, 255); // 設定青藍色光暈色調
    } // 結束氣功彈色調設定
    const projectileScale = (height / 3) / idleFrames[0].height; // 依角色等於畫布 1/3 高度計算氣功彈縮放比例
    const projectileImage = projectileFrames[projectile.frame]; // 取得目前氣功彈影格
    image(projectileImage, 0, 0, projectileImage.width * projectileScale, projectileImage.height * projectileScale); // 繪製氣功彈
    pop(); // 還原繪圖狀態
  } // 結束氣功彈繪製
  updateAndDrawGuile(actualBgScroll); // 更新並繪製場景中的 Guile NPC、靠近提問觸發與反應動作
  const isMovingForward = direction !== 0 && direction === facingDirection; // 判斷是否正朝面向方向前進
  const isMovingBackward = direction !== 0 && direction !== facingDirection; // 判斷是否正朝反方向後退
  const activeIdleFrames = currentCharacter === "chunli" ? chunliIdleFrames : idleFrames; // 取得目前角色站立影格
  const activeWalkFrames = currentCharacter === "chunli" ? chunliWalkFrames : walkFrames; // 取得目前角色前進影格
  const activeBackWalkFrames = currentCharacter === "chunli" ? chunliBackWalkFrames : backWalkFrames; // 取得目前角色後退影格
  const activeJumpFrames = currentCharacter === "chunli" ? (isDirectionalJump ? chunliDirectionJumpFrames : chunliJumpFrames) : (isDirectionalJump ? directionJumpFrames : jumpFrames); // 取得目前角色跳躍影格
  const activeLandFrames = currentCharacter === "chunli" ? chunliLandFrames : landFrames; // 取得目前角色落地影格
  const activeSpecialFrames = currentCharacter === "chunli" ? chunliKikokenFrames : hadoukenFrames; // 取得目前角色氣功招式影格
  const locomotionFrames = isMovingForward ? activeWalkFrames : isMovingBackward ? activeBackWalkFrames : activeIdleFrames; // 依移動狀態選擇站立、前進或後退影格
  let currentImage; // 宣告本畫格要繪製的角色圖片變數
  if (isSenfukyaku) { // 優先判斷是否為旋風腿
    currentImage = senfukyakuFrames[animationFrame % senfukyakuFrames.length]; // 使用旋風腿影格
  } else if (isLightningLeg) { // 判斷是否為 Chun-Li 百裂腳
    currentImage = chunliLightningLegFrames[animationFrame % chunliLightningLegFrames.length]; // 使用百裂腳影格
  } else if (isShoryuken) { // 判斷是否為升龍拳
    currentImage = shoryukenFrames[animationFrame % shoryukenFrames.length]; // 使用升龍拳影格
  } else if (isAttacking) { // 判斷是否為氣功招式（Hadouken / Kikoken）
    currentImage = activeSpecialFrames[animationFrame % activeSpecialFrames.length]; // 使用氣功招式影格
  } else if (currentNormalAttack !== "") { // 判斷是否正在進行一般拳腳攻擊（含空中飛行途中攻擊）
    const attackFrames = getNormalAttackFrames(currentNormalAttack); // 取得一般攻擊影格
    currentImage = attackFrames[animationFrame % attackFrames.length]; // 使用對應的拳腳攻擊影格
  } else if (isLanding) { // 判斷是否為落地緩衝
    currentImage = activeLandFrames[animationFrame % activeLandFrames.length]; // 使用落地影格
  } else if (isJumping) { // 判斷是否處於空中跳躍飛行狀態
    currentImage = activeJumpFrames[jumpAnimationFrame % activeJumpFrames.length]; // 使用跳躍飛行影格
  } else if (isTurning && currentCharacter === "ryu") { // 判斷是否為 Ryu 轉向動畫
    currentImage = turnFrames[turnFrame % turnFrames.length]; // 使用轉向影格
  } else if (isDashing && currentCharacter === "chunli") { // 判斷是否為 Chun-Li 雙擊方向鍵觸發的 dash_run 衝刺奔跑
    const dashIndex = animationFrame < 5 ? animationFrame : 5 + ((animationFrame - 5) % 6); // 先播放 09_dash_run_1 起步再循環播放 10_dash_run_2 奔跑影格
    currentImage = chunliDashRunFrames[dashIndex]; // 使用衝刺奔跑影格
  } else { // 其餘情況使用地面站立或行走動畫
    currentImage = locomotionFrames[animationFrame % locomotionFrames.length]; // 使用站立或行走影格
  } // 結束角色顯示影格選擇
  push(); // 暫存畫布狀態以繪製角色
  const footAlignedY = isJumping || isShoryuken ? playerY : floorY - (currentImage.height * activeScale) / 2; // 在地面時讓不同高度影格的雙腳皆貼齊地板，在空中則使用實際飛行 Y 座標
  translate(playerX, footAlignedY); // 將繪圖原點移至角色目前座標
  const horizontalFlip = currentCharacter === "chunli" ? (facingDirection > 0 ? 1 : -1) : (facingDirection > 0 ? -1 : 1); // 依角色原生朝向與目前面向計算水平翻轉方向
  scale(horizontalFlip, 1); // 套用角色水平翻轉
  image(currentImage, 0, 0, currentImage.width * activeScale, currentImage.height * activeScale); // 繪製目前角色動畫影格
  pop(); // 還原畫布狀態
  if (backgroundX <= -maxBgOffset + 1 && !isRightEdgeEffectActive) { // 當背景抵達最右端時啟動閃電與爆炸循環特效
    isRightEdgeEffectActive = true; // 標記右端特效已啟動
    rightEdgeEffectTimer = 0; // 從第 1 次閃電（0ms）開始播放
    lastLightningStrikeIndex = -1; // 重設閃電打雷聲索引以立即觸發第 1 聲打雷
  } // 結束右端特效啟動判斷
  if (isRightEdgeEffectActive) { // 當特效啟動中（包含背景在最右端或開始往回捲時）
    const effectScreenX = width * 0.75 + (backgroundX + maxBgOffset); // 讓閃電與爆炸固定在背景對應位置，隨背景往回捲向右移動退出畫面
    const effectHalfWidth = getRightEdgeEffectHalfWidth(); // 取得特效圖片半寬以判定是否完全離開視窗
    if (effectScreenX - effectHalfWidth > width) { // 當特效跟隨背景移動至完全離開畫面右緣後
      isRightEdgeEffectActive = false; // 停止特效播放狀態
      rightEdgeEffectTimer = 0; // 重設特效計時器
      lastLightningStrikeIndex = -1; // 重設打雷聲索引
      stopThunderSound(); // 立即停止打雷音效
    } else { // 特效仍在畫面內時持續運作並跟隨背景移動
      rightEdgeEffectTimer = (rightEdgeEffectTimer + deltaTime) % 4000; // 持續推進 4 秒循環計時（3 次 1 秒閃電 + 1 次 1 秒藍色爆炸）
      drawRightEdgeEffect(rightEdgeEffectTimer, effectScreenX); // 在跟隨背景移動的座標繪製閃電與藍色爆炸並觸發打雷聲
    } // 結束特效是否離開畫面判斷
  } // 結束右端特效更新与繪製
  drawCharacterSelector(); // 在畫面上方繪製角色頭像切換 UI
  drawGuileQuizUI(); // 在畫面上層繪製 Guile 選擇題視窗或答題結果提示橫幅
} // 結束每畫格更新與繪製

function removeBlueBackground(frames) { // 將角色影格的藍色底色設為透明
  for (const frame of frames) { // 逐一處理動畫中的每張圖片
    frame.loadPixels(); // 讀取目前圖片的所有像素資料
    for (let pixelIndex = 0; pixelIndex < frame.pixels.length; pixelIndex += 4) { // 每次讀取一個 RGBA 像素
      if (frame.pixels[pixelIndex] === 85 && frame.pixels[pixelIndex + 1] === 170 && frame.pixels[pixelIndex + 2] === 255) { // 確認像素是否為素材藍色底色
        frame.pixels[pixelIndex + 3] = 0; // 將符合的底色像素設為完全透明
      } // 結束藍色底色判斷
    } // 結束目前圖片的像素處理
    frame.updatePixels(); // 套用像素透明度變更
  } // 結束所有圖片的底色處理
} // 結束藍色底色移除函式

function windowResized() { // 視窗尺寸改變時重新調整畫布
  resizeCanvas(windowWidth, windowHeight); // 讓畫布繼續填滿整個瀏覽器視窗
  updateGroundPosition(); // 重新計算地板與角色站立高度
  playerX = constrain(playerX, width * 0.25, width * 0.75); // 避免角色在縮放後超出卷軸中央移動範圍
} // 結束視窗縮放處理
