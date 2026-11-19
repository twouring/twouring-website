/**
 * 七大服務入口內容，對應《twouring_business_strategy_2026.md》(v2 操作手冊版) §2.2–2.5。
 * 價格依策略報告「定價（決定）」表轉錄；對外標示為「起價」，正式以書面報價與合約為準。
 */
export type ServiceSlug =
  | 'city'
  | 'aiConsulting'
  | 'aiTraining'
  | 'aiWorkflow'
  | 'remoteWork'
  | 'systems'
  | 'hermes'
  | 'venue'
  | 'international';

interface Pkg {
  name: string;
  price: string;
  desc: string;
}
export interface ServiceContent {
  navLabel: string;
  eyebrow: string;
  title: string;
  /** Optional hero title with .keep spans to control line breaks (title stays plain for meta/JSON-LD). */
  titleHtml?: string;
  lead: string;
  metaDescription: string;
  highlights: string[];
  painTitle: string;
  painPoints: string[];
  solutionTitle: string;
  solutionLead: string;
  solutionPoints: string[];
  pitch: string;
  packagesTitle: string;
  packagesNote: string;
  packages: Pkg[];
  priceFootnote: string;
  goodFit: string[];
  notFit: string[];
  deliverables?: string[];
}

const zhFootnote =
  '以上為服務起點價格，實際依專案範圍、合作單位與交付內容報價，正式合作以書面報價與合約為準。';
const enFootnote =
  'Prices shown are starting points. Actual quotes depend on scope, partners and deliverables; engagements are confirmed by written quote and contract.';
const jaFootnote =
  '掲載価格はサービスの開始価格です。実際の金額はプロジェクトの範囲、連携先、提供内容に応じてお見積りし、正式なご契約は書面の見積書および契約書をもって確定します。';

export const services: Record<
  ServiceSlug,
  { path: string; icon: string; zh: ServiceContent; en: ServiceContent; ja: ServiceContent }
