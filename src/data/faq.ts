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
      a: 'Twouring 遊遊（遊遊股份有限公司）是企業 AI 導入與城市數位轉型顧問。協助企業做 AI 健檢、90 天路線圖、流程自動化與內訓；協助地方政府規劃數位遊牧城市策略、友善場域與國際人才專案。',
    },
    {
      q: '企業 AI 導入要花多少錢、多久？',
      a: '常見起點是 AI 營運健檢約 NTD 120,000；工作流導入顧問約 NTD 150,000／月起。標準路徑是 30 分鐘需求初談 → 付費健檢 → 90 天試點與 KPI 驗收。實際報價依範圍與是否含技術開發而定。',
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
      a: 'A common starting point is an AI operations health-check around NTD 120,000; workflow advisory from about NTD 150,000/mo. The path is a free 30-minute discovery call → paid diagnostic → 90-day pilot with KPIs. Quotes depend on scope and whether build is included.',
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
};

export const aiConsultingFaq = {
  zh: [
    {
      q: '什麼是企業 AI 導入顧問？',
      a: '企業 AI 導入顧問先盤點流程與工具，再決定要自動化的工作流、工具選型、訓練與 KPI，而不是先買一套系統。Twouring 遊遊負責診斷與 PMO；技術交付可由適才科技或指定供應商承接。',
    },
    {
      q: 'AI 顧問、內訓和系統開發有何不同？',
      a: '顧問解決「從哪開始、怎麼排優先」；內訓建立決策層與團隊共同語言；系統開發在流程已清楚後落地整合。三者是不同採購，可依階段搭配，不應混成一包萬能方案。',
    },
    {
      q: '公司資料能不能放進 ChatGPT 或 Copilot？',
      a: '取決於產品條款、帳號類型與資料分級。個資、未公開財報與客戶合約不應貼進未核准工具。導入前需有允許工具清單與禁止上傳類型；詳見洞察文章〈公司資料能不能放進 ChatGPT／Copilot〉。',
    },
  ] satisfies FaqItem[],
  en: [
    {
      q: 'What is enterprise AI consulting?',
      a: 'Enterprise AI consulting maps processes and tools first, then chooses workflows, tooling, training and KPIs — instead of buying a system first. Twouring owns diagnosis and PMO; tech delivery can go through Adata or a named vendor.',
    },
    {
      q: 'How do AI consulting, training and building a system differ?',
      a: 'Consulting answers where to start and what to prioritise; training builds shared language; build ships integrations once the process is clear. They are different purchases and should not be sold as one magic package.',
    },
    {
      q: 'Can company data go into ChatGPT or Copilot?',
      a: 'It depends on product terms, account type and data classification. Personal data, unpublished finance and client contracts should not go into unapproved tools. See the insight article on company data in ChatGPT / Copilot.',
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
