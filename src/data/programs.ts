/**
 * 國際大廠官方計畫資格（首頁、關於頁、軌跡共用的單一來源）。
 * 規則：只寫已核准／已完成的事實，用字照計畫官方身分，不誇大。
 * - OpenAI：Partner Network 成員（已完成 onboarding），不寫「認證」「Select Partner」。
 * - NVIDIA：Inception 計畫會員（已核准），不寫已取得任何福利。
 * - Anthropic：新創計畫（Claude for Startups）入選，不是 Anthropic 正式合作夥伴。
 * 不使用對方 logo（商標使用需另依各計畫品牌規範申請）。
 */
import type { Lang } from '../i18n/company';

type T = Record<Lang, string>;

export interface Program { org: string; name: T; status: T; date: string }

export const programs: Program[] = [
  {
    org: 'OpenAI',
    name: { zh: 'OpenAI Partner Network', en: 'OpenAI Partner Network', ja: 'OpenAI Partner Network' },
    status: { zh: '合作夥伴網路成員', en: 'Partner Network member', ja: 'パートナーネットワーク加盟' },
    date: '2026.11',
  },
  {
    org: 'NVIDIA',
    name: { zh: 'NVIDIA Inception', en: 'NVIDIA Inception', ja: 'NVIDIA Inception' },
    status: { zh: '新創加速計畫會員', en: 'Startup program member', ja: 'スタートアップ支援プログラム会員' },
    date: '2026.11',
  },
  {
    org: 'Anthropic',
    name: { zh: 'Claude for Startups', en: 'Claude for Startups', ja: 'Claude for Startups' },
    status: { zh: 'Anthropic 新創計畫入選', en: 'Accepted to Anthropic’s startup program', ja: 'Anthropic スタートアップ支援に採択' },
    date: '2026.10',
  },
];

export const programsLabel: T = {
  zh: '國際 AI 大廠官方計畫',
  en: 'Official AI-company programs',
  ja: '海外 AI 企業の公式プログラム',
};
