/**
 * 公開案例 — 政府實績與匿名情境。
 * 契約金額取自公開標案資料，標明為決標總額而非公司利潤。
 */
export type CaseSlug = 'hualien-cloud-base' | 'taitung-ttnomads';

export interface CaseDetail {
  slug: CaseSlug;
  path: string;
  zh: CaseLocale;
  en: CaseLocale;
  ja: CaseLocale;
}

interface CaseLocale {
  tag: string;
  title: string;
  client: string;
  period: string;
  metaDescription: string;
  lead: string;
  contractAmount: string;
  contractSourceLabel: string;
  contractSourceUrl: string;
  problem: string;
  roles: { name: string; role: string }[];
  deliverables: string[];
  milestones: string[];
  kpis: string[];
  links: { label: string; url: string }[];
  lastUpdated: string;
  summary: string;
}

const TENDER_URL =
  'https://ezbid.tw/vendor/%E9%81%8A%E9%81%8A%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8';

export const cases: Record<CaseSlug, CaseDetail> = {
  'hualien-cloud-base': {
    slug: 'hualien-cloud-base',
    path: '/cases/hualien-cloud-base',
    zh: {
      tag: '城市 · 政府 · 得標客戶',
      title: '花蓮雲基地營運推廣計畫',
      client: '花蓮縣政府',
      period: '115 年度（公開招標得標）',
      metaDescription:
        '遊遊股份有限公司得標花蓮縣政府「115花蓮雲基地營運推廣計畫」委託專業服務案，公開契約金額 NTD 5,880,000。說明問題、角色、交付物與里程碑。',
      lead: '協助花蓮縣政府把數位遊牧與雲基地營運，從活動延伸為可接待國際人才、帶動在地消費的城市行動。',
      contractAmount: 'NTD 5,880,000',
      contractSourceLabel: '公開標案資料（ezbid）',
      contractSourceUrl: TENDER_URL,
      problem:
        '希望把數位遊牧與雲基地從一次性活動，延伸為可吸引國際人才、串聯在地場域與商家、並可持續追蹤成果的城市營運推廣。',
      roles: [
        { name: '遊遊股份有限公司', role: '簽約／得標廠商：顧問、專案整合與執行管理（PMO）' },
        { name: '徐愷（KK）', role: '主導顧問；政策與數位遊牧專業經歷另見關於頁（非本案機關職務）' },
        { name: '交付合作夥伴', role: '技術、場域或活動執行依專案需要由合作夥伴承接' },
        { name: 'TDNA 公益生態系', role: '產業與社群連結參考；本案非 TDNA 付費客戶關係' },
      ],
      deliverables: [
        '場域與資源盤點、商家串聯',
        '國際遊牧社群接待與活動設計',
        '營運推廣計畫與利害關係人對齊',
        '成果整理與可公開素材產出',
      ],
      milestones: [
        '得標並完成契約啟動',
        '場域／商家盤點與接待設計',
        '活動與社群連結執行',
        '成果報告與可延續營運建議',
      ],
      kpis: [
        '場域與商家串聯覆蓋（依期末報告）',
        '國際人才／遊牧者接待場次與人次',
        '可延續之營運與社群機制是否建立',
      ],
      links: [
        { label: '公開標案廠商頁（遊遊股份有限公司）', url: TENDER_URL },
      ],
      lastUpdated: '2026-07-30',
      summary: '花蓮縣政府數位遊牧／雲基地營運推廣委託案；公開契約金額 588 萬元。',
    },
    en: {
      tag: 'City · Government · Awarded client',
      title: 'Hualien Cloud Base operations & promotion programme',
      client: 'Hualien County Government',
      period: 'ROC Year 115 (awarded via public tender)',
      metaDescription:
        'Twouring Co., Ltd. was awarded Hualien County’s Cloud Base operations & promotion professional-services contract (NTD 5,880,000 award total). Problem, roles, deliverables and milestones.',
      lead: 'Helping Hualien County extend digital-nomad and Cloud Base operations from events into a city action that hosts international talent and drives local spending.',
      contractAmount: 'NTD 5,880,000',
      contractSourceLabel: 'Public tender data (ezbid)',
      contractSourceUrl: TENDER_URL,
      problem:
        'Extend digital nomadism and the Cloud Base from one-off events into lasting city operations that attract talent, link local venues and businesses, and track outcomes.',
      roles: [
        { name: 'Twouring Co., Ltd.', role: 'Contracted / awarded vendor: advisory, integration and PMO' },
        { name: 'Kai Hsu (KK)', role: 'Lead advisor; policy roles disclosed separately on About (not a client role on this engagement)' },
        { name: 'Delivery partners', role: 'Tech, venue or programme delivery as needed' },
        { name: 'TDNA ecosystem', role: 'Industry/community reference — not a paid-client relationship for this case' },
      ],
      deliverables: [
        'Venue and resource mapping, business linkage',
        'Hosting and programme design for the global nomad community',
        'Operations/promotion plan and stakeholder alignment',
        'Results write-up and publishable materials',
      ],
      milestones: [
        'Award and contract kickoff',
        'Venue/business mapping and hosting design',
        'Programme and community delivery',
        'Results report and continuity recommendations',
      ],
      kpis: [
        'Venue and business linkage coverage (per final report)',
        'Hosting sessions and participants',
        'Whether lasting operations and community mechanisms were established',
      ],
      links: [
        { label: 'Public tender vendor page (Twouring Co., Ltd.)', url: TENDER_URL },
      ],
      lastUpdated: '2026-07-30',
      summary: 'Hualien County Cloud Base operations & promotion contract; award total NTD 5.88M.',
    },
    ja: {
      tag: '自治体 · 行政 · 落札案件',
      title: '花蓮「雲基地」運営推進計画',
      client: '花蓮県政府',
      period: '2026年度（公開入札にて落札）',
      metaDescription:
        'Twouring（遊遊股份有限公司）は花蓮県政府「115花蓮雲基地運営推進計画」専門サービス業務を公開入札で落札（公開契約額 NTD 5,880,000）。課題、役割、成果物、マイルストーンをご紹介します。',
      lead: 'デジタルノマドと「雲基地」の運営を、単発イベントから、海外人材を受け入れ地域消費を生む都市の取り組みへと広げる花蓮県の挑戦を支援しています。',
      contractAmount: 'NTD 5,880,000',
      contractSourceLabel: '公共入札データ（ezbid）',
      contractSourceUrl: TENDER_URL,
      problem:
        'デジタルノマドと雲基地を一過性のイベントで終わらせず、海外人材を惹きつけ、地域の拠点や事業者とつながり、成果を継続的に追える都市の運営推進へと発展させること。',
      roles: [
        { name: 'Twouring（遊遊股份有限公司）', role: '受託・落札事業者：コンサルティング、プロジェクト統括、実行管理（PMO）' },
        { name: '徐愷（KK）', role: 'リードコンサルタント。政策関連の経歴は会社概要に記載（本案件における発注者側の役職ではありません）' },
        { name: 'デリバリーパートナー', role: '技術・施設・イベントの実施は必要に応じてパートナーが担当' },
        { name: 'TDNA エコシステム', role: '業界・コミュニティとの連携先。本案件で TDNA が有償の顧客関係にあるわけではありません' },
      ],
      deliverables: [
        '施設・リソースの棚卸しと地元事業者の連携',
        '海外ノマドコミュニティの受け入れとプログラム設計',
        '運営推進計画の策定と関係者間の合意形成',
        '成果の取りまとめと公開用素材の制作',
      ],
      milestones: [
        '落札・契約開始',
        '施設・事業者の棚卸しと受け入れ設計',
        'イベントとコミュニティ連携の実施',
        '成果報告と継続運営に向けた提言',
      ],
      kpis: [
        '施設・事業者の連携カバー率（最終報告による）',
        '海外人材・ノマドの受け入れ回数と人数',
        '継続可能な運営・コミュニティの仕組みが構築されたか',
      ],
      links: [
        { label: '公共入札の事業者ページ（遊遊股份有限公司）', url: TENDER_URL },
      ],
      lastUpdated: '2026-11-03',
      summary: '花蓮県政府のデジタルノマド・雲基地運営推進業務。公開契約額 NT$588万。',
    },
  },

  'taitung-ttnomads': {
    slug: 'taitung-ttnomads',
    path: '/cases/taitung-ttnomads',
    zh: {
      tag: '城市 · 政府 · 得標客戶',
      title: '臺東 TTNomads 移動式國際客廳暨社群平台',
      client: '臺東縣政府',
      period: '115 年度（公開招標得標）',
      metaDescription:
        '遊遊股份有限公司得標臺東縣政府「115年臺東縣移動式國際客廳暨數位游牧TTNomads社群平台」勞務服務採購案，公開契約金額 NTD 2,400,000。',
      lead: '結合在地場域與國際遊牧社群，設計可延續的接待、交流與 TTNomads 社群平台連結。',
      contractAmount: 'NTD 2,400,000',
      contractSourceLabel: '公開標案資料（ezbid）',
      contractSourceUrl: TENDER_URL,
      problem:
        '結合在地場域與國際遊牧社群，設計可延續的接待、交流與在地連結，並推動 TTNomads 社群平台相關服務。',
      roles: [
        { name: '遊遊股份有限公司', role: '簽約／得標廠商：顧問、活動與場域整合' },
        { name: '徐愷（KK）', role: '主導顧問；政策職務經歷另見關於頁' },
        { name: '交付合作夥伴', role: '場域、活動或技術執行依專案需要承接' },
        { name: 'TDNA 公益生態系', role: '社群與產業連結參考；本案非 TDNA 付費客戶關係' },
      ],
      deliverables: [
        '在地場域與社群盤點',
        '國際遊牧者接待與交流活動',
        '地方商家與資源串聯',
        'TTNomads 社群平台相關服務與成果整理',
      ],
      milestones: [
        '得標並完成契約啟動',
        '場域／社群盤點',
        '接待與交流活動執行',
        '平台／社群延續機制與成果報告',
      ],
      kpis: [
        '接待與交流場次／人次',
        '在地商家與資源串聯數量',
        '社群平台使用或延續指標（依期末報告）',
      ],
      links: [
        { label: '公開標案廠商頁（遊遊股份有限公司）', url: TENDER_URL },
      ],
      lastUpdated: '2026-07-30',
      summary: '臺東縣政府 TTNomads 移動式國際客廳暨社群平台案；公開契約金額 240 萬元。',
    },
    en: {
      tag: 'City · Government · Awarded client',
      title: 'Taitung TTNomads mobile international living room & community platform',
      client: 'Taitung County Government',
      period: 'ROC Year 115 (awarded via public tender)',
      metaDescription:
        'Twouring Co., Ltd. was awarded Taitung County’s TTNomads mobile international living room & community platform services contract (NTD 2,400,000 award total).',
      lead: 'Combining local venues with the global nomad community into lasting hosting, exchange and TTNomads platform linkage.',
      contractAmount: 'NTD 2,400,000',
      contractSourceLabel: 'Public tender data (ezbid)',
      contractSourceUrl: TENDER_URL,
      problem:
        'Design lasting hosting, exchange and local connection — and deliver TTNomads community-platform related services.',
      roles: [
        { name: 'Twouring Co., Ltd.', role: 'Contracted / awarded vendor: advisory, programme and venue integration' },
        { name: 'Kai Hsu (KK)', role: 'Lead advisor; policy roles disclosed separately on About' },
        { name: 'Delivery partners', role: 'Venue, programme or tech delivery as needed' },
        { name: 'TDNA ecosystem', role: 'Community/industry reference — not a paid-client relationship for this case' },
      ],
      deliverables: [
        'Local venue and community mapping',
        'Hosting and exchange programmes for nomads',
        'Linkage of local businesses and resources',
        'TTNomads platform-related services and results write-up',
      ],
      milestones: [
        'Award and contract kickoff',
        'Venue/community mapping',
        'Hosting and exchange delivery',
        'Platform/community continuity and results report',
      ],
      kpis: [
        'Hosting/exchange sessions and participants',
        'Local businesses and resources linked',
        'Platform usage or continuity metrics (per final report)',
      ],
      links: [
        { label: 'Public tender vendor page (Twouring Co., Ltd.)', url: TENDER_URL },
      ],
      lastUpdated: '2026-07-30',
      summary: 'Taitung TTNomads living-room & community platform contract; award total NTD 2.4M.',
    },
    ja: {
      tag: '自治体 · 行政 · 落札案件',
      title: '台東 TTNomads 移動式国際リビング＆コミュニティプラットフォーム',
      client: '台東県政府',
      period: '2026年度（公開入札にて落札）',
      metaDescription:
        'Twouring（遊遊股份有限公司）は台東県政府「115年台東県移動式国際リビング・デジタルノマド TTNomads コミュニティプラットフォーム」業務を公開入札で落札（公開契約額 NTD 2,400,000）。',
      lead: '地域の拠点と世界のノマドコミュニティを結び、継続的な受け入れ・交流と TTNomads コミュニティ基盤づくりを設計しています。',
      contractAmount: 'NTD 2,400,000',
      contractSourceLabel: '公共入札データ（ezbid）',
      contractSourceUrl: TENDER_URL,
      problem:
        '地域の拠点と海外ノマドコミュニティを組み合わせ、継続できる受け入れ・交流・地域とのつながりを設計し、TTNomads コミュニティプラットフォーム関連サービスを推進すること。',
      roles: [
        { name: 'Twouring（遊遊股份有限公司）', role: '受託・落札事業者：コンサルティング、プログラムと拠点の統合' },
        { name: '徐愷（KK）', role: 'リードコンサルタント。政策関連の経歴は会社概要に記載' },
        { name: 'デリバリーパートナー', role: '施設・イベント・技術の実施は必要に応じて担当' },
        { name: 'TDNA エコシステム', role: 'コミュニティ・業界との連携先。本案件で有償の顧客関係にあるわけではありません' },
      ],
      deliverables: [
        '地域の拠点とコミュニティの棚卸し',
        '海外ノマドの受け入れと交流プログラム',
        '地元事業者・リソースとの連携',
        'TTNomads コミュニティ基盤関連サービスと成果の取りまとめ',
      ],
      milestones: [
        '落札・契約開始',
        '拠点・コミュニティの棚卸し',
        '受け入れ・交流プログラムの実施',
        'プラットフォーム・コミュニティの継続施策と成果報告',
      ],
      kpis: [
        '受け入れ・交流の回数と人数',
        '連携した地元事業者・リソースの数',
        'プラットフォームの利用・継続に関する指標（最終報告による）',
      ],
      links: [
        { label: '公共入札の事業者ページ（遊遊股份有限公司）', url: TENDER_URL },
      ],
      lastUpdated: '2026-11-03',
      summary: '台東県政府の TTNomads 移動式国際リビング＆コミュニティ業務。公開契約額 NT$240万。',
    },
  },
};

export const CASE_LIST = Object.values(cases);

/** 首頁／案例總覽用的關係類型說明（避免誤讀為皆為付費客戶） */
export const relationLabels = {
  zh: {
    awarded: '遊遊簽約／得標客戶',
    policy: 'KK 政策職務與專業經歷',
    partner: '交付合作夥伴',
    ecosystem: 'TDNA 公益生態系',
  },
  en: {
    awarded: 'Twouring contracted / awarded clients',
    policy: 'KK’s policy roles & professional experience',
    partner: 'Delivery partners',
    ecosystem: 'TDNA non-profit ecosystem',
  },
  ja: {
    awarded: 'Twouring の受託・落札案件',
    policy: 'KK の政策関連の役職・経歴',
    partner: 'デリバリーパートナー',
    ecosystem: 'TDNA（非営利）エコシステム',
  },
} as const;
