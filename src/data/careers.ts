/**
 * 人才招募職缺 — 對外招募頁內容（多語：zh / en / ja）。
 * 薪資、職缺開放狀態以正式面談與書面為準。
 */
export interface L { zh: string; en: string; ja: string }
export interface LBullets { zh: string[]; en: string[]; ja: string[] }

/** 雇用類別：正職／兼職／派遣（決定卡片上的類別徽章樣式）。 */
export type Employment = 'fulltime' | 'parttime' | 'dispatch';

export const employmentLabel: Record<Employment, L> = {
  fulltime: { zh: '正職', en: 'Full-time', ja: '正社員' },
  parttime: { zh: '兼職', en: 'Part-time', ja: 'パートタイム' },
  dispatch: { zh: '派遣', en: 'Contract', ja: '派遣' },
};

export interface Job {
  id: string;
  title: L;
  employment: Employment;
  mode: L;                 // 工作型態（全遠端／遠端為主…）
  salary: L;
  tag?: L;                 // 重點標記（稀缺技能／技術負責人…）
  summary: L;              // 一句話定位
  responsibilities?: LBullets;
  requirements?: LBullets;
  bonus?: LBullets;
  stack?: string[];        // 技術標籤（語言中立）
}

/** 內容與社群團隊（自家與客戶品牌）。 */
export const contentJobs: Job[] = [
  {
    id: 'social-editor',
    title: { zh: '社群小編／社群代操', en: 'Social Media Editor', ja: 'SNS編集者／SNS運用代行' },
    employment: 'fulltime',
    mode: { zh: '全遠端', en: 'Fully remote', ja: 'フルリモート' },
    salary: { zh: '月薪 NT$35,000', en: 'NT$35,000 / month', ja: '月給 NT$35,000' },
    summary: {
      zh: '代操多個客戶品牌的社群，通路涵蓋 IG、Threads、Facebook、X。每個品牌調性不同，需要能獨立切換語氣，並對成效負責。',
      en: 'Run social media for multiple client brands across IG, Threads, Facebook and X. Each brand has its own voice; you switch between them on your own and are accountable for the results.',
      ja: '複数のクライアントブランドのSNS運用を代行していただきます。対象チャネルは IG、Threads、Facebook、X です。ブランドごとにトーンが異なるため、ご自身で語り口を切り替えながら、成果にも責任を持っていただきます。',
    },
    responsibilities: {
      zh: [
        '經營多個客戶品牌的 IG / Threads / Facebook / X：內容企劃、發文排程、留言與私訊回覆。',
        '掌握各品牌調性，產出符合品牌語氣的貼文內容。',
        '以 Canva 等工具製作貼文圖、限時動態與活動視覺。',
        '追蹤觸及、互動率與粉絲成長，定期以數據回報成效。',
        '掌握各平台趨勢與演算法變化，適時調整內容策略。',
      ],
      en: [
        'Manage IG / Threads / Facebook / X for multiple client brands: content planning, scheduling, comments and DMs.',
        'Understand each brand’s tone and produce content that fits it.',
        'Create post graphics, stories and event visuals with Canva or similar tools.',
        'Track reach, engagement and follower growth; report results with data on a regular basis.',
        'Follow platform trends and algorithm changes; adjust content strategy accordingly.',
      ],
      ja: [
        '複数のクライアントブランドの IG / Threads / Facebook / X の運用：コンテンツ企画、投稿スケジュール管理、コメント・DMへの対応。',
        '各ブランドのトーンを把握し、ブランドらしい語り口の投稿コンテンツを制作。',
        'Canva などのツールを用いた投稿画像、ストーリーズ、イベントビジュアルの制作。',
        'リーチ、エンゲージメント率、フォロワー数の推移を追跡し、定期的にデータで成果を報告。',
        '各プラットフォームのトレンドやアルゴリズムの変化を捉え、コンテンツ戦略を適宜調整。',
      ],
    },
    requirements: {
      zh: [
        '自律性高，能在遠端環境自主安排工作並如期交付。',
        '能同時管理多個品牌專案，時程與品質都顧得住。',
        '熟悉 IG / Threads / Facebook / X 其中至少三個平台。',
        '能用 Canva 等工具獨立完成圖文製作。',
        '文案能力佳，中文表達通順，能寫出不同品牌的語氣。',
        '重視誠信與職業道德。',
      ],
      en: [
        'Highly self-disciplined; able to organise your own work remotely and deliver on time.',
        'Able to manage several brand accounts at once without dropping quality or deadlines.',
        'Familiar with at least three of IG / Threads / Facebook / X.',
        'Able to produce graphics independently with Canva or similar tools.',
        'Strong copywriting; fluent written Chinese, able to write in different brand voices.',
        'High standards of integrity and professional ethics.',
      ],
      ja: [
        '自己管理能力が高く、リモート環境でも自律的に業務を進め、期日どおりに納品できる方。',
        '複数ブランドの案件を同時に管理し、スケジュールと品質の両方を守れる方。',
        'IG / Threads / Facebook / X のうち、少なくとも3つのプラットフォームに精通している方。',
        'Canva などのツールで、画像と文章を一人で仕上げられる方。',
        'コピーライティング力があり、中国語で自然な文章が書け、ブランドごとに異なるトーンを書き分けられる方。',
        '誠実さと職業倫理を大切にできる方。',
      ],
    },
    bonus: {
      zh: [
        '具英文或日文溝通能力，可服務國際客戶。',
        '有平面設計背景或相關作品。',
        '有社群代操、廣告投放、數據分析或短影音經驗。',
      ],
      en: [
        'English or Japanese communication skills for international clients.',
        'A graphic design background or portfolio.',
        'Experience in agency social media, paid ads, analytics or short-form video.',
      ],
      ja: [
        '英語または日本語でのコミュニケーション能力があり、海外クライアントに対応できる方。',
        'グラフィックデザインの経験、または関連する作品をお持ちの方。',
        'SNS運用代行、広告運用、データ分析、ショート動画のいずれかの経験がある方。',
      ],
    },
  },
  {
    id: 'event-producer',
    title: { zh: '活動企劃', en: 'Event Producer', ja: 'イベントプランナー' },
    employment: 'parttime',
    mode: { zh: '遠端為主，活動期間到場', en: 'Remote, on-site during events', ja: 'リモート中心（イベント期間中は現地勤務）' },
    salary: { zh: '面議（依專案與經驗）', en: 'Negotiable (by project & experience)', ja: '応相談（案件・経験に応じて）' },
    summary: {
      zh: '企劃與執行數位遊牧主題活動：工作坊、社群聚會、國際參訪與城市體驗，從前期企劃到現場執行完整參與。',
      en: 'Plan and run digital-nomad events (workshops, community meetups, international visits and city experiences) from early planning through on-site delivery.',
      ja: 'デジタルノマドをテーマにしたイベント（ワークショップ、コミュニティミートアップ、海外視察、都市体験など）を、初期の企画から当日の運営まで一貫してご担当いただきます。',
    },
    responsibilities: {
      zh: [
        '企劃與執行實體及線上活動：工作坊、社群聚會、國際參訪、城市體驗。',
        '統籌場地、講者、報名、流程、物資與預算。',
        '活動現場執行與突發狀況處理。',
        '活動後彙整報名數、出席率與回饋，提出檢討與改善建議。',
      ],
      en: [
        'Plan and run in-person and online events: workshops, meetups, international visits, city experiences.',
        'Coordinate venues, speakers, registration, run-of-show, supplies and budget.',
        'Run events on-site and handle issues as they come up.',
        'Compile registrations, attendance and feedback after each event, with review and improvement notes.',
      ],
      ja: [
        'オフライン・オンラインイベントの企画と運営：ワークショップ、コミュニティミートアップ、海外視察、都市体験。',
        '会場、登壇者、参加申込、進行、備品、予算の取りまとめ。',
        'イベント当日の現場運営と、突発的なトラブルへの対応。',
        'イベント終了後に申込数・出席率・フィードバックを集計し、振り返りと改善提案を行う。',
      ],
    },
    requirements: {
      zh: [
        '有活動企劃或執行經驗，能獨立負責一場活動。',
        '細心，能同時追蹤多項工作，重視時程。',
        '可配合活動時間出勤（多在週末或晚間）。',
        '溝通協調能力佳，能對接講者、來賓與合作單位。',
      ],
      en: [
        'Event planning or production experience; able to run an event on your own from start to finish.',
        'Detail-oriented, able to track multiple workstreams, reliable on schedules.',
        'Available on event dates (mostly weekends or evenings).',
        'Strong coordination skills with speakers, guests and partners.',
      ],
      ja: [
        'イベントの企画または運営経験があり、一つのイベントを単独で担当できる方。',
        '細やかな気配りができ、複数の業務を並行して管理し、スケジュールを守れる方。',
        'イベント開催日（主に週末や夜間）に勤務できる方。',
        'コミュニケーション・調整力に優れ、登壇者、ゲスト、パートナー団体とやり取りできる方。',
      ],
    },
    bonus: {
      zh: [
        '參與過數位遊牧、遠距工作或國際交流社群。',
        '具英文或日文溝通能力，可接待國際來賓。',
        '能用 Canva 等工具製作活動視覺與簡報。',
      ],
      en: [
        'Involvement in digital-nomad, remote-work or international-exchange communities.',
        'English or Japanese communication skills for hosting international guests.',
        'Able to produce event visuals and decks with Canva or similar tools.',
      ],
      ja: [
        'デジタルノマド、リモートワーク、国際交流などのコミュニティに参加した経験のある方。',
        '英語または日本語でのコミュニケーション能力があり、海外からのゲストをおもてなしできる方。',
        'Canva などのツールでイベントビジュアルや資料を作成できる方。',
      ],
    },
  },
];
