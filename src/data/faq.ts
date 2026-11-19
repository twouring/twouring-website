/**
 * FAQ 內容 — 供 FAQPage schema 與頁面 FAQ 區塊共用（GEO：可引用答案塊）。
 */
export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaq = {
  zh: [
    {
      q: 'Twouring 遊遊是做什麼的？',
      a: 'Twouring 遊遊（遊遊股份有限公司）是企業 AI 導入與城市數位轉型顧問公司。企業客戶的服務包括 AI 健檢、90 天路線圖、流程自動化與內訓；地方政府的服務包括數位遊牧城市策略、友善場域與國際人才專案。',
    },
    {
      q: '企業 AI 導入要花多少錢、多久？',
      a: '常見起點是 AI 營運健檢約 NTD 120,000；工作流導入顧問約 NTD 150,000／月起；一日 AI 實作工作坊 NTD 50,000–100,000；ERP／CRM 等系統建置常見 NTD 1,000,000–3,000,000，先 4 週 PoC 再建置。一般流程是先做 30 分鐘需求初談，再做付費診斷，接著 90 天試點並以 KPI 驗收。實際報價依範圍與是否含技術開發而定。',
    },
    {
      q: '我們公司沒有 ERP、資料都在 Excel，也能做嗎？',
      a: '可以，這是最常見的起點。先用 2–3 週需求訪談，把報價、接單、庫存、生產進度的流程和 Excel 檔盤點清楚，找出最花人力、最常出錯的三個環節，再決定先數位化哪一段。能和既有系統串接就串接，不強迫全部汰換。',
    },
    {
      q: '上課或導入會碰到公司的機敏資料嗎？',
      a: '內訓一律用模擬資料或去識別化資料，學員帶來的文件不需要含客戶個資或未公開財務。系統 PoC 需要真實資料時，會先簽保密協議，並約定資料範圍、存放位置與結案後的刪除方式。',
    },
    {
      q: '誰負責我的案子？',
      a: '需求判斷、主要提案與品質把關由負責人徐愷（KK）負責。KK 台大資工畢業，曾任 MoBagel 技術副總，是 AWS 認證架構師，有 15 年軟體經驗。日常執行由專案團隊承接，系統工程由長期合作的適才科技（Adata）團隊交付，合約一律由遊遊簽署。',
    },
    {
      q: '花蓮、臺東案是遊遊的客戶嗎？契約金額多少？',
      a: '是。花蓮雲基地與臺東 TTNomads 為遊遊股份有限公司公開招標得標案，公開契約金額分別為 NTD 5,880,000 與 NTD 2,400,000（決標總額，非公司利潤）。國發會相關敘述屬 KK 政策職務經歷，不是同一類付費客戶關係。',
    },
    {
      q: '怎麼開始合作？',
      a: '先預約免費的 30 分鐘需求初談，確認問題、預算與決策者；再決定是否進入付費診斷。可從官網聯絡頁或 Google Calendar 預約連結開始。',
    },
  ] satisfies FaqItem[],
  en: [
    {
      q: 'What does Twouring do?',
      a: 'Twouring Co., Ltd. (Twouring 遊遊) is an enterprise AI adoption and city digital-transformation advisory firm. We help companies with AI health-checks, 90-day roadmaps, workflow automation and training, and help local governments with digital-nomad city strategy and international talent programmes.',
    },
    {
      q: 'How much does enterprise AI adoption cost, and how long does it take?',
      a: 'A common starting point is an AI operations health-check around NTD 120,000; workflow advisory from about NTD 150,000/mo; a one-day hands-on AI workshop NTD 50,000–100,000; ERP/CRM-type system builds typically NTD 1,000,000–3,000,000 with a 4-week PoC first. The usual sequence is a free 30-minute discovery call, then a paid diagnostic, then a 90-day pilot signed off against KPIs. Quotes depend on scope and whether build is included.',
    },
    {
      q: 'We have no ERP and everything lives in Excel. Can you still help?',
      a: 'Yes. That is the most common starting point. A 2–3 week requirements review maps your quoting, order intake, inventory and production-tracking flows and spreadsheets, finds the three steps that cost the most labour or cause the most errors, and decides which to digitise first. We integrate with what you already run rather than forcing a full replacement.',
    },
    {
      q: 'Will training or rollout touch our confidential data?',
      a: 'Training always uses mock or de-identified data; documents participants bring need not contain customer personal data or unpublished financials. When a system PoC needs real data, we sign an NDA first and agree the data scope, storage location and deletion at project close.',
    },
    {
      q: 'Who is actually responsible for my project?',
      a: 'Scoping, main proposals and quality control sit with founder Kai Hsu (KK): NTU Computer Science graduate, former VP of Engineering at MoBagel, AWS-certified architect, 15 years in software. Day-to-day delivery is handled by the project team; systems engineering is delivered by long-term partner Adata, and every contract is signed by Twouring.',
    },
    {
      q: 'Are Hualien and Taitung Twouring clients, and what were the contract amounts?',
      a: 'Yes. Hualien Cloud Base and Taitung TTNomads are public-tender awards to Twouring Co., Ltd., with award totals of NTD 5,880,000 and NTD 2,400,000 (contract totals, not profit). NDC-related mentions reflect KK’s policy experience, not the same paid-client relationship.',
    },
    {
      q: 'How do we start?',
      a: 'Book a free 30-minute discovery call to confirm problem, budget and decision-maker, then decide on a paid diagnostic. Start from the contact page or the Google Calendar booking link.',
    },
  ] satisfies FaqItem[],
  ja: [
    {
      q: 'Twouringはどのような会社ですか？',
      a: 'Twouring（遊遊股份有限公司）は、企業のAI導入と都市のデジタルトランスフォーメーションを支援するコンサルティング会社です。企業向けにはAI診断、90日ロードマップ、業務自動化、社内研修を、地方自治体向けにはデジタルノマド都市戦略、ノマド対応拠点づくり、国際人材プロジェクトの企画を支援しています。',
    },
    {
      q: '企業のAI導入にはどれくらいの費用と期間がかかりますか？',
      a: '一般的な出発点は、AI業務診断がNTD 120,000程度、ワークフロー導入コンサルティングが月額NTD 150,000程度〜、1日のAI実践研修がNTD 50,000〜100,000です。ERP／CRMなどのシステム構築は一般的にNTD 1,000,000〜3,000,000で、まず4週間のPoCを行います。通常の流れは、無料の30分初回ヒアリング、有償診断、KPIで検収する90日間の試行の順です。実際のお見積もりは、範囲と技術開発を含むかどうかによって異なります。',
    },
    {
      q: 'ERPがなく、データがすべてExcelにある状態でも依頼できますか？',
      a: 'はい。それがもっとも多い出発点です。まず2〜3週間の要件ヒアリングで、見積、受注、在庫、生産進捗の流れとExcelファイルを棚卸しし、もっとも工数がかかり、ミスの多い3つの工程を特定してから、どこをデジタル化するかを決めます。既存システムと連携できるものは連携し、全面的な入れ替えは強いません。',
    },
    {
      q: '研修や導入で社内の機密データに触れますか？',
      a: '研修では必ず模擬データまたは匿名化したデータを使い、参加者が持ち込む資料に顧客の個人情報や未公開の財務情報を含める必要はありません。システムのPoCで実データが必要な場合は、先に秘密保持契約を締結し、データの範囲、保管場所、終了後の削除方法を取り決めます。',
    },
    {
      q: '案件の責任者は誰ですか？',
      a: '要件の見極め、重要な提案、品質管理は代表の徐愷（KK）が担当します。国立台湾大学資訊工程学科卒、MoBagel 元技術副総裁、AWS 認定アーキテクト、ソフトウェア開発歴15年。日々の実行はプロジェクトチームが担い、システム開発は長期パートナーの適才科技（Adata）が納品し、契約はすべて Twouring が締結します。',
    },
    {
      q: '花蓮県・台東県の案件はTwouringのクライアント案件ですか？契約金額はいくらですか？',
      a: 'はい。花蓮雲基地（Hualien Cloud Base）と台東TTNomadsは、遊遊股份有限公司が公開入札で受注した案件で、公開されている契約金額はそれぞれNTD 5,880,000とNTD 2,400,000です（落札総額であり、会社の利益ではありません）。国家発展委員会（国発会）に関する記述はKKの政策分野での職務経歴であり、有償のクライアント関係とは性質が異なります。',
    },
    {
      q: 'どのように依頼を始めればよいですか？',
      a: 'まず無料の30分初回ヒアリングをご予約いただき、課題、予算、意思決定者を確認します。そのうえで、有償診断に進むかどうかをご判断ください。Webサイトのお問い合わせページ、またはGoogleカレンダーの予約リンクからお申し込みいただけます。',
    },
  ] satisfies FaqItem[],
};

