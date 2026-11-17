/**
 * 2024–2026 實績（首頁與案例頁共用的單一來源）。
 * 規則：只放已交付或已得標／簽約的事實；金額只放公開標案決標金額。
 * TDNA／國發會相關一律標註角色（生態系／KK 職務），不寫成遊遊付費客戶。
 */
import type { Lang } from '../i18n/company';

type T = Record<Lang, string>;

export interface Stat { n: T; l: T }
export interface Milestone { date: string; title: T; desc: T; kind: 'gov' | 'ent' | 'intl' | 'eco' }
export interface Engagement { tag: T; client: T; title: T; desc: T; points: Record<Lang, string[]> }

export const trackStats: Stat[] = [
  {
    n: { zh: 'NT$828 萬', en: 'NT$8.28M', ja: 'NT$828万' },
    l: {
      zh: '公開標案得標累計契約金額（花蓮、臺東兩案）',
      en: 'Public-tender contracts won (Hualien & Taitung)',
      ja: '公共入札の累計受注額（花蓮県・台東県の2件）',
    },
  },
  {
    n: { zh: '50%', en: '50%', ja: '50%' },
    l: {
      zh: '政府標案得標率（投標 4 案、得標 2 案）',
      en: 'Government tender win rate (2 of 4 bids)',
      ja: '公共入札の落札率（4件応札・2件落札）',
    },
  },
  {
    n: { zh: '臺 × 日', en: 'TW × JP', ja: '台湾 × 日本' },
    l: {
      zh: '日本企業長期系統開發月約，跨國交付中',
      en: 'Ongoing monthly engineering retainer with a Japanese company',
      ja: '日本企業とシステム開発の月額契約を継続中',
    },
  },
  {
    n: { zh: '700+', en: '700+', ja: '700名+' },
    l: {
      zh: 'Taiwan Digital Fest 兩屆參與人數（TDNA 主辦）',
      en: 'Taiwan Digital Fest participants over two editions (run by TDNA)',
      ja: 'Taiwan Digital Fest 2回の累計参加者（TDNA主催）',
    },
  },
];

