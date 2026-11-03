/**
 * 洞察／工具中心 — 高採購意圖內容。
 * 第一批聚焦 KK 與團隊有第一手經驗的題目。
 */
export type InsightSlug =
  | 'enterprise-ai-adoption-roadmap'
  | 'ai-consultant-vs-training-vs-build'
  | 'company-data-in-chatgpt'
  | 'department-ai-automation-roi'
  | 'digital-nomad-city-maturity';

export interface InsightArticle {
  slug: InsightSlug;
  path: string;
  published: string;
  updated: string;
  zh: InsightLocale;
  en: InsightLocale;
  ja: InsightLocale;
}

interface InsightLocale {
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  sections: { heading: string; paras: string[] }[];
}

export const insights: Record<InsightSlug, InsightArticle> = {
  'enterprise-ai-adoption-roadmap': {
    slug: 'enterprise-ai-adoption-roadmap',
    path: '/insights/enterprise-ai-adoption-roadmap',
    published: '2026-07-30',
    updated: '2026-07-30',
    zh: {
      title: '企業 AI 導入流程、費用、90 天路線圖與 KPI',
      description:
        '企業 AI 導入怎麼開始？說明健檢、90 天路線圖、常見費用區間、KPI 與驗收方式，避免為了 AI 而 AI。',
      eyebrow: '企業 AI',
      lead: '企業 AI 導入是：先盤點流程，再以 90 天路線圖導入一至三個高 ROI 工作流，並用可驗收 KPI 結案——不是先買模型或系統。',
      sections: [
        {
          heading: '定義：什麼是企業 AI 導入',
          paras: [
            '企業 AI 導入顧問協助公司把「想用 AI」變成可執行專案：訪談與流程盤點 → 機會排序 → 工具與訓練 → KPI 驗收。Twouring 遊遊負責診斷與 PMO；技術交付可由適才科技或指定供應商承接。',
            '根據 Aggarwal 等人（KDD 2024）的 GEO 研究，在生成式引擎回覆中加入統計與可信引述，可見度最高可提升約 40%；因此官網應公開費用區間與驗收指標，而不是只寫願景。',
          ],
        },
        {
          heading: '建議流程',
          paras: [
            '先做 30 分鐘需求初談，確認問題、預算與決策者。',
            '再做付費 AI 營運健檢：訪談、流程與工具盤點，產出導入機會清單與優先順序。',
            '選定一至三個工作流，進入顧問／PMO 與導入，並用 KPI 追蹤。',
          ],
        },
        {
          heading: '費用怎麼估',
          paras: [
            '健檢常見落在 NTD 120,000 起；工作流導入顧問約 NTD 150,000／月起；含供應商管理的導入 PM 約 NTD 500,000／案起。',
            '實際報價依範圍、資料準備度與是否含技術開發而定；技術交付可由適才科技或指定供應商承接。',
          ],
        },
        {
          heading: '90 天路線圖與 KPI',
          paras: [
            '前 30 天：盤點與優先排序；第 31–60 天：試點工作流與訓練；第 61–90 天：驗收、ROI 檢視與下一季擴展。',
            'KPI 應綁定工時節省、錯誤率、轉換率或客服回應時間等營運指標，而非「用了幾個 AI 工具」。',
          ],
        },
      ],
    },
    en: {
      title: 'Enterprise AI adoption: process, cost, 90-day roadmap and KPIs',
      description:
        'How to start enterprise AI adoption: health-check, 90-day roadmap, typical cost ranges, KPIs and sign-off — without AI for its own sake.',
      eyebrow: 'Enterprise AI',
      lead: 'Enterprise AI adoption means mapping processes first, then rolling out one to three high-ROI workflows on a 90-day roadmap with auditable KPIs — not buying a model first.',
      sections: [
        {
          heading: 'Definition: what enterprise AI adoption is',
          paras: [
            'Enterprise AI consulting turns “we want AI” into an executable project: interviews and process mapping → prioritisation → tools and training → KPI sign-off. Twouring owns diagnosis and PMO; tech delivery can go through Adata or a named vendor.',
            'Aggarwal et al. (KDD 2024) show that adding statistics and credible quotations can raise visibility in generative-engine answers by up to about 40% — so public cost ranges and KPIs matter more than vision statements alone.',
          ],
        },
        {
          heading: 'Recommended process',
          paras: [
            'Start with a 30-minute discovery call to confirm problem, budget and decision-maker.',
            'Run a paid AI operations health-check: interviews, process and tooling audit, opportunity list with priorities.',
            'Pick one to three workflows, move into advisory/PMO and rollout, and track KPIs.',
          ],
        },
        {
          heading: 'How to estimate cost',
          paras: [
            'Health-checks often start around NTD 120,000; workflow advisory from about NTD 150,000/mo; delivery PM from about NTD 500,000/project.',
            'Quotes depend on scope, data readiness and whether build is included; tech delivery can go through Adata or a named vendor.',
          ],
        },
        {
          heading: '90-day roadmap and KPIs',
          paras: [
            'Days 1–30: map and prioritise; 31–60: pilot and train; 61–90: sign-off, ROI review and next-quarter scale.',
            'KPIs should track hours saved, error rates, conversion or response time — not “how many AI tools we used”.',
          ],
        },
      ],
    },
    ja: {
      title: '企業のAI導入：進め方・費用・90日ロードマップとKPI',
      description:
        '企業のAI導入はどこから始めるべきか。診断、90日ロードマップ、一般的な費用レンジ、KPIと検収の考え方を解説し、「AIありき」の導入を避けます。',
      eyebrow: '企業AI',
      lead: '企業のAI導入とは、まず業務プロセスを棚卸しし、90日ロードマップに沿ってROIの高いワークフローを1〜3件導入し、検収可能なKPIで完了させることです。モデルやシステムの購入から始めるものではありません。',
      sections: [
        {
          heading: '定義：企業のAI導入とは',
          paras: [
            '企業向けAI導入コンサルティングは、「AIを使いたい」を実行可能なプロジェクトに落とし込みます。ヒアリングと業務プロセスの棚卸し → 優先順位付け → ツール選定と研修 → KPIによる検収、という流れです。Twouring（遊遊股份有限公司）は診断とPMOを担い、技術面の実装は適才科技（Adata）または指定ベンダーが担当できます。',
            'Aggarwalら（KDD 2024）のGEO研究によると、統計データや信頼できる引用を加えることで、生成AIエンジンの回答における可視性が最大約40%向上します。そのため、Webサイトではビジョンだけでなく、費用レンジと検収指標を公開すべきです。',
          ],
        },
        {
          heading: '推奨する進め方',
          paras: [
            'まず30分の初回ヒアリングで、課題、予算、意思決定者を確認します。',
            '次に有償のAI業務診断を実施します。ヒアリング、業務プロセスとツールの棚卸しを行い、導入機会のリストと優先順位をまとめます。',
            '対象ワークフローを1〜3件選定し、コンサルティング／PMOと導入に進み、KPIで進捗を追跡します。',
          ],
        },
        {
          heading: '費用の見積もり方',
          paras: [
            '診断は一般的にNTD 120,000〜、ワークフロー導入コンサルティングは月額NTD 150,000程度〜、ベンダー管理を含む導入PMは1案件NTD 500,000程度〜です。',
            '実際のお見積もりは、範囲、データの整備状況、技術開発を含むかどうかによって異なります。技術面の実装は適才科技（Adata）または指定ベンダーが担当できます。',
          ],
        },
        {
          heading: '90日ロードマップとKPI',
          paras: [
            '最初の30日：棚卸しと優先順位付け。31〜60日目：ワークフローの試行と研修。61〜90日目：検収、ROIの検証、次四半期の展開計画。',
            'KPIは「AIツールをいくつ使ったか」ではなく、削減工数、エラー率、コンバージョン率、顧客対応の応答時間などの業務指標に紐づけるべきです。',
          ],
        },
      ],
    },
  },

  'ai-consultant-vs-training-vs-build': {
    slug: 'ai-consultant-vs-training-vs-build',
    path: '/insights/ai-consultant-vs-training-vs-build',
    published: '2026-07-30',
    updated: '2026-07-30',
    zh: {
      title: 'AI 顧問、企業內訓與系統開發怎麼選',
      description:
        '比較企業 AI 導入顧問、企業內訓與系統開發三種買法：各自解決什麼問題、何時該買、常見踩雷。',
      eyebrow: '採購決策',
      lead: '同一句「我們要做 AI」，可能對應三種完全不同的採購：顧問診斷、內訓賦能，或系統開發。',
      sections: [
        {
          heading: '三種買法各自解決什麼',
          paras: [
            '顧問：不清楚從哪開始、怕買錯工具、需要 90 天路線圖與 PMO。',
            '內訓：決策層或團隊缺共同語言，需要案例與實作建立共識。',
            '開發：流程已清楚、需求可規格化，需要系統或整合落地。',
          ],
        },
        {
          heading: '常見錯誤',
          paras: [
            '還沒盤點流程就直接開發；或只上完課卻沒有導入負責窗口。',
            '把「買授權」當成「導入完成」——沒有流程改造與驗收，工具很快沒人用。',
          ],
        },
      ],
    },
    en: {
      title: 'AI consulting vs corporate training vs building a system',
      description:
        'Compare three ways to buy AI: advisory, training and build — what each solves, when to buy, and common pitfalls.',
      eyebrow: 'Buying guide',
      lead: '“We want AI” can mean three different purchases: a diagnostic, training, or a build.',
      sections: [
        {
          heading: 'What each purchase solves',
          paras: [
            'Advisory: you don’t know where to start, fear the wrong tool, need a 90-day roadmap and PMO.',
            'Training: leaders or teams lack a shared language and need cases plus hands-on practice.',
            'Build: the process is clear and requirements can be specified for a system or integration.',
          ],
        },
        {
          heading: 'Common mistakes',
          paras: [
            'Building before mapping processes — or training with no owner for adoption.',
            'Treating licence purchase as “done” without process change and sign-off.',
          ],
        },
      ],
    },
    ja: {
      title: 'AIコンサルティング・社内研修・システム開発、どれを選ぶべきか',
      description:
        '企業のAI導入における3つの調達方法（導入コンサルティング、社内研修、システム開発）を比較し、それぞれが解決する課題、選ぶべきタイミング、よくある落とし穴を解説します。',
      eyebrow: '調達の判断',
      lead: '同じ「AIをやりたい」でも、コンサルティングによる診断、研修による人材育成、システム開発という、まったく異なる3つの調達に分かれます。',
      sections: [
        {
          heading: '3つの調達方法がそれぞれ解決すること',
          paras: [
            'コンサルティング：どこから始めればよいか分からない、ツール選びで失敗したくない、90日ロードマップとPMOが必要な場合。',
            '研修：経営層やチームに共通言語がなく、事例と実践を通じて合意形成が必要な場合。',
            '開発：業務プロセスが明確で要件を仕様化でき、システムや連携の実装が必要な場合。',
          ],
        },
        {
          heading: 'よくある失敗',
          paras: [
            '業務プロセスを棚卸しする前に開発を始めてしまう。あるいは研修を受けただけで、導入の責任者がいない。',
            '「ライセンス購入」を「導入完了」とみなしてしまう。業務プロセスの見直しと検収がなければ、ツールはすぐに使われなくなります。',
          ],
        },
      ],
    },
  },

  'company-data-in-chatgpt': {
    slug: 'company-data-in-chatgpt',
    path: '/insights/company-data-in-chatgpt',
    published: '2026-07-30',
    updated: '2026-07-30',
    zh: {
      title: '公司資料能不能放進 ChatGPT／Copilot？',
      description:
        '企業使用 ChatGPT、Copilot 時的資料風險、帳號分級、內部規範與導入前檢查清單。',
      eyebrow: '風險與治理',
      lead: '能不能放，取決於產品條款、帳號類型、資料分級與內部規範——不是一句「絕對不行」或「完全沒問題」。',
      sections: [
        {
          heading: '先分清楚帳號與條款',
          paras: [
            '消費者版、團隊版與企業版對訓練資料與管理控管的約定不同，導入前必須對齊實際使用的產品。',
            '把個資、未公開財報、客戶合約或原始碼貼進未核准工具，是最常見的治理破口。',
          ],
        },
        {
          heading: '導入前最低檢查清單',
          paras: [
            '資料分類（公開／內部／機密）、允許使用的工具清單、禁止上傳類型、以及誰負責審核例外。',
            '先用低風險流程試點，再擴大到含客戶資料的工作流。',
          ],
        },
      ],
    },
    en: {
      title: 'Can you put company data into ChatGPT / Copilot?',
      description:
        'Data risk, account tiers, internal policy and a pre-adoption checklist for ChatGPT and Copilot at work.',
      eyebrow: 'Risk & governance',
      lead: 'It depends on product terms, account type, data classification and policy — not a blanket yes or no.',
      sections: [
        {
          heading: 'Separate account types and terms',
          paras: [
            'Consumer, team and enterprise plans differ on training data and admin controls — match the product you actually use.',
            'Pasting personal data, unpublished finance, client contracts or source into unapproved tools is the usual governance gap.',
          ],
        },
        {
          heading: 'Minimum pre-adoption checklist',
          paras: [
            'Data classification, an approved-tool list, banned upload types, and an owner for exceptions.',
            'Pilot on low-risk workflows before expanding to client-data workflows.',
          ],
        },
      ],
    },
    ja: {
      title: '社内データをChatGPT／Copilotに入力してもよいのか？',
      description:
        '企業がChatGPTやCopilotを利用する際のデータリスク、アカウント区分、社内規程、導入前のチェックリストを解説します。',
      eyebrow: 'リスクとガバナンス',
      lead: '入力してよいかどうかは、製品の利用規約、アカウントの種類、データ分類、社内規程によって決まります。「絶対にダメ」でも「まったく問題ない」でもありません。',
      sections: [
        {
          heading: 'まずアカウントと規約を区別する',
          paras: [
            '個人向け、チーム向け、企業向けのプランでは、学習データの扱いや管理機能の取り決めが異なります。導入前に、実際に利用する製品と照らし合わせる必要があります。',
            '個人情報、未公開の財務情報、顧客との契約書、ソースコードを未承認のツールに貼り付けることが、最も多いガバナンス上の抜け穴です。',
          ],
        },
        {
          heading: '導入前の最低限のチェックリスト',
          paras: [
            'データ分類（公開／社内／機密）、利用を許可するツールの一覧、アップロード禁止のデータ種別、例外を審査する責任者を定めます。',
            'まずリスクの低い業務で試行し、その後に顧客データを扱うワークフローへ拡大します。',
          ],
        },
      ],
    },
  },

  'department-ai-automation-roi': {
    slug: 'department-ai-automation-roi',
    path: '/insights/department-ai-automation-roi',
    published: '2026-07-30',
    updated: '2026-07-30',
    zh: {
      title: '五個部門的 AI 自動化機會與 ROI 算法',
      description:
        '客服、行銷、人資、財務與營運的 AI 自動化機會，以及用工時與錯誤成本估算 ROI 的簡單算法。',
      eyebrow: '流程自動化',
      lead: '先算「這個流程一年燒掉多少人時與錯誤成本」，再決定值不值得自動化——比追新模型更務實。',
      sections: [
        {
          heading: '五個部門常見機會',
          paras: [
            '客服：FAQ、工單分類、回覆草稿；行銷：內容初稿、活動摘要、素材整理。',
            '人資：職缺說明、履歷初篩輔助；財務：對帳輔助、費用類別建議；營運：SOP 查詢、交接摘要。',
          ],
        },
        {
          heading: '簡單 ROI',
          paras: [
            '年節省 ≈（每次節省分鐘 × 年次數 × 人力成本）−（工具＋導入＋維運成本）。',
            '優先選高頻、規則清楚、錯誤成本可量化的流程；避開尚無資料或尚無負責人的流程。',
          ],
        },
      ],
    },
    en: {
      title: 'AI automation opportunities in five departments — and a simple ROI math',
      description:
        'Automation opportunities in support, marketing, HR, finance and ops — plus a simple hours-and-error cost ROI formula.',
      eyebrow: 'Workflow automation',
      lead: 'Price the hours and error cost a process burns each year before chasing the newest model.',
      sections: [
        {
          heading: 'Common opportunities',
          paras: [
            'Support: FAQ, ticket triage, draft replies; Marketing: drafts, event summaries, asset sorting.',
            'HR: job descriptions, assisted screening; Finance: reconciliation help, expense categories; Ops: SOP lookup, handoff summaries.',
          ],
        },
        {
          heading: 'Simple ROI',
          paras: [
            'Annual saving ≈ (minutes saved × yearly volume × labour cost) − (tools + adoption + run cost).',
            'Prioritise high-frequency, rule-clear processes with measurable error cost.',
          ],
        },
      ],
    },
    ja: {
      title: '5部門におけるAI自動化の機会とROIの算出方法',
      description:
        'カスタマーサポート、マーケティング、人事、経理・財務、オペレーションにおけるAI自動化の機会と、工数とエラーコストからROIを見積もるシンプルな計算方法を紹介します。',
      eyebrow: '業務自動化',
      lead: 'まず「この業務が年間でどれだけの工数とエラーコストを消費しているか」を算出し、そのうえで自動化する価値があるかを判断します。最新モデルを追いかけるより現実的です。',
      sections: [
        {
          heading: '5部門でよくある機会',
          paras: [
            'カスタマーサポート：FAQ、問い合わせチケットの分類、返信の下書き。マーケティング：コンテンツの初稿、イベントの要約、素材の整理。',
            '人事：求人票の作成、書類選考の補助。経理・財務：照合作業の補助、費目の提案。オペレーション：SOPの検索、引き継ぎ内容の要約。',
          ],
        },
        {
          heading: 'シンプルなROI',
          paras: [
            '年間削減額 ≈（1回あたりの削減分数 × 年間回数 × 人件費）−（ツール費＋導入費＋運用保守費）。',
            '頻度が高く、ルールが明確で、エラーコストを数値化できる業務を優先します。データがまだない業務や、責任者が決まっていない業務は避けます。',
          ],
        },
      ],
    },
  },

  'digital-nomad-city-maturity': {
    slug: 'digital-nomad-city-maturity',
    path: '/insights/digital-nomad-city-maturity',
    published: '2026-07-30',
    updated: '2026-07-30',
    zh: {
      title: '數位遊牧城市成熟度：五個構面怎麼看',
      description:
        '地方政府評估數位遊牧城市策略的五構面：場域、資訊、社群、政策與商業轉換，以及如何設定可驗收 KPI。',
      eyebrow: '城市策略',
      lead: '數位遊牧不是辦一場活動就結束；城市需要可盤點、可驗收、可延續的成熟度架構。',
      sections: [
        {
          heading: '五個構面',
          paras: [
            '場域（空間、網路、接待）、資訊（英文與可發現性）、社群（活動與延續）、政策（窗口與預算）、商業（在地消費與商家串聯）。',
            '遊遊的城市遊牧成熟度診斷即依此盤點，產出 90 天行動建議與 KPI。',
          ],
        },
        {
          heading: 'KPI 怎麼設',
          paras: [
            '避免只報「活動場次」；應包含長住人次、商家串聯數、國際社群回訪，以及可公開的成果報告。',
            'Nomad Ready 友善場域檢核，是商家端落地的方法名稱之一，應服務上述構面而非取代策略。',
          ],
        },
      ],
    },
    en: {
      title: 'Digital-nomad city maturity: five dimensions',
      description:
        'Five dimensions for city digital-nomad strategy: venues, information, community, policy and business conversion — plus auditable KPIs.',
      eyebrow: 'City strategy',
      lead: 'Digital nomadism is not one event; cities need a maturity frame that can be mapped, audited and sustained.',
      sections: [
        {
          heading: 'Five dimensions',
          paras: [
            'Venues, information (English & discoverability), community, policy windows/budget, and local business conversion.',
            'Twouring’s city nomad-readiness diagnostic maps these into a 90-day action plan and KPIs.',
          ],
        },
        {
          heading: 'Setting KPIs',
          paras: [
            'Go beyond event counts: long-stay guests, businesses linked, community return, and publishable results.',
            'Nomad Ready venue checklists are one delivery method — they serve the strategy, they don’t replace it.',
          ],
        },
      ],
    },
    ja: {
      title: 'デジタルノマド都市の成熟度：5つの観点',
      description:
        '地方自治体がデジタルノマド都市戦略を評価するための5つの観点（拠点、情報、コミュニティ、政策、ビジネス転換）と、検収可能なKPIの設定方法を解説します。',
      eyebrow: '都市戦略',
      lead: 'デジタルノマド施策は、イベントを1回開催して終わりではありません。都市には、棚卸し・検収・継続が可能な成熟度のフレームワークが必要です。',
      sections: [
        {
          heading: '5つの観点',
          paras: [
            '拠点（スペース、通信環境、受け入れ体制）、情報（英語対応と見つけやすさ）、コミュニティ（イベントと継続性）、政策（窓口と予算）、ビジネス（地域での消費と店舗間の連携）。',
            'Twouringの都市ノマド成熟度診断は、この観点に沿って現状を棚卸しし、90日間のアクション提案とKPIをまとめます。',
          ],
        },
        {
          heading: 'KPIの設定方法',
          paras: [
            '「イベント開催回数」だけを報告するのは避けるべきです。長期滞在者数、連携店舗数、海外コミュニティの再訪、公開可能な成果報告書を含めます。',
            'Nomad Ready対応拠点チェックは、店舗側で実装するための手法の一つです。上記の観点に資するものであり、戦略そのものに代わるものではありません。',
          ],
        },
      ],
    },
  },
};

export const INSIGHT_LIST = Object.values(insights);
