/**
 * 公司法定與品牌資料 — 全站單一事實來源。
 * 資料依《twouring_background_for_website_vendor.md》與經濟部/g0v 公開登記。
 * 對外口徑一律使用「遊遊股份有限公司」；品牌顯示「Twouring 遊遊」；英文「Twouring Co., Ltd.」。
 */
export const company = {
  brand: 'Twouring 遊遊',
  brandEn: 'Twouring',
  legalName: {
    zh: '遊遊股份有限公司',
    en: 'Twouring Co., Ltd.',
    ja: '遊遊股份有限公司（Twouring Co., Ltd.）',
  },
  formerName: {
    zh: '遊遊有限公司',
    en: 'Twouring Ltd. (former)',
    ja: '遊遊有限公司（旧社名）',
  },
  taxId: '95440838', // 統一編號
  founded: '2024-05-27',
  capital: 'NTD 3,000,000',
  representative: {
    zh: '徐愷（KK）',
    en: 'Kai Hsu (KK)',
    ja: '徐愷（Kai Hsu / KK）',
  },
  /** 經濟部登記地址 */
  address: {
    zh: '臺北市中正區開封街一段 37 號 11 樓',
    en: '11F., No. 37, Sec. 1, Kaifeng St., Zhongzheng Dist., Taipei City 100, Taiwan',
    ja: '台湾 台北市中正区開封街一段37号11階',
  },
  /** 營運／面試／會議地點（與登記地址不同時需同時揭露） */
  operatingAddress: {
    zh: '臺北市中正區重慶南路一段 11 號',
    en: 'No. 11, Sec. 1, Chongqing S. Rd., Zhongzheng Dist., Taipei City 100, Taiwan',
    ja: '台湾 台北市中正区重慶南路一段11号',
  },
  email: 'us@twouring.com',
  slogan: 'Tour your life together',
  // LinkedIn 為主要正式社群渠道（vendor §7.3 / §14.4）。如更新 slug 改這一處即可。
  linkedin: 'https://www.linkedin.com/company/twouring',
  // 主導顧問 KK 的個人 LinkedIn（關於頁顧問卡片使用）。
  linkedinKK: 'https://www.linkedin.com/in/kkshyu/',
  // 預約 30 分鐘需求初談（Google Calendar 預約頁）。全站預約 CTA 皆指向此處。
  bookingUrl: 'https://calendar.app.google/73hcBtdZZ6cGRrak9',
  siteUrl: 'https://www.twouring.com',
  /** 公開標案情報（契約金額來源，非公司利潤） */
  tenderProfileUrl: 'https://ezbid.tw/vendor/%E9%81%8A%E9%81%8A%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8',
  /** 經濟部商工登記查詢（實體一致性） */
  findbizUrl: 'https://findbiz.nat.gov.tw/fts/query/QueryBar/queryInit.do?banNo=95440838',
  /** AI 可讀站點地圖 */
  llmsTxtUrl: 'https://www.twouring.com/llms.txt',
} as const;

export type Lang = 'zh' | 'en' | 'ja';