export const aiConsultingFaq = {
  zh: [
    {
      q: '什麼是企業 AI 導入顧問？',
      a: '企業 AI 導入顧問先盤點流程與工具，再決定要自動化的工作流、工具選型、訓練與 KPI，不會一開始就買系統。Twouring 遊遊負責診斷與 PMO；技術開發由遊遊自有工程團隊執行，必要時與適才科技協作。',
    },
    {
      q: 'AI 顧問、內訓和系統開發有何不同？',
      a: '顧問處理「從哪開始、先做哪件」；內訓讓主管與團隊對 AI 有一致的理解；系統開發在流程確定後做串接與建置。三者是不同的採購，可依階段搭配，不建議包成一個大方案。',
    },
    {
      q: '公司資料能不能放進 ChatGPT 或 Copilot？',
      a: '取決於產品條款、帳號類型與資料分級。個資、未公開財報與客戶合約不應貼進未核准工具。導入前需有允許工具清單與禁止上傳類型；詳見洞察文章〈公司資料能不能放進 ChatGPT／Copilot〉。',
    },
  ] satisfies FaqItem[],
  en: [
    {
      q: 'What is enterprise AI consulting?',
      a: 'Enterprise AI consulting maps processes and tools first, then chooses workflows, tooling, training and KPIs, rather than starting by buying a system. Twouring owns diagnosis and PMO; development is done by our in-house engineers, with partner Adata when needed.',
    },
    {
      q: 'How do AI consulting, training and building a system differ?',
      a: 'Consulting answers where to start and what to do first; training gives managers and staff a shared understanding of AI; build delivers integrations once the process is settled. They are separate purchases that can be combined by stage, and we do not recommend bundling them into one large package.',
    },
    {
      q: 'Can company data go into ChatGPT or Copilot?',
      a: 'It depends on product terms, account type and data classification. Personal data, unpublished finance and client contracts should not go into unapproved tools. See the insight article on company data in ChatGPT / Copilot.',
    },
  ] satisfies FaqItem[],
  ja: [
    {
      q: '企業向けAI導入コンサルティングとは何ですか？',
      a: '企業向けAI導入コンサルティングでは、まず業務プロセスとツールを棚卸しし、そのうえで自動化するワークフロー、ツール選定、研修、KPIを決めます。最初にシステムを購入するのではありません。Twouringは診断とPMOを担い、技術面の実装は社内エンジニアが担当し、必要に応じて適才科技（Adata）と協業します。',
    },
    {
      q: 'AIコンサルティング、社内研修、システム開発は何が違いますか？',
      a: 'コンサルティングは「どこから始め、何を優先するか」を明確にします。研修は経営層とチームがAIについて共通の理解を持つためのものです。システム開発は、業務プロセスが固まった後に連携や実装を行います。これらは別々の調達で、段階に応じて組み合わせられます。ひとつの大きなパッケージにまとめることはお勧めしません。',
    },
    {
      q: '社内データをChatGPTやCopilotに入力してもよいですか？',
      a: '製品の利用規約、アカウントの種類、データ分類によって異なります。個人情報、未公開の財務情報、顧客との契約書は、未承認のツールに入力すべきではありません。導入前に、利用を許可するツールの一覧とアップロード禁止のデータ種別を定める必要があります。詳しくはインサイト記事「社内データをChatGPT／Copilotに入力してもよいのか？」をご覧ください。',
    },
  ] satisfies FaqItem[],
};

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
