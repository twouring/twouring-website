/**
 * AI 導入傳產線上說明會：場次單一來源（/webinar 頁、首頁提示條、洞察文章 CTA 共用）。
 * 規劃：/workspace/local/說明會/AI導入傳產線上說明會-規劃.md
 * 新增場次只改 SESSIONS；過期場次在 build 與瀏覽器端都會自動隱藏。
 */
export type TopicKey = 'intro' | 'metal' | 'machinery' | 'labor' | 'cbam';

export interface WebinarTopic {
  key: TopicKey;
  label: string;
  title: string;
  audience: string;
  pains: string[];
  demo: string;
}

export const TOPICS: Record<TopicKey, WebinarTopic> = {
  intro: {
    key: 'intro',
    label: '入門場',
    title: '傳產導入 AI，第一步做什麼？',
    audience: '各產業還沒開始、或試過但卡住的老闆、二代與主管',
    pains: ['系統買了沒人用', '派人上課，回來還是照舊', '不知道預算和時程怎麼抓'],
    demo: '15 分鐘流程盤點表：現場示範怎麼挑出最該先改的一個流程',
  },
  metal: {
    key: 'metal',
    label: '五金金屬場',
    title: '料號上萬筆、報價靠老師傅：五金業怎麼少一半人工',
    audience: '五金、金屬加工、螺絲扣件、模具、汽機車零組件',
    pains: ['料號主檔混亂、同一個品項好幾個編號', '報價靠資深同仁和 Excel', 'Invoice、Packing List 每張都要重打'],
    demo: '用 AI 讀客戶詢單 email 產生報價初稿，再自動產出外銷文件',
  },
  machinery: {
    key: 'machinery',
    label: '機械設備場',
    title: '客製機台的報價、BOM 和售後，交給系統和 AI',
    audience: '機械、工具機、設備製造、自行車零件',
    pains: ['客製報價要算好幾天', 'BOM 改版追不上，現場拿到舊版', '售後問題一再重複回答'],
    demo: '從規格需求產生 BOM 草稿，並用維修手冊做售後問答',
  },
  labor: {
    key: 'labor',
    label: '缺工場',
    title: '少兩個人也做得完：用 AI 和系統補人力缺口',
    audience: '塑橡膠、紡織、食品等各類製造業，正面臨招募困難的公司',
    pains: ['招不到人，現有人力加班撐', '老師傅退休，經驗跟著帶走', '新人上手慢、一直問同樣的問題'],
    demo: '把 SOP 和老師傅的口述整理成新人教材與問答',
  },
  cbam: {
    key: 'cbam',
    label: '季度專題',
    title: '外銷文件與歐盟碳邊境申報：鋼鐵金屬業者的準備清單',
    audience: '有外銷歐洲或正在做碳盤查的鋼鐵、金屬製品業者',
    pains: ['歐洲客戶開始要排放資料', '外銷文件與報關資料分散', '不知道要先準備哪些數據'],
    demo: '把出貨、用料與能源資料整理成可申報的格式',
  },
};

export interface WebinarSession {
  id: string;      // YYYY-MM-DD
  date: string;    // YYYY-MM-DD（台北時間）
  start: string;   // HH:mm
  end: string;
  topic: TopicKey;
}

export const SESSIONS: WebinarSession[] = [
  { id: '2026-11-25', date: '2026-11-25', start: '10:00', end: '11:00', topic: 'intro' },
  { id: '2026-12-09', date: '2026-12-09', start: '10:00', end: '11:00', topic: 'metal' },
  { id: '2026-12-23', date: '2026-12-23', start: '10:00', end: '11:00', topic: 'machinery' },
  { id: '2027-01-06', date: '2027-01-06', start: '10:00', end: '11:00', topic: 'labor' },
  { id: '2027-01-20', date: '2027-01-20', start: '10:00', end: '11:00', topic: 'intro' },
  { id: '2027-02-17', date: '2027-02-17', start: '10:00', end: '11:00', topic: 'metal' },
  { id: '2027-03-03', date: '2027-03-03', start: '10:00', end: '11:00', topic: 'machinery' },
  { id: '2027-03-17', date: '2027-03-17', start: '10:00', end: '11:00', topic: 'cbam' },
  { id: '2027-03-31', date: '2027-03-31', start: '10:00', end: '11:00', topic: 'labor' },
];

const WD = ['日', '一', '二', '三', '四', '五', '六'];
/** 2026-11-25 → 11/25（三）；跨年才顯示年份。 */
export function fmtDate(d: string, withYear = false): string {
  const [y, m, day] = d.split('-').map(Number);
  const wd = WD[new Date(Date.UTC(y, m - 1, day)).getUTCDay()];
  return `${withYear ? `${y}/` : ''}${m}/${day}（${wd}）`;
}

/** 場次結束時間（台北）轉 epoch ms，供前端隱藏過期場次。 */
export const endsAt = (s: WebinarSession) => Date.parse(`${s.date}T${s.end}:00+08:00`);

/** build 時仍未結束的場次。 */
export const upcomingSessions = (now = Date.now()) => SESSIONS.filter((s) => endsAt(s) > now);

export const WEBINAR_PATH = '/webinar';