export const milestones: Milestone[] = [
  {
    date: '2024.05',
    kind: 'ent',
    title: { zh: '遊遊成立', en: 'Twouring founded', ja: 'Twouring 設立' },
    desc: {
      zh: '以「顧問＋專案整合」為核心，承接企業 AI、數位轉型與政府專案。',
      en: 'Set up around advisory and project integration for enterprise AI, digital transformation and public-sector work.',
      ja: 'コンサルティングとプロジェクト統括を軸に、企業AI・DX・行政案件を受託開始。',
    },
  },
  {
    date: '2025.01',
    kind: 'eco',
    title: { zh: 'KK 出任國發會數位遊牧辦公室執行長', en: 'KK appointed Executive Director, NDC Digital Nomad Office', ja: 'KKが国家発展委員会デジタルノマド事務局の執行長に就任' },
    desc: {
      zh: '臺灣數位遊牧簽證同月上路，參與政策推動與國際關係（KK 個人職務）。',
      en: 'The same month Taiwan launched its digital-nomad visa; policy and international relations work (KK’s personal role).',
      ja: '同月に台湾のデジタルノマドビザが開始。政策推進と国際連携に携わる（KK個人の役職）。',
    },
  },
  {
    date: '2025.02',
    kind: 'intl',
    title: { zh: '沖繩 OIST 國際論壇', en: 'OIST international forum, Okinawa', ja: '沖縄 OIST 国際フォーラム登壇' },
    desc: {
      zh: 'Asia New Travel Bootcamp，與日韓講者對談數位遊牧簽證與社群發展。',
      en: 'Asia New Travel Bootcamp — panel with Japanese and Korean speakers on nomad visas and community building.',
      ja: 'Asia New Travel Bootcamp にて、日韓の登壇者とノマドビザとコミュニティ形成を議論。',
    },
  },
  {
    date: '2025.06',
    kind: 'eco',
    title: { zh: 'Taiwan Digital Fest 2025・臺北', en: 'Taiwan Digital Fest 2025, Taipei', ja: 'Taiwan Digital Fest 2025（台北）' },
    desc: {
      zh: '8 天、450+ 人、日韓菲泰等多國社群參與的數位遊牧節（TDNA 主辦）。',
      en: 'Eight days, 450+ people, communities from Japan, Korea, the Philippines, Thailand and more (organised by TDNA).',
      ja: '8日間・450名以上。日本・韓国・フィリピン・タイなど各国コミュニティが参加（TDNA主催）。',
    },
  },
  {
    date: '2025.11',
    kind: 'gov',
    title: { zh: '高雄市政府青年局 講師', en: 'Speaker for Kaohsiung City Youth Bureau', ja: '高雄市政府青年局 講師' },
    desc: {
      zh: '與國發會遊牧臺灣辦公室合辦數位遊牧友善標章說明會。',
      en: 'Nomad-friendly certification briefing co-hosted with the NDC Nomad Taiwan office.',
      ja: '国家発展委員会「遊牧台湾」事務局と共催のノマドフレンドリー認証説明会で講演。',
    },
  },
  {
    date: '2026.01',
    kind: 'gov',
    title: { zh: '連續得標兩件縣府標案', en: 'Two county-government tenders won', ja: '県政府の公共入札を2件連続落札' },
    desc: {
      zh: '花蓮縣政府「雲基地營運推廣計畫」NT$588 萬、臺東縣政府「TTNomads 移動式國際客廳暨社群平台」NT$240 萬。',
      en: 'Hualien County “Cloud Base operations & promotion” (NT$5.88M) and Taitung County “TTNomads mobile international living room & community platform” (NT$2.4M).',
      ja: '花蓮県政府「雲基地運営推進計画」（NT$588万）、台東県政府「TTNomads 移動式国際リビング＆コミュニティプラットフォーム」（NT$240万）。',
    },
  },
  {
    date: '2026.05',
    kind: 'eco',
    title: { zh: 'Taiwan Digital Fest 2026・花東一個月', en: 'Taiwan Digital Fest 2026 — a month on the East Coast', ja: 'Taiwan Digital Fest 2026（花蓮・台東で1か月）' },
    desc: {
      zh: '與臺東縣政府合辦，約 250 人參與，其中 176 位外籍、約七成（TDNA 主辦）。',
      en: 'Co-hosted with Taitung County: about 250 participants, 176 of them foreign nationals — roughly 70% (organised by TDNA).',
      ja: '台東県政府と共催。参加者約250名のうち外国籍が176名・約7割（TDNA主催）。',
    },
  },
  {
    date: '2026.08',
    kind: 'intl',
    title: { zh: '日本 ALION 株式会社 系統開發月約', en: 'Monthly engineering retainer with ALION (Japan)', ja: 'ALION株式会社とシステム開発の月額契約' },
    desc: {
      zh: '臺灣團隊遠端承接日本客戶的系統開發，按月交付。',
      en: 'A Taiwan-based team delivering software for a Japanese client remotely, every month.',
      ja: '台湾のチームが日本のお客様のシステム開発をリモートで受託し、月次で納品。',
    },
  },
  {
    date: '2026.10',
    kind: 'ent',
    title: { zh: '花蓮慈濟醫院 AI Agent 工作坊', en: 'AI Agent workshop at Hualien Tzu Chi Hospital', ja: '花蓮慈済病院で AI エージェント研修' },
    desc: {
      zh: '為資訊部門工程師、PM 與主管設計三小時實作：需求→規格→可運作原型。',
      en: 'A three-hour hands-on session for IT engineers, PMs and managers: requirement → spec → working prototype.',
      ja: '情報部門のエンジニア・PM・管理職向けに、要件→仕様→動くプロトタイプまでの3時間実践研修。',
    },
  },
  {
    date: '2026.11',
    kind: 'intl',
    title: { zh: '加入 OpenAI、NVIDIA、Anthropic 官方計畫', en: 'Joined OpenAI, NVIDIA and Anthropic programs', ja: 'OpenAI・NVIDIA・Anthropic の公式プログラムに参加' },
    desc: {
      zh: 'OpenAI Partner Network 完成加入、NVIDIA Inception 核准，並於 10 月入選 Anthropic 新創計畫 Claude for Startups。',
      en: 'Onboarded to the OpenAI Partner Network, approved for NVIDIA Inception, and accepted to Anthropic’s Claude for Startups in October.',
      ja: 'OpenAI Partner Network への参加完了、NVIDIA Inception に承認、10月には Anthropic の Claude for Startups に採択。',
    },
  },
];

