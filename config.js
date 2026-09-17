// ===================== Supabase 配置 =====================
// 在 Supabase 控制台 → Project Settings → API 复制下面两个值填入：
//   url     : 形如 https://xxxxxxxx.supabase.co
//   anonKey : 形如 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
//
// 说明：
//   · PvE 跨设备共享击杀榜、PvP 双人实时对战 都需要此配置。
//   · PvP 走 Supabase Realtime「广播频道」，无需额外数据表，但需开启匿名登录
//     （Authentication → Sign In/Providers → Anonymous sign-ins）。
//   · 留空则：PvE 进入「本机离线模式」（榜单存浏览器本地），PvP 不可用。
window.SUPABASE_CONFIG = {
  url: 'https://dnfugrjnzyfqngrjuu.supabase.co',
  anonKey: 'sb_publishable_IaIPo8oDPf5UrpiT1Y2R3Q_0ZRCH9ra'
};
