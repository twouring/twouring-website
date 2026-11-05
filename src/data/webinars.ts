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

/** 場次詳細頁內容（每個主題一份；同主題的不同日期共用）。 */
export interface TopicDetail {
  summary: string;              // 詳細頁開場說明
  takeaways: string[];          // 聽完可以帶走
  agenda: { min: string; title: string; points: string[] }[];  // 60 分鐘詳細議程
  demoSteps: string[];          // 現場示範步驟（模擬資料）
  prepare: string[];            // 會前可以先想好的問題
  notFor: string;               // 不適合誰（誠實篩選）
  faq: { q: string; a: string }[];
  related: string[];            // 相關洞察文章 slug
}

const commonClose = { min: '45–60 分', title: '問答與下一步', points: ['優先回答報名時填寫的「最卡的流程」（不公開公司名稱）', '說明三步做法：現況診斷 → 流程數位化 → AI 導入與內訓，可以只做第一步', '會後 2 週內預約，可先拿一次 30 分鐘「最卡流程」初診'] };
const commonCases = { min: '30–40 分', title: '去識別化案例', points: ['五金材料業者：數千種料號，以商品資料為核心整合電商、ERP 與實體櫃位，減少重複輸入與人工比對', '醫院醫護人員 24 小時 AI 工作應用培訓：8 堂主題課、依四類職務分梯，課堂一律用模擬資料'] };
const commonFaq = [
  { q: '需要先懂 AI 或寫程式嗎？', a: '不用。內容以老闆和主管的角度講流程，示範用的都是一般人用得到的工具。' },
  { q: '會推銷嗎？', a: '最後幾分鐘會說明我們的服務，其餘時間都是實務內容。要不要往下談由你決定。' },
  { q: '可以帶同事一起嗎？', a: '可以，建議各自報名，會議連結會分別寄送。' },
  { q: '有錄影嗎？', a: '有。錄影與簡報只寄給報名者，不公開上網。' },
];