/** 具名實績（已交付／已簽約）。 */
export const engagements: Engagement[] = [
  {
    tag: { zh: '日本 · 系統開發', en: 'Japan · Engineering', ja: '日本 · システム開発' },
    client: { zh: 'ALION 株式会社（日本）', en: 'ALION Inc. (Japan)', ja: 'ALION株式会社' },
    title: {
      zh: '跨國系統開發與技術顧問（長期月約）',
      en: 'Cross-border engineering and technical advisory (monthly retainer)',
      ja: '越境システム開発・技術顧問（月額契約）',
    },
    desc: {
      zh: '從系統架構、工程團隊啟動到系統串接，由臺灣團隊遠端交付日本客戶的正式專案。',
      en: 'From architecture and team kickoff to integrations — production work for a Japanese client, delivered remotely from Taiwan.',
      ja: 'アーキテクチャ設計、開発チームの立ち上げからシステム連携まで、台湾のチームがリモートで本番案件を納品しています。',
    },
    points: {
      zh: ['系統架構與 API／資料庫設計', '工程團隊啟動與程式碼審查', '按月交付的跨國協作'],
      en: ['Architecture, API and database design', 'Team kickoff and code review', 'Monthly cross-border delivery'],
      ja: ['アーキテクチャ・API・DB設計', '開発チーム立ち上げとコードレビュー', '月次納品の越境協業'],
    },
  },
  {
    tag: { zh: '日本 · 公部門教育平台', en: 'Japan · Public education platform', ja: '日本 · 教育行政プラットフォーム' },
    client: { zh: '日本政令指定都市 教育委員會（協力開發）', en: 'A Japanese designated-city board of education (co-development)', ja: '政令指定都市の教育委員会（開発協力）' },
    title: {
      zh: '教職員學習平台「スキルアップライブラリ」',
      en: 'Teacher learning platform “Skill-up Library”',
      ja: '教職員向け学習プラットフォーム「スキルアップライブラリ」',
    },
    desc: {
      zh: '服務數百所中小學與幼稚園、十餘萬名師生的教材分享平台；參與需求定義、Microsoft 365 串接與 AI 非同步作業架構驗證。',
      en: 'A materials-sharing platform for hundreds of schools and kindergartens and 100,000+ teachers and students; we joined requirements, Microsoft 365 integration and an async-AI architecture PoC.',
      ja: '数百校の小中学校・幼稚園、十数万人の教職員・児童生徒が使う教材共有基盤。要件定義、Microsoft 365 連携、AI 非同期処理の PoC に参画。',
    },
    points: {
      zh: ['教材投稿、搜尋、評價、審核與儀表板', '串接 SharePoint Online／Stream', '「先生 AI チャット」AI 作業架構 PoC'],
      en: ['Upload, search, rating, review and dashboards', 'SharePoint Online / Stream integration', 'PoC for the teachers’ AI chat job architecture'],
      ja: ['教材投稿・検索・評価・審査・ダッシュボード', 'SharePoint Online／Stream 連携', '「先生AIチャット」非同期処理の PoC'],
    },
  },
  {
    tag: { zh: '醫療 · AI 培訓', en: 'Healthcare · AI training', ja: '医療 · AI研修' },
    client: { zh: '花蓮慈濟醫院', en: 'Hualien Tzu Chi Hospital', ja: '花蓮慈済病院' },
    title: {
      zh: '資訊部門「用 AI Agent 高效打造產品」工作坊',
      en: '“Build products faster with AI agents” workshop for the IT department',
      ja: '情報部門向け「AIエージェントで速くつくる」ワークショップ',
    },
    desc: {
      zh: '一則真實需求串起三個模組，讓工程師、PM 與主管當天就把需求寫成規格、做出可運作原型，並學會切小與量測。',
      en: 'One real requirement threaded through three modules: engineers, PMs and managers turned it into a spec and a working prototype the same morning.',
      ja: '実際の要件ひとつを3モジュールで扱い、エンジニア・PM・管理職がその場で仕様書と動くプロトタイプまで仕上げました。',
    },
    points: {
      zh: ['需求→1-pager、User Story、驗收條件', 'Spec-driven AI 開發與 AI Code Review', '不綁定單一模型的 Agent 工作法'],
      en: ['Requirement → 1-pager, user stories, acceptance criteria', 'Spec-driven AI development and AI code review', 'Model-agnostic agent workflow'],
      ja: ['要件→1ページ仕様・ユーザーストーリー・受入条件', '仕様駆動のAI開発とAIコードレビュー', '特定モデルに縛られないエージェント活用'],
    },
  },
  {
    tag: { zh: '城市 · 政府', en: 'City · Government', ja: '自治体 · 行政' },
    client: { zh: '花蓮縣政府', en: 'Hualien County Government', ja: '花蓮県政府' },
    title: { zh: '花蓮雲基地營運推廣計畫', en: 'Hualien Cloud Base operations & promotion', ja: '花蓮「雲基地」運営推進計画' },
    desc: {
      zh: '把雲基地從一次性活動，延伸為能接待國際人才、串聯在地商家、可追蹤成果的城市營運。',
      en: 'Turning Cloud Base from one-off events into city operations that host international talent, link local businesses and track outcomes.',
      ja: '単発イベントだった「雲基地」を、海外人材の受け入れ・地元事業者との連携・成果測定まで行う常設の運営へ。',
    },
    points: {
      zh: ['公開契約金額 NT$5,880,000', '場域與商家盤點、國際社群接待', '在地講座：三三小聚「AI 工作術」'],
      en: ['Public contract value NT$5,880,000', 'Venue/business mapping and community hosting', 'Local talk series on AI at work'],
      ja: ['公開契約額 NT$5,880,000', '施設・事業者の棚卸しと海外コミュニティ受け入れ', '地域向け講座「AI仕事術」'],
    },
  },
  {
    tag: { zh: '城市 · 政府', en: 'City · Government', ja: '自治体 · 行政' },
    client: { zh: '臺東縣政府', en: 'Taitung County Government', ja: '台東県政府' },
    title: { zh: '臺東 TTNomads 移動式國際客廳暨社群平台', en: 'Taitung TTNomads mobile living room & community platform', ja: '台東 TTNomads 移動式国際リビング＆コミュニティ' },
    desc: {
      zh: '結合在地場域與國際遊牧社群，設計可延續的接待、交流與社群平台。',
      en: 'Combining local venues with the global nomad community into lasting hosting, exchange and a community platform.',
      ja: '地域の拠点と世界のノマドコミュニティをつなぎ、継続的な受け入れ・交流・コミュニティ基盤を設計。',
    },
    points: {
      zh: ['公開契約金額 NT$2,400,000', '移動式國際客廳與交流活動', 'TTNomads 社群平台服務'],
      en: ['Public contract value NT$2,400,000', 'Mobile international living-room programme', 'TTNomads community platform'],
      ja: ['公開契約額 NT$2,400,000', '移動式国際リビングと交流プログラム', 'TTNomads コミュニティ基盤'],
    },
  },
];

