/**
 * 國際大廠官方計畫資格（首頁 hero／區塊、關於頁、頁尾、結構化資料、軌跡共用的單一來源）。
 * 規則：只寫已核准／已完成的事實，用字照計畫官方身分，不誇大。
 * - OpenAI：Partner Network 成員（已完成 onboarding），不寫「認證」「Select Partner」。
 * - NVIDIA：Inception 計畫會員（已核准），不寫已取得任何福利。
 * - Anthropic：新創計畫（Claude for Startups）入選，不是 Anthropic 正式合作夥伴。
 * desc 只描述計畫本身是什麼，不宣稱已領取 credits／福利。
 * 不使用對方 logo（商標使用需另依各計畫品牌規範申請）。
 */
import type { Lang } from '../i18n/company';

type T = Record<Lang, string>;

export interface Program { org: string; name: T; status: T; short: T; desc: T; url: string; date: string }

export const programs: Program[] = [
  {
    org: 'OpenAI',
    name: { zh: 'OpenAI Partner Network', en: 'OpenAI Partner Network', ja: 'OpenAI Partner Network' },
    status: { zh: '合作夥伴網路成員', en: 'Partner Network member', ja: 'パートナーネットワーク加盟' },
    short: { zh: 'Partner Network 成員', en: 'Partner Network member', ja: 'Partner Network 加盟' },
    desc: {
      zh: 'OpenAI 官方的企業導入夥伴網路。成員可使用 OpenAI 的上線培訓與技術資源，協助企業導入 ChatGPT 與 API。',
      en: 'OpenAI’s official network of partners who help organizations adopt its models, with access to OpenAI onboarding, training and technical resources.',
      ja: 'OpenAI 公式の導入パートナーネットワーク。加盟企業は OpenAI のオンボーディング・研修・技術リソースを活用し、ChatGPT や API の導入を支援します。',
    },
    url: 'https://openai.com/business/partners/',
    date: '2026.11',
  },
  {
    org: 'NVIDIA',
    name: { zh: 'NVIDIA Inception', en: 'NVIDIA Inception', ja: 'NVIDIA Inception' },
    status: { zh: '新創加速計畫會員', en: 'Startup program member', ja: 'スタートアップ支援プログラム会員' },
    short: { zh: 'Inception 會員', en: 'Inception member', ja: 'Inception 会員' },
    desc: {
      zh: 'NVIDIA 為 AI 新創設立的官方計畫。會員可使用 NVIDIA 的技術資源與開發者工具，並與其合作網絡對接。',
      en: 'NVIDIA’s official program for AI startups, giving members access to its technical resources, developer tools and partner network.',
      ja: 'NVIDIA が AI スタートアップ向けに運営する公式プログラム。技術リソースと開発者ツールを利用でき、パートナーネットワークとの接点も得られます。',
    },
    url: 'https://www.nvidia.com/en-us/startups/',
    date: '2026.11',
  },
  {
    org: 'Anthropic',
    name: { zh: 'Claude for Startups', en: 'Claude for Startups', ja: 'Claude for Startups' },
    status: { zh: 'Anthropic 新創計畫入選', en: 'Accepted to Anthropic’s startup program', ja: 'Anthropic スタートアップ支援に採択' },
    short: { zh: 'Claude for Startups 入選', en: 'Claude for Startups', ja: 'Claude for Startups 採択' },
    desc: {
      zh: 'Claude 開發商 Anthropic 的官方新創計畫，入選團隊以 Claude 開發產品與服務。',
      en: 'The official startup program run by Anthropic, the company behind Claude, for teams building products and services on Claude.',
      ja: 'Claude を開発する Anthropic の公式スタートアップ支援プログラム。採択チームは Claude で製品・サービスを構築します。',
    },
    url: 'https://claude.com/programs/startups',
    date: '2026.10',
  },
];

export const programsLabel: T = {
  zh: '國際 AI 大廠官方計畫',
  en: 'Official AI-company programs',
  ja: '海外 AI 企業の公式プログラム',
};

/** 區塊標題與說明：講清楚對客戶的意義，不誇大。 */
export const programsCopy: Record<Lang, { title: string; lead: string; verify: string; joined: string }> = {
  zh: {
    title: '遊遊參與 OpenAI、NVIDIA、Anthropic 的官方計畫',
    lead: '遊遊不綁定單一模型。ChatGPT、Claude 與 NVIDIA 的工具我們都會用，依你的流程、資安要求與預算選擇。',
    verify: '官方計畫說明',
    joined: '加入',
  },
  en: {
    title: 'In the official programs of OpenAI, NVIDIA and Anthropic',
    lead: 'We are not tied to one model vendor. We work with ChatGPT, Claude and NVIDIA tools, and choose based on your workflow, security requirements and budget.',
    verify: 'About the program',
    joined: 'Joined',
  },
  ja: {
    title: 'OpenAI・NVIDIA・Anthropic の公式プログラムに参加',
    lead: '特定のモデルに縛られません。ChatGPT、Claude、NVIDIA のツールを使い分け、業務フロー・セキュリティ要件・予算に合わせて選びます。',
    verify: 'プログラムの説明',
    joined: '参加',
  },
};

/** schema.org memberOf（ProgramMembership），組織結構化資料使用。 */
export const programsLd = programs.map((p) => ({
  '@type': 'ProgramMembership',
  programName: p.name.en,
  hostingOrganization: { '@type': 'Organization', name: p.org },
  url: p.url,
}));