export const DETAILS: Record<TopicKey, TopicDetail> = {
  intro: {
    summary: '給還沒開始、或試過但卡住的公司。這一場不講特定產業，而是帶你把公司的流程攤開，看哪一個環節最適合先改，以及要準備多少時間和預算。',
    takeaways: ['一份流程盤點表，回公司就能自己填', '判斷「先買系統、先上課、還是先診斷」的方法', '常見的三種失敗，以及怎麼避開', '說明會簡報、錄影與《報價實況 2026》'],
    agenda: [
      { min: '0–5 分', title: '開場', points: ['今天會講什麼、聽完能帶走什麼'] },
      { min: '5–15 分', title: '傳產導入 AI 常見的三種失敗', points: ['系統買了沒人用：流程沒先改，工具只是多一個要輸入的地方', '派人上課，回來還是照舊：課程沒有對到每天的工作', '一次換 ERP：時程拖長、營運被打亂，最後退回 Excel'] },
      { min: '15–30 分', title: '現場示範：15 分鐘流程盤點', points: ['用一家模擬的五金加工廠，從接單到出貨列出每個環節', '標出「最花人力」「最常出錯」「最依賴特定同仁」的地方', '挑出第一個要改的流程，並估算要準備的資料'] },
      commonCases,
      { min: '40–45 分', title: '從哪一步開始', points: ['四題自我檢核：你適合從診斷、數位化還是 AI 內訓開始'] },
      commonClose,
    ],
    demoSteps: ['列出接單、報價、生管、採購、倉庫、出貨、會計七個環節', '每個環節記下負責人、使用的工具（紙本／Excel／ERP）與每週花費時間', '依「人力 × 出錯 × 依賴度」排出前三名', '為第一名寫下要準備的資料與驗收方式'],
    prepare: ['公司目前最花人力的一件事是什麼？', '有沒有只有某一位同仁會做的工作？', '現在用哪些系統、哪些還在 Excel 或紙本？'],
    notFor: '已經有明確規格、只需要找廠商開發系統的公司，建議直接預約 30 分鐘需求初談。',
    faq: commonFaq,
    related: ['traditional-industry-transformation-steps', 'enterprise-ai-adoption-roadmap', 'ai-consultant-vs-training-vs-build'],
  },
  metal: {
    summary: '給五金、金屬加工、螺絲扣件、模具與汽機車零組件業者。料號成千上萬、報價靠資深同仁和 Excel、外銷文件每張都要重打，這一場示範哪些可以先交給系統和 AI，哪些一定要留給人判斷。',
    takeaways: ['料號主檔該有哪些欄位、怎麼清理重複料號', '用 AI 讀詢單產生報價初稿、由人核價的流程', 'Invoice／Packing List 用範本產生並核對的做法', '說明會簡報、錄影與《報價實況 2026》'],
    agenda: [
      { min: '0–5 分', title: '開場', points: ['五金與金屬加工業者最常見的人工重複環節'] },
      { min: '5–15 分', title: '三個瓶頸', points: ['料號主檔：同一個品項好幾個編號、規格欄位寫法不一', '報價：只有資深同仁知道怎麼算，請假就沒人能報', '外銷文件：Invoice、Packing List、報關資料重複輸入，毛淨重常對不上'] },
      { min: '15–30 分', title: '現場示範（模擬資料）', points: ['把一份重複又雜亂的料號表整理成主檔', '貼上一封客戶詢單 email，產生報價初稿並標出需要人確認的欄位', '從訂單資料自動產生 Invoice 與 Packing List，並核對數量與重量'] },
      commonCases,
      { min: '40–45 分', title: '從哪一步開始', points: ['料號沒整理好之前，先不要談報價自動化', '先選一個最常報價的產品線試做'] },
      commonClose,
    ],
    demoSteps: ['匯入一份含重複料號的模擬 Excel', '依材質、尺寸、表面處理拆欄位並合併重複品項', '用 AI 讀詢單，對應料號並帶出歷史報價', '由人核價後產生報價單；再從訂單產出外銷文件並自動核對'],
    prepare: ['料號大約有多少筆？存在哪裡（ERP、Excel、紙本）？', '一張報價單平均要花多久？誰在報？', '外銷文件每個月大約幾張？最常出錯的是哪一欄？'],
    notFor: '以零售門市為主、沒有自己的料號與報價流程的公司，建議改參加入門場。',
    faq: commonFaq,
    related: ['metal-parts-ai-quoting', 'traditional-industry-transformation-steps', 'company-data-in-chatgpt'],
  },
  machinery: {
    summary: '給機械、工具機、設備製造與自行車零件業者。客製機台每台都不一樣，報價要算好幾天、BOM 改版追不上、售後問題一再重複回答。這一場示範怎麼把規格、BOM 和維修經驗整理成系統和 AI 用得上的資料。',
    takeaways: ['客製報價的拆解方式：哪些可以模組化、哪些要工程師判斷', 'BOM 版本管理的最低做法，讓現場拿到的是最新版', '用維修手冊與歷史工單做售後問答', '說明會簡報、錄影與《報價實況 2026》'],
    agenda: [
      { min: '0–5 分', title: '開場', points: ['機械設備業和量產型製造業，數位化的重點不一樣'] },
      { min: '5–15 分', title: '三個瓶頸', points: ['客製報價：每台規格不同，業務要等工程師估算', 'BOM 改版：設計變更沒有同步到採購與現場', '售後：同樣的故障問題，每次都要找資深技師'] },
      { min: '15–30 分', title: '現場示範（模擬資料）', points: ['把客戶規格需求拆成標準模組與客製項目，產生 BOM 草稿', '比對兩版 BOM，自動列出變更項目給採購與現場', '用模擬維修手冊與工單，回答售後常見問題並附出處'] },
      commonCases,
      { min: '40–45 分', title: '從哪一步開始', points: ['先把最常賣的三種機型模組化', '售後問答先從內部技師使用，再考慮對客戶開放'] },
      commonClose,
    ],
    demoSteps: ['輸入一份模擬的客戶規格需求', '對應標準模組，列出需要工程師確認的客製項目', '產生 BOM 草稿並與上一版比對差異', '用維修手冊回答「主軸異音怎麼排查」並標示參考頁碼'],
    prepare: ['一台客製機台從詢價到報價要多久？', 'BOM 存在哪裡？設計變更怎麼通知採購和現場？', '售後最常被問的三個問題是什麼？'],
    notFor: '只做單一標準品、沒有客製與售後需求的公司，建議改參加五金金屬場或入門場。',
    faq: commonFaq,
    related: ['traditional-industry-transformation-steps', 'department-ai-automation-roi', 'enterprise-ai-adoption-roadmap'],
  },
  labor: {
    summary: '給塑橡膠、紡織、食品等各類製造業，正在面對招募困難、老師傅退休、新人上手慢的公司。AI 無法取代現場操作，但能把經驗留下來、把文書和報表的時間省下來。這一場示範具體怎麼做。',
    takeaways: ['把老師傅經驗與 SOP 變成新人教材與問答的流程', '排程、日報、詢單回覆中可以先自動化的部分', '哪些工作 AI 幫不上，不要浪費預算', '說明會簡報、錄影與《報價實況 2026》'],
    agenda: [
      { min: '0–5 分', title: '開場', points: ['製造業缺工的現況（引用勞動部職位空缺調查等官方數據）'] },
      { min: '5–15 分', title: '三個缺口', points: ['經驗斷層：老師傅退休，判斷方式沒有留下來', '文書負擔：排程、日報、詢單回覆佔掉主管大量時間', '重複輸入：同一份資料在業務、生管、倉庫各打一次'] },
      { min: '15–30 分', title: '現場示範（模擬資料）', points: ['把一段老師傅口述的換線步驟整理成 SOP 與新人測驗', '用 SOP 做成新人問答，回答時附上依據的段落', '把現場手寫日報轉成每日生產報表'] },
      commonCases,
      { min: '40–45 分', title: '從哪一步開始', points: ['先挑一個最依賴特定人的工作做經驗整理', 'AI 不取代現場操作，聚焦在文書與知識傳承'] },
      commonClose,
    ],
    demoSteps: ['錄一段模擬的老師傅口述，轉成文字', '整理成步驟、注意事項與常見錯誤', '產生新人測驗題與問答', '把手寫日報照片轉成生產報表'],
    prepare: ['哪一個工作只有一位同仁會做？', '新人通常要多久才能獨立作業？', '主管每天花多少時間在排程與報表？'],
    notFor: '主要缺的是現場操作人力、需要自動化設備的公司，這一場不會談產線自動化設備。',
    faq: commonFaq,
    related: ['manufacturing-labor-shortage-ai', 'traditional-industry-transformation-steps', 'department-ai-automation-roi'],
  },
  cbam: {
    summary: '給外銷歐洲、或正在做碳盤查的鋼鐵與金屬製品業者。歐洲客戶開始要求排放相關資料，這一場整理要先準備哪些數據、資料散在哪裡、怎麼整理成可交付的格式。法規時程與適用品項以歐盟與我國主管機關公告為準，會前會再次核對。',
    takeaways: ['歐洲客戶可能會要的資料清單', '出貨、用料、能源資料的整理方式', '外銷文件與排放資料怎麼對得起來', '說明會簡報、錄影與《報價實況 2026》'],
    agenda: [
      { min: '0–5 分', title: '開場', points: ['為什麼外銷歐洲的金屬業者開始被要排放資料'] },
      { min: '5–15 分', title: '法規重點（依官方公告整理）', points: ['適用範圍與時程以歐盟與我國主管機關最新公告為準', '供應商要提供哪些資料給歐洲進口商'] },
      { min: '15–30 分', title: '現場示範（模擬資料）', points: ['把出貨、用料與能源資料整理成一張對照表', '從外銷文件對應到出口品項與數量', '產出可交給客戶的資料摘要'] },
      commonCases,
      { min: '40–45 分', title: '從哪一步開始', points: ['先盤點資料在哪裡、誰負責', '從出口歐洲量最大的品項開始'] },
      commonClose,
    ],
    demoSteps: ['匯入模擬的出貨與用料資料', '對應能源使用紀錄', '整理成品項別的資料表', '產出給客戶的摘要'],
    prepare: ['外銷歐洲的品項與量大約多少？', '能源與用料資料目前在哪裡？', '客戶已經要求過哪些資料？'],
    notFor: '沒有外銷歐洲、也沒有碳盤查需求的公司，建議改參加入門場。',
    faq: commonFaq,
    related: ['traditional-industry-transformation-steps', 'metal-parts-ai-quoting'],
  },
};

export const sessionPath = (s: WebinarSession) => `${WEBINAR_PATH}/${s.id}`;