/** 企業輔導（客戶未授權具名，以產業類型呈現；皆為實際案例）。 */
export const coachingCases: { tag: T; title: T; desc: T }[] = [
  {
    tag: { zh: '研究機構', en: 'Research', ja: '研究機関' },
    title: { zh: '台大實驗室 研究數據流程自動化', en: 'University lab research-data automation', ja: '大学研究室のデータ処理自動化' },
    desc: {
      zh: '盤點資料生命週期，把行政與資料整理交給系統，研究人員只做專業判斷。',
      en: 'Mapped the data lifecycle and moved admin and data wrangling to the system, keeping researchers on expert judgment.',
      ja: 'データのライフサイクルを整理し、事務・データ整形を仕組み化。研究者は専門的判断に集中。',
    },
  },
  {
    tag: { zh: '製造／零售', en: 'Manufacturing / retail', ja: '製造・小売' },
    title: { zh: '數千品項五金業者 電商 × ERP × 門市整合', en: 'Hardware supplier: e-commerce × ERP × store', ja: '数千品目の金物商社：EC × ERP × 店舗の統合' },
    desc: {
      zh: '以商品資料為核心串接線上銷售、庫存與現場取貨，減少重複輸入與人工比對。',
      en: 'Product data at the core, linking online sales, inventory and pickup to cut double entry and manual checks.',
      ja: '商品マスタを軸にEC・在庫・店頭受取をつなぎ、二重入力と手作業の突合を削減。',
    },
  },
  {
    tag: { zh: '數位行銷', en: 'Digital marketing', ja: 'デジタルマーケティング' },
    title: { zh: '廣告投放流程自動化', en: 'Ad-operations automation', ja: '広告運用の自動化' },
    desc: {
      zh: '以投放流程為單位拆步驟，分清楚工具接手的環節與必須由人決策的環節。',
      en: 'Broke campaign ops into steps and separated what tools can run from what people must decide.',
      ja: '運用フローを分解し、ツールに任せる工程と人が判断すべき工程を切り分け。',
    },
  },
  {
    tag: { zh: '內容營運', en: 'Content ops', ja: 'コンテンツ運用' },
    title: { zh: '社群貼文作業自動化', en: 'Social-post production automation', ja: 'SNS投稿業務の自動化' },
    desc: {
      zh: '例行產製交給工具，內容正確性與品牌語氣保留人工審閱。',
      en: 'Routine production goes to tools; accuracy and brand voice stay with human review.',
      ja: '定型的な制作はツールへ。内容の正確性とブランドトーンは人がレビュー。',
    },
  },
];
