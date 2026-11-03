/**
 * 人才招募職缺 — 對外招募頁內容（多語：zh / en / ja）。
 * 技術名詞一律維持英文原文；工程職缺為日本大型系統專案之遠端派遣需求。
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
      en: 'Run social media for multiple client brands across IG, Threads, Facebook and X. Each brand has its own voice — you switch between them independently and own the results.',
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
      en: 'Plan and run digital-nomad events — workshops, community meetups, international visits and city experiences — from early planning through on-site delivery.',
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
        'Event planning or production experience; able to own an event end to end.',
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

/** 遠端派遣工程師團隊（日本大型系統專案）。 */
export const engineeringJobs: Job[] = [
  {
    id: 'backend-rails',
    title: { zh: '後端工程師（CM 核心系統）', en: 'Backend Engineer (CM core system)', ja: 'バックエンドエンジニア（CM コアシステム）' },
    employment: 'dispatch',
    mode: { zh: '全遠端', en: 'Fully remote', ja: 'フルリモート' },
    salary: { zh: '月薪 NT$100,000 起', en: 'From NT$100,000 / month', ja: '月給 NT$100,000〜' },
    tag: { zh: '核心系統主力', en: 'Core system', ja: 'コアシステムの主力' },
    summary: {
      zh: '負責擴充既有的 CM 核心系統，為本專案人力配置的主體。',
      en: 'Extend the existing CM core system — the largest share of the project’s engineering headcount.',
      ja: '既存の CM コアシステムの機能拡張をご担当いただきます。本プロジェクトの人員構成の中心となるポジションです。',
    },
    requirements: {
      zh: [
        'Ruby on Rails 與 GraphQL（graphql-ruby），主要工作為擴充既有 CM 系統。',
        'PostgreSQL：pg_bigm 全文檢索、postgres_fdw 外部資料表、複合主鍵與 Index 設計。',
        'Apartment gem（依 Schema 區分的多租戶架構）：能判斷新資料表應配置的 Schema，並掌握 Migration 的套用方式與影響範圍。',
        'RSpec / FactoryBot 測試。',
      ],
      en: [
        'Ruby on Rails and GraphQL (graphql-ruby), primarily extending the existing CM system.',
        'PostgreSQL: pg_bigm full-text search, postgres_fdw foreign tables, composite primary keys and index design.',
        'Apartment gem (schema-based multi-tenancy): decide which schema new tables belong in, and understand how migrations apply and what they affect.',
        'RSpec / FactoryBot.',
      ],
      ja: [
        'Ruby on Rails と GraphQL（graphql-ruby）。主な業務は既存 CM システムの機能拡張です。',
        'PostgreSQL：pg_bigm による全文検索、postgres_fdw による外部テーブル、複合主キーと Index の設計。',
        'Apartment gem（Schema 単位のマルチテナント構成）：新しいテーブルを配置すべき Schema を判断でき、Migration の適用方法と影響範囲を把握していること。',
        'RSpec / FactoryBot によるテスト。',
      ],
    },
    stack: ['Ruby on Rails', 'GraphQL', 'PostgreSQL', 'Apartment', 'RSpec'],
  },
  {
    id: 'sharepoint-m365',
    title: { zh: 'SharePoint / Microsoft 365 工程師', en: 'SharePoint / Microsoft 365 Engineer', ja: 'SharePoint / Microsoft 365 エンジニア' },
    employment: 'dispatch',
    mode: { zh: '全遠端', en: 'Fully remote', ja: 'フルリモート' },
    salary: { zh: '月薪 NT$100,000 起', en: 'From NT$100,000 / month', ja: '月給 NT$100,000〜' },
    tag: { zh: '稀缺技能', en: 'Scarce skill', ja: '希少スキル' },
    summary: {
      zh: '日本市場相當稀缺的技能組合，為本專案優先招募的角色。',
      en: 'A skill set that is genuinely scarce in the Japanese market — a priority hire for this project.',
      ja: '日本市場では非常に希少なスキルセットであり、本プロジェクトで優先的に採用を進めているポジションです。',
    },
    requirements: {
      zh: [
        'Microsoft Graph API、Entra ID，以及 App-only 與 Delegated 授權方式的選擇與運用。',
        'SharePoint Online / Stream、條件式存取、下載限制、Upload Session。',
      ],
      en: [
        'Microsoft Graph API, Entra ID, and choosing between App-only and Delegated authorization.',
        'SharePoint Online / Stream, conditional access, download restrictions, Upload Session.',
      ],
      ja: [
        'Microsoft Graph API、Entra ID、および App-only と Delegated の認可方式の使い分け。',
        'SharePoint Online / Stream、条件付きアクセス、ダウンロード制限、Upload Session。',
      ],
    },
    stack: ['Microsoft Graph API', 'Entra ID', 'SharePoint Online', 'Microsoft 365', 'Stream'],
  },
  {
    id: 'aws-sre',
    title: { zh: 'AWS 基礎架構 / SRE 工程師', en: 'AWS Infrastructure / SRE Engineer', ja: 'AWS インフラ / SRE エンジニア' },
    employment: 'dispatch',
    mode: { zh: '全遠端', en: 'Fully remote', ja: 'フルリモート' },
    salary: { zh: '月薪 NT$100,000 起', en: 'From NT$100,000 / month', ja: '月給 NT$100,000〜' },
    tag: { zh: '中高階', en: 'Senior', ja: 'シニア' },
    summary: {
      zh: '需要能依 SLA 要求進行架構設計與驗證測試的中高階工程師，而不只是能建置環境。',
      en: 'A senior engineer who designs and validates architecture against SLA requirements — not just someone who can stand up environments.',
      ja: '環境構築だけでなく、SLA 要件に基づいたアーキテクチャ設計と検証テストまで担えるシニアエンジニアを求めています。',
    },
    requirements: {
      zh: [
        'ECS / RDS / ElastiCache / DynamoDB / App Runner / Lambda / VPC・NAT / CloudWatch / ACM / Route53。',
        'IaC（Terraform 或 CDK）、Auto Scaling、HA/DR 高可用與災難復原設計（Multi-AZ）。',
        '大規模系統設計：同時在線 16 萬人、系統可用率 99.9%、4 小時內復原，以及負載測試。',
      ],
      en: [
        'ECS / RDS / ElastiCache / DynamoDB / App Runner / Lambda / VPC・NAT / CloudWatch / ACM / Route53.',
        'IaC (Terraform or CDK), Auto Scaling, HA/DR design (Multi-AZ).',
        'Large-scale design: 160,000 concurrent users, 99.9% availability, 4-hour recovery, plus load testing.',
      ],
      ja: [
        'ECS / RDS / ElastiCache / DynamoDB / App Runner / Lambda / VPC・NAT / CloudWatch / ACM / Route53。',
        'IaC（Terraform または CDK）、Auto Scaling、HA/DR（高可用性・災害復旧）設計（Multi-AZ）。',
        '大規模システム設計：同時接続 16 万人、稼働率 99.9%、4 時間以内の復旧、および負荷テスト。',
      ],
    },
    stack: ['AWS', 'ECS', 'RDS', 'DynamoDB', 'Lambda', 'Terraform', 'CDK', 'SRE'],
  },
  {
    id: 'ai-llm',
    title: { zh: 'AI / LLM 工程師', en: 'AI / LLM Engineer', ja: 'AI / LLM エンジニア' },
    employment: 'dispatch',
    mode: { zh: '全遠端', en: 'Fully remote', ja: 'フルリモート' },
    salary: { zh: '月薪 NT$100,000 起', en: 'From NT$100,000 / month', ja: '月給 NT$100,000〜' },
    summary: {
      zh: '運用 AWS Bedrock 與 Claude 開發 AI 功能，並設計法規與合規檢查機制。',
      en: 'Build AI features on AWS Bedrock and Claude, and design the legal and compliance checking mechanisms around them.',
      ja: 'AWS Bedrock と Claude を活用した AI 機能の開発と、法令・コンプライアンスチェックの仕組みの設計をご担当いただきます。',
    },
    requirements: {
      zh: [
        'AWS Bedrock / Claude、Prompt Engineering，以及 ai-core 的運用。',
        '從 Word、PDF、PPT、CSV 等多種檔案格式擷取文字。',
        'Guardrails、Embedding、pgvector。',
        '著作權、肖像權、不當內容等法規與合規檢查機制的設計。',
      ],
      en: [
        'AWS Bedrock / Claude, prompt engineering, and use of the ai-core.',
        'Text extraction from formats including Word, PDF, PPT and CSV.',
        'Guardrails, embeddings, pgvector.',
        'Designing compliance checks for copyright, likeness rights and inappropriate content.',
      ],
      ja: [
        'AWS Bedrock / Claude、Prompt Engineering、および ai-core の活用。',
        'Word、PDF、PPT、CSV など多様なファイル形式からのテキスト抽出。',
        'Guardrails、Embedding、pgvector。',
        '著作権、肖像権、不適切コンテンツなどに関する法令・コンプライアンスチェックの仕組みの設計。',
      ],
    },
    stack: ['AWS Bedrock', 'Claude', 'pgvector', 'Embedding', 'Prompt Engineering'],
  },
  {
    id: 'frontend-next',
    title: { zh: '前端工程師', en: 'Frontend Engineer', ja: 'フロントエンドエンジニア' },
    employment: 'dispatch',
    mode: { zh: '全遠端', en: 'Fully remote', ja: 'フルリモート' },
    salary: { zh: '月薪 NT$100,000 起', en: 'From NT$100,000 / month', ja: '月給 NT$100,000〜' },
    summary: {
      zh: '從零建立新的前端 Repository，預計約 30 個畫面。',
      en: 'Build a new frontend repository from scratch — roughly 30 screens.',
      ja: '新しいフロントエンドの Repository をゼロから構築していただきます（約 30 画面を予定）。',
    },
    requirements: {
      zh: [
        'Next.js：建立新的 codebase，預計約 30 個畫面。',
        'GraphQL BFF / Codegen。',
        'SSO 與認證整合，包括 LTI、JWT 的前端實作。',
        '依使用者角色控制畫面與功能的顯示。',
        'TanStack Query。',
      ],
      en: [
        'Next.js: a new codebase of about 30 screens.',
        'GraphQL BFF / Codegen.',
        'SSO and auth integration, including frontend LTI and JWT.',
        'Role-based display control of screens and features.',
        'TanStack Query.',
      ],
      ja: [
        'Next.js：新規 codebase の構築（約 30 画面を予定）。',
        'GraphQL BFF / Codegen。',
        'SSO と認証の連携（LTI、JWT のフロントエンド実装を含む）。',
        'ユーザーロールに応じた画面・機能の表示制御。',
        'TanStack Query。',
      ],
    },
    stack: ['Next.js', 'GraphQL', 'TanStack Query', 'JWT', 'LTI'],
  },
  {
    id: 'auth-architect',
    title: { zh: '系統架構師（認證與跨系統整合）', en: 'System Architect (Auth & Integration)', ja: 'システムアーキテクト（認証・システム間連携）' },
    employment: 'dispatch',
    mode: { zh: '全遠端', en: 'Fully remote', ja: 'フルリモート' },
    salary: { zh: '月薪 NT$100,000 起', en: 'From NT$100,000 / month', ja: '月給 NT$100,000〜' },
    tag: { zh: '技術負責人', en: 'Tech lead', ja: 'テックリード' },
    summary: {
      zh: '統籌 CM、PL、AM 三套系統的整體架構設計，需要能從全局掌握所有系統的架構師。',
      en: 'Own the end-to-end architecture across the CM, PL and AM systems — an architect who can hold the whole design in view.',
      ja: 'CM・PL・AM の 3 システムにまたがる全体アーキテクチャ設計を統括していただきます。すべてのシステムを俯瞰して把握できるアーキテクトを求めています。',
    },
    requirements: {
      zh: [
        'LTI 1.3 / OIDC / JWT / SSO / Session 共用。',
        '跨三套系統的整體架構設計：CM（PostgreSQL）、PL（PostgreSQL）、AM（DynamoDB）。',
        '識別碼統一、公開範圍與權限判定、跨資料儲存系統的資料關聯與整合、以 Lambda 進行非同步彙整處理。',
      ],
      en: [
        'LTI 1.3 / OIDC / JWT / SSO / shared sessions.',
        'End-to-end architecture across three systems: CM (PostgreSQL), PL (PostgreSQL), AM (DynamoDB).',
        'Unified identifiers, visibility and permission rules, cross-datastore data linking, and async aggregation via Lambda.',
      ],
      ja: [
        'LTI 1.3 / OIDC / JWT / SSO / Session 共有。',
        '3 システムにまたがる全体アーキテクチャ設計：CM（PostgreSQL）、PL（PostgreSQL）、AM（DynamoDB）。',
        '識別子の統一、公開範囲と権限の判定、データストアをまたいだデータの関連付けと統合、Lambda による非同期の集計処理。',
      ],
    },
    stack: ['LTI 1.3', 'OIDC', 'JWT', 'SSO', 'PostgreSQL', 'DynamoDB', 'Lambda'],
  },
];