> = {
  city: {
    path: '/services/city',
    icon: 'city',
    zh: {
      navLabel: '城市與政府',
      eyebrow: '城市與政府 · 數位遊牧城市策略',
      title: '城市與政府：數位遊牧城市策略顧問',
      lead: '協助地方政府把數位遊牧、國際人才與在地消費，規劃成可執行、可驗收的政策、活動、場域與 KPI。',
      metaDescription:
        '遊遊為地方政府的觀光、產發、青年與地方創生單位提供數位遊牧城市策略顧問，把單次活動延伸為人才、觀光與城市國際品牌的長期計畫。服務含成熟度診斷、策略規劃、據點啟動與年度顧問。',
      highlights: ['花蓮、臺東等縣市政府實績', '場域盤點與國際社群連結', '可驗收 KPI 與成果報告'],
      painTitle: '城市與地方單位常見的處境',
      painPoints: [
        '想吸引國際人才，但不知道如何從一次活動變成長期策略。',
        '有地方創生、觀光、青年或國際交流預算，但內部沒有數位遊牧的專業人力。',
        '缺乏場域盤點、商家串聯、國際社群接觸與 KPI 報告能力。',
        '活動辦完沒有留存資料、商業轉換與社群延續。',
      ],
      solutionTitle: '把單次活動延伸成城市策略',
      solutionLead:
        '遊遊依據過去的政府專案經驗、TDNA 的社群網絡與國際城市連結，把城市的數位遊牧議題拆成可執行的策略、活動、招商與營運模型。',
      solutionPoints: [
        '場域與資源盤點：把可用空間、商家、社群與國際接觸點整理成遊牧資源地圖。',
        '利害關係人訪談：對齊觀光、產發、青年、地方創生窗口的目標與 KPI。',
        '策略與招商架構：3–6 個月策略、活動設計、社群營運與預算建議。',
        '據點啟動與年度 PMO：例會、商家串聯、國際社群連結、成果追蹤與報告。',
        '補助與標案整合：從題目設計開始，寫成能執行、能驗收、能延伸的計畫。',
      ],
      pitch: '我們協助地方政府把數位遊牧從單次活動，做成涵蓋人才、觀光、地方商業與國際品牌的城市策略。',
      packagesTitle: '城市顧問服務階梯',
      packagesNote: '從一次性診斷到年度顧問，依城市成熟度與預算分階段合作。',
      packages: [
        {
          name: '城市遊牧成熟度診斷',
          price: 'NTD 150,000 起（複雜縣市 200,000）',
          desc: '場域盤點、利害關係人訪談、遊牧資源地圖、問題診斷與 90 天行動建議。',
        },
        {
          name: '數位遊牧城市策略規劃',
          price: 'NTD 500,000 起（3–6 個月）',
          desc: '策略、活動設計、招商架構、社群營運模型、KPI 與預算建議。',
        },
        {
          name: '城市年度顧問',
          price: 'NTD 2,000,000 起／年',
          desc: '年度策略、季度盤點、專案 PMO、活動與場域顧問與成果報告。',
        },
      ],
      priceFootnote:
        zhFootnote +
        ' 另有「遊牧據點啟動顧問（NTD 150,000／月）」與「城市國際交流設計（NTD 300,000 起）」可搭配。',
      goodFit: [
        '地方政府觀光處、產發處、青年局、研考處或地方創生窗口。',
        '觀光圈、商圈、地方創生團隊與縣市合作平台。',
        '已有預算與決策者，想把國際人才招募納入長期策略的單位。',
      ],
      notFit: [
        '只想辦一次性活動、沒有後續策略與預算。',
        '把顧問當純活動執行或補助代寫的單位。',
        '需要交通住宿代收代付的旅遊行程（屬旅行業範疇，另與合格旅行業合作）。',
      ],
      deliverables: [
        '遊牧資源地圖與場域盤點報告',
        '利害關係人地圖與訪談摘要',
        '城市策略簡報與招商架構',
        '90 天行動路線圖與 KPI 儀表板',
        '季度盤點與期末成果報告',
        '可公開的一頁式城市案例',
      ],
    },
    en: {
      navLabel: 'Cities & Government',
      eyebrow: 'Cities & Government · digital-nomad city strategy',
      title: 'Cities & Government: digital-nomad city strategy',
      lead: 'We help local governments turn digital nomadism, international talent and local spending into policy, programmes, venues and KPIs that can be executed and audited.',
      metaDescription:
        'Twouring provides digital-nomad city strategy advisory for tourism, economic-development, youth and regional-revitalisation offices. We help turn a one-off nomad event into a long-term plan for talent, tourism and the city’s international profile. Services include readiness diagnostics, strategy planning, hub launch and annual advisory.',
      highlights: ['Track record with Hualien & Taitung', 'Venue mapping & global community links', 'Measurable KPIs & reporting'],
      painTitle: 'Where cities and local units usually get stuck',
      painPoints: [
        'You want to attract international talent but cannot move from a single event to a long-term strategy.',
        'You have tourism, youth or regional-revitalisation budget but lack digital-nomad expertise.',
        'You lack venue mapping, business linkage, global community reach and KPI reporting.',
        'After the event there is no retained data, business conversion or community continuity.',
      ],
      solutionTitle: 'From a single event to a city strategy',
      solutionLead:
        'Drawing on our government project work, the TDNA community network and international city links, we break the digital-nomad agenda into strategy, programmes, investment attraction and operating models that can be executed.',
      solutionPoints: [
        'Venue & resource mapping: spaces, businesses, community and global touchpoints into one nomad resource map.',
        'Stakeholder interviews: aligning tourism, economic-development, youth and revitalisation goals and KPIs.',
        'Strategy & investment framework: a 3–6 month strategy, programme design, community model and budget.',
        'Hub launch & annual PMO: cadence, business linkage, global community links, tracking and reporting.',
        'Grants & tenders: we start from topic design and write plans that can be executed, audited and extended.',
      ],
      pitch: 'We help local governments take digital nomadism beyond a one-off event, into a city strategy covering talent, tourism, local business and international profile.',
      packagesTitle: 'City advisory ladder',
      packagesNote: 'From a one-off diagnostic to an annual retainer, staged by city maturity and budget.',
      packages: [
        {
          name: 'City nomad-readiness diagnostic',
          price: 'from NTD 150,000 (200,000 for complex counties)',
          desc: 'Venue mapping, stakeholder interviews, nomad resource map, diagnosis and a 90-day action plan.',
        },
        {
          name: 'Digital-nomad city strategy',
          price: 'from NTD 500,000 (3–6 months)',
          desc: 'Strategy, programme design, investment framework, community model, KPIs and budget.',
        },
        {
          name: 'Annual city advisory',
          price: 'from NTD 2,000,000/yr',
          desc: 'Annual strategy, quarterly reviews, project PMO, programme & venue advisory and reporting.',
        },
      ],
      priceFootnote:
        enFootnote +
        ' A monthly hub-launch advisory (NTD 150,000/mo) and city exchange design (from NTD 300,000) can be added.',
      goodFit: [
        'Tourism, economic-development, youth or regional-revitalisation offices.',
        'Tourism circles, business districts and regional-revitalisation teams.',
        'Units with budget and a decision-maker who want talent as a long-term strategy.',
      ],
      notFit: [
        'You only want a one-off event with no follow-up strategy or budget.',
        'You see advisory as pure event execution or grant ghost-writing.',
        'You need travel and accommodation booking (handled with a licensed travel agency).',
      ],
      deliverables: [
        'Nomad resource map & venue audit',
        'Stakeholder map & interview summary',
        'City strategy deck & investment framework',
        '90-day roadmap & KPI dashboard',
        'Quarterly review & final results report',
        'A publishable one-page city case',
      ],
    },
    ja: {
      navLabel: '都市・自治体',
      eyebrow: '都市・自治体 · デジタルノマド都市戦略',
      title: '都市・自治体向け：デジタルノマド都市戦略コンサルティング',
      lead: '地方自治体が、デジタルノマド、国際人材、地域消費を、実行と検収が可能な政策・事業・拠点・KPIとして設計できるよう支援します。',
      metaDescription: 'Twouringは、自治体の観光・産業振興・青年・地方創生部門向けにデジタルノマド都市戦略コンサルティングを提供し、デジタルノマドを単発イベントで終わらせず、都市の人材・観光・国際ブランドに関する長期計画につなげます。成熟度診断、戦略策定、拠点立ち上げ、年間顧問に対応します。',
      highlights: [
        '花蓮県・台東県など自治体での実績',
        '拠点調査と海外コミュニティとの連携',
        '検証可能なKPIと成果報告',
      ],
      painTitle: '都市・地域の現場でよくある課題',
      painPoints: [
        '国際人材を呼び込みたいが、単発イベントを長期戦略につなげる方法がわからない。',
        '地方創生・観光・青年・国際交流の予算はあるが、デジタルノマドの専門知見がない。',
        '拠点の棚卸し、事業者連携、海外コミュニティへのリーチ、KPI報告の体制がない。',
        'イベント終了後にデータも、商業的な成果も、コミュニティのつながりも残らない。',
      ],
      solutionTitle: '単発のイベントを、都市戦略へ',
      solutionLead: '自治体プロジェクトの実績、TDNAのコミュニティネットワーク、海外都市とのネットワークをもとに、デジタルノマドというテーマを実行可能な戦略・事業・誘致・運営モデルに整理します。',
      solutionPoints: [
        '拠点・資源の棚卸し：利用可能な空間、事業者、コミュニティ、海外との接点を「ノマド資源マップ」に整理します。',
        '関係者ヒアリング：観光・産業振興・青年・地方創生の各担当部署の目標とKPIをすり合わせます。',
        '戦略・誘致フレームワーク：3〜6か月の戦略、事業設計、コミュニティ運営、予算案を策定します。',
        '拠点立ち上げと年間PMO：定例会議、事業者連携、海外コミュニティとの連携、進捗管理と報告を担います。',
        '補助金・公募案件との統合：テーマ設計から始め、実行・検収・発展が可能な計画にまとめます。',
      ],
      pitch: '地方自治体が、デジタルノマドを単発イベントで終わらせず、人材・観光・地域経済・国際ブランドを含む都市戦略にできるよう支援します。',
      packagesTitle: '都市コンサルティングのステップ',
      packagesNote: '単発の診断から年間顧問まで、都市の成熟度と予算に応じて段階的にご提案します。',
      packages: [
        {
          name: '都市ノマド成熟度診断',
          price: 'NTD 150,000〜（複雑な県・市は200,000）',
          desc: '拠点調査、関係者ヒアリング、ノマド資源マップ、課題診断、90日間のアクションプラン。',
        },
        {
          name: 'デジタルノマド都市戦略策定',
          price: 'NTD 500,000〜（3〜6か月）',
          desc: '戦略、事業設計、誘致フレームワーク、コミュニティ運営モデル、KPI、予算案。',
        },
        {
          name: '都市年間顧問',
          price: 'NTD 2,000,000〜／年',
          desc: '年間戦略、四半期レビュー、プロジェクトPMO、事業・拠点に関する助言、成果報告。',
        },
      ],
      priceFootnote: jaFootnote + ' 「ノマド拠点立ち上げ顧問（NTD 150,000／月）」「都市間国際交流設計（NTD 300,000〜）」も組み合わせ可能です。',
      goodFit: [
        '地方自治体の観光・産業振興・青年・企画評価部門、または地方創生の担当窓口。',
        '観光圏、商店街、地方創生チーム、自治体連携プラットフォーム。',
        '予算と意思決定者がそろい、国際人材の誘致を長期戦略にしたい組織。',
      ],
      notFit: [
        '単発イベントのみを希望し、その後の戦略や予算がない場合。',
        'コンサルティングを単なるイベント運営や補助金申請書の代筆と捉えている場合。',
        '交通・宿泊の手配や代金収受を伴う旅行行程が必要な場合（旅行業の領域のため、登録旅行業者と別途連携します）。',
      ],
      deliverables: [
        'ノマド資源マップと拠点調査報告書',
        '関係者マップとヒアリング要旨',
        '都市戦略資料と誘致フレームワーク',
        '90日ロードマップとKPIダッシュボード',
        '四半期レビューと最終成果報告書',
        '公開可能な1ページの都市事例',
      ],
    },
  },

  aiConsulting: {
    path: '/services/ai-consulting',
    icon: 'ai',
    zh: {
      navLabel: '企業 AI 導入',
      eyebrow: '企業 · AI 導入顧問',
      title: '企業 AI 導入顧問',
      lead: '先診斷營運與流程，再規劃 AI 導入路線圖。從機會盤點、90 天行動計畫到 KPI 與 PMO，把 AI 導入當成有里程碑、可驗收的專案來管理。',
      metaDescription:
        '遊遊提供企業 AI 導入顧問，協助中小企業與服務業盤點流程、制定 90 天導入路線圖與 KPI。服務含 AI 營運健檢、工作流導入顧問、專案導入 PM 與 PMO，技術交付由適才科技承接。',
      highlights: ['先診斷，再談系統', '90 天路線圖與 KPI', '技術交付由適才／Adata 承接'],
      painTitle: '想用 AI，卻不知從何開始',
      painPoints: [
        '不知道哪些流程值得用 AI、從哪裡開始。',
        '怕買錯工具、導入後員工不用、變成另一個沒人開的系統。',
        '缺乏把 AI 專案拆成可執行里程碑、KPI 與 PMO 的顧問。',
        '產品、流程、技術與 PM 之間，沒有人負責溝通協調。',
      ],
      solutionTitle: '先診斷，再規劃可驗收的 AI 導入路線',
      solutionLead:
        '遊遊負責診斷、流程設計、90 天路線圖、KPI 與專案 PMO；技術交付由適才科技或 Adata 等外部團隊承接。先用兩到三週盤點，找出最值得導入 AI 的優先項目。',
      solutionPoints: [
        'AI 營運健檢：訪談、流程盤點、工具盤點，產出導入機會清單與優先順序。',
        '90 天導入路線圖：里程碑、KPI、資源配置與風險控管。',
        '工作流導入顧問：流程設計、工具選型、內部窗口對接與成效追蹤。',
        '專案導入 PM：需求訪談、規格整理、供應商管理、驗收文件與教育訓練。',
        'PMO 與補助整合：把 AI 專案寫成可核准、可驗收的計畫，並做執行控管。',
      ],
      pitch: '先做診斷，再決定要買什麼系統；先訂出可驗收的 90 天導入路線圖與 KPI，再開始導入。',
      packagesTitle: '企業 AI 導入顧問服務階梯',
      packagesNote: '從健檢到導入 PM，依公司規模與流程複雜度分階段合作。',
      packages: [
        {
          name: 'AI 營運健檢',
          price: 'NTD 120,000 起',
          desc: '訪談、流程盤點、工具盤點、AI 導入機會清單、風險與優先順序。',
        },
        {
          name: 'AI 工作流導入顧問',
          price: 'NTD 150,000／月 起',
          desc: '流程設計、工具導入、內部訓練、KPI 追蹤與 PMO 例會。',
        },
        {
          name: 'AI 專案導入 PM',
          price: 'NTD 500,000 起／案',
          desc: '需求訪談、規格整理、供應商管理、驗收文件、教育訓練與 90 天路線圖。',
        },
      ],
      priceFootnote:
        zhFootnote + ' 另有「補助型 AI 導入包（NTD 250,000 ＋ PMO 80,000／月）」可搭配；技術開發由適才科技或 Adata 另行報價。',
      goodFit: [
        '中小企業、服務業、連鎖品牌、旅宿、餐飲與地方品牌。',
        '已有 AI 想法或已買工具，但缺乏流程改造與專案管理能力。',
        '需要 90 天路線圖、KPI 與 PMO 來管理導入過程的公司。',
      ],
      notFit: [
        '想要一套「萬能 AI 系統」卻不願盤點流程。',
        '只想把 AI 當行銷口號、不在意導入與 ROI。',
        '沒有任何內部窗口可配合訪談與導入。',
      ],
      deliverables: [
        'AI 導入機會清單與優先順序',
        '流程與工具盤點報告',
        '90 天導入路線圖與 KPI 儀表板',
        '工具選型與供應商管理文件',
        'PMO 例會紀錄與里程碑追蹤',
        '驗收文件與成效檢討',
      ],
    },
    en: {
      navLabel: 'Enterprise AI Adoption',
      eyebrow: 'Enterprise · AI adoption advisory',
      title: 'Enterprise AI adoption advisory',
      lead: 'We diagnose operations and processes first, then plan the AI adoption roadmap. From opportunity mapping and a 90-day action plan to KPIs and PMO, AI adoption is run as a project with milestones and sign-off.',
      metaDescription:
        'Twouring provides enterprise AI adoption advisory for SMEs and service businesses: process audit, 90-day adoption roadmap and KPIs. Services include AI operations health-check, workflow adoption advisory and project PM with PMO; technical delivery via Adata.',
      highlights: ['Diagnosis before any system purchase', '90-day roadmap & KPIs', 'Tech delivery via Adata'],
      painTitle: 'You want AI but don’t know where to start',
      painPoints: [
        'You don’t know which processes are worth automating, or where to begin.',
        'You fear buying the wrong tool and ending up with another system nobody opens.',
        'You lack an advisor who can break an AI project into milestones, KPIs and PMO.',
        'Nobody coordinates between product, process, technology and project management.',
      ],
      solutionTitle: 'Diagnose first, then plan an auditable AI adoption route',
      solutionLead:
        'We own the diagnosis, process design, 90-day roadmap, KPIs and project PMO; technical delivery is handled by Adata or an external team. A two-to-three week mapping finds the highest-priority AI adoption opportunities.',
      solutionPoints: [
        'AI operations health-check: interviews, process and tooling audit, an opportunity list with priorities.',
        '90-day adoption roadmap: milestones, KPIs, resource allocation and risk control.',
        'Workflow adoption advisory: process design, tool selection, internal liaison and impact tracking.',
        'Project PM: requirements, specs, vendor management, sign-off documents and training.',
        'PMO & grant integration: shaping the AI project into an approvable, auditable plan with delivery control.',
      ],
      pitch: 'Start with a diagnosis, then decide which system to buy. Set an auditable 90-day roadmap and KPIs before rollout begins.',
      packagesTitle: 'Enterprise AI adoption ladder',
      packagesNote: 'From a health-check to a delivery PM, staged by company size and process complexity.',
      packages: [
        {
          name: 'AI operations health-check',
          price: 'from NTD 120,000',
          desc: 'Interviews, process and tooling audit, AI opportunity list, risks and priorities.',
        },
        {
          name: 'AI workflow adoption advisory',
          price: 'from NTD 150,000/mo',
          desc: 'Process design, tool rollout, internal training, KPI tracking and PMO cadence.',
        },
        {
          name: 'AI project delivery PM',
          price: 'from NTD 500,000/project',
          desc: 'Requirements, specs, vendor management, sign-off documents, training and a 90-day roadmap.',
        },
      ],
      priceFootnote:
        enFootnote +
        ' A grant-backed AI package (NTD 250,000 + PMO 80,000/mo) can be added; technical development is quoted separately by Adata.',
      goodFit: [
        'SMEs, service businesses, chains, hospitality, F&B and local brands.',
        'Companies with an AI idea or tools already bought but no process-change or project-management capacity.',
        'Teams that need a 90-day roadmap, KPIs and PMO to manage adoption.',
      ],
      notFit: [
        'You want one all-powerful AI system but won’t map your processes.',
        'You treat AI as a marketing slogan and don’t care about adoption or ROI.',
        'There is no internal contact to support interviews and rollout.',
      ],
      deliverables: [
        'AI opportunity list with priorities',
        'Process & tooling audit report',
        '90-day adoption roadmap & KPI dashboard',
        'Tool selection & vendor management documents',
        'PMO meeting records & milestone tracking',
        'Sign-off documents & impact review',
      ],
    },
    ja: {
      navLabel: '企業のAI導入',
      eyebrow: '企業向け · AI導入コンサルティング',
      title: '企業向けAI導入コンサルティング',
      lead: 'まず業務とプロセスを診断し、そのうえでAI導入ロードマップを策定します。導入機会の洗い出しから90日間のアクションプラン、KPI、PMOまで、AI導入をマイルストーンと検収基準のあるプロジェクトとして管理します。',
      metaDescription: 'Twouringは中小企業・サービス業向けにAI導入コンサルティングを提供し、業務プロセスの棚卸し、90日間の導入ロードマップ、KPI策定を支援します。AI業務診断、ワークフロー導入顧問、導入PM・PMOに対応し、技術開発は適才科技（Adata）が担当します。',
      highlights: [
        'システム購入の前に診断',
        '90日ロードマップとKPI',
        '技術開発は適才科技（Adata）が担当',
      ],
      painTitle: 'AIを活用したいが、何から始めればよいかわからない',
      painPoints: [
        'どの業務にAIを使うべきか、どこから着手すべきかわからない。',
        'ツール選定を誤り、導入しても社員が使わない「誰も開かないシステム」になるのが不安。',
        'AIプロジェクトを実行可能なマイルストーン、KPI、PMOに分解できるアドバイザーがいない。',
        'プロダクト、業務、技術、PMの間を調整する担当者がいない。',
      ],
      solutionTitle: 'まず診断、そして検収可能なAI導入計画へ',
      solutionLead: 'Twouringは診断、業務設計、90日ロードマップ、KPI、プロジェクトPMOを担い、技術開発は適才科技（Adata）などの外部チームが担当します。まず2〜3週間で現状を棚卸しし、AI導入の優先度が最も高い領域を特定します。',
      solutionPoints: [
        'AI業務診断：ヒアリング、業務・ツールの棚卸しを行い、導入機会の一覧と優先順位をまとめます。',
        '90日導入ロードマップ：マイルストーン、KPI、リソース配分、リスク管理。',
        'ワークフロー導入顧問：業務設計、ツール選定、社内窓口との連携、効果測定。',
        '導入プロジェクトPM：要件ヒアリング、仕様整理、ベンダー管理、検収書類、社内研修。',
        'PMOと補助金の統合：AIプロジェクトを承認・検収が可能な計画にまとめ、実行を管理します。',
      ],
      pitch: 'まず診断を行い、そのうえで導入するシステムを決めます。導入前に、検収可能な90日ロードマップとKPIを定めます。',
      packagesTitle: '企業向けAI導入コンサルティングのステップ',
      packagesNote: '診断から導入PMまで、企業規模と業務の複雑さに応じて段階的にご提案します。',
      packages: [
        {
          name: 'AI業務診断',
          price: 'NTD 120,000〜',
          desc: 'ヒアリング、業務・ツールの棚卸し、AI導入機会の一覧、リスクと優先順位。',
        },
        {
          name: 'AIワークフロー導入顧問',
          price: 'NTD 150,000〜／月',
          desc: '業務設計、ツール導入、社内研修、KPI追跡、PMO定例会議。',
        },
        {
          name: 'AI導入プロジェクトPM',
          price: 'NTD 500,000〜／案件',
          desc: '要件ヒアリング、仕様整理、ベンダー管理、検収書類、社内研修、90日ロードマップ。',
        },
      ],
      priceFootnote: jaFootnote + ' 「補助金活用型AI導入パッケージ（NTD 250,000＋PMO 80,000／月）」も組み合わせ可能です。技術開発は適才科技（Adata）が別途お見積りします。',
      goodFit: [
        '中小企業、サービス業、チェーンブランド、宿泊、飲食、地域ブランド。',
        'AI活用の構想や導入済みのツールはあるが、業務改革やプロジェクト管理の体制がない企業。',
        '導入の管理に90日ロードマップ、KPI、PMOを必要とする企業。',
      ],
      notFit: [
        '業務の棚卸しをせずに「万能のAIシステム」を求める場合。',
        'AIをマーケティング上の看板としてのみ扱い、導入やROIを重視しない場合。',
        'ヒアリングや導入に対応できる社内窓口がいない場合。',
      ],
      deliverables: [
        'AI導入機会の一覧と優先順位',
        '業務・ツール棚卸し報告書',
        '90日導入ロードマップとKPIダッシュボード',
        'ツール選定・ベンダー管理資料',
        'PMO定例会議の議事録とマイルストーン管理',
        '検収書類と効果検証',
      ],
    },
  },

  aiTraining: {
    path: '/services/ai-training',
    icon: 'bulb',
    zh: {
      navLabel: 'AI 企業內訓',
      eyebrow: '企業 · AI 教育訓練',
      title: 'AI 企業內訓與高階主管工作坊',
      lead: '用實際案例與現場演練，協助高階主管與團隊建立 AI 導入共識與判斷力，並培養公司內部的推動人選。',
      metaDescription:
        '遊遊提供 AI 企業內訓與高階主管工作坊，協助企業建立 AI 導入共識與內部推動能力。含高階主管 AI 工作坊、部門團隊訓練包，可依產業與職能客製。',
      highlights: ['高階主管工作坊', '部門團隊訓練包', '以案例演練為主'],
      painTitle: '主管聽過 AI，團隊卻推不動',
      painPoints: [
        '高階主管對 AI 有興趣，但缺乏共同語言與導入判斷力。',
        '內訓變成純簡報，結束後沒有人知道下一步該做什麼。',
        '各部門對 AI 期待不同，缺乏跨部門共識與推動窗口。',
        '想培養內部種子，但不知道該教什麼、怎麼教。',
      ],
      solutionTitle: '先用工作坊對齊方向，再訓練部門執行',
      solutionLead:
        '遊遊用你公司的實際流程與案例當教材，設計高階主管工作坊與部門訓練。決策者看到 ROI 與風險評估，執行者課後拿到具體的下一步。',
      solutionPoints: [
        '高階主管 AI 工作坊：以案例與演練，建立導入路線圖與內部共識。',
        '部門團隊訓練：依職能設計 AI 應用場景、工具操作與流程改造練習。',
        '種子教練培訓：培養內部推動窗口，支援導入後的持續推廣。',
        '客製化教材：依產業、規模與現有工具調整案例與演練內容。',
        '課後行動計畫：產出 30 天內部推動清單與分工建議。',
      ],
      pitch: 'AI 導入會改變主管與團隊的做事方式，不能只交給 IT。我們先幫主管建立判斷依據，再訓練團隊執行。',
      packagesTitle: 'AI 企業內訓服務方案',
      packagesNote: '可依單場工作坊或年度訓練包合作，依人數、產業與客製程度報價。',
      packages: [
        {
          name: '高階主管 AI 工作坊',
          price: 'NTD 100,000 起／場',
          desc: '半日或一日工作坊，案例演練、導入路線圖與內部共識建立。',
        },
        {
          name: '部門團隊 AI 訓練包',
          price: 'NTD 80,000 起／場',
          desc: '依職能設計的團隊訓練，含 AI 應用場景、工具操作與流程改造練習。',
        },
        {
          name: '年度 AI 內訓顧問',
          price: 'NTD 300,000 起／年',
          desc: '季度工作坊、種子教練培訓、教材更新與課後行動追蹤。',
        },
      ],
      priceFootnote: zhFootnote + ' 可搭配 AI 營運健檢或工作流導入顧問，依診斷、共識、導入的順序進行。',
      goodFit: [
        '想先建立內部共識、再啟動 AI 導入的企業。',
        '高階主管需要 AI 判斷力與投資決策框架的組織。',
        '各部門需要共同語言與種子推動窗口的公司。',
      ],
      notFit: [
        '只想找講師做一次性曝光、不在意課後推動。',
        '期待內訓完就自動導入成功、不願配合後續行動計畫。',
        '把內訓當工具操作手冊、不需要流程與策略討論。',
      ],
      deliverables: [
        '工作坊簡報與案例教材',
        '導入路線圖與共識摘要',
        '部門 AI 應用場景清單',
        '種子教練培訓紀錄',
        '30 天內部推動行動計畫',
        '課後問卷與檢討報告',
      ],
    },
    en: {
      navLabel: 'AI Corporate Training',
      eyebrow: 'Enterprise · AI training',
      title: 'AI corporate training & executive workshops',
      lead: 'Through real cases and hands-on exercises, we help executives and teams agree on AI adoption, judge where it fits, and develop people inside the company who can keep it moving.',
      metaDescription:
        'Twouring offers AI corporate training and executive workshops to build adoption alignment and internal drive. Includes executive AI workshops and team training packages, customised by industry and function.',
      highlights: ['Executive workshops', 'Team training packages', 'Built around case exercises'],
      painTitle: 'Executives have heard about AI, but the team still can’t move',
      painPoints: [
        'Leadership is interested in AI but lacks a shared language and adoption judgement.',
        'Training ends with slides, and nobody knows what to do next.',
        'Departments have different AI expectations with no cross-team alignment or champions.',
        'You want internal seed trainers but don’t know what to teach or how.',
      ],
      solutionTitle: 'Align leadership in workshops, then train departments to execute',
      solutionLead:
        'Using your real processes and cases, we design executive workshops and team training. Decision-makers see ROI and risk; practitioners leave with concrete next steps.',
      solutionPoints: [
        'Executive AI workshop: cases and exercises to build a roadmap and internal alignment.',
        'Team training: AI use cases, tool practice and process-redesign exercises by function.',
        'Seed-coach training: building internal champions to sustain adoption after the session.',
        'Custom materials: cases and exercises tailored to your industry, scale and existing tools.',
        'Post-session action plan: a 30-day internal rollout checklist and role split.',
      ],
      pitch: 'AI adoption changes how managers and teams work, so it can’t be left to IT. We help executives build a basis for decisions first, then train teams to execute.',
      packagesTitle: 'AI corporate training programmes',
      packagesNote: 'Single workshops or annual training packages, priced by headcount, industry and level of customisation.',
      packages: [
        {
          name: 'Executive AI workshop',
          price: 'from NTD 100,000/session',
          desc: 'Half- or full-day workshop with case exercises, adoption roadmap and alignment building.',
        },
        {
          name: 'Team AI training package',
          price: 'from NTD 80,000/session',
          desc: 'Function-specific training with AI use cases, tool practice and process-redesign exercises.',
        },
        {
          name: 'Annual AI training advisory',
          price: 'from NTD 300,000/yr',
          desc: 'Quarterly workshops, seed-coach training, material updates and post-session action tracking.',
        },
      ],
      priceFootnote:
        enFootnote +
        ' Can be paired with an AI operations health-check or workflow adoption advisory, in the order diagnose, align, adopt.',
      goodFit: [
        'Companies that want internal alignment before launching AI adoption.',
        'Organisations where executives need AI judgement and investment frameworks.',
        'Teams that need a shared language and seed champions across departments.',
      ],
      notFit: [
        'You only want a one-off speaker slot with no follow-up rollout.',
        'You expect training alone to deliver adoption with no post-session action plan.',
        'You want tool manuals only, with no process or strategy discussion.',
      ],
      deliverables: [
        'Workshop deck & case materials',
        'Adoption roadmap & alignment summary',
        'Department AI use-case list',
        'Seed-coach training records',
        '30-day internal rollout action plan',
        'Post-session survey & review report',
      ],
    },
    ja: {
      navLabel: 'AI企業研修',
      eyebrow: '企業向け · AI研修',
      title: 'AI企業研修・経営層向けワークショップ',
      lead: '実際の事例と実践演習を通じて、経営層とチームがAI導入に向けた合意、判断力、社内推進力を身につけられるよう支援します。社内で推進を担う人材も育てます。',
      metaDescription: 'Twouringは、AI企業研修と経営層向けワークショップを通じて、AI導入に向けた社内合意と推進力づくりを支援します。経営層向けAIワークショップ、部門別チーム研修パッケージを、業界・職種に合わせてカスタマイズします。',
      highlights: [
        '経営層向けワークショップ',
        '部門別チーム研修パッケージ',
        '事例演習が中心',
      ],
      painTitle: '経営層はAIを知っているが、現場が動かない',
      painPoints: [
        '経営層はAIに関心があるが、共通言語と導入の判断軸がない。',
        '研修がスライドの説明だけで終わり、次に何をすべきか誰もわからない。',
        '部門ごとにAIへの期待が異なり、部門横断の合意も推進役もいない。',
        '社内に推進役を育てたいが、何をどう教えればよいかわからない。',
      ],
      solutionTitle: 'ワークショップで合意をつくり、研修で推進力を育てる',
      solutionLead: '貴社の実際の業務と事例を素材に、経営層向けワークショップと部門別研修を設計します。意思決定者にはROIとリスクを、実務担当者には実行できる次の一手を持ち帰っていただきます。',
      solutionPoints: [
        '経営層向けAIワークショップ：事例と演習を通じて、導入ロードマップと社内合意をつくります。',
        '部門別チーム研修：職種ごとにAI活用シーン、ツール操作、業務改善の演習を設計します。',
        '社内コーチ育成：社内の推進役を育て、導入後の継続的な展開を支えます。',
        'カスタマイズ教材：業界、規模、既存ツールに合わせて事例と演習内容を調整します。',
        '研修後アクションプラン：30日間の社内推進チェックリストと役割分担案を作成します。',
      ],
      pitch: 'AI導入は管理職とチームの働き方を変えるため、IT部門だけには任せられません。まず経営層の判断基準をつくり、次にチームが実行できるよう研修します。',
      packagesTitle: 'AI企業研修プログラム',
      packagesNote: '単発のワークショップから年間研修パッケージまで対応し、人数、業界、カスタマイズの度合いに応じてお見積りします。',
      packages: [
        {
          name: '経営層向けAIワークショップ',
          price: 'NTD 100,000〜／回',
          desc: '半日または1日のワークショップ。事例演習、導入ロードマップ、社内合意の形成。',
        },
        {
          name: '部門別チームAI研修パッケージ',
          price: 'NTD 80,000〜／回',
          desc: '職種別に設計するチーム研修。AI活用シーン、ツール操作、業務改善の演習を含みます。',
        },
        {
          name: '年間AI研修顧問',
          price: 'NTD 300,000〜／年',
          desc: '四半期ごとのワークショップ、社内コーチ育成、教材の更新、研修後のアクション追跡。',
        },
      ],
      priceFootnote: jaFootnote + ' AI業務診断やワークフロー導入顧問と組み合わせることで、診断、合意、導入の順に進められます。',
      goodFit: [
        'AI導入を始める前に、社内の合意を固めたい企業。',
        '経営層にAIの判断力と投資判断のフレームワークが必要な組織。',
        '部門をまたぐ共通言語と推進役を必要としている企業。',
      ],
      notFit: [
        '単発の講演による露出だけを求め、研修後の推進に関心がない場合。',
        '研修だけで導入が成功すると考え、その後のアクションプランに取り組まない場合。',
        'ツールの操作マニュアルのみを求め、業務や戦略の議論を必要としない場合。',
      ],
      deliverables: [
        'ワークショップ資料と事例教材',
        '導入ロードマップと合意事項の要旨',
        '部門別AI活用シーン一覧',
        '社内コーチ育成の記録',
        '30日間の社内推進アクションプラン',
        '研修後アンケートと振り返り報告書',
      ],
    },
  },

  aiWorkflow: {
    path: '/services/ai-workflow-automation',
    icon: 'route',
    zh: {
      navLabel: 'AI 流程自動化',
      eyebrow: '企業 · AI 工作流自動化',
      title: 'AI 流程自動化顧問',
      lead: '找出公司最值得自動化的三個工作流並估算 ROI，接著做工具導入、內部訓練與成效驗收。只挑能省時、省錢或帶來收入的流程。',
      metaDescription:
        '遊遊提供 AI 流程自動化顧問，協助企業找出最值得自動化的三個工作流、估算 ROI 並完成導入。含流程盤點、自動化設計、工具導入與成效追蹤。',
      highlights: ['找出 3 個最值得自動化的流程', 'ROI 估算與驗收', '工具導入到成效追蹤'],
      painTitle: '流程很多，不知道哪個值得自動化',
      painPoints: [
        '到處都是重複性工作，但不知道從哪個流程開始自動化。',
        '自動化做完沒人維護，或員工繞過系統繼續用舊方法。',
        '無法量化自動化帶來的時間節省或成本降低。',
        '買了自動化工具，卻沒有重新設計流程與驗收標準。',
      ],
      solutionTitle: '先找三個最值得自動化的流程，再算 ROI',
      solutionLead:
        '遊遊用兩到三週盤點，從時間成本、錯誤率與收入影響三個維度，篩出最值得自動化的三個工作流，再設計導入方案與 ROI 驗收指標。',
      solutionPoints: [
        '流程盤點與優先排序：訪談、時間成本分析、找出三個高 ROI 工作流。',
        '自動化方案設計：流程重設、工具選型、人機分工與例外處理。',
        '工具導入與測試：試運行、員工訓練、問題修正與上線。',
        'ROI 追蹤：建立前後對照指標，定期檢討節省工時與錯誤率。',
        '擴展規劃：第一輪三個流程穩定後，規劃下一批自動化候選。',
      ],
      pitch: '第一輪只做 ROI 最高的三個流程：先估算，再導入，最後驗收。',
      packagesTitle: 'AI 流程自動化服務方案',
      packagesNote: '從流程盤點到三個工作流導入，依流程複雜度與工具需求分階段合作。',
      packages: [
        {
          name: '工作流自動化盤點',
          price: 'NTD 80,000 起',
          desc: '流程訪談、時間成本分析、三個高 ROI 工作流建議與 ROI 估算。',
        },
        {
          name: '三工作流自動化導入',
          price: 'NTD 200,000 起',
          desc: '流程重設、工具導入、員工訓練、試運行與 ROI 驗收指標建立。',
        },
        {
          name: '自動化持續顧問',
          price: 'NTD 120,000／月 起',
          desc: '每月例會、成效追蹤、流程優化、下一批候選評估與維護支援。',
        },
      ],
      priceFootnote:
        zhFootnote + ' 可搭配 AI 營運健檢（NTD 120,000 起）作為前置診斷；技術開發由適才科技或 Adata 另行報價。',
      goodFit: [
        '有明確重複性流程、想先從三個高 ROI 工作流開始的企業。',
        '已買自動化工具但缺乏流程重設與驗收能力的公司。',
        '需要 ROI 指標並在導入後持續優化的團隊。',
      ],
      notFit: [
        '想一次自動化所有流程、不願分階段驗收。',
        '不願配合流程訪談與員工訓練。',
        '只想要工具、不需要流程重設與 ROI 驗收。',
      ],
      deliverables: [
        '三個高 ROI 工作流清單與 ROI 估算',
        '流程重設圖與人機分工說明',
        '工具導入與測試報告',
        '員工操作手冊與訓練紀錄',
        'ROI 前後對照儀表板',
        '下一批自動化候選評估',
      ],
    },
    en: {
      navLabel: 'AI Workflow Automation',
      eyebrow: 'Enterprise · AI workflow automation',
      title: 'AI workflow automation advisory',
      lead: 'We find the three workflows most worth automating and estimate ROI, then handle tool rollout, internal training and impact sign-off. We only pick processes that save time, cut cost or bring in revenue.',
      metaDescription:
        'Twouring provides AI workflow automation advisory: find the three workflows most worth automating, estimate ROI and deliver rollout. Includes process audit, automation design, tool adoption and impact tracking.',
      highlights: ['Find 3 workflows worth automating', 'ROI estimate & sign-off', 'From tool rollout to impact tracking'],
      painTitle: 'Many processes, and no clear view of which to automate',
      painPoints: [
        'Repetitive work is everywhere but you don’t know where to start automating.',
        'Automation is built but nobody maintains it, or staff bypass the system.',
        'You can’t quantify time saved or cost reduced by automation.',
        'You bought automation tools but didn’t redesign the process or define sign-off criteria.',
      ],
      solutionTitle: 'Pick three workflows, then calculate ROI',
      solutionLead:
        'In a two-to-three week audit we score workflows on time cost, error rate and revenue impact, pick the top three, then design rollout and ROI sign-off metrics.',
      solutionPoints: [
        'Process audit & prioritisation: interviews, time-cost analysis, three high-ROI workflows.',
        'Automation design: process redesign, tool selection, human-machine split and exception handling.',
        'Tool rollout & testing: pilot, staff training, fixes and go-live.',
        'ROI tracking: before/after metrics with regular reviews of hours saved and error rates.',
        'Expansion planning: after the first three stabilise, assess the next automation candidates.',
      ],
      pitch: 'The first round covers only the three highest-ROI workflows: estimate, roll out, then sign off.',
      packagesTitle: 'AI workflow automation programmes',
      packagesNote: 'From process audit to three-workflow rollout, staged by process complexity and tooling needs.',
      packages: [
        {
          name: 'Workflow automation audit',
          price: 'from NTD 80,000',
          desc: 'Process interviews, time-cost analysis, three high-ROI workflow recommendations and ROI estimate.',
        },
        {
          name: 'Three-workflow automation rollout',
          price: 'from NTD 200,000',
          desc: 'Process redesign, tool rollout, staff training, pilot and ROI sign-off metrics.',
        },
        {
          name: 'Ongoing automation advisory',
          price: 'from NTD 120,000/mo',
          desc: 'Monthly cadence, impact tracking, process optimisation, next-candidate review and maintenance support.',
        },
      ],
      priceFootnote:
        enFootnote +
        ' An AI operations health-check (from NTD 120,000) can be added as a pre-step; technical development is quoted separately by Adata.',
      goodFit: [
        'Companies with clear repetitive processes who want to start with three high-ROI workflows.',
        'Teams that bought automation tools but lack process redesign and sign-off capacity.',
        'Organisations that need ROI metrics and ongoing improvement after rollout.',
      ],
      notFit: [
        'You want to automate everything at once with no staged sign-off.',
        'You won’t support process interviews or staff training.',
        'You want tools only, with no process redesign or ROI sign-off.',
      ],
      deliverables: [
        'Three high-ROI workflow list & ROI estimate',
        'Process redesign map & human-machine split',
        'Tool rollout & testing report',
        'Staff operating manual & training records',
        'Before/after ROI dashboard',
        'Next automation candidate assessment',
      ],
    },
    ja: {
      navLabel: 'AI業務自動化',
      eyebrow: '企業向け · AIワークフロー自動化',
      title: 'AIワークフロー自動化コンサルティング',
      lead: '自動化する価値が最も高い3つの業務フローを特定し、ROIを試算したうえで、ツール導入、社内研修、効果の検収まで進めます。対象は、時間やコストの削減、売上につながる業務に絞ります。',
      metaDescription: 'Twouringは、AIワークフロー自動化コンサルティングとして、自動化する価値が最も高い3つの業務フローの特定、ROI試算、導入までを支援します。業務の棚卸し、自動化設計、ツール導入、効果測定に対応します。',
      highlights: [
        '自動化すべき3業務を特定',
        'ROI試算と検収',
        'ツール導入から効果測定まで',
      ],
      painTitle: '業務は多いが、どれを自動化すべきかわからない',
      painPoints: [
        '定型業務はあちこちにあるが、どこから自動化すべきかわからない。',
        '自動化しても保守する人がいない、または社員がシステムを使わず従来のやり方を続けている。',
        '自動化による工数削減やコスト削減を数値で示せない。',
        '自動化ツールは導入したが、業務の再設計も検収基準の設定もしていない。',
      ],
      solutionTitle: 'まず自動化すべき3業務を特定し、ROIを試算する',
      solutionLead: '2〜3週間の棚卸しで、時間コスト、エラー率、売上への影響の3軸から自動化すべき3つの業務フローを選定し、導入計画とROIの検収指標を設計します。',
      solutionPoints: [
        '業務の棚卸しと優先順位付け：ヒアリングと時間コスト分析により、ROIの高い3業務を特定します。',
        '自動化設計：業務の再設計、ツール選定、人とAIの役割分担、例外処理。',
        'ツール導入とテスト：試験運用、社員研修、不具合の修正、本番稼働。',
        'ROI追跡：導入前後の比較指標を設定し、削減工数とエラー率を定期的に検証します。',
        '拡張計画：最初の3業務が安定した後、次の自動化候補を検討します。',
      ],
      pitch: '最初はROIの高い3業務だけを対象に、試算、導入、検収の順で進めます。',
      packagesTitle: 'AIワークフロー自動化プログラム',
      packagesNote: '業務の棚卸しから3業務の導入まで、業務の複雑さとツール要件に応じて段階的にご提案します。',
      packages: [
        {
          name: 'ワークフロー自動化診断',
          price: 'NTD 80,000〜',
          desc: '業務ヒアリング、時間コスト分析、ROIの高い3業務の提案とROI試算。',
        },
        {
          name: '3業務自動化導入',
          price: 'NTD 200,000〜',
          desc: '業務の再設計、ツール導入、社員研修、試験運用、ROI検収指標の設定。',
        },
        {
          name: '自動化継続顧問',
          price: 'NTD 120,000〜／月',
          desc: '月次定例会議、効果測定、業務改善、次期候補の評価、保守サポート。',
        },
      ],
      priceFootnote: jaFootnote + ' 事前診断としてAI業務診断（NTD 120,000〜）を組み合わせることも可能です。技術開発は適才科技（Adata）が別途お見積りします。',
      goodFit: [
        '明確な定型業務があり、まずROIの高い3業務から始めたい企業。',
        '自動化ツールは導入済みだが、業務の再設計や検収の体制がない企業。',
        '導入後もROI指標で継続的に改善したいチーム。',
      ],
      notFit: [
        'すべての業務を一度に自動化したく、段階的な検収を望まない場合。',
        '業務ヒアリングや社員研修に協力できない場合。',
        'ツールだけを求め、業務の再設計やROIの検収を必要としない場合。',
      ],
      deliverables: [
        'ROIの高い3業務の一覧とROI試算',
        '業務再設計図と人とAIの役割分担',
        'ツール導入・テスト報告書',
        '社員向け操作マニュアルと研修記録',
        '導入前後のROIダッシュボード',
        '次期自動化候補の評価',
      ],
    },
  },

  remoteWork: {
    path: '/services/remote-work-consulting',
    icon: 'users',
    zh: {
      navLabel: '遠距及混合工作',
      eyebrow: '企業 · 遠距及混合工作制度',
      title: '遠距及混合工作制度顧問',
      lead: '協助企業建立遠距與混合工作制度，範圍包含政策設計、協作流程、績效管理、團隊文化與工具配套。',
      metaDescription:
        '遊遊提供遠距及混合工作制度顧問，協助企業設計遠距政策、協作流程、績效管理與工具配套。適合想建立或優化混合工作模式的中小企業與服務業。',
      highlights: ['政策與制度設計', '協作流程與績效管理', '工具配套與團隊文化'],
      painTitle: '遠距做了，制度卻沒跟上',
      painPoints: [
        '員工可以在家工作，但缺乏明確政策、出勤與績效標準。',
        '遠距後溝通成本上升、會議變多、協作品質下降。',
        '主管不知道如何管理看不到的團隊，績效評估變成形式。',
        '工具很多但沒有統一規範，資安與資料管理有漏洞。',
      ],
      solutionTitle: '建立可運作的遠距與混合工作制度',
      solutionLead:
        '遊遊從政策、流程、工具與文化四個面向，依你公司的規模與產業設計混合工作模式。',
      solutionPoints: [
        '制度診斷：盤點現有政策、協作習慣、工具使用與目前遇到的問題。',
        '政策設計：遠距/混合工作政策、出勤規範、資安要求與例外處理。',
        '協作流程：會議規範、非同步溝通、專案管理與知識共享。',
        '績效管理：遠距環境下的目標設定、回饋機制與主管培訓。',
        '試運行與調整：小範圍試行、收集回饋、修訂制度並全面推廣。',
      ],
      pitch: '開放在家上班只是開始。遠距要能運作，還需要政策、協作規範與績效管理配套。',
      packagesTitle: '遠距及混合工作服務方案',
      packagesNote: '從制度診斷到全面導入，依公司規模、產業特性與現有成熟度分階段合作。',
      packages: [
        {
          name: '遠距制度健檢',
          price: 'NTD 80,000 起',
          desc: '政策盤點、協作習慣訪談、問題診斷與改善建議。',
        },
        {
          name: '混合工作制度設計',
          price: 'NTD 150,000 起',
          desc: '遠距/混合政策、協作流程、績效管理框架與工具配套建議。',
        },
        {
          name: '遠距制度導入顧問',
          price: 'NTD 100,000／月 起',
          desc: '試運行支援、主管培訓、制度修訂、員工溝通與成效追蹤。',
        },
      ],
      priceFootnote: zhFootnote + ' 本服務專注於遠距及混合工作制度，不含 AI 或流程自動化導入（可另洽 AI 導入顧問服務）。',
      goodFit: [
        '想建立或優化遠距/混合工作制度的中小企業。',
        '遠距後協作品質下降、需要制度與流程改造的團隊。',
        '主管需要遠距績效管理方法與工具配套的組織。',
      ],
      notFit: [
        '只想買協作工具、不需要政策與制度設計。',
        '公司文化完全不支持彈性工作、決策者無意調整。',
        '把遠距顧問當 IT 工具導入、不需要組織與管理改造。',
      ],
      deliverables: [
        '遠距制度健檢報告',
        '混合工作政策草案',
        '協作流程與會議規範',
        '績效管理框架與主管指南',
        '工具配套與資安建議',
        '試運行回饋與修訂紀錄',
      ],
    },
    en: {
      navLabel: 'Remote & Hybrid Work',
      eyebrow: 'Enterprise · remote & hybrid work policy',
      title: 'Remote & hybrid work policy advisory',
      lead: 'We help companies set up remote and hybrid work policies, covering policy design, collaboration flow, performance management, team culture and tooling.',
      metaDescription:
        'Twouring provides remote and hybrid work policy advisory: remote policy design, collaboration flow, performance management and tooling. For SMEs and service businesses building or improving a hybrid model.',
      highlights: ['Policy & system design', 'Collaboration flow & performance', 'Tooling & team culture'],
      painTitle: 'You went remote, but the policies didn’t follow',
      painPoints: [
        'Staff can work from home but there is no clear policy, attendance or performance standard.',
        'Communication cost rose, meetings multiplied and collaboration quality dropped.',
        'Managers don’t know how to lead invisible teams; performance reviews became formalities.',
        'Many tools but no shared rules, leaving gaps in security and data management.',
      ],
      solutionTitle: 'A remote and hybrid model that works day to day',
      solutionLead:
        'We cover policy, process, tooling and culture, and design the hybrid model around your company size and industry.',
      solutionPoints: [
        'Policy diagnostic: audit current rules, collaboration habits, tooling and current problems.',
        'Policy design: remote/hybrid policy, attendance rules, security requirements and exceptions.',
        'Collaboration flow: meeting norms, async communication, project management and knowledge sharing.',
        'Performance management: goal-setting, feedback and manager training in a remote context.',
        'Pilot & adjust: small-scale trial, feedback collection, policy revision and full rollout.',
      ],
      pitch: 'Allowing work from home is only the start. Remote work also needs policy, collaboration rules and performance management.',
      packagesTitle: 'Remote & hybrid work programmes',
      packagesNote: 'From a policy diagnostic to full rollout, staged by company size, industry and current maturity.',
      packages: [
        {
          name: 'Remote policy health-check',
          price: 'from NTD 80,000',
          desc: 'Policy audit, collaboration interviews, problem diagnosis and improvement recommendations.',
        },
        {
          name: 'Hybrid work policy design',
          price: 'from NTD 150,000',
          desc: 'Remote/hybrid policy, collaboration flow, performance framework and tooling recommendations.',
        },
        {
          name: 'Remote policy rollout advisory',
          price: 'from NTD 100,000/mo',
          desc: 'Pilot support, manager training, policy revision, staff communication and impact tracking.',
        },
      ],
      priceFootnote:
        enFootnote +
        ' This service covers remote and hybrid work policy only. AI and workflow automation are not included (see our AI adoption advisory).',
      goodFit: [
        'SMEs building or improving a remote/hybrid work model.',
        'Teams whose collaboration quality dropped after going remote and need policy and process change.',
        'Organisations where managers need remote performance methods and tooling support.',
      ],
      notFit: [
        'You only want collaboration tools with no policy or system design.',
        'Company culture doesn’t support flexible work and leadership won’t change.',
        'You treat remote advisory as IT tool rollout with no organisational or management change.',
      ],
      deliverables: [
        'Remote policy health-check report',
        'Hybrid work policy draft',
        'Collaboration flow & meeting norms',
        'Performance framework & manager guide',
        'Tooling & security recommendations',
        'Pilot feedback & revision records',
      ],
    },
    ja: {
      navLabel: 'リモート・ハイブリッドワーク',
      eyebrow: '企業向け · リモート・ハイブリッドワーク制度',
      title: 'リモート・ハイブリッドワーク制度コンサルティング',
      lead: 'リモート・ハイブリッドワーク制度の構築を支援します。対象は規程の設計、協働プロセス、評価制度、組織文化、ツールの整備です。',
      metaDescription: 'Twouringは、リモート・ハイブリッドワーク制度コンサルティングとして、リモート勤務規程、協働プロセス、評価制度、ツール整備の設計を支援します。ハイブリッドワークを構築・改善したい中小企業・サービス業に適しています。',
      highlights: [
        '規程と制度の設計',
        '協働プロセスと評価制度',
        'ツール整備と組織文化',
      ],
      painTitle: 'リモートは始めたが、制度が追いついていない',
      painPoints: [
        '在宅勤務はできるが、明確な規程も、勤怠・評価の基準もない。',
        'リモート化でコミュニケーションコストが増え、会議が増え、協働の質が下がった。',
        '管理職が見えないチームの管理方法がわからず、評価が形骸化している。',
        'ツールは多いが統一ルールがなく、情報セキュリティやデータ管理に抜け漏れがある。',
      ],
      solutionTitle: '機能するリモート・ハイブリッドワーク制度をつくる',
      solutionLead: '規程、プロセス、ツール、文化の4つの観点から、貴社の規模と業界に合ったハイブリッドワークのモデルを設計します。',
      solutionPoints: [
        '制度診断：現行の規程、協働の慣行、ツールの利用状況と課題を棚卸しします。',
        '規程設計：リモート／ハイブリッド勤務規程、勤怠ルール、情報セキュリティ要件、例外対応。',
        '協働プロセス：会議ルール、非同期コミュニケーション、プロジェクト管理、ナレッジ共有。',
        '評価制度：リモート環境での目標設定、フィードバックの仕組み、管理職研修。',
        '試行と改善：小規模で試行し、フィードバックを集めて制度を見直したうえで全社に展開します。',
      ],
      pitch: '在宅勤務を認めるだけでは、リモートワークは機能しません。規程、協働ルール、評価制度をあわせて整える必要があります。',
      packagesTitle: 'リモート・ハイブリッドワーク支援プログラム',
      packagesNote: '制度診断から全社導入まで、企業規模、業界特性、現状の成熟度に応じて段階的にご提案します。',
      packages: [
        {
          name: 'リモート制度診断',
          price: 'NTD 80,000〜',
          desc: '規程の棚卸し、協働慣行のヒアリング、課題診断と改善提案。',
        },
        {
          name: 'ハイブリッドワーク制度設計',
          price: 'NTD 150,000〜',
          desc: 'リモート／ハイブリッド規程、協働プロセス、評価制度のフレームワーク、ツール整備の提案。',
        },
        {
          name: 'リモート制度導入顧問',
          price: 'NTD 100,000〜／月',
          desc: '試行支援、管理職研修、制度の見直し、社員への周知、効果測定。',
        },
      ],
      priceFootnote: jaFootnote + ' 本サービスはリモート・ハイブリッドワーク制度に特化しており、AIや業務自動化の導入は含みません（AI導入コンサルティングは別途ご相談ください）。',
      goodFit: [
        'リモート／ハイブリッドワーク制度を構築・改善したい中小企業。',
        'リモート化後に協働の質が下がり、制度とプロセスの見直しが必要なチーム。',
        '管理職にリモート環境での評価手法とツール整備が必要な組織。',
      ],
      notFit: [
        '協働ツールの購入だけを求め、規程や制度の設計を必要としない場合。',
        '企業文化が柔軟な働き方をまったく受け入れず、意思決定者に見直す意向がない場合。',
        'リモート制度コンサルティングをITツールの導入と捉え、組織・マネジメントの変革を必要としない場合。',
      ],
      deliverables: [
        'リモート制度診断報告書',
        'ハイブリッドワーク規程案',
        '協働プロセスと会議ルール',
        '評価制度フレームワークと管理職ガイド',
        'ツール整備と情報セキュリティの提案',
        '試行時のフィードバックと改訂記録',
      ],
    },
  },

  systems: {
    path: '/services/systems',
    icon: 'layers',
    zh: {
      navLabel: '系統開發與整合',
      eyebrow: '企業 · 系統開發與整合',
      title: '系統開發與整合：把 ERP、CRM 和現場資料接起來',
      lead: '報價、訂單、料號、排程、庫存、品質文件，散在 Excel 和各業務手上。遊遊先訪談需求、寫清楚規格，用 4 週 PoC 拿真實資料驗證，驗收通過才建置。能在既有 ERP 上加一層解決的，就不重做。',
      metaDescription:
        '遊遊為製造業、醫療生技與服務業做系統開發與整合：ERP 與內部系統串接、CRM、報價與訂單系統、料號主檔、生產追溯與品質文件、MRP／MES。先 4 週 PoC 用真實資料驗證，驗收通過再建置。',
      highlights: ['需求訪談可單獨購買', '4 週 PoC 用真實資料驗證', '既有 ERP 能保留就保留'],
      painTitle: '資料散在 Excel 和各業務手上，什麼都要人追',
      painPoints: [
        '報價靠資深同仁的經驗和 Excel，料號幾千到上萬筆，詢報價和訂單還要人工繕打。',
        '接單、排程、委外加工和出貨進度要一通通電話追，庫存帳和實際對不起來。',
        'BOM、工程變更（ECN）和在製品（WIP）靠人工對；批號追溯和品質文件（APQP／PPAP、8D）散在不同系統，客戶稽核前得花好幾天整理。',
        '客戶和訂單資料沒有 CRM，都在各業務手上；老師傅快退休，經驗都在腦袋裡。',
      ],
      solutionTitle: '先訪談、再 PoC，驗收通過才建置',
      solutionLead:
        '遊遊負責需求、規格、專案管理與驗收，系統由長期合作夥伴適才科技（Adata）的工程團隊承接。例如一家數千料號的五金材料業者，我們以商品資料為中心整合電商、ERP 與門市，減少重複輸入和人工比對；一家電子廠不換 ERP，在既有系統上加一層決策中樞，MRP 幾分鐘就重算完，總費用約為原廠模組的一半。',
      solutionPoints: [
        '需求訪談與系統規格：2 到 3 週，訪談老闆、業務、現場和財務，寫出可報價、可驗收的規格。',
        '4 週 PoC：用公司真實的料號、訂單和報工資料驗證，驗收指標寫在報價裡，通過才進入建置。',
        '系統建置：ERP 與內部系統整合、CRM 與業務系統、報價與訂單系統、料號主檔、生產追溯與品質文件、MRP／MES、EDI、多院區或多店資料整合。',
        '既有系統保留：能在現有 ERP 或 HIS 之上加一層解決的就不重做，減少汰換風險和停工時間。',
        '上線與維運：分階段上線、資料轉換、現場教學；每個階段都有驗收條件，維運另外簽約。',
      ],
      pitch: '不一定要換掉 ERP。我們把報價、訂單、現場和庫存接起來；先訪談、再 PoC，驗收通過才建置。',
      packagesTitle: '系統開發與整合服務方案',
      packagesNote: '三個階段可以分開買。訪談先把需求講清楚，PoC 用真實資料驗證，通過才進入建置；日本企業的正式系統也以同樣方式按月交付中。',
      packages: [
        {
          name: '需求訪談與系統規格',
          price: '可單獨購買，依範圍報價',
          desc: '2 到 3 週。訪談、現況資料盤點、系統規格與驗收條件，規格可以直接拿去比價。',
        },
        {
          name: '4 週 PoC',
          price: '依資料與系統數報價；驗收指標寫進報價',
          desc: '用真實資料驗證最重要的一段流程，例如報價、MRP 重算或批號追溯，通過才建置。',
        },
        {
          name: '系統建置',
          price: '常見 NTD 1,000,000–3,000,000',
          desc: '依規格分階段建置、上線與驗收：ERP 整合、CRM、報價與訂單、料號主檔、追溯與品質文件。',
        },
      ],
      priceFootnote:
        '以上為服務起點價格，實際依專案範圍、合作單位與交付內容報價，正式合作以書面報價與合約為準。 維運另外簽約；既有 ERP／HIS 能保留就保留，不強迫全部汰換；技術開發由遊遊與適才科技（Adata）的工程團隊承接。',
      goodFit: [
        '製造業、醫療生技或服務業中小企業，資料散在 Excel 和各業務手上，想把報價、訂單、現場和庫存接起來。',
        '已有 ERP 或 HIS，不想全部汰換，但要補上 CRM、報價、追溯或品質文件這幾塊。',
        '願意先花 2 到 3 週訪談、再用 4 週 PoC 驗證，接受分階段驗收。',
      ],
      notFit: [
        '只想買一套現成套裝軟體，不願配合需求訪談。',
        '想一次全部汰換，不接受分階段驗收。',
        '要壓到遠低於市場行情，或不做需求訪談就直接開工。',
      ],
      deliverables: [
        '需求訪談紀錄與現況流程圖',
        '系統規格書與各階段驗收條件',
        'PoC 成果報告與驗收指標對照',
        '系統建置、上線與資料轉換',
        '操作手冊與現場教學紀錄',
        '維運合約與下一階段建議',
      ],
    },
    en: {
      navLabel: 'Systems & integration',
      eyebrow: 'Enterprise · Systems development & integration',
      title: 'Systems development and integration: connect ERP, CRM and the shop floor',
      lead: 'Quotes, orders, part numbers, scheduling, stock and quality records live in Excel and in each salesperson’s inbox. We interview first, write a clear spec, prove it on your real data in a four-week PoC, and build only after sign-off. If a layer on top of your existing ERP solves it, we don’t rebuild.',
      metaDescription:
        'Twouring builds and integrates systems for manufacturing, healthcare and service SMEs: ERP integration, CRM, quote and order systems, traceability, MRP/MES. Four-week PoC on real data before any build.',
      highlights: ['Requirements interview sold separately', 'Four-week PoC on real data', 'Keep your existing ERP where it works'],
      painTitle: 'Data sits in Excel and with each salesperson, so everything needs chasing',
      painPoints: [
        'Quoting depends on senior staff and Excel; thousands of part numbers, and enquiries and orders are still typed in by hand.',
        'Order intake, scheduling, subcontracting and shipping progress are chased by phone, and stock records don’t match what’s on the shelf.',
        'BOMs, engineering changes (ECN) and work in progress (WIP) are reconciled manually; lot traceability and quality records (APQP/PPAP, 8D) sit in separate systems, so customer audits take days to prepare.',
        'There is no CRM. Customer and order data lives with each salesperson, and senior technicians near retirement carry the know-how in their heads.',
      ],
      solutionTitle: 'Interview first, PoC second, build only after sign-off',
      solutionLead:
        'Twouring owns requirements, specification, project management and acceptance; our long-term partner Adata’s engineering team builds the system. A hardware materials supplier with thousands of part numbers had e-commerce, ERP and stores integrated around a single product master, cutting duplicate entry and manual matching. An electronics plant kept its ERP and added a decision layer on top so MRP reruns in minutes. The total cost was about half that of the vendor’s own module.',
      solutionPoints: [
        'Requirements interview & specification: two to three weeks with the owner, sales, shop floor and finance, producing a spec you can quote and sign off against.',
        'Four-week PoC: validated on your real part, order and shop-floor data, with acceptance metrics written into the quote; build starts only when they pass.',
        'System build: ERP and internal system integration, CRM and sales systems, quote and order systems, part master data, production traceability and quality records, MRP/MES, EDI, multi-site and multi-store data integration.',
        'Keep what works: where a layer on top of your existing ERP or HIS solves the problem, we don’t rebuild it, which reduces replacement risk and downtime.',
        'Go-live & maintenance: staged rollout, data migration and on-site training; every stage has acceptance criteria, and maintenance is a separate contract.',
      ],
      pitch: 'You may not need a new ERP. We connect quotes, orders, the shop floor and stock: interview first, PoC second, build only after sign-off.',
      packagesTitle: 'Systems development & integration programmes',
      packagesNote: 'The three stages can be bought separately. The interview makes the need clear, the PoC proves it on real data, and only then do we build; a Japanese company’s production system is delivered the same way on a monthly basis.',
      packages: [
        {
          name: 'Requirements interview & specification',
          price: 'sold separately, quoted by scope',
          desc: 'Two to three weeks. Interviews, current data audit, system specification and acceptance criteria. You can take the spec out to tender.',
        },
        {
          name: 'Four-week PoC',
          price: 'quoted by data and system count; acceptance metrics in the quote',
          desc: 'Validates the most important part of the process, such as quoting, MRP reruns or lot traceability, on real data before any build.',
        },
        {
          name: 'System build',
          price: 'typically NTD 1,000,000–3,000,000',
          desc: 'Staged build, go-live and acceptance against the spec: ERP integration, CRM, quotes and orders, part master data, traceability and quality records.',
        },
      ],
      priceFootnote:
        'Prices shown are starting points. Actual quotes depend on scope, partners and deliverables; engagements are confirmed by written quote and contract. Maintenance is a separate contract; existing ERP/HIS is kept wherever it works rather than replaced wholesale; development is delivered by Twouring with Adata’s engineering team.',
      goodFit: [
        'Manufacturing, healthcare or service SMEs whose data lives in Excel and with individual salespeople, and who want quotes, orders, the shop floor and stock connected.',
        'Organisations with an existing ERP or HIS that don’t want to replace it but need CRM, quoting, traceability or quality records added.',
        'Teams willing to spend two to three weeks on interviews and four weeks on a PoC, and who accept staged sign-off.',
      ],
      notFit: [
        'You want an off-the-shelf package only and won’t take part in requirements interviews.',
        'You want everything replaced at once with no staged sign-off.',
        'You want a price far below market rate, or to start building without a requirements interview.',
      ],
      deliverables: [
        'Interview records & current-state process map',
        'System specification & acceptance criteria per stage',
        'PoC report with results against acceptance metrics',
        'System build, go-live & data migration',
        'Operating manual & on-site training records',
        'Maintenance contract & next-stage recommendations',
      ],
    },
    ja: {
      navLabel: 'システム開発・統合',
      eyebrow: '企業向け · システム開発・統合',
      title: 'システム開発・統合：ERP、CRM、現場のデータをつなぐ',
      lead: '見積、受注、品番、生産計画、在庫、品質書類が Excel と各営業担当の手元に散らばっていませんか。Twouringはまず要件をヒアリングして仕様を明確にし、4週間の PoC で実データを使って検証し、検収に合格してから構築します。既存の ERP の上に一層加えて解決できる場合は、作り直しません。',
      metaDescription:
        'Twouringは製造業、医療・バイオ、サービス業の中小企業向けに、ERP 連携、CRM、見積・受注システム、品番マスタ、トレーサビリティ、MRP／MES のシステム開発・統合を提供。4週間の PoC で実データを検証してから構築します。',
      highlights: ['要件ヒアリングは単独でご購入可能', '4週間の PoC で実データを検証', '既存の ERP は活かせる限り残す'],
      painTitle: 'データが Excel と営業担当の手元に散らばり、何でも人が追いかけている',
      painPoints: [
        '見積はベテラン社員の経験と Excel 頼み。品番は数千から数万件あり、引合や受注の入力はいまだに手作業です。',
        '受注、生産計画、外注加工、出荷の進捗を一件ずつ電話で確認し、在庫の帳簿と実物が合いません。',
        'BOM、設計変更（ECN）、仕掛品（WIP）の照合は手作業。ロット追跡や品質書類（APQP／PPAP、8D）が別々のシステムにあり、顧客監査の前に数日かけて資料をまとめています。',
        'CRM がなく、顧客と受注のデータは各営業担当の手元にあります。熟練技術者の定年が近く、ノウハウは頭の中にしかありません。',
      ],
      solutionTitle: 'まずヒアリング、次に PoC、検収に合格してから構築',
      solutionLead:
        'Twouringが要件定義、仕様、プロジェクト管理、検収を担当し、システムは長年の協力会社である適才科技（Adata）のエンジニアチームが構築します。数千品番を扱う金物材料の会社では、商品データを軸に EC、ERP、店舗を統合し、二重入力と手作業の照合を減らしました。ある電子部品メーカーでは ERP を入れ替えず、既存システムの上に意思決定用の層を加え、MRP の再計算が数分で終わるようになりました。総費用はメーカー純正モジュールの約半分です。',
      solutionPoints: [
        '要件ヒアリングと仕様策定：2〜3週間で経営者、営業、現場、経理にヒアリングし、見積と検収の基準にできる仕様を作成します。',
        '4週間の PoC：実際の品番、受注、現場の実績データで検証します。検収指標は見積書に明記し、合格した場合のみ構築に進みます。',
        'システム構築：ERP と社内システムの統合、CRM と営業システム、見積・受注システム、品番マスタ、生産トレーサビリティと品質書類、MRP／MES、EDI、複数拠点・複数店舗のデータ統合。',
        '既存システムの維持：既存の ERP や HIS の上に一層加えて解決できる場合は作り直さず、入替のリスクと停止時間を減らします。',
        '稼働と保守：段階的な稼働、データ移行、現場での操作研修。各段階に検収条件を設け、保守は別途契約します。',
      ],
      pitch: 'ERP を入れ替えなくても、見積、受注、現場、在庫はつなげられます。まずヒアリング、次に PoC、検収に合格してから構築します。',
      packagesTitle: 'システム開発・統合プログラム',
      packagesNote: '3つの段階は個別にご購入いただけます。ヒアリングで要件を明確にし、PoC で実データを検証し、合格してから構築に進みます。日本企業の本番システムも同じ進め方で月次で納品しています。',
      packages: [
        {
          name: '要件ヒアリングと仕様策定',
          price: '単独でご購入可能、範囲に応じてお見積り',
          desc: '2〜3週間。ヒアリング、現状データの棚卸し、システム仕様書と検収条件。仕様書はそのまま相見積にお使いいただけます。',
        },
        {
          name: '4週間の PoC',
          price: 'データ量とシステム数に応じてお見積り。検収指標は見積書に明記',
          desc: '見積、MRP の再計算、ロット追跡など、最も重要な業務の一部を実データで検証し、合格してから構築します。',
        },
        {
          name: 'システム構築',
          price: '一般的に NTD 1,000,000〜3,000,000',
          desc: '仕様に基づき段階的に構築、稼働、検収します。ERP 統合、CRM、見積・受注、品番マスタ、トレーサビリティと品質書類。',
        },
      ],
      priceFootnote:
        '掲載価格はサービスの開始価格です。実際の金額はプロジェクトの範囲、連携先、提供内容に応じてお見積りし、正式なご契約は書面の見積書および契約書をもって確定します。 保守は別途契約です。既存の ERP／HIS は活かせる限り残し、全面的な入替を強いることはありません。技術開発はTwouringと適才科技（Adata）のエンジニアチームが担当します。',
      goodFit: [
        '製造業、医療・バイオ、サービス業の中小企業で、データが Excel と営業担当の手元に散らばり、見積、受注、現場、在庫をつなぎたい企業。',
        'ERP や HIS はすでにあり、全面入替はせずに CRM、見積、トレーサビリティ、品質書類を補いたい企業。',
        '2〜3週間のヒアリングと4週間の PoC に時間をかけ、段階的な検収を受け入れられるチーム。',
      ],
      notFit: [
        '既製のパッケージソフトだけを求め、要件ヒアリングに協力できない場合。',
        '一度にすべてを入れ替えたく、段階的な検収を望まない場合。',
        '市場相場を大きく下回る価格を求める、または要件ヒアリングなしで着手したい場合。',
      ],
      deliverables: [
        'ヒアリング記録と現状の業務フロー図',
        'システム仕様書と各段階の検収条件',
        'PoC 成果報告書と検収指標の対照',
        'システム構築、稼働、データ移行',
        '操作マニュアルと現場研修の記録',
        '保守契約と次段階の提案',
      ],
    },
  },

  hermes: {
    path: '/services/hermes',
    icon: 'ai',
    zh: {
      navLabel: '遊遊愛馬仕 AI 工作空間',
      eyebrow: '企業 · AI 工作空間訂閱',
      title: '遊遊愛馬仕：每個企業都有自己的 AI 工作團隊',
      titleHtml: '<span class="keep">遊遊愛馬仕：</span><span class="keep">每個企業</span><span class="keep">都有自己的</span> <span class="keep">AI 工作團隊</span>',
      lead: '每家企業一個獨立工作空間，九個營運助理直接讀寫公司檔案、操作瀏覽器、跑排程、推進看板任務；成員共用同一份資料，所有操作都留紀錄。含稅按月計費，起步版每月 NT$ 6,000。',
      metaDescription:
        '遊遊愛馬仕 AI 工作空間：企業專屬租戶、九個營運助理、共用技能庫、Google Drive 掛載、瀏覽器代理、看板與排程，含 AI 模型用量。起步版 3 人 NT$6,000／月、團隊版 10 人 NT$12,000／月、企業版 20 人 NT$20,000／月（含稅）。',
      highlights: ['每家企業獨立租戶與儲存', '含 AI 模型用量，按月計費', '資料可隨時完整下載'],
      painTitle: '員工各用各的 AI，公司什麼都沒留下',
      painPoints: [
        '每個人用自己的 ChatGPT 帳號，對話和成果散在個人手上，人一離職就帶走。',
        'AI 只會回答問題，報價、整理資料、更新網站還是要人複製貼上。',
        'AI 能代寄信、發文之後，沒人知道誰核准了什麼，主管不敢放手。',
        '資料放在哪、會不會被拿去訓練模型，講不清楚，也拿不出紀錄。',
      ],
      solutionTitle: '一個工作空間，讓 AI 參與公司日常流程',
      solutionLead:
        '遊遊愛馬仕由遊遊自行開發，部署在 DigitalOcean 新加坡機房，每家企業一個獨立容器與儲存空間。成員單一登入後，在同一個工作區和助理協作；助理可以讀寫公司檔案與雲端硬碟、開瀏覽器操作網站與表單、依排程產出報表，並把待辦放進看板分派。',
      solutionPoints: [
        '九個營運助理：策略、營運、財務、業務、行銷、人資、產品、工程、品質，各有角色與記憶，可互相交接。',
        '可執行操作：讀寫工作區檔案與 Google Drive、瀏覽器代理操作網站、執行指令與排程任務。',
        '多模型自動選用：依任務選 Claude、GPT、Gemini 等模型並自動備援，不綁單一供應商。',
        '權限與紀錄：成員權限分層，帳號、權限與 token 操作都有稽核紀錄；寄信、發文等對外動作可設人工核准。',
        '資料屬於公司：對話可匯出 CSV／JSON／HTML，檔案隨時下載；客戶資料不用於訓練模型，每日異地備份保留 30 天。',
      ],
      pitch: '公司共用一個 AI 工作團隊，對話、檔案與操作紀錄都留在公司，不會隨個人帳號流失。',
      packagesTitle: '方案與價格（含稅，按月計費）',
      packagesNote: '三個方案都含獨立租戶、九個營運助理、共用技能庫、雲端掛載、瀏覽器代理、看板與排程，以及 AI 模型用量（公平使用原則）。最短訂閱 1 個月；一次簽 6 或 12 個月也可以。',
      packages: [
        {
          name: '起步版（最多 3 人）',
          price: 'NT$ 6,000／月',
          desc: '1 個租戶、3 個帳號、50 GB 專屬儲存；Email／LINE 客服；線上教育訓練 1 場。6 個月期程方案 NT$ 36,000。',
        },
        {
          name: '團隊版（最多 10 人）',
          price: 'NT$ 12,000／月',
          desc: '10 個帳號、可設子租戶、200 GB 儲存；一級問題 1 小時內回應；導入諮詢 2 小時＋教育訓練 2 場；MCP／外部 AI Agent 介接。12 個月 NT$ 144,000。',
        },
        {
          name: '企業版（最多 20 人）',
          price: 'NT$ 20,000／月',
          desc: '20 個帳號、不限子租戶、500 GB 儲存；專屬客服窗口；導入諮詢 4 小時＋教育訓練 4 場＋季度檢視；自訂助理角色與企業技能庫。12 個月 NT$ 240,000。',
        },
      ],
      priceFootnote:
        '價格含 5% 營業稅並開立全額電子發票。期滿全額自付續約 12 個月享 9 折；超出人數每人每月 NT$ 1,200，儲存每 100 GB 每月 NT$ 500。客戶自行綁定的第三方服務費用自理。完整條件、付款方式與服務水準見「方案與價格」頁。',
      goodFit: [
        '5 到 100 人、沒有專職幕僚或資訊人員的中小企業，想讓 AI 處理報價、整理資料、文件與報表。',
        '已經有員工在用 AI，想把對話、檔案和成果收回公司，並且有權限與紀錄。',
        '常申請政府補助或承接標案，需要整理大量文件與表單的團隊。',
      ],
      notFit: [
        '只需要一個人用的聊天工具，不需要共享工作區與權限。',
        '資料依法規必須留在客戶自有機房、不能放在公有雲。',
        '希望不設定任何流程，買了就全自動取代人力。',
      ],
      deliverables: [
        '企業專屬租戶、成員帳號與單一登入',
        '九個營運助理的角色設定與公司知識',
        '雲端硬碟掛載與檔案分類',
        '線上教育訓練（依方案 1–4 場）',
        '每月使用報表與帳號稽核紀錄',
        '隨時可用的 CSV／JSON／HTML 資料匯出',
      ],
    },
    en: {
      navLabel: 'Twouring Hermes AI workspace',
      eyebrow: 'Enterprise · AI workspace subscription',
      title: 'Twouring Hermes: an AI team of your own for every company',
      lead: 'Each company gets an isolated workspace where nine operations assistants read and write company files, drive a browser, run schedules and move kanban tasks forward. Members share the same data and every action is logged. Billed monthly, from NT$ 6,000 including tax.',
      metaDescription:
        'Twouring Hermes AI workspace: a dedicated tenant, nine operations assistants, shared skill library, Google Drive mounts, browser agent, kanban and schedules, AI model usage included. Starter 3 seats NT$6,000/mo, Team 10 seats NT$12,000/mo, Enterprise 20 seats NT$20,000/mo (tax included).',
      highlights: ['Dedicated tenant and storage per company', 'AI model usage included, billed monthly', 'Export all your data at any time'],
      painTitle: 'Everyone uses their own AI, and the company keeps nothing',
      painPoints: [
        'Staff use personal ChatGPT accounts; chats and results stay with individuals and leave when they do.',
        'AI only answers questions; quotes, data clean-up and website edits still need copy-and-paste.',
        'Once AI can send email or post, nobody knows who approved what, so managers won’t let it act.',
        'Nobody can say where the data lives or whether it trains a model, and there is no record to show.',
      ],
      solutionTitle: 'One workspace that puts AI inside your company’s processes',
      solutionLead:
        'Twouring Hermes is built in-house by Twouring and hosted in DigitalOcean’s Singapore region, with an isolated container and storage per company. Members sign in once and work with the assistants in a shared workspace; assistants read and write company files and cloud drives, operate websites and forms through a browser, produce scheduled reports and put to-dos on a kanban board.',
      solutionPoints: [
        'Nine operations assistants for strategy, operations, finance, sales, marketing, HR, product, engineering and quality, each with its own role and memory, handing work to each other.',
        'Hands-on work: workspace files and Google Drive, a browser agent for websites, commands and scheduled jobs.',
        'Automatic model choice: Claude, GPT, Gemini and others picked per task with fail-over, so you are not locked into one vendor.',
        'Permissions and records: tiered member roles, audit logs for accounts, permissions and tokens; outbound actions such as email or posts can require human approval.',
        'Your data belongs to the company: chats export as CSV/JSON/HTML, files download any time; customer data is not used to train models; daily off-site backups kept for 30 days.',
      ],
      pitch: 'One shared AI team for the company. Chats, files and action records stay with the company, not with personal accounts.',
      packagesTitle: 'Plans and pricing (tax included, billed monthly)',
      packagesNote: 'Every plan includes a dedicated tenant, nine operations assistants, the shared skill library, cloud mounts, browser agent, kanban and schedules, and AI model usage under a fair-use policy. Minimum term one month; 6- or 12-month terms are also available.',
      packages: [
        {
          name: 'Starter (up to 3 members)',
          price: 'NT$ 6,000/month',
          desc: '1 tenant, 3 accounts, 50 GB dedicated storage; email/LINE support; one online training session. 6-month term NT$ 36,000.',
        },
        {
          name: 'Team (up to 10 members)',
          price: 'NT$ 12,000/month',
          desc: '10 accounts, sub-tenants, 200 GB storage; priority-1 response within 1 hour; 2 h onboarding plus 2 training sessions; MCP / external AI agent access. 12 months NT$ 144,000.',
        },
        {
          name: 'Enterprise (up to 20 members)',
          price: 'NT$ 20,000/month',
          desc: '20 accounts, unlimited sub-tenants, 500 GB storage; dedicated support contact; 4 h onboarding, 4 training sessions and quarterly reviews; custom assistant roles and company skill library. 12 months NT$ 240,000.',
        },
      ],
      priceFootnote:
        'Prices include 5% VAT with a full e-invoice. Self-paid 12-month renewals get 10% off; extra members NT$ 1,200 per seat per month, extra storage NT$ 500 per 100 GB per month. Third-party services you connect are billed by their providers. Full terms, payment methods and service levels are on the pricing page (Chinese).',
      goodFit: [
        'SMEs of 5–100 people without dedicated staff support or IT, who want AI to handle quotes, data clean-up, documents and reports.',
        'Teams already using AI that want chats, files and results back inside the company, with permissions and records.',
        'Organisations that often apply for grants or public tenders and handle large volumes of documents and forms.',
      ],
      notFit: [
        'You only need a single-user chat tool, with no shared workspace or permissions.',
        'Regulation requires your data to stay in your own data centre rather than public cloud.',
        'You expect it to replace staff fully automatically without setting up any process.',
      ],
      deliverables: [
        'Dedicated tenant, member accounts and single sign-on',
        'Role setup and company knowledge for the nine assistants',
        'Cloud-drive mounts and file structure',
        'Online training (1–4 sessions by plan)',
        'Monthly usage report and account audit log',
        'CSV/JSON/HTML data export available at any time',
      ],
    },
    ja: {
      navLabel: 'Twouring Hermes AIワークスペース',
      eyebrow: '企業向け · AIワークスペースのサブスクリプション',
      title: 'Twouring Hermes：企業ごとに、自社専用のAIチームを',
      titleHtml: 'Twouring <span class="keep">Hermes：</span><span class="keep">企業ごとに、</span><span class="keep">自社専用の</span><span class="keep">AIチームを</span>',
      lead: '企業ごとに独立したワークスペースを用意し、9つの業務アシスタントが社内ファイルの読み書き、ブラウザ操作、定期実行、カンバンのタスク推進まで行います。メンバーは同じデータを共有し、すべての操作が記録されます。税込・月額制、スタータープランは月額 NT$ 6,000 から。',
      metaDescription:
        'Twouring Hermes AIワークスペース：企業専用テナント、9つの業務アシスタント、共有スキルライブラリ、Google Drive 連携、ブラウザエージェント、カンバンと定期実行、AIモデル利用料込み。スターター3名 NT$6,000／月、チーム10名 NT$12,000／月、エンタープライズ20名 NT$20,000／月（税込）。',
      highlights: ['企業ごとに独立したテナントとストレージ', 'AIモデル利用料込みの月額制', 'データはいつでも完全にダウンロード可能'],
      painTitle: '社員がそれぞれ別のAIを使い、会社には何も残らない',
      painPoints: [
        '社員が個人の ChatGPT アカウントを使い、会話や成果物は個人の手元に残り、退職とともに失われます。',
        'AIは質問に答えるだけで、見積、データ整理、Webサイトの更新はいまだにコピー＆ペーストです。',
        'AIがメール送信や投稿をできるようになっても、誰が何を承認したのか分からず、管理者は任せられません。',
        'データがどこに保存され、モデルの学習に使われるのかを説明できず、記録も示せません。',
      ],
      solutionTitle: 'ひとつのワークスペースで、AIを業務の中に',
      solutionLead:
        'Twouring Hermes は Twouring が自社開発し、DigitalOcean のシンガポールリージョンで運用しています。企業ごとに独立したコンテナとストレージを割り当てます。メンバーは一度ログインするだけで、共有ワークスペースでアシスタントと協働できます。アシスタントは社内ファイルやクラウドドライブを読み書きし、ブラウザでWebサイトやフォームを操作し、定期レポートを作成し、ToDoをカンバンに登録して振り分けます。',
      solutionPoints: [
        '9つの業務アシスタント：戦略、業務、財務、営業、マーケティング、人事、プロダクト、エンジニアリング、品質。それぞれ役割と記憶を持ち、互いに引き継ぎます。',
        '実際の操作：ワークスペースのファイルと Google Drive、ブラウザエージェントによるWeb操作、コマンドと定期ジョブ。',
        'モデルの自動選択：タスクに応じて Claude、GPT、Gemini などを選び、障害時は自動で切り替え。特定ベンダーに縛られません。',
        '権限と記録：メンバー権限を階層化し、アカウント・権限・トークン操作をすべて監査ログに記録。メール送信や投稿など外部への操作は人の承認を必須にできます。',
        'データはお客様のもの：会話は CSV／JSON／HTML でエクスポート、ファイルはいつでもダウンロード可能。お客様のデータはモデルの学習に使わず、毎日異なる拠点にバックアップし30日間保管します。',
      ],
      pitch: '会社で共有するAIチームです。会話、ファイル、操作記録は個人アカウントではなく会社に残ります。',
      packagesTitle: 'プランと料金（税込・月額制）',
      packagesNote: 'すべてのプランに、専用テナント、9つの業務アシスタント、共有スキルライブラリ、クラウド連携、ブラウザエージェント、カンバンと定期実行、AIモデル利用料（公正利用の範囲内）が含まれます。最短1か月から。6か月・12か月の一括契約も可能です。',
      packages: [
        {
          name: 'スターター（最大3名）',
          price: 'NT$ 6,000／月',
          desc: '1テナント、3アカウント、専用ストレージ 50 GB、Email／LINE サポート、オンライン研修1回。6か月契約 NT$ 36,000。',
        },
        {
          name: 'チーム（最大10名）',
          price: 'NT$ 12,000／月',
          desc: '10アカウント、サブテナント設定可、ストレージ 200 GB、重大障害は1時間以内に対応、導入相談2時間＋研修2回、MCP／外部AIエージェント連携。12か月 NT$ 144,000。',
        },
        {
          name: 'エンタープライズ（最大20名）',
          price: 'NT$ 20,000／月',
          desc: '20アカウント、サブテナント無制限、ストレージ 500 GB、専任サポート窓口、導入相談4時間＋研修4回＋四半期レビュー、アシスタントの役割と社内スキルライブラリのカスタマイズ。12か月 NT$ 240,000。',
        },
      ],
      priceFootnote:
        '価格は5%の営業税込みで、全額の電子インボイスを発行します。満了後に全額自己負担で12か月更新する場合は10%割引。上限を超えるメンバーは1名あたり月額 NT$ 1,200、ストレージは 100 GB あたり月額 NT$ 500。お客様が連携する外部サービスの費用は各提供元への直接のお支払いとなります。詳細条件、支払方法、サービスレベルは料金ページ（中国語）をご覧ください。',
      goodFit: [
        '専任のスタッフや情報システム担当がいない5〜100名の中小企業で、見積、データ整理、書類、レポートをAIに任せたい企業。',
        'すでに社員がAIを使っており、会話・ファイル・成果物を権限と記録つきで会社に取り戻したい企業。',
        '補助金申請や公共入札が多く、大量の書類やフォームを扱うチーム。',
      ],
      notFit: [
        '1人で使うチャットツールだけが必要で、共有ワークスペースや権限管理は不要な場合。',
        '法規制により、データを自社のデータセンターに置く必要があり、パブリッククラウドを使えない場合。',
        '業務フローを一切設定せず、導入するだけで人員を完全に自動で置き換えたい場合。',
      ],
      deliverables: [
        '企業専用テナント、メンバーアカウント、シングルサインオン',
        '9つのアシスタントの役割設定と社内ナレッジ',
        'クラウドドライブ連携とファイル構成',
        'オンライン研修（プランに応じて1〜4回）',
        '月次利用レポートとアカウント監査ログ',
        'いつでも利用できる CSV／JSON／HTML のデータエクスポート',
      ],
    },
  },

  venue: {
    path: '/services/venue',
    icon: 'venue',
    zh: {
      navLabel: '場域與商家',
      eyebrow: '場域與商家 · 數位遊牧友善場域',
      title: '數位遊牧友善場域、友善商家與旅宿國際化顧問',
      lead: '協助旅宿、咖啡廳、共同工作空間、老店與地方品牌成為數位遊牧友善場域與友善商家，讓國際遠距工作者找得到、待得住，也願意消費。改造項目依 Nomad Ready 方法列成清單，可逐項驗收。',
      metaDescription:
        '遊遊提供數位遊牧友善場域、友善商家與旅宿國際化顧問，協助商圈、旅宿、咖啡廳與地方品牌進行 Nomad Ready 改造：商家健檢、英文資訊、活動設計與多店共創，可由政府、商圈或協會買單。',
      highlights: ['數位遊牧友善場域改造', '旅宿國際化與英文資訊', 'Nomad Ready 認證前輔導'],
      painTitle: '想接待國際人才，對方卻找不到你',
      painPoints: [
        '想成為數位遊牧友善商家，但沒有英文資訊與接待流程。',
        '空間、網路、插座、動線不清楚是否「遊牧友善」。',
        'Google 商家、社群與活動資訊零散，國際客找不到。',
        '旅宿想國際化，但不知道從哪裡開始改造資訊與服務。',
      ],
      solutionTitle: '把店家改造成數位遊牧友善場域',
      solutionLead:
        '國際遠距工作者選地點時，除了 Wi-Fi，也看資訊是否清楚可信、空間能否久待、有沒有社群可以參與、能不能認識在地。遊遊用 Nomad Ready 方法把這些項目列成改造清單，可逐項驗收。',
      solutionPoints: [
        '商家健檢：空間、網路、插座、英文資訊、Google 商家、動線與社群活動建議。',
        '旅宿國際化改造：英文頁面、菜單與服務說明、遊牧友善資訊、活動與曝光規劃。',
        '多店／商圈共創：10–20 家友善商家導入、地圖、活動、媒體與國際社群推廣。',
        '場域營運顧問：活動企劃、社群經營、會員方案與合作夥伴開發。',
        'Nomad Ready 認證前輔導：標準檢核、改善清單、教育訓練與展示頁建議。',
      ],
      pitch: '協助地方商家整理資訊與接待流程，讓國際遠距工作者找得到、看得懂、待得住，也願意消費。',
      packagesTitle: '數位遊牧友善場域服務階梯',
      packagesNote: '單店可獨立健檢，商圈可群體導入，常由政府、商圈或協會專案買單。',
      packages: [
        {
          name: 'Nomad Ready 商家健檢',
          price: 'NTD 40,000 起',
          desc: '空間、網路、插座、英文資訊、Google 商家、動線與社群活動建議。',
        },
        {
          name: '商家國際化改造包',
          price: 'NTD 120,000 起',
          desc: '英文頁面、菜單／服務說明、遊牧友善資訊、活動設計與曝光規劃。',
        },
        {
          name: '多店／商圈共創計畫',
          price: 'NTD 1,000,000 起（10–20 家）',
          desc: '10–20 家商家導入、地圖、活動、媒體與國際社群推廣與成果報告。',
        },
      ],
      priceFootnote:
        zhFootnote +
        ' 另有「場域營運顧問（NTD 80,000–120,000／月）」可搭配；多採群體銷售，常由政府、商圈或協會買單。',
      goodFit: [
        '旅宿、咖啡廳、餐飲、共同工作空間與地方品牌。',
        '商圈、地方創生團隊與觀光圈，想群體升級為數位遊牧友善場域。',
        '想接待國際人才、願意調整資訊與流程的業者。',
      ],
      notFit: [
        '只想要一次性曝光、不願調整資訊與接待流程。',
        '沒有基本空間或網路條件、也不打算改善。',
        '期待立即大量客流，而非穩定的長住與社群經營。',
      ],
      deliverables: [
        'Nomad Ready 健檢報告與改善清單',
        '英文資訊與菜單／服務說明',
        '遊牧友善標示與接待 SOP',
        '商圈地圖與活動企劃',
        '國際社群與媒體曝光規劃',
        '多店共創成果報告',
      ],
    },
    en: {
      navLabel: 'Venues & Local Business',
      eyebrow: 'Venues & Business · nomad-friendly venues',
      title: 'Nomad-friendly venues, local businesses & hospitality internationalisation',
      lead: 'We help stays, cafés, coworking spaces, legacy shops and local brands become nomad-friendly venues and businesses that international remote workers can find, stay at and spend with. Upgrades follow the Nomad Ready method as a checklist that can be signed off item by item.',
      metaDescription:
        'Twouring helps business districts, stays, cafés and local brands become nomad-friendly venues and businesses: Nomad Ready health-check, English information, programme design and multi-store co-creation, often funded by government or districts.',
      highlights: ['Nomad-friendly venue upgrades', 'Hospitality internationalisation', 'Pre-Nomad Ready coaching'],
      painTitle: 'You want to host international talent, but they can’t find you',
      painPoints: [
        'You want to be a nomad-friendly business but have no English information or hosting flow.',
        'It’s unclear whether your space, Wi-Fi, power and layout are “nomad-friendly”.',
        'Your Google Business, social and event info is scattered, so international guests can’t find you.',
        'Your stay wants to internationalise but you don’t know where to start with information and service.',
      ],
      solutionTitle: 'Make your venue nomad-friendly',
      solutionLead:
        'Remote workers need more than Wi-Fi: trustworthy information, a place to stay, a community to join and a way to understand the local scene. The Nomad Ready method turns these into an upgrade checklist that can be signed off item by item.',
      solutionPoints: [
        'Venue health-check: space, Wi-Fi, power, English info, Google Business, layout and community ideas.',
        'Hospitality internationalisation: English pages, menu and service descriptions, nomad-friendly info and exposure plan.',
        'Multi-store co-creation: onboarding 10–20 nomad-friendly businesses with maps, events, media and global community promotion.',
        'Venue operations advisory: programming, community building, membership and partner development.',
        'Pre-certification coaching: standard checklist, improvement list, training and a showcase page.',
      ],
      pitch: 'We help local businesses sort out their information and hosting flow, so international remote workers can find, understand, stay at and spend with them.',
      packagesTitle: 'Nomad-friendly venue programmes',
      packagesNote: 'A single shop can start with a health-check; districts onboard as a group, often funded by government, districts or associations.',
      packages: [
        {
          name: 'Nomad Ready venue health-check',
          price: 'from NTD 40,000',
          desc: 'Space, Wi-Fi, power, English info, Google Business, layout and community recommendations.',
        },
        {
          name: 'Internationalisation package',
          price: 'from NTD 120,000',
          desc: 'English pages, menu/service descriptions, nomad-friendly info, programme design and exposure plan.',
        },
        {
          name: 'Multi-store / district co-creation',
          price: 'from NTD 1,000,000 (10–20 shops)',
          desc: 'Onboard 10–20 shops with map, events, media, global community promotion and a results report.',
        },
      ],
      priceFootnote:
        enFootnote +
        ' A venue operations advisory (NTD 80,000–120,000/mo) can be added; usually sold as a group programme funded by government, districts or associations.',
      goodFit: [
        'Stays, cafés, F&B, coworking spaces and local brands.',
        'Business districts and revitalisation teams wanting to upgrade as nomad-friendly venues as a group.',
        'Operators willing to adjust information and flow to host international talent.',
      ],
      notFit: [
        'You only want one-off exposure and won’t adjust information or hosting flow.',
        'You lack basic space or network conditions and don’t plan to improve them.',
        'You expect instant mass footfall rather than steady long-stays and community.',
      ],
      deliverables: [
        'Nomad Ready report & improvement list',
        'English info & menu/service descriptions',
        'Nomad-friendly signage & hosting SOP',
        'District map & programme plan',
        'Global community & media exposure plan',
        'Multi-store co-creation results report',
      ],
    },
    ja: {
      navLabel: '拠点・地域事業者',
      eyebrow: '拠点・地域事業者 · デジタルノマドフレンドリーな拠点',
      title: 'デジタルノマドフレンドリーな拠点・事業者づくりと宿泊施設の国際化コンサルティング',
      lead: '宿泊施設、カフェ、コワーキングスペース、老舗、地域ブランドが、デジタルノマドフレンドリーな拠点・事業者となり、海外のリモートワーカーに見つけてもらい、滞在し、消費してもらえるよう支援します。改善項目はNomad Readyメソッドに沿ってチェックリスト化し、項目ごとに検収できます。',
      metaDescription: 'Twouringは、商店街、宿泊施設、カフェ、地域ブランドのデジタルノマドフレンドリー化と国際化を支援します。Nomad Ready事業者診断、英語情報の整備、イベント設計、複数店舗での共創に対応し、自治体・商店街・協会の予算での実施も可能です。',
      highlights: [
        'ノマドフレンドリーな拠点への改善',
        '宿泊施設の国際化と英語情報',
        'Nomad Ready認証前の支援',
      ],
      painTitle: '海外人材を受け入れたいが、見つけてもらえない',
      painPoints: [
        'デジタルノマドフレンドリーな店舗になりたいが、英語情報も受け入れの流れもない。',
        '空間、通信環境、電源、動線が「ノマドフレンドリー」と言えるのか判断できない。',
        'Googleビジネスプロフィール、SNS、イベント情報が分散しており、海外のお客様に見つけてもらえない。',
        '宿泊施設を国際化したいが、情報やサービスの改善を何から始めればよいかわからない。',
      ],
      solutionTitle: '店舗をデジタルノマドフレンドリーな拠点に',
      solutionLead: '海外のリモートワーカーに必要なのはWi-Fiだけではありません。信頼できる情報、滞在できる空間、参加できるコミュニティ、そして地域を理解するための入口です。TwouringはNomad Readyメソッドにより、これらを項目ごとに検収できる改善チェックリストにまとめます。',
      solutionPoints: [
        '事業者診断：空間、通信環境、電源、英語情報、Googleビジネスプロフィール、動線、コミュニティイベントについて提案します。',
        '宿泊施設の国際化：英語ページ、メニュー・サービス説明、ノマド向け情報、イベントと露出の計画。',
        '複数店舗・商店街での共創：10〜20店舗のノマドフレンドリー事業者の導入、マップ、イベント、メディア、海外コミュニティへのプロモーション。',
        '拠点運営顧問：イベント企画、コミュニティ運営、会員プラン、パートナー開拓。',
        'Nomad Ready認証前の支援：基準チェック、改善リスト、研修、紹介ページの提案。',
      ],
      pitch: '地域の事業者が情報と受け入れの流れを整え、海外のリモートワーカーに見つけてもらい、理解され、滞在し、消費してもらえるよう支援します。',
      packagesTitle: 'デジタルノマドフレンドリー拠点づくりのステップ',
      packagesNote: '単独店舗での診断から、商店街単位での一括導入まで対応します。自治体、商店街、協会のプロジェクト予算で実施されるケースが多くあります。',
      packages: [
        {
          name: 'Nomad Ready事業者診断',
          price: 'NTD 40,000〜',
          desc: '空間、通信環境、電源、英語情報、Googleビジネスプロフィール、動線、コミュニティイベントに関する提案。',
        },
        {
          name: '店舗国際化パッケージ',
          price: 'NTD 120,000〜',
          desc: '英語ページ、メニュー・サービス説明、ノマド向け情報、イベント設計、露出計画。',
        },
        {
          name: '複数店舗・商店街共創プロジェクト',
          price: 'NTD 1,000,000〜（10〜20店舗）',
          desc: '10〜20店舗の導入、マップ、イベント、メディア、海外コミュニティへのプロモーション、成果報告。',
        },
      ],
      priceFootnote: jaFootnote + ' 「拠点運営顧問（NTD 80,000〜120,000／月）」も組み合わせ可能です。多くはグループ単位で実施し、自治体、商店街、協会の予算で導入されています。',
      goodFit: [
        '宿泊施設、カフェ、飲食店、コワーキングスペース、地域ブランド。',
        'デジタルノマドフレンドリーな拠点として一体的に底上げしたい商店街、地方創生チーム、観光圏。',
        '海外人材を受け入れたく、情報や受け入れの流れを見直す意欲のある事業者。',
      ],
      notFit: [
        '単発の露出だけを求め、情報や受け入れの流れを見直すつもりがない場合。',
        '基本的な空間や通信環境が整っておらず、改善の予定もない場合。',
        '安定した長期滞在やコミュニティづくりではなく、すぐに大量の集客を期待する場合。',
      ],
      deliverables: [
        'Nomad Ready診断報告書と改善リスト',
        '英語情報とメニュー・サービス説明',
        'ノマドフレンドリー表示と受け入れSOP',
        '商店街マップとイベント企画',
        '海外コミュニティ・メディア露出計画',
        '複数店舗共創の成果報告書',
      ],
    },
  },

  international: {
    path: '/services/international',
    icon: 'globe',
    zh: {
      navLabel: '國際交流與參訪',
      eyebrow: '國際 · 城市與企業交流',
      title: '國際單位：亞洲城市交流與參訪顧問',
      lead: '運用日本、韓國、東南亞城市與新創、數位遊牧社群資源，設計 B2B 交流、對接與內容，並規劃參訪結束後的合作步驟。',
      metaDescription:
        '遊遊為海外城市、新創基地、企業代表團與公協會設計亞洲城市交流與參訪：議程設計、單位對接、主持與成果報告。提供國際企業參訪規劃。服務內容為 B2B 交流設計，不含旅遊行程。',
      highlights: ['日韓與東南亞城市連結', 'B2B 交流，不販售旅遊商品', '議程設計與單位對接'],
      painTitle: '想交流，卻只買到一趟行程',
      painPoints: [
        '想了解台灣的數位遊牧、新創、地方創生與 AI 產業，卻沒有對接窗口。',
        '參訪變成走馬看花，沒有實質對接與後續合作。',
        '缺乏雙語議程設計、主持與成果紀錄。',
        '想要跨國合作，但不知道從哪個城市、單位與社群切入。',
      ],
      solutionTitle: '把參訪設計成可延續的跨國合作',
      solutionLead:
        '遊遊提供 B2B 交流設計、顧問、對接與內容，不販售旅行商品。涉及交通住宿時，與合格旅行業合作並另行拆約。',
      solutionPoints: [
        '交流議程設計：依目標設計拜訪單位、主題與對接名單。',
        '單位對接與接待：城市、政府、新創基地、社群與場域的媒合。',
        '主持與紀錄：雙語主持、簡報設計與成果摘要。',
        '跨國合作規劃：MOU 建議、後續行動與合作架構。',
        '海外代表團顧問：行前簡報、現場支援與成果報告。',
      ],
      pitch: '我們設計台灣與亞洲城市之間的數位遊牧、新創、人才與場域交流，並規劃參訪後的合作步驟。',
      packagesTitle: '國際交流服務階梯',
      packagesNote: '從半日交流到跨國合作專案，依規模、單位數與是否含國際對接報價。',
      packages: [
        {
          name: '半日交流設計',
          price: 'NTD 100,000 起',
          desc: '單一場域參訪、對接、簡報設計、主持與紀錄。',
        },
        {
          name: '一日城市參訪顧問',
          price: 'NTD 200,000 起',
          desc: '2–3 個單位拜訪、接待安排、議程設計與成果摘要。',
        },
        {
          name: '國際城市合作專案',
          price: 'NTD 500,000 起',
          desc: '跨國城市／政府／新創／社群合作規劃、MOU 建議與後續行動。',
        },
      ],
      priceFootnote:
        zhFootnote +
        ' 另有「海外代表團顧問（NTD 300,000 起）」可搭配；涉及交通住宿之旅遊服務由合格旅行業承接並另行拆約。',
      goodFit: [
        '海外城市、新創基地、企業代表團、商會與公協會。',
        '臺灣地方政府與國際交流單位。',
        '想了解台灣數位遊牧、新創、地方創生與 AI 產業的組織。',
      ],
      notFit: [
        '只想找旅行社代訂交通與住宿行程。',
        '想把國際交流當一般旅遊商品包裝。',
        '沒有明確交流目標、單純觀光的團體。',
      ],
      deliverables: [
        '交流議程與拜訪單位名單',
        '對接名單與媒合安排',
        '雙語簡報與主持',
        '現場接待與支援',
        'MOU 建議與後續行動清單',
        '成果摘要與案例',
      ],
    },
    en: {
      navLabel: 'International Exchange',
      eyebrow: 'International · city & corporate exchange',
      title: 'International units: Asia city exchange & visit advisory',
      lead: 'Using city, startup and digital-nomad community links across Japan, Korea and Southeast Asia, we design B2B exchange, matchmaking and content, and plan the collaboration steps that follow a visit.',
      metaDescription:
        'Twouring designs Taiwan business delegation visits and international corporate exchange programmes for overseas cities, startup hubs and associations: agenda design, matchmaking, hosting and reporting. B2B exchange design, not travel packages.',
      highlights: ['Japan, Korea & SEA city links', 'B2B exchange, not tourism', 'Agenda design & matchmaking'],
      painTitle: 'You want exchange but only get an itinerary',
      painPoints: [
        'You want to understand Taiwan’s nomad, startup, revitalisation and AI sectors but have no contact point.',
        'Visits become sightseeing, with no real matchmaking or follow-up.',
        'You lack bilingual agenda design, hosting and reporting.',
        'You want cross-border collaboration but don’t know which city, unit or community to start with.',
      ],
      solutionTitle: 'Design the visit as lasting collaboration',
      solutionLead:
        'We provide B2B exchange design, advisory, matchmaking and content, and do not sell travel products. When transport and lodging are involved, we work with a licensed agency under a separate contract.',
      solutionPoints: [
        'Agenda design: visiting units, themes and a matchmaking list shaped around your goals.',
        'Matchmaking & hosting: introductions to cities, governments, startup hubs, community and venues.',
        'Hosting & records: bilingual facilitation, deck design and a results summary.',
        'Cross-border planning: MOU recommendations, follow-up actions and a collaboration framework.',
        'Delegation advisory: pre-trip briefing, on-site support and a results report.',
      ],
      pitch: 'We design digital-nomad, startup, talent and venue exchange between Taiwan and Asian cities, and plan the collaboration steps after the visit.',
      packagesTitle: 'International exchange ladder',
      packagesNote: 'From a half-day exchange to a cross-border project, priced by scale, number of units and international matchmaking.',
      packages: [
        {
          name: 'Half-day exchange design',
          price: 'from NTD 100,000',
          desc: 'Single-venue visit, matchmaking, deck design, facilitation and records.',
        },
        {
          name: 'One-day city visit advisory',
          price: 'from NTD 200,000',
          desc: 'Visits to 2–3 units, hosting, agenda design and a results summary.',
        },
        {
          name: 'International city collaboration',
          price: 'from NTD 500,000',
          desc: 'Cross-border city/government/startup/community planning, MOU recommendations and follow-up.',
        },
      ],
      priceFootnote:
        enFootnote +
        ' An overseas delegation advisory (from NTD 300,000) can be added; travel services involving transport and lodging are handled by a licensed agency under a separate contract.',
      goodFit: [
        'Overseas cities, startup hubs, corporate delegations, chambers and associations.',
        'Taiwanese local governments and international-exchange units.',
        'Organisations wanting to understand Taiwan’s nomad, startup, revitalisation and AI sectors.',
      ],
      notFit: [
        'You just want a travel agency to book transport and lodging.',
        'You want international exchange packaged as ordinary tourism.',
        'You have no clear exchange goal and only want sightseeing.',
      ],
      deliverables: [
        'Exchange agenda & visiting-unit list',
        'Matchmaking list & arrangements',
        'Bilingual deck & facilitation',
        'On-site hosting & support',
        'MOU recommendations & follow-up list',
        'Results summary & case',
      ],
    },
    ja: {
      navLabel: '国際交流・視察',
      eyebrow: '国際 · 都市・企業間交流',
      title: '海外機関向け：アジア都市交流・視察コンサルティング',
      lead: '日本、韓国、東南アジアの都市やスタートアップ、デジタルノマドコミュニティとのネットワークを活かし、B2Bの交流、マッチング、コンテンツを設計します。視察後の協働の進め方まで計画します。',
      metaDescription: 'Twouringは、海外の都市、スタートアップ拠点、企業視察団、業界団体向けに、アジア都市交流・視察プログラムを設計します。アジェンダ設計、訪問先とのマッチング、進行、成果報告に対応します。提供するのは旅行商品ではなく、B2B交流の設計です。',
      highlights: [
        '日韓・東南アジアの都市ネットワーク',
        '旅行商品ではなくB2B交流',
        'アジェンダ設計とマッチング',
      ],
      painTitle: '交流したいのに、手に入るのは旅程だけ',
      painPoints: [
        '台湾のデジタルノマド、スタートアップ、地方創生、AI分野を理解したいが、窓口がない。',
        '視察が表面的な見学で終わり、実質的なマッチングや継続的な協働につながらない。',
        '二言語でのアジェンダ設計、進行、成果記録の体制がない。',
        '国際協働を進めたいが、どの都市、機関、コミュニティから着手すべきかわからない。',
      ],
      solutionTitle: '視察を、継続する国際協働として設計する',
      solutionLead: 'Twouringが提供するのは、B2B交流の設計、コンサルティング、マッチング、コンテンツであり、旅行商品ではありません。交通・宿泊が伴う場合は登録旅行業者と連携し、契約を分けます。',
      solutionPoints: [
        '交流アジェンダ設計：目的に合わせて訪問先、テーマ、マッチング先リストを設計します。',
        'マッチングと受け入れ：都市、行政、スタートアップ拠点、コミュニティ、拠点とのマッチングを行います。',
        '進行と記録：二言語での進行、プレゼン資料の設計、成果要旨の作成。',
        '国際協働の計画：MOUの提案、今後のアクション、協働の枠組み。',
        '海外視察団向け顧問：事前ブリーフィング、現地サポート、成果報告。',
      ],
      pitch: '台湾とアジアの都市をつなぐデジタルノマド、スタートアップ、人材、拠点の交流を設計し、視察後の協働の進め方まで計画します。',
      packagesTitle: '国際交流サービスのステップ',
      packagesNote: '半日の交流から国際協働プロジェクトまで、規模、訪問先の数、国際マッチングの有無に応じてお見積りします。',
      packages: [
        {
          name: '半日交流設計',
          price: 'NTD 100,000〜',
          desc: '単一拠点の視察、マッチング、プレゼン資料設計、進行、記録。',
        },
        {
          name: '1日都市視察コンサルティング',
          price: 'NTD 200,000〜',
          desc: '2〜3機関への訪問、受け入れ調整、アジェンダ設計、成果要旨。',
        },
        {
          name: '国際都市協働プロジェクト',
          price: 'NTD 500,000〜',
          desc: '国をまたぐ都市・行政・スタートアップ・コミュニティ間の協働計画、MOUの提案、今後のアクション。',
        },
      ],
      priceFootnote: jaFootnote + ' 「海外視察団向け顧問（NTD 300,000〜）」も組み合わせ可能です。交通・宿泊を伴う旅行サービスは登録旅行業者が担当し、別契約とします。',
      goodFit: [
        '海外の都市、スタートアップ拠点、企業視察団、商工会議所、業界団体。',
        '台湾の地方自治体および国際交流機関。',
        '台湾のデジタルノマド、スタートアップ、地方創生、AI分野を理解したい組織。',
      ],
      notFit: [
        '交通・宿泊の手配だけを旅行会社に依頼したい場合。',
        '国際交流を一般的な旅行商品として扱いたい場合。',
        '明確な交流目的がなく、観光のみを目的とする団体。',
      ],
      deliverables: [
        '交流アジェンダと訪問先リスト',
        'マッチング先リストと調整',
        '二言語のプレゼン資料と進行',
        '現地での受け入れとサポート',
        'MOUの提案と今後のアクションリスト',
        '成果要旨と事例',
      ],
    },
  },
};
