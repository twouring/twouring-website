/**
 * 七大服務入口內容 — 對應《twouring_business_strategy_2026.md》(v2 操作手冊版) §2.2–2.5。
 * 價格依策略報告「定價（決定）」表轉錄；對外標示為「起價」，正式以書面報價與合約為準。
 */
export type ServiceSlug =
  | 'city'
  | 'aiConsulting'
  | 'aiTraining'
  | 'aiWorkflow'
  | 'remoteWork'
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
  '以上為服務起點價格，實際依專案範圍、合作單位與交付深度報價，正式合作以書面報價與合約為準。';
const enFootnote =
  'Prices shown are starting points. Actual quotes depend on scope, partners and delivery depth; engagements are confirmed by written quote and contract.';

export const services: Record<
  ServiceSlug,
  { path: string; icon: string; zh: ServiceContent; en: ServiceContent }
> = {
  city: {
    path: '/services/city',
    icon: 'city',
    zh: {
      navLabel: '城市與政府',
      eyebrow: '城市與政府 · 數位遊牧城市策略',
      title: '城市與政府：數位遊牧城市策略顧問',
      lead: '協助地方政府與城市，把數位遊牧、國際人才與在地消費，設計成可執行、可驗收、可持續的政策、活動、場域與 KPI。',
      metaDescription:
        '遊遊提供數位遊牧城市策略顧問，協助地方政府觀光、產發、青年與地方創生單位，把數位遊牧從一次活動升級成城市人才、觀光與國際品牌策略。提供成熟度診斷、策略規劃、據點啟動與年度顧問。',
      highlights: ['花蓮、台東等政府實績', '場域盤點與國際社群連結', '可驗收 KPI 與成果報告'],
      painTitle: '城市與地方單位常見的處境',
      painPoints: [
        '想吸引國際人才，但不知道如何從一次活動變成長期策略。',
        '有地方創生、觀光、青年或國際交流預算，卻缺乏數位遊牧專業。',
        '缺乏場域盤點、商家串聯、國際社群接觸與 KPI 報告能力。',
        '活動辦完沒有留存資料、商業轉換與社群延續。',
      ],
      solutionTitle: '把一次活動，變成一套城市策略',
      solutionLead:
        '遊遊以政府專案實績、TDNA 生態系與國際城市連結為基礎，把城市的數位遊牧議題拆成可執行的策略、活動、招商與營運模型。',
      solutionPoints: [
        '場域與資源盤點：把可用空間、商家、社群與國際接觸點整理成遊牧資源地圖。',
        '利害關係人訪談：對齊觀光、產發、青年、地方創生窗口的目標與 KPI。',
        '策略與招商架構：3–6 個月策略、活動設計、社群營運與預算建議。',
        '據點啟動與年度 PMO：例會、商家串聯、國際社群連結、成果追蹤與報告。',
        '補助與標案整合：把題目設計成能執行、能驗收、能延伸的計畫，而非只代寫文件。',
      ],
      pitch: '我們協助地方政府把數位遊牧從一次活動，升級成城市人才、觀光、地方商業與國際品牌策略。',
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
        '有預算、有決策者，想把國際人才變成長期策略的單位。',
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
      lead: 'We help local governments turn digital nomadism, international talent and local spending into executable, measurable and lasting policy, programmes, venues and KPIs.',
      metaDescription:
        'Twouring provides digital-nomad city strategy advisory for tourism, economic-development, youth and regional-revitalisation offices — upgrading nomadism from a one-off event into a city talent, tourism and international-brand strategy.',
      highlights: ['Track record with Hualien & Taitung', 'Venue mapping & global community links', 'Measurable KPIs & reporting'],
      painTitle: 'Where cities and local units usually get stuck',
      painPoints: [
        'You want to attract international talent but cannot move from a single event to a long-term strategy.',
        'You have tourism, youth or regional-revitalisation budget but lack digital-nomad expertise.',
        'You lack venue mapping, business linkage, global community reach and KPI reporting.',
        'After the event there is no retained data, business conversion or community continuity.',
      ],
      solutionTitle: 'Turn one event into a city strategy',
      solutionLead:
        'Built on real government projects, the TDNA ecosystem and international city links, we break the digital-nomad agenda into executable strategy, programmes, investment attraction and operating models.',
      solutionPoints: [
        'Venue & resource mapping: spaces, businesses, community and global touchpoints into one nomad resource map.',
        'Stakeholder interviews: aligning tourism, economic-development, youth and revitalisation goals and KPIs.',
        'Strategy & investment framework: a 3–6 month strategy, programme design, community model and budget.',
        'Hub launch & annual PMO: cadence, business linkage, global community links, tracking and reporting.',
        'Grants & tenders: shaping topics into projects that can be executed, audited and extended — not just paperwork.',
      ],
      pitch: 'We help local governments upgrade digital nomadism from a one-off event into a city talent, tourism, local-business and international-brand strategy.',
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
  },

  aiConsulting: {
    path: '/services/ai-consulting',
    icon: 'ai',
    zh: {
      navLabel: '企業 AI 導入',
      eyebrow: '企業 · AI 導入顧問',
      title: '企業 AI 導入顧問',
      lead: '先診斷營運與流程，再規劃 AI 導入路線圖，避免為了 AI 而 AI。從機會盤點、90 天行動計畫到 KPI 與 PMO，把 AI 導入變成可驗收的企業專案。',
      metaDescription:
        '遊遊提供企業 AI 導入顧問，協助中小企業與服務業盤點流程、制定 90 天導入路線圖與 KPI。服務含 AI 營運健檢、工作流導入顧問、專案導入 PM 與 PMO，技術交付由適才科技承接。',
      highlights: ['先診斷、不先賣系統', '90 天路線圖與 KPI', '技術交付由適才／Adata 承接'],
      painTitle: '想用 AI，卻不知從何開始',
      painPoints: [
        '不知道哪些流程值得用 AI、從哪裡開始。',
        '怕買錯工具、導入後員工不用、變成另一個沒人開的系統。',
        '缺乏把 AI 專案拆成可執行里程碑、KPI 與 PMO 的顧問。',
        '缺乏產品、流程、技術與 PM 之間的「翻譯者」。',
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
      pitch: '不要先買系統，先買診斷；不要先追 AI 熱潮，先建立可驗收的 90 天導入路線圖與 KPI。',
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
        '需要 90 天路線圖、KPI 與 PMO，而非只買一套系統的公司。',
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
      lead: 'Diagnose operations and processes first, then plan an AI adoption roadmap — no AI for its own sake. From opportunity mapping and a 90-day action plan to KPIs and PMO, we turn AI adoption into an auditable corporate project.',
      metaDescription:
        'Twouring provides enterprise AI adoption advisory for SMEs and service businesses: process audit, 90-day adoption roadmap and KPIs. Services include AI operations health-check, workflow adoption advisory and project PM with PMO; technical delivery via Adata.',
      highlights: ['Diagnose before selling systems', '90-day roadmap & KPIs', 'Tech delivery via Adata'],
      painTitle: 'You want AI but don’t know where to start',
      painPoints: [
        'You don’t know which processes are worth automating, or where to begin.',
        'You fear buying the wrong tool and ending up with another system nobody opens.',
        'You lack an advisor who can break an AI project into milestones, KPIs and PMO.',
        'You lack a translator between product, process, technology and project management.',
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
      pitch: 'Don’t buy a system first — buy a diagnosis. Don’t chase the AI hype — build an auditable 90-day adoption roadmap with KPIs.',
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
        'Teams that need a 90-day roadmap, KPIs and PMO — not just another system purchase.',
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
  },

  aiTraining: {
    path: '/services/ai-training',
    icon: 'bulb',
    zh: {
      navLabel: 'AI 企業內訓',
      eyebrow: '企業 · AI 教育訓練',
      title: 'AI 企業內訓與高階主管工作坊',
      lead: '以實際案例與現場演練，協助高階主管與團隊建立 AI 導入共識、判斷力與內部推動能力。不是賣工具，是建立能落地 AI 的組織能力。',
      metaDescription:
        '遊遊提供 AI 企業內訓與高階主管工作坊，協助企業建立 AI 導入共識與內部推動能力。含高階主管 AI 工作坊、部門團隊訓練包，可依產業與職能客製。',
      highlights: ['高階主管工作坊', '部門團隊訓練包', '案例演練、非純簡報'],
      painTitle: '主管聽過 AI，團隊卻推不動',
      painPoints: [
        '高階主管對 AI 有興趣，但缺乏共同語言與導入判斷力。',
        '內訓變成純簡報，結束後沒有人知道下一步該做什麼。',
        '各部門對 AI 期待不同，缺乏跨部門共識與推動窗口。',
        '想培養內部種子，但不知道該教什麼、怎麼教。',
      ],
      solutionTitle: '用工作坊建立共識，用內訓培養推動力',
      solutionLead:
        '遊遊以企業實際流程與案例為素材，設計高階主管工作坊與部門團隊訓練。讓決策者看見 ROI 與風險，讓執行者帶走可操作的下一步。',
      solutionPoints: [
        '高階主管 AI 工作坊：以案例與演練，建立導入路線圖與內部共識。',
        '部門團隊訓練：依職能設計 AI 應用場景、工具操作與流程改造練習。',
        '種子教練培訓：培養內部推動窗口，支援導入後的持續推廣。',
        '客製化教材：依產業、規模與現有工具調整案例與演練內容。',
        '課後行動計畫：產出 30 天內部推動清單與分工建議。',
      ],
      pitch: 'AI 導入不是 IT 的事，是組織能力的事。先讓主管有判斷力，再讓團隊有推動力。',
      packagesTitle: 'AI 企業內訓服務方案',
      packagesNote: '可依單場工作坊或年度訓練包合作，依人數、產業與客製深度報價。',
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
      priceFootnote: zhFootnote + ' 可搭配 AI 營運健檢或工作流導入顧問，形成「診斷 → 共識 → 導入」完整路徑。',
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
      lead: 'Through real cases and hands-on exercises, we help executives and teams build AI adoption alignment, judgement and internal drive. We don’t sell tools — we build the organisational capacity to land AI.',
      metaDescription:
        'Twouring offers AI corporate training and executive workshops to build adoption alignment and internal drive. Includes executive AI workshops and team training packages, customised by industry and function.',
      highlights: ['Executive workshops', 'Team training packages', 'Case-based, not slide-only'],
      painTitle: 'Executives have heard about AI — the team still can’t move',
      painPoints: [
        'Leadership is interested in AI but lacks a shared language and adoption judgement.',
        'Training becomes slide-only — nobody knows what to do next.',
        'Departments have different AI expectations with no cross-team alignment or champions.',
        'You want internal seed trainers but don’t know what to teach or how.',
      ],
      solutionTitle: 'Build alignment in workshops, build drive in training',
      solutionLead:
        'Using your real processes and cases, we design executive workshops and team training so decision-makers see ROI and risk, and practitioners leave with actionable next steps.',
      solutionPoints: [
        'Executive AI workshop: cases and exercises to build a roadmap and internal alignment.',
        'Team training: AI use cases, tool practice and process-redesign exercises by function.',
        'Seed-coach training: building internal champions to sustain adoption after the session.',
        'Custom materials: cases and exercises tailored to your industry, scale and existing tools.',
        'Post-session action plan: a 30-day internal rollout checklist and role split.',
      ],
      pitch: 'AI adoption is an organisational capability, not an IT purchase. Give executives judgement first, then give teams the drive to act.',
      packagesTitle: 'AI corporate training programmes',
      packagesNote: 'Single workshops or annual training packages, priced by headcount, industry and customisation depth.',
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
        ' Can be paired with an AI operations health-check or workflow adoption advisory for a full diagnose → align → adopt path.',
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
  },

  aiWorkflow: {
    path: '/services/ai-workflow-automation',
    icon: 'route',
    zh: {
      navLabel: 'AI 流程自動化',
      eyebrow: '企業 · AI 工作流自動化',
      title: 'AI 流程自動化顧問',
      lead: '找出公司最值得自動化的三個工作流，估算 ROI，再落到工具導入、內部訓練與成效驗收。不追熱潮，只自動化真正省時、省錢、創造收入的流程。',
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
      pitch: '不要自動化所有流程，只自動化最值得的三個。先算 ROI，再導入，再驗收。',
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
        '需要 ROI 指標與持續優化，而非一次性導入的團隊。',
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
      lead: 'We find the three workflows most worth automating, estimate ROI, then land tool rollout, internal training and impact sign-off. No hype — only automate what truly saves time, cuts cost or creates revenue.',
      metaDescription:
        'Twouring provides AI workflow automation advisory: find the three workflows most worth automating, estimate ROI and deliver rollout. Includes process audit, automation design, tool adoption and impact tracking.',
      highlights: ['Find 3 workflows worth automating', 'ROI estimate & sign-off', 'From tool rollout to impact tracking'],
      painTitle: 'Many processes — unclear which ones deserve automation',
      painPoints: [
        'Repetitive work is everywhere but you don’t know where to start automating.',
        'Automation is built but nobody maintains it, or staff bypass the system.',
        'You can’t quantify time saved or cost reduced by automation.',
        'You bought automation tools but didn’t redesign the process or define sign-off criteria.',
      ],
      solutionTitle: 'Find three workflows worth automating — then calculate ROI',
      solutionLead:
        'In a two-to-three week audit we score workflows on time cost, error rate and revenue impact, pick the top three, then design rollout and ROI sign-off metrics.',
      solutionPoints: [
        'Process audit & prioritisation: interviews, time-cost analysis, three high-ROI workflows.',
        'Automation design: process redesign, tool selection, human-machine split and exception handling.',
        'Tool rollout & testing: pilot, staff training, fixes and go-live.',
        'ROI tracking: before/after metrics with regular reviews of hours saved and error rates.',
        'Expansion planning: after the first three stabilise, assess the next automation candidates.',
      ],
      pitch: 'Don’t automate everything — automate the three most worth it. Estimate ROI first, roll out second, sign off third.',
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
        'Organisations that need ROI metrics and continuous improvement, not a one-off rollout.',
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
  },

  remoteWork: {
    path: '/services/remote-work-consulting',
    icon: 'users',
    zh: {
      navLabel: '遠距及混合工作',
      eyebrow: '企業 · 遠距及混合工作制度',
      title: '遠距及混合工作制度顧問',
      lead: '協助企業建立可運作的遠距與混合工作制度：從政策設計、協作流程、績效管理到文化與工具配套，讓團隊不在辦公室也能高效協作。',
      metaDescription:
        '遊遊提供遠距及混合工作制度顧問，協助企業設計遠距政策、協作流程、績效管理與工具配套。適合想建立或優化混合工作模式的中小企業與服務業。',
      highlights: ['政策與制度設計', '協作流程與績效管理', '工具配套與文化轉型'],
      painTitle: '遠距做了，制度卻沒跟上',
      painPoints: [
        '員工可以在家工作，但缺乏明確政策、出勤與績效標準。',
        '遠距後溝通成本上升、會議變多、協作品質下降。',
        '主管不知道如何管理看不到的團隊，績效評估變成形式。',
        '工具很多但沒有統一規範，資安與資料管理有漏洞。',
      ],
      solutionTitle: '建立可運作的遠距與混合工作制度',
      solutionLead:
        '遊遊從政策、流程、工具到文化四個層面，協助企業設計適合自身規模與產業的混合工作模式，而非複製別人的遠距政策。',
      solutionPoints: [
        '制度診斷：盤點現有政策、協作習慣、工具使用與痛點。',
        '政策設計：遠距/混合工作政策、出勤規範、資安要求與例外處理。',
        '協作流程：會議規範、非同步溝通、專案管理與知識共享。',
        '績效管理：遠距環境下的目標設定、回饋機制與主管培訓。',
        '試運行與調整：小範圍試行、收集回饋、修訂制度並全面推廣。',
      ],
      pitch: '遠距不是「讓員工在家上班」，是建立一套讓團隊不在同一空間也能高效協作的制度。',
      packagesTitle: '遠距及混合工作服務方案',
      packagesNote: '從制度診斷到全面導入，依公司規模、產業特性與現有成熟度分階段合作。',
      packages: [
        {
          name: '遠距制度健檢',
          price: 'NTD 80,000 起',
          desc: '政策盤點、協作習慣訪談、痛點診斷與改善建議。',
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
      lead: 'We help companies build a working remote and hybrid model: from policy design, collaboration flow and performance management to culture and tooling — so teams collaborate well even when they’re not in the same room.',
      metaDescription:
        'Twouring provides remote and hybrid work policy advisory: remote policy design, collaboration flow, performance management and tooling. For SMEs and service businesses building or improving a hybrid model.',
      highlights: ['Policy & system design', 'Collaboration flow & performance', 'Tooling & culture change'],
      painTitle: 'You went remote — the system didn’t follow',
      painPoints: [
        'Staff can work from home but there is no clear policy, attendance or performance standard.',
        'Communication cost rose, meetings multiplied and collaboration quality dropped.',
        'Managers don’t know how to lead invisible teams; performance reviews became formalities.',
        'Many tools but no unified rules — security and data-management gaps.',
      ],
      solutionTitle: 'Build a remote and hybrid model that actually works',
      solutionLead:
        'Across policy, process, tooling and culture, we design a hybrid model that fits your size and industry — not a copy of someone else’s remote policy.',
      solutionPoints: [
        'Policy diagnostic: audit current rules, collaboration habits, tooling and pain points.',
        'Policy design: remote/hybrid policy, attendance rules, security requirements and exceptions.',
        'Collaboration flow: meeting norms, async communication, project management and knowledge sharing.',
        'Performance management: goal-setting, feedback and manager training in a remote context.',
        'Pilot & adjust: small-scale trial, feedback collection, policy revision and full rollout.',
      ],
      pitch: 'Remote work isn’t “letting people work from home” — it’s building a system for high-quality collaboration when the team isn’t in the same space.',
      packagesTitle: 'Remote & hybrid work programmes',
      packagesNote: 'From a policy diagnostic to full rollout, staged by company size, industry and current maturity.',
      packages: [
        {
          name: 'Remote policy health-check',
          price: 'from NTD 80,000',
          desc: 'Policy audit, collaboration interviews, pain-point diagnosis and improvement recommendations.',
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
        ' This service focuses on remote and hybrid work policy only — not AI or workflow automation (see our AI adoption advisory separately).',
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
  },

  venue: {
    path: '/services/venue',
    icon: 'venue',
    zh: {
      navLabel: '場域與商家',
      eyebrow: '場域與商家 · 數位遊牧友善場域',
      title: '數位遊牧友善場域、友善商家與旅宿國際化顧問',
      lead: '協助旅宿、咖啡廳、共同工作空間、老店與地方品牌，成為數位遊牧友善場域與友善商家，讓國際遠距工作者找得到、留得住、願意消費。以 Nomad Ready 方法做可驗收的國際化改造。',
      metaDescription:
        '遊遊提供數位遊牧友善場域、友善商家與旅宿國際化顧問，協助商圈、旅宿、咖啡廳與地方品牌進行 Nomad Ready 改造：商家健檢、英文資訊、活動設計與多店共創，可由政府、商圈或協會買單。',
      highlights: ['數位遊牧友善場域改造', '旅宿國際化與英文資訊', 'Nomad Ready 認證前輔導'],
      painTitle: '想接待國際人才，卻缺少入口',
      painPoints: [
        '想成為數位遊牧友善商家，但沒有英文資訊與接待流程。',
        '空間、網路、插座、動線不清楚是否「遊牧友善」。',
        'Google 商家、社群與活動資訊零散，國際客找不到。',
        '旅宿想國際化，但不知道從哪裡開始改造資訊與服務。',
      ],
      solutionTitle: '把商家變成數位遊牧友善場域與國際接待節點',
      solutionLead:
        '國際遠距工作者不只需要 Wi-Fi，他們需要可信任的資訊、可停留的空間、可參與的社群，以及理解在地的入口。遊遊以 Nomad Ready 方法，把這些做成可驗收的改造清單。',
      solutionPoints: [
        '商家健檢：空間、網路、插座、英文資訊、Google 商家、動線與社群活動建議。',
        '旅宿國際化改造：英文頁面、菜單與服務說明、遊牧友善資訊、活動與曝光規劃。',
        '多店／商圈共創：10–20 家友善商家導入、地圖、活動、媒體與國際社群推廣。',
        '場域營運顧問：活動企劃、社群經營、會員方案與合作夥伴開發。',
        'Nomad Ready 認證前輔導：標準檢核、改善清單、教育訓練與展示頁建議。',
      ],
      pitch: '把地方商家從「被動等旅客」，變成「可被國際遠距工作者找到、理解、停留與消費」的數位遊牧友善場域。',
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
      lead: 'We help stays, cafés, coworking spaces, legacy shops and local brands become nomad-friendly venues and businesses that international remote workers can find, stay at and spend with — using the Nomad Ready method for auditable internationalisation.',
      metaDescription:
        'Twouring helps business districts, stays, cafés and local brands become nomad-friendly venues and businesses: Nomad Ready health-check, English information, programme design and multi-store co-creation, often funded by government or districts.',
      highlights: ['Nomad-friendly venue upgrades', 'Hospitality internationalisation', 'Pre-Nomad Ready coaching'],
      painTitle: 'You want to host international talent but lack the entry point',
      painPoints: [
        'You want to be a nomad-friendly business but have no English information or hosting flow.',
        'It’s unclear whether your space, Wi-Fi, power and layout are “nomad-friendly”.',
        'Your Google Business, social and event info is scattered — international guests can’t find you.',
        'Your stay wants to internationalise but you don’t know where to start with information and service.',
      ],
      solutionTitle: 'Turn your venue into a nomad-friendly hosting node',
      solutionLead:
        'Remote workers need more than Wi-Fi: trustworthy information, a place to stay, a community to join and a way to understand the local scene. With the Nomad Ready method, we turn these into an auditable upgrade checklist.',
      solutionPoints: [
        'Venue health-check: space, Wi-Fi, power, English info, Google Business, layout and community ideas.',
        'Hospitality internationalisation: English pages, menu and service descriptions, nomad-friendly info and exposure plan.',
        'Multi-store co-creation: onboarding 10–20 nomad-friendly businesses with maps, events, media and global community promotion.',
        'Venue operations advisory: programming, community building, membership and partner development.',
        'Pre-certification coaching: standard checklist, improvement list, training and a showcase page.',
      ],
      pitch: 'Move local businesses from “waiting for tourists” to nomad-friendly venues that international remote workers can find, understand, stay at and spend with.',
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
  },

  international: {
    path: '/services/international',
    icon: 'globe',
    zh: {
      navLabel: '國際交流與參訪',
      eyebrow: '國際 · 城市與企業交流',
      title: '國際單位：亞洲城市交流與參訪顧問',
      lead: '運用日本、韓國、東南亞城市與新創、數位遊牧社群資源，設計 B2B 交流、對接與內容，把一趟參訪變成可延續的跨國合作。',
      metaDescription:
        '遊遊為海外城市、新創基地、企業代表團與公協會設計亞洲城市交流與參訪：議程設計、單位對接、主持與成果報告。提供國際企業參訪規劃，賣的是 B2B 交流設計，非旅遊行程。',
      highlights: ['日韓與東南亞城市連結', 'B2B 交流非旅遊商品', '議程設計與單位對接'],
      painTitle: '想交流，卻只買到一趟行程',
      painPoints: [
        '想理解台灣的數位遊牧、新創、地方創生與 AI 生態系，卻沒有對接窗口。',
        '參訪變成走馬看花，沒有實質對接與後續合作。',
        '缺乏雙語議程設計、主持與成果紀錄。',
        '想要跨國合作，但不知道從哪個城市、單位與社群切入。',
      ],
      solutionTitle: '把參訪設計成可延續的跨國合作',
      solutionLead:
        '遊遊賣的是 B2B 交流設計、顧問、對接與內容，不是旅行商品。涉及交通住宿時與合格旅行業合作並明確拆約，讓你專注在合作本身。',
      solutionPoints: [
        '交流議程設計：依目標設計拜訪單位、主題與對接名單。',
        '單位對接與接待：城市、政府、新創基地、社群與場域的實質媒合。',
        '主持與紀錄：雙語主持、簡報設計與成果摘要。',
        '跨國合作規劃：MOU 建議、後續行動與合作架構。',
        '海外代表團顧問：行前簡報、現場支援與成果報告。',
      ],
      pitch: '我們設計台灣與亞洲城市之間的數位遊牧、新創、人才與場域交流，把一趟參訪變成可延續的跨國合作。',
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
        '台灣地方政府與國際交流單位。',
        '想理解台灣數位遊牧、新創、地方創生與 AI 生態系的組織。',
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
      lead: 'Using city, startup and digital-nomad community links across Japan, Korea and Southeast Asia, we design B2B exchange, matchmaking and content — turning one visit into lasting cross-border collaboration.',
      metaDescription:
        'Twouring designs Taiwan business delegation visits and international corporate exchange programmes for overseas cities, startup hubs and associations: agenda design, matchmaking, hosting and reporting. B2B exchange design, not travel packages.',
      highlights: ['Japan, Korea & SEA city links', 'B2B exchange, not tourism', 'Agenda design & matchmaking'],
      painTitle: 'You want exchange but only get an itinerary',
      painPoints: [
        'You want to understand Taiwan’s nomad, startup, revitalisation and AI ecosystems but have no contact point.',
        'Visits become sightseeing, with no real matchmaking or follow-up.',
        'You lack bilingual agenda design, hosting and reporting.',
        'You want cross-border collaboration but don’t know which city, unit or community to start with.',
      ],
      solutionTitle: 'Design the visit as lasting collaboration',
      solutionLead:
        'We sell B2B exchange design, advisory, matchmaking and content — not travel products. When transport and lodging are involved we work with a licensed agency under a clearly split contract, so you focus on the collaboration.',
      solutionPoints: [
        'Agenda design: visiting units, themes and a matchmaking list shaped around your goals.',
        'Matchmaking & hosting: real introductions to cities, governments, startup hubs, community and venues.',
        'Hosting & records: bilingual facilitation, deck design and a results summary.',
        'Cross-border planning: MOU recommendations, follow-up actions and a collaboration framework.',
        'Delegation advisory: pre-trip briefing, on-site support and a results report.',
      ],
      pitch: 'We design digital-nomad, startup, talent and venue exchange between Taiwan and Asian cities — turning one visit into lasting cross-border collaboration.',
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
        'Organisations wanting to understand Taiwan’s nomad, startup, revitalisation and AI ecosystems.',
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
  },
};
