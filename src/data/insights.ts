/**
 * 洞察／工具中心 — 高採購意圖內容。
 * 第一批聚焦 KK 與團隊有第一手經驗的題目。
 */
export type InsightSlug =
  | 'enterprise-ai-adoption-roadmap'
  | 'ai-consultant-vs-training-vs-build'
  | 'company-data-in-chatgpt'
  | 'department-ai-automation-roi'
  | 'digital-nomad-city-maturity'
  | 'traditional-industry-transformation-steps'
  | 'metal-parts-ai-quoting'
  | 'manufacturing-labor-shortage-ai';

export interface InsightArticle {
  slug: InsightSlug;
  path: string;
  published: string;
  updated: string;
  /** 文中數字與法規的正式出處（文章底部列出） */
  sources?: { title: string; url: string }[];
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
'traditional-industry-transformation-steps': {
  slug: 'traditional-industry-transformation-steps',
  path: '/insights/traditional-industry-transformation-steps',
  published: '2026-11-05',
  updated: '2026-11-05',
  sources: [],
  zh: {
    title: '傳產數位轉型不用一次換 ERP：先診斷、再數位化、最後導入 AI 的三步做法',
    description: '系統買了沒人用、上完課回來照舊、換 ERP 拖垮營運，多半是順序錯了。這篇整理遊遊的三步做法、每一步的產出與驗收方式，以及一份判斷起點的自我檢核清單。',
    eyebrow: '數位轉型方法',
    lead: '跟傳產老闆談數位轉型，最常聽到的第一句話是「我們是不是該換 ERP 了？」我們通常先不回答這題。換不換系統，要看過現場流程才知道。很多公司真正卡住的地方，是報價靠一個人記、庫存數字對不起來、生產進度要打電話問，這些都不一定要從換系統開始處理。',
    sections: [
      {
        heading: '三種常見的失敗，問題多半出在順序',
        paras: [
          '第一種是系統買了沒人用。導入前沒有弄清楚業務、生管、倉庫平常怎麼做事，系統上線後欄位對不上實際作業，同仁只好一邊輸入系統、一邊繼續維護自己的 Excel。過一段時間，系統裡的資料沒人相信，大家又回到舊方法。',
          '第二種是派人上課，回來照舊。外面的 AI 或數位工具課程，案例多半是通用情境，跟自家的報價單、料號規則、客戶詢單格式沒有關係。同仁聽懂了，回到座位卻不知道明天早上的工作要從哪裡開始改。',
          '第三種是一次把 ERP 全部換掉。新舊系統切換期間，訂單、庫存、帳務同時在變，任何一個環節卡住，都會直接影響出貨與收款。對人手本來就緊的中小企業，這段期間的風險常常比預期高。',
          '這三種情況有個共通點：先決定了工具，才回頭看流程。我們的做法反過來，先把流程看清楚，再決定哪些地方要上系統、哪些地方適合交給 AI。',
        ],
      },
      {
        heading: '第一步：現況診斷，找出最花人力的三個環節',
        paras: [
          '診斷期約 2 到 3 週。顧問會到現場，依序訪談報價、接單、生管、倉庫與會計的負責同仁，追一張訂單從客戶詢價到出貨收款，中間經過幾個人、幾份表單、幾次重複輸入。',
          '這一步的產出是一份診斷報告，列出最花人力、最常出錯的三個環節，附上處理的優先順序、建議時程與預算範圍。驗收方式很直接：老闆和各部門主管看完報告，是否同意這三個環節確實是現在最痛的地方。排序有不同意見，就回頭補訪談，直到大家有共識。',
          '診斷可以單獨做。看完結果再決定要不要往下，或拿報告去和既有的系統廠商討論都可以。我們曾協助一個研究單位盤點數據流程，結論是把可以標準化的整理工作交給系統，需要判斷的部分留給人。這種分工，要先把流程攤開才看得出來。',
        ],
      },
      {
        heading: '第二步：流程數位化，能串接就不強迫汰換',
        paras: [
          '第二步處理診斷挑出來的環節，把報價、訂單、料號、庫存與生產進度，從 Excel 和紙本搬進系統。公司如果已經有 ERP，基本功能也還堪用，我們會優先做串接，讓新工具把資料送進既有系統，不要求全部換掉。',
          '產出是一套每天真的在跑的流程與資料：料號有統一的編碼規則，訂單從建立到出貨有固定的狀態，庫存數字只有一個來源。驗收看日常作業，例如業務能不能在系統裡直接查到某張訂單的生產進度，倉庫盤點的數字和系統是否一致，月底對帳還要不要人工比對好幾份表。',
          '有一家五金材料業者，手上有數千種料號，同時經營電商、ERP 和實體櫃位。我們的切入點是商品資料：先把料號、規格、價格整理成一份共用的主檔，再讓電商、ERP 和櫃位都從這份主檔取資料。商品資料整理好，後面要接什麼系統都比較容易。',
        ],
      },
      {
        heading: '第三步：AI 導入與內訓，課程對到各部門的日常工作',
        paras: [
          '資料進了系統，AI 才有東西可以用。第三步會依公司的實際工作設計 AI 應用，例如整理報價單、回覆客戶詢單、產出外銷文件、整理會議紀錄、彙整管理報表。',
          '接著依部門開實作課。課堂上練的就是該部門每天在做的事：業務練詢單回覆，船務練外銷文件，主管練報表彙整，讓同仁下課回到座位就用得上。驗收看課後的實際使用情形，也就是指定的幾項工作，是否已經改用新做法完成。',
          '我們曾為一家醫院的醫護人員規劃 24 小時 AI 工作應用培訓，共 8 堂主題課，依四類職務分梯上課，課堂一律使用模擬資料。傳產內訓也照這個原則，按職務分組、用模擬資料練習，不把客戶或公司的真實資料帶進課堂。',
        ],
      },
      {
        heading: '從哪一步開始？用這份清單自我檢核',
        paras: [
          '不是每家公司都要從第一步開始。可以先問自己下面四題：',
          '一、說不出公司最花人力的三個環節，或各部門主管的答案不一樣。符合的話，從現況診斷開始。',
          '二、報價、訂單或庫存主要還在 Excel、紙本或 LINE 對話裡，同一筆資料要重複輸入兩次以上。符合的話，可以從流程數位化開始，但動工前仍要做一次簡單盤點。',
          '三、主要資料已經在系統裡，查得到也對得上，但同仁還花很多時間整理文件、回覆詢單、做報表。符合的話，可以直接進入 AI 導入與內訓。',
          '四、以前導入過系統或派人上過課，但沒有延續下去。這種情況建議回到診斷，先找出當初卡住的原因，再談下一步。',
        ],
      },
      {
        heading: '推動時要避開的三個錯誤',
        paras: [
          '第一，跳過診斷直接挑工具。廠商展示的功能再完整，對不上自家流程就用不起來。',
          '第二，一次改太多部門。先挑一個環節做出看得見的改變，讓同仁實際感受到差別，再擴到下一個部門，阻力會小很多。',
          '第三，把轉型丟給年輕同仁或 IT 人員。這件事會改到每個部門的工作方式，老闆或接班人要親自參與優先順序的決定，不然各部門很容易各做各的。還不確定該從哪一步開始，可以先來線上說明會聽我們用實際流程說明。',
        ],
      },
    ],
  },
  en: {
    title: 'Transforming a Traditional Business Without Replacing Your ERP All at Once: Diagnose, Digitize, Then Bring in AI',
    description: 'Systems nobody uses, training that changes nothing, ERP migrations that stall operations: most of these come from doing things in the wrong order. Here is how Twouring approaches it in three steps, what each step delivers, how it is accepted, and a short checklist to find your starting point.',
    eyebrow: 'Digital Transformation Methods',
    lead: 'When we talk with owners of traditional businesses about digital transformation, the first question is usually: "Should we replace our ERP?" We usually hold off on answering. Whether to change systems depends on how work actually happens on the floor. In many companies, the real bottlenecks are quotes that live in one person\'s head, inventory numbers that never match, and production status that requires a phone call. None of these necessarily start with a new system.',
    sections: [
      {
        heading: 'Three common failures, and why order is usually the problem',
        paras: [
          'The first is the system nobody uses. Nobody mapped how sales, production control and the warehouse actually work before rollout, so the fields do not match real tasks. Staff end up entering data into the system while still maintaining their own Excel files. After a while nobody trusts the system data, and everyone goes back to the old way.',
          'The second is sending people to training and seeing nothing change. External AI or software courses use generic examples that have nothing to do with your quotation forms, part-number rules or customer inquiry formats. People understand the lesson, then return to their desks without knowing where to start tomorrow morning.',
          'The third is replacing the entire ERP in one go. During cutover, orders, inventory and accounting all change at once, and a snag in any one of them hits shipping and collections directly. For small and mid-sized companies that are already short-handed, this period is often riskier than expected.',
          'All three share one thing: the tool was chosen before anyone looked at the process. We do it the other way around. We get a clear picture of the process first, then decide what belongs in a system and what is a good fit for AI.',
        ],
      },
      {
        heading: 'Step 1: Diagnosis, finding the three most labor-intensive steps',
        paras: [
          'The diagnosis takes about two to three weeks. Our consultants go on site and interview the people responsible for quoting, order intake, production control, the warehouse and accounting. We follow one order from inquiry to shipment and payment, counting how many people, forms and repeated data entries it passes through.',
          'The deliverable is a diagnostic report listing the three steps that consume the most labor and produce the most errors, with priorities, a suggested timeline and a budget range. Acceptance is simple: after reading it, do the owner and department heads agree these three are the most painful points today? If people disagree on the ranking, we go back for more interviews until there is consensus.',
          'The diagnosis can stand alone. You can decide whether to continue after seeing the results, or take the report to your existing system vendor. We once helped a research institution map its data workflows. The conclusion was to hand standardizable sorting work to the system and keep judgment calls with people. You only see that kind of split once the process is laid out.',
        ],
      },
      {
        heading: 'Step 2: Digitizing the process, integrating where possible instead of forcing replacement',
        paras: [
          'Step 2 tackles the steps the diagnosis identified, moving quotes, orders, part numbers, inventory and production progress out of Excel and paper and into a system. If you already have an ERP whose core functions still work, we prioritize integration so new tools feed data into the existing system. We do not require you to replace everything.',
          'The deliverable is a process and data set that runs every day: part numbers follow one coding rule, orders move through fixed statuses from creation to shipment, and inventory has a single source of truth. Acceptance is judged on daily work. Can sales look up an order\'s production status directly in the system? Does the warehouse count match the system? Does month-end reconciliation still require comparing several spreadsheets by hand?',
          'One hardware and materials company carried thousands of part numbers across e-commerce, an ERP and physical retail counters. Our entry point was product data: first consolidate part numbers, specifications and prices into one shared master file, then have e-commerce, the ERP and the counters all pull from it. Once product data is in order, connecting any later system becomes much easier.',
        ],
      },
      {
        heading: 'Step 3: AI adoption and in-house training tied to each department\'s daily work',
        paras: [
          'AI needs data to work with, which is why it comes after digitization. In Step 3 we design AI applications around the company\'s actual work, such as organizing quotations, replying to customer inquiries, producing export documents, writing meeting minutes and compiling management reports.',
          'Then we run hands-on classes by department. Each class practices what that department does every day: sales practices inquiry replies, shipping practices export documents, managers practice report compilation, so people can use it as soon as they return to their desks. Acceptance looks at actual use after class, meaning whether the designated tasks are now done the new way.',
          'We once designed a 24-hour AI workplace training program for hospital medical staff: eight topic sessions, run in cohorts by four job categories, with simulated data used in every class. Training for traditional businesses follows the same principle. People are grouped by role and practice with simulated data, and no real customer or company data is brought into the classroom.',
        ],
      },
      {
        heading: 'Where should you start? A self-check list',
        paras: [
          'Not every company needs to start at Step 1. Ask yourself these four questions:',
          '1. You cannot name the three most labor-intensive steps in your company, or department heads give different answers. If so, start with diagnosis.',
          '2. Quotes, orders or inventory still live mainly in Excel, on paper or in LINE chats, and the same data is entered two or more times. If so, you can start with process digitization, but do a quick review before work begins.',
          '3. Your core data is already in a system, searchable and consistent, yet staff still spend a lot of time preparing documents, replying to inquiries and building reports. If so, you can go straight to AI adoption and training.',
          '4. You have rolled out a system or sent people to training before, but it did not stick. In that case, go back to diagnosis and find out what got stuck before deciding the next step.',
        ],
      },
      {
        heading: 'Three mistakes to avoid',
        paras: [
          'First, picking tools without a diagnosis. However complete a vendor demo looks, it will not get used if it does not fit your process.',
          'Second, changing too many departments at once. Pick one step, make a visible change that staff can feel, then expand to the next department. Resistance will be much lower.',
          'Third, handing transformation to younger staff or IT alone. It changes how every department works, so the owner or successor needs to take part in setting priorities. Otherwise each department tends to go its own way. If you are not sure where to start, join our online briefing, where we walk through the three steps using real workflows.',
        ],
      },
    ],
  },
  ja: {
    title: '伝統産業のDXはERPの一括入れ替えから始めなくていい：診断、デジタル化、AI導入の3ステップ',
    description: '導入したシステムが使われない、研修を受けても何も変わらない、ERP刷新で業務が止まる。原因の多くは進める順番にあります。遊遊（Twouring）の3ステップの進め方、各ステップの成果物と検収方法、出発点を判断するセルフチェックリストをまとめました。',
    eyebrow: 'DXの進め方',
    lead: '伝統産業の経営者とDXの話をすると、最初によく聞かれるのは「ERPを入れ替えるべきでしょうか」という質問です。私たちはすぐには答えません。システムを替えるかどうかは、現場の業務フローを見てから判断することだからです。多くの会社で本当に詰まっているのは、見積もりが特定の一人の記憶に頼っている、在庫の数字が合わない、生産の進捗を電話で確認しなければならない、といった点です。これらは必ずしもシステムの入れ替えから手をつける必要はありません。',
    sections: [
      {
        heading: 'よくある3つの失敗、問題の多くは順番にある',
        paras: [
          '一つ目は、システムを買ったのに誰も使わないケースです。導入前に営業、生産管理、倉庫が普段どう仕事をしているかを把握していないため、稼働後に項目が実務と合わず、社員はシステムに入力しながら自分のExcelも更新し続けることになります。しばらくするとシステムのデータは信用されなくなり、皆が元のやり方に戻ります。',
          '二つ目は、研修に送り出しても戻ってきたら何も変わらないケースです。外部のAIやデジタルツールの講座は一般的な事例が中心で、自社の見積書、品番ルール、顧客からの問い合わせ形式とは関係がありません。内容は理解できても、席に戻ると明日の朝の仕事のどこから変えればいいのかわかりません。',
          '三つ目は、ERPを一度にすべて入れ替えるケースです。新旧システムの切り替え期間中は受注、在庫、会計が同時に変わり、どこか一か所で詰まれば出荷と入金に直接影響します。もともと人手に余裕のない中小企業にとって、この期間のリスクは想定より高くなりがちです。',
          '3つに共通するのは、業務フローを見る前にツールを決めてしまったことです。私たちは逆の順番で進めます。まず業務フローをはっきりさせ、そのうえでどこをシステム化し、どこをAIに任せるのが適しているかを決めます。',
        ],
      },
      {
        heading: 'ステップ1：現状診断、最も人手がかかる3つの工程を特定する',
        paras: [
          '診断期間は2〜3週間ほどです。コンサルタントが現場に入り、見積もり、受注、生産管理、倉庫、会計の担当者に順にヒアリングします。一件の注文が問い合わせから出荷、入金に至るまでに、何人の手を経て、何枚の帳票を通り、何回重複入力されるかを追います。',
          '成果物は診断レポートです。最も人手がかかり、ミスが多い3つの工程を挙げ、対応の優先順位、推奨スケジュール、予算の目安を添えます。検収はシンプルで、経営者と各部門の責任者がレポートを読んで、この3つが今いちばん困っている点だと納得できるかどうかです。順位に異論があれば追加でヒアリングを行い、合意が得られるまで詰めます。',
          '診断だけを単独で依頼することもできます。結果を見てから先に進むかを決めても、レポートを既存のシステムベンダーとの相談に使っても構いません。以前、ある研究機関のデータ業務の棚卸しを支援した際には、標準化できる整理作業はシステムに任せ、判断が必要な部分は人に残すという結論になりました。こうした役割分担は、業務フローを広げて見て初めてわかります。',
        ],
      },
      {
        heading: 'ステップ2：業務フローのデジタル化、連携できるなら入れ替えを強制しない',
        paras: [
          'ステップ2では、診断で挙がった工程に取り組み、見積もり、受注、品番、在庫、生産進捗をExcelや紙からシステムへ移します。すでにERPがあり、基本機能がまだ使える状態であれば、連携を優先し、新しいツールから既存システムへデータを送る形にします。すべての入れ替えは求めません。',
          '成果物は、毎日実際に回る業務フローとデータです。品番は統一されたコード体系に従い、注文は作成から出荷まで決まったステータスで管理され、在庫の数字は一か所だけを正とします。検収は日常業務で確認します。たとえば、営業がシステム上で特定の注文の生産進捗を直接確認できるか、倉庫の棚卸し数とシステムの数字が一致するか、月末の照合でまだ複数の表を手作業で突き合わせる必要があるか、といった点です。',
          'ある金物・建材の事業者は数千点の品番を扱い、ECサイト、ERP、実店舗の売り場を同時に運営していました。私たちの切り口は商品データでした。まず品番、仕様、価格を共通のマスターファイルにまとめ、ECサイト、ERP、売り場がすべてそのマスターからデータを取る形にしました。商品データが整っていれば、後からどのシステムをつなぐにしても進めやすくなります。',
        ],
      },
      {
        heading: 'ステップ3：AI導入と社内研修、各部門の日常業務に合わせる',
        paras: [
          'データがシステムに入って初めて、AIが扱える材料がそろいます。ステップ3では、会社の実際の業務に合わせてAIの活用方法を設計します。たとえば見積書の整理、顧客からの問い合わせへの返信、輸出書類の作成、議事録の整理、管理レポートの取りまとめなどです。',
          '続いて部門ごとに実践型の研修を行います。授業で練習するのはその部門が毎日やっている仕事そのもので、営業は問い合わせへの返信、船積み担当は輸出書類、管理職はレポートの取りまとめを練習し、授業が終わって席に戻ればすぐ使える状態を目指します。検収は研修後の実際の利用状況で見ます。指定した業務が新しいやり方で処理されるようになったかどうかです。',
          '以前、ある病院の医療スタッフ向けに、24時間体制の現場でのAI活用研修を設計しました。8回のテーマ別講座を、4つの職種ごとにグループを分けて実施し、授業ではすべて模擬データを使いました。伝統産業の社内研修も同じ原則で進めます。職種ごとにグループを分け、模擬データで練習し、顧客や会社の実データは教室に持ち込みません。',
        ],
      },
      {
        heading: 'どのステップから始めるか：セルフチェックリスト',
        paras: [
          'すべての会社がステップ1から始める必要はありません。まず次の4つを確認してください。',
          '1. 社内で最も人手がかかる3つの工程を挙げられない、または部門の責任者によって答えが違う。当てはまる場合は、現状診断から始めてください。',
          '2. 見積もり、受注、在庫がまだ主にExcel、紙、LINEのやり取りの中にあり、同じデータを2回以上入力している。当てはまる場合は業務フローのデジタル化から始められますが、着手前に簡単な棚卸しは行ってください。',
          '3. 主要なデータはすでにシステムに入っていて検索も照合もできるが、社員が書類作成、問い合わせ対応、レポート作成に多くの時間を使っている。当てはまる場合は、AI導入と社内研修から直接始められます。',
          '4. 以前システムを導入したり研修に人を送ったりしたが、定着しなかった。この場合は診断に戻り、当時どこで止まったのかを確かめてから次の手を考えることをおすすめします。',
        ],
      },
      {
        heading: '進めるうえで避けたい3つの間違い',
        paras: [
          '一つ目は、診断を飛ばしてツールを選ぶことです。ベンダーのデモがどれほど充実していても、自社の業務フローに合わなければ使われません。',
          '二つ目は、一度に多くの部門を変えようとすることです。まず一つの工程で目に見える変化を出し、社員に違いを実感してもらってから次の部門へ広げると、抵抗はずっと小さくなります。',
          '三つ目は、若手社員やIT担当だけに任せることです。DXはすべての部門の仕事のやり方を変えるため、経営者や後継者が自ら優先順位の決定に関わる必要があります。そうでないと、部門ごとにばらばらに動きがちです。どこから始めるべきか迷っている方は、まずオンライン説明会で、実際の業務フローを使った3ステップの進め方を聞いてみてください。',
        ],
      },
    ],
  },
},

'metal-parts-ai-quoting': {
  slug: 'metal-parts-ai-quoting',
  path: '/insights/metal-parts-ai-quoting',
  published: '2026-11-05',
  updated: '2026-11-05',
  sources: [
    { title: '出口貨物報關驗放辦法（全國法規資料庫）', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0350014' },
    { title: '個人資料保護法第 2 條（全國法規資料庫）', url: 'https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=I0050021&flno=2' },
    { title: 'NIST AI 600-1: Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile', url: 'https://nvlpubs.nist.gov/nistpubs/AI/NIST.AI.600-1.pdf' },
  ],
  zh: {
    title: '五金與金屬加工廠的報價、料號與外銷文件，哪些可以先交給 AI',
    description: '料號主檔亂、報價卡在資深同仁、詢單回得慢、Invoice 和 Packing List 一再重打。這篇拆成四個步驟，寫清楚每一步要準備的資料、常見的坑和驗收方式。',
    eyebrow: 'AI 導入技巧',
    lead: '很多五金、扣件和模具廠想導入 AI，第一個念頭是「讓 AI 幫我報價」。方向沒錯，順序常常反了。報價要用到料號、材質、表面處理、包裝和歷史單價，這些資料如果散在三份 Excel 和一位資深業務的腦袋裡，AI 只會更快產出錯的報價。下面照我們建議的順序，把可以先交給 AI 的工作拆成四步。',
    sections: [
      {
        heading: '第一步：先整理料號主檔',
        paras: [
          '同一顆螺絲，業務叫「M6x20 不鏽鋼六角」，倉庫寫「SUS304 HEX M6*20」，客戶詢單上又是對方的料號。人看得懂，系統對不起來，而後面每一步都要先對到同一個內部料號。',
          '要準備的資料：現有料號清單、近一兩年的出貨與報價紀錄、客戶料號對照表。主檔欄位建議至少有內部料號、中英文品名、規格（尺寸、牙距、長度）、材質、表面處理、單位、包裝方式與每箱數量、單件淨重、貨品分類號列（HS Code）、使用中或停產。淨重和分類號列第三步會用到，現在一起補。',
          '常見的坑有三個。第一，想一次整理完所有料號，拖了半年。先挑近一年有出貨的。第二，「304」「SUS304」「不銹鋼304」混用。這段適合讓 AI 先列出疑似重複的料號，再由熟悉產品的同仁確認是否合併。第三，整理完沒人維護又亂掉。主檔要指定負責人，新增料號走固定流程。',
          '怎麼驗收：抽查近期出貨單，每一行都能對到唯一的內部料號；必填欄位沒有空白；疑似重複的料號都有處理結論。',
        ],
      },
      {
        heading: '第二步：讓 AI 讀詢單 email，產出報價初稿，價格由人核',
        paras: [
          '詢單回得慢，常常慢在整理。客戶 email 列了二十個品項，有的附圖面、有的只寫「同上次」，業務得逐行抄出需求、對料號、查上次報價才能開始算。這段整理正是 AI 擅長的。',
          '做法是讓 AI 讀詢單和附件，整理成一張表：客戶料號、對應內部料號、規格、數量、交期、貿易條件和歷史成交價。對不到或資訊不全的品項標成待確認，並列出要回問客戶的問題。單價欄只帶參考價，由業務或主管依原料行情、產能和客戶狀況決定。',
          '要準備的資料：第一步的主檔與對照表、過去的報價與成交紀錄、報價範本、報價規則（最低訂購量、包裝加價等）。',
          '常見的坑：生成式 AI 會產出看似合理但錯誤的內容。美國國家標準暨技術研究院（NIST）的生成式 AI 風險指引 NIST AI 600-1 稱之為 confabulation，並提醒人容易過度信任自動化輸出。所以 AI 對的每個料號都要附上依據（哪封信、哪份附件、哪一行），讓核價的人查得到。另外，詢單裡客戶窗口的姓名和聯絡方式，依《個人資料保護法》第 2 條屬於個人資料，選工具時要確認資料存在哪裡、會不會被拿去訓練模型。',
          '怎麼驗收：拿已報過價的舊詢單回測，比對 AI 整理的品項、料號、數量和當初人工結果，逐筆記錄錯誤類型，再回頭補主檔或對照表。正式使用後，報價單送出前一律要有人簽核。',
        ],
      },
      {
        heading: '第三步：用範本產生 Invoice 與 Packing List，再逐項核對',
        paras: [
          '接單後，同一批資料常在訂單、出貨單、Commercial Invoice、Packing List 之間重打好幾次，每打一次就多一次出錯機會。',
          '外銷文件有法規要求。依《出口貨物報關驗放辦法》第 6 條，出口報關應檢附裝箱單等文件（僅一箱、種類單一且包裝劃一等情形得免附）；第 8 條要求裝箱單詳細列載貨物規格及每件毛重、淨重、數量；第 12 條要求貨品分類號列依《中華民國輸出入貨品分類表》據實申報。',
          '做法是固定 Invoice 與 Packing List 範本，品名、規格、數量、單價、毛淨重、箱數、嘜頭、分類號列都從訂單和主檔帶入。AI 負責比對客戶 PO 和訂單，標出數量、品名寫法等不一致處。文件本身用範本產生，不讓 AI 自由生成，格式和數字才穩定。',
          '要準備的資料：近期外銷文件樣本、主要客戶格式要求、主檔的重量與包裝資料、報關行常要求補正的項目。常見的坑是淨重用理論值，和實際過磅有落差；換了包材或每箱數量沒更新主檔，文件就跟著錯。',
          '怎麼驗收：出貨前由船務對照 PO、出貨單和裝箱紀錄核對，並記錄被報關行或客戶退回修改的次數與原因，作為下一輪改善依據。',
        ],
      },
      {
        heading: '第四步：把每一步發現的問題接回主檔',
        paras: [
          '報價和文件出錯，往回追多半是主檔的問題，所以要設回饋流程：報價時遇到的新客戶料號寫進對照表，出貨時量到的實際重量回填主檔，停產或替代料號在主檔標清楚。',
          '我們可以分享的例子是一家經營數千種料號的五金材料業者，以商品資料為核心整合電商、ERP 與實體櫃位，減少跨系統重複輸入與人工比對。資料只在一處維護，其他系統都從那裡取用，AI 和自動化有這個基礎結果才穩。',
        ],
      },
      {
        heading: '建議從哪一步開始',
        paras: [
          '多數工廠我們建議從第一步開始，但不要整理全部料號。先挑營收占比最高的一兩個客戶，把他們近一年下過單的料號做成乾淨的主檔和客戶料號對照表。範圍小，較快看到結果，也能直接拿來測第二步。',
          '如果主檔已算整齊，外銷文件重工又是船務最大負擔，可以先做第三步，範本化最容易驗收。報價初稿放在主檔穩定之後，價格決定權始終在人手上。',
          '開始前先講好主檔由誰負責、拿哪些舊詢單和文件回測、驗收標準是什麼，再來選工具。',
        ],
      },
    ],
  },
  en: {
    title: 'Quotes, Part Numbers and Export Documents: What Metal Parts Makers Can Hand to AI First',
    description: 'Messy part master data, quotes that depend on a few senior staff, slow replies to RFQs, and invoices and packing lists retyped again and again. Four steps, with the data to prepare, the common pitfalls and how to check the results.',
    eyebrow: 'AI Adoption in Practice',
    lead: 'Many hardware, fastener and mold makers who look at AI start with the same idea: let AI do the quoting. The direction is fine, but the order is usually wrong. A quote draws on part numbers, materials, surface finishes, packaging and past prices. If that data is spread across three spreadsheets and one senior salesperson\'s memory, AI will only produce wrong quotes faster. Below are four steps, in the order we recommend.',
    sections: [
      {
        heading: 'Step 1: Clean up the part master first',
        paras: [
          'Sales calls a screw "M6x20 stainless hex", the warehouse writes "SUS304 HEX M6*20", and the customer\'s RFQ uses its own part number. People can tell these are the same item. Systems cannot. Reading RFQs, drafting quotes and filling export documents all depend on mapping these names to one internal part number.',
          'What to prepare: the current part list from your ERP or spreadsheets, one to two years of shipping and quotation records, and any customer part number cross-reference you already have. At minimum the master should hold internal part number, item name in Chinese and English, specification (size, thread pitch, length), material, surface finish, unit, packing method and quantity per carton, net weight per piece, HS code, and active or discontinued status. Step 3 needs net weight and HS code, so fill them in now.',
          'Three common pitfalls. First, trying to clean every part number at once and losing six months. Start with parts shipped in the past year and leave discontinued items for later. Second, the same meaning written several ways, such as "304", "SUS304" and "stainless 304". AI is useful here for a first pass: let it group entries and flag likely duplicates, then have someone who knows the products decide what to merge. Third, nobody maintains the master afterward and it drifts again within months. Name an owner and route every new part number through a fixed process.',
          'How to check it: sample recent delivery notes and confirm that every line maps to exactly one internal part number, required fields are filled, and every suspected duplicate has a decision.',
        ],
      },
      {
        heading: 'Step 2: Let AI read RFQ emails and draft the quote; people set the price',
        paras: [
          'Slow RFQ replies are often not about pricing. The delay is in the preparation. A customer lists twenty items in an email, some with drawings, some with a spreadsheet, some just saying "same as last time". Sales has to copy out each line, match part numbers and look up the last quote before any pricing starts. That preparation is work AI handles well.',
          'Have AI read the email and attachments and produce a table: customer item name or part number, matched internal part number, specification, quantity, requested delivery, trade terms, and past transaction prices. Items it cannot match, or that lack information, are marked for review along with the questions to ask the customer. The unit price column stays empty or shows only a reference price. Sales or a manager sets the price based on material costs, capacity and the account.',
          'What to prepare: the part master and customer cross-reference from Step 1, past quotes and order history, your current quote template, and your quoting rules such as minimum order quantities and packaging surcharges.',
          'Common pitfalls: generative AI can produce content that looks plausible but is wrong. The U.S. National Institute of Standards and Technology calls this confabulation in its generative AI risk profile, NIST AI 600-1, and also warns that people tend to over-trust automated output. So every part match should show its basis, meaning which email, attachment and line it came from, so the person approving the quote can check it. RFQ emails also contain the names and contact details of customer staff, which count as personal data under Article 2 of Taiwan\'s Personal Data Protection Act. When choosing a tool, confirm where the data is stored and whether it is used for model training, and control account access.',
          'How to check it: run the process on RFQs you have already quoted. Compare the items, part numbers and quantities AI extracted against what your staff prepared at the time, and log each error by type. Where errors cluster, fix the master or the cross-reference. Once in use, every quote is approved by a person before it goes out.',
        ],
      },
      {
        heading: 'Step 3: Generate invoices and packing lists from templates, then check each line',
        paras: [
          'After an order comes in, the same data is often retyped several times: sales order, delivery note, commercial invoice, packing list, and sometimes a customer-specific format. Every retyping is another chance for an error.',
          'Export documents carry legal requirements. Under Article 6 of Taiwan\'s Regulations Governing Customs Clearance, Inspection and Release of Export Cargo, a packing list must be submitted with the export declaration (with exemptions such as single-package shipments or uniformly packed goods of one kind). Article 8 requires the packing list to state the specifications and the gross weight, net weight and quantity of each package. Article 12 requires tariff classification to be declared truthfully according to the Customs Import Tariff and Classification of Import and Export Commodities of the ROC.',
          'Fix your invoice and packing list templates, and pull item name, specification, quantity, unit price, gross and net weight, carton count, shipping marks and HS code from the order and the part master. AI compares the customer PO against the order and flags mismatches, such as a PO quantity that differs from the packed quantity, or a customer-required item description that differs from the master. The documents themselves come from the template rather than free generation by AI, which keeps formats and figures consistent.',
          'What to prepare: recent export document samples, format requirements from key customers, weight and packing data in the master, and the corrections your customs broker asks for most often. A common pitfall is using theoretical net weight that does not match the scale, so gross weight should be filled in from actual packing results. Another is changing packaging or carton quantity without updating the master, which makes every later document wrong.',
          'How to check it: before each shipment, the shipping team checks the documents against the PO, delivery note and packing record, and logs how often and why the broker or customer sends documents back for correction. That log drives the next round of fixes.',
        ],
      },
      {
        heading: 'Step 4: Feed every finding back into the master',
        paras: [
          'After the first three steps, most teams find that quote and document errors trace back to the master data. Set up a feedback loop: new customer part numbers found during quoting go into the cross-reference, actual weights measured at shipping go back into the master, and discontinued or substitute parts are clearly marked.',
          'One example we can share is a hardware materials business handling several thousand part numbers. It built its e-commerce, ERP and retail counter around a single product data source, which cut duplicate entry across systems and manual cross-checking. The point is that data is maintained in one place and every other system reads from it. AI and automation need that foundation to produce stable results.',
        ],
      },
      {
        heading: 'Where to start',
        paras: [
          'For most factories we recommend Step 1, but not for the whole catalog. Pick the one or two customers with the largest share of revenue and build a clean master and cross-reference for the parts they ordered in the past year. A small scope shows results sooner and gives you real data to test Step 2.',
          'If your part master is already in reasonable shape and export paperwork is the biggest burden on the shipping team, start with Step 3. Template-based documents are the easiest to verify. Leave quote drafting until the master is stable, and keep pricing decisions with people.',
          'Before starting, agree on who owns the master, which past RFQs and documents you will test against, and what counts as passing. Then choose tools.',
        ],
      },
    ],
  },
  ja: {
    title: '金物・金属加工メーカーの見積、品番、輸出書類。まずAIに任せられるのはどこか',
    description: '品番マスタの乱れ、ベテラン頼みの見積、遅れがちな引き合い対応、何度も打ち直すインボイスとパッキングリスト。4つのステップに分け、準備するデータ、よくある落とし穴、検収の方法を整理しました。',
    eyebrow: 'AI導入の実務',
    lead: '金物、ファスナー、金型のメーカーがAI導入を考えるとき、最初に浮かぶのは「AIに見積をさせたい」という発想です。方向は間違っていませんが、順番が逆になりがちです。見積には品番、材質、表面処理、梱包、過去の単価が必要です。これらが3つのExcelとベテラン営業の頭の中に散らばっていれば、AIは間違った見積を速く作るだけです。以下、私たちが勧める順番で4つのステップに分けて説明します。',
    sections: [
      {
        heading: 'ステップ1：まず品番マスタを整える',
        paras: [
          '同じねじでも、営業は「M6x20ステン六角」、倉庫は「SUS304 HEX M6*20」と書き、顧客の引き合いには先方の品番が載っています。人には同じものだと分かっても、システムでは突き合わせられません。引き合いの読み取り、見積作成、輸出書類の作成は、どれもこうした表記を一つの社内品番にひも付けることが前提です。',
          '準備するデータ：ERPやExcelにある現行の品番一覧、直近1〜2年の出荷・見積記録、顧客品番の対照表（あれば）。マスタの項目は最低限、社内品番、品名（中国語・英語）、仕様（サイズ、ピッチ、長さ）、材質、表面処理、単位、梱包方法と入数、単品の正味重量、HSコード、使用中か廃番かを持たせることを勧めます。重量とHSコードはステップ3で使うので、この段階で埋めておきます。',
          'よくある落とし穴は3つあります。1つ目は全品番を一度に整理しようとして半年かかること。直近1年に出荷実績のある品番から始め、廃番品は後回しにします。2つ目は同じ意味の表記ゆれで、「304」「SUS304」「ステンレス304」が混在するケースです。ここはAIに一次分類をさせて重複候補を洗い出し、製品に詳しい担当者が統合するかを判断するのに向いています。3つ目は整理後に誰も保守せず、数か月で元に戻ること。マスタの責任者を決め、新規品番は決まった手順で登録します。',
          '検収の方法：最近の出荷伝票を抜き取り、各行が一つの社内品番に対応していること、必須項目に空欄がないこと、重複候補すべてに結論が出ていることを確認します。',
        ],
      },
      {
        heading: 'ステップ2：AIに引き合いメールを読ませて見積の下書きを作り、価格は人が決める',
        paras: [
          '引き合いへの回答が遅いのは、価格計算よりも前段の整理に時間がかかっているからという場合が多くあります。顧客がメールに20品目を並べ、図面付きのもの、Excel付きのもの、「前回と同じ」とだけ書かれたものが混ざっている。営業は1行ずつ書き出し、品番を照合し、前回の見積を調べてから、ようやく計算に入ります。この整理こそAIが得意な作業です。',
          '具体的には、AIに引き合いメールと添付ファイルを読ませ、顧客の品名または品番、対応する社内品番、仕様、数量、希望納期、貿易条件、過去の成約価格を一覧表にまとめさせます。品番が見つからない品目や情報が足りない品目は要確認とし、顧客に問い合わせるべき点も挙げさせます。単価欄は空欄か参考価格のみとし、営業や管理者が原材料相場、生産能力、取引状況を踏まえて決めます。',
          '準備するデータ：ステップ1の品番マスタと顧客品番対照表、過去の見積書と成約記録、現行の見積テンプレート、見積ルール（最低発注数量、梱包の加算方法など）。',
          'よくある落とし穴：生成AIはもっともらしく見えて誤った内容を出力することがあります。米国国立標準技術研究所（NIST）は生成AIのリスク管理文書NIST AI 600-1でこれをconfabulationと呼び、人が自動化システムの出力を過信しやすいことにも注意を促しています。そのため、AIが判断した品番にはどのメールのどの添付ファイルの何行目から判断したかという根拠を添え、価格を確認する人が検証できるようにします。また引き合いメールには顧客担当者の氏名や連絡先が含まれ、台湾の個人資料保護法第2条では個人データに当たります。ツールを選ぶ際は、データの保存場所とモデル学習に使われるかを確認し、アカウント権限も管理してください。',
          '検収の方法：すでに見積済みの過去の引き合いで試し、AIが抽出した品目、品番、数量を当時の担当者の整理結果と照合して、誤りを種類別に記録します。誤りが集中する分野があれば、マスタや対照表を補強します。本番運用後も、見積書は送付前に必ず人が承認します。',
        ],
      },
      {
        heading: 'ステップ3：テンプレートでインボイスとパッキングリストを作り、項目ごとに照合する',
        paras: [
          '受注後、同じデータが受注書、出荷伝票、コマーシャルインボイス、パッキングリスト、ときには顧客指定の書式へと何度も打ち直されます。打ち直すたびに誤りの機会が増えます。',
          '輸出書類には法令上の要件があります。台湾の「出口貨物報関験放辦法」第6条は、輸出申告時にパッキングリスト等の添付を求めています（1箱のみ、単一品目で包装が均一な場合などは省略可）。第8条はパッキングリストに貨物の仕様と各梱包の総重量、正味重量、数量を詳しく記載するよう定め、第12条は「中華民国輸出入貨品分類表」に基づいて品目分類番号を正しく申告するよう定めています。',
          'インボイスとパッキングリストのテンプレートを固定し、品名、仕様、数量、単価、総重量・正味重量、箱数、荷印、HSコードを受注データと品番マスタから自動で差し込みます。AIの役割は顧客の注文書（PO）と受注内容を突き合わせ、POの数量と実際の梱包数の違いや、顧客指定の品名表記とマスタの違いといった不一致を指摘することです。書類自体はテンプレートで生成し、AIに毎回自由に作らせないことで、書式と数値が安定します。',
          '準備するデータ：最近の輸出書類のサンプル、主要顧客の書式要件、マスタの重量・梱包データ、通関業者からよく修正を求められる項目。よくある落とし穴は、単品の正味重量に理論値を使い実測と差が出ることです。総重量は実際の梱包結果で入力します。また梱包材や入数を変えたのにマスタを更新しないと、以後の書類がすべて誤ります。',
          '検収の方法：出荷前に出荷担当がPO、出荷伝票、梱包記録と書類を照合し、通関業者や顧客から差し戻された回数と理由を記録して、次の改善の根拠にします。',
        ],
      },
      {
        heading: 'ステップ4：各ステップで見つかった問題をマスタに戻す',
        paras: [
          '最初の3ステップを終えると、見積や書類の誤りをさかのぼれば、ほとんどがマスタの問題だと分かります。そこでフィードバックの流れを作ります。見積で出てきた新しい顧客品番は対照表に追加し、出荷時に量った実重量はマスタに反映し、廃番や代替品番はマスタに明記します。',
          '紹介できる事例として、数千点の品番を扱う金物資材の事業者があります。商品データを中心にECサイト、ERP、店頭売場を統合し、システム間の二重入力と手作業による照合を減らしました。ポイントは、データを一か所で管理し、ほかのシステムはそこから参照することです。AIや自動化が安定した結果を出すには、この土台が欠かせません。',
        ],
      },
      {
        heading: 'どのステップから始めるべきか',
        paras: [
          '多くの工場には、ステップ1から始めることを勧めます。ただし全品番ではありません。売上比率の高い顧客を1〜2社選び、直近1年に受注した品番について、整ったマスタと顧客品番対照表を作ります。範囲を絞れば早く結果が見え、そのままステップ2の検証にも使えます。',
          '品番マスタがすでにある程度整っていて、輸出書類の打ち直しが出荷担当の最大の負担になっているなら、ステップ3から始めても構いません。テンプレート化は効果を検証しやすい分野です。見積の下書きはマスタが安定してから取り組み、価格の決定は常に人が担います。',
          '始める前に、マスタの責任者は誰か、どの過去の引き合いと書類で検証するか、何をもって合格とするかの3点を決めておきます。ツール選びはその後です。',
        ],
      },
    ],
  },
},

'manufacturing-labor-shortage-ai': {
  slug: 'manufacturing-labor-shortage-ai',
  path: '/insights/manufacturing-labor-shortage-ai',
  published: '2026-11-05',
  updated: '2026-11-05',
  sources: [
    { title: '勞動部｜115年6月底職位空缺概況調查統計結果（115年9月30日發布）', url: 'https://www.mol.gov.tw/1607/1632/1633/99227/post' },
    { title: '國家發展委員會｜國發會發布「中華民國人口推估（2026年至2075年）」（2026年8月28日）', url: 'https://www.ndc.gov.tw/News_Content.aspx?n=114AAE178CD95D4C&s=6F7655EDC5AAD458' },
    { title: '國家發展委員會｜中華民國人口推估（2026-2075年）簡報', url: 'https://ppws.ndc.gov.tw/Download.ashx?u=LzAwMS9VcGxvYWQvNDY0L3JlbGZpbGUvMTAzNDcvMTY5LzkwZWQ4ZjdiLTIyMjQtNDNmOS1hZTJmLWM0NmQ3MzIyYjkwYy5wZGY%3D&n=5Lit6I%2Bv5rCR5ZyL5Lq65Y%2Bj5o6o5LywKDIwMjblubToh7MyMDc15bm0KeewoeWgsS5wZGY%3D' },
  ],
  zh: {
    title: '台灣製造業缺工現況，與 AI 能補上的三個缺口',
    description: '用勞動部與國發會最新統計看製造業缺人的程度，再拆解 AI 與系統能實際接手的三類工作：師傅經驗與 SOP、行政文書與報表、跨部門重複輸入。',
    eyebrow: '產業資訊',
    lead: '製造業的職缺數是各行業最多，工作年齡人口又一年比一年少。人補不滿的時候，比較實際的做法是先把不必由人親手做的工作拿掉。這篇整理最新官方數字，再談 AI 能接手的三個缺口，以及它做不到的事。',
    sections: [
      {
        heading: '數字怎麼說：職缺最多的行業，人口還在變少',
        paras: [
          '勞動部「115年6月底職位空缺概況調查」（115年9月30日發布）顯示，工業及服務業職缺共29.6萬個，其中製造業11.1萬個，占37.4%，是各行業最多；製造業職缺率3.7%，高於整體的3.3%，全時職缺平均對外招募時間為2.9個月。按職類看，技藝、機械設備操作及組裝人員的全時職缺有6.8萬個，占全部全時職缺的25%，也就是現場作業員與技術工這一層。',
          '勞動部在同一份新聞稿也說明，職缺反映的是用人需求，和「需求大於供給」的勞動力短缺不完全相同。不過供給端的方向很明確。國家發展委員會「中華民國人口推估（2026年至2075年）」中推估，15至64歲工作年齡人口2026年為1,576萬人，2035年降到1,416萬人；自2037年起，工作年齡人口將有一半以上是45至64歲的中高齡者。',
          '放到工廠裡，就是新人越來越難找，資深師傅也陸續退休。招募當然要繼續做，但同時該做的，是把師傅和行政人員的時間，從可以交給系統的工作裡拿回來。',
        ],
      },
      {
        heading: '缺口一：老師傅的經驗，變成新人查得到的資料',
        paras: [
          '很多廠的關鍵知識只在幾位資深人員腦中：換模要注意什麼、某批原料要調哪個參數、機台出現某種聲音代表什麼。新人只能跟著看、跟著問，師傅一忙，學習就停住。',
          '做法是把散在各處的文件整理成可以用中文提問的知識庫。新人問「這台射出機換色要洗幾次料管」，系統從 SOP 和異常紀錄裡找出相關段落回答，並附上出處讓人核對。師傅改用口述或錄影，由 AI 轉成文字稿與步驟草稿，再請師傅審過定稿，也可以順手做成新人教材和考題。',
          '要準備的資料：現有 SOP、作業指導書、異常處理紀錄、品質檢驗標準，以及師傅願意花時間講的幾個重點工序。紙本可以直接拍照或掃描，不必先打字。',
          '限制要先講清楚。知識庫回答的是文件裡寫了什麼，手感、聽聲音判斷異常、看原料狀況這類能力，還是要在現場帶。AI 縮短的是查資料和反覆詢問的時間，取代不了現場操作。文件本身寫錯，答案也會跟著錯，所以要排定由師傅定期校正。',
        ],
      },
      {
        heading: '缺口二：排程、日報、詢單回覆，少做一點重複工',
        paras: [
          '管理部和生管每天花不少時間在固定格式的文書上：把訂單整理成排程表、把各線產量彙整成日報、回覆客戶詢價與交期。這些工作規則明確、格式固定，適合交給系統先做第一版。',
          '例如每天從現有的 Excel 或 ERP 匯出生產數字，自動產出日報與異常摘要；客戶來信問交期或規格時，AI 依產品資料與目前排程草擬回覆，業務確認後再寄出；排程則由系統依交期與機台產能先排一版，生管再調整。',
          '要準備的資料：產品規格表、報價與交期的判斷規則、過去的排程表與日報範本、常見的詢單信件。規則寫得越清楚，草稿越能直接用。',
          '對外的報價、交期承諾和最終排程，一定要由人確認。插單、機台臨時故障、原料延遲這些現場變數，系統只能依已輸入的資料計算，不會自己知道。',
        ],
      },
      {
        heading: '缺口三：同一筆資料，不要讓三個部門各打一次',
        paras: [
          '業務接單打一次，生管排程再打一次，倉庫出貨、會計開票又各打一次，在傳產很常見。每多打一次就多一次出錯的機會，常常到月底對帳才發現數量或單價對不上。',
          '先盤點一張訂單從進來到出貨，經過哪些表單和系統、哪些欄位被重複輸入。接著指定一份資料當源頭，其他報表從它帶出；手寫或 PDF 的訂單、送貨單，可以用 AI 辨識後轉成結構化資料，人只負責核對。',
          '要準備的資料：各部門現在用的表單與 Excel 檔、ERP 或進銷存系統的匯出格式、料號與客戶代碼對照表。料號命名不一致的話要先統一，否則系統串不起來。',
          '這一塊最常卡住的是流程和權責，而不是技術。誰維護主資料、欄位改了要通知誰，需要老闆或廠長拍板。工具只能讓已經講好的流程跑得順。',
        ],
      },
      {
        heading: '從哪裡開始',
        paras: [
          '不建議一次全做。先挑一件每週重複最多、最常被抱怨出錯的工作，例如日報彙整或詢單回覆，做出可用的版本，讓實際使用的人試用並回饋，再決定下一步。',
          '動手前先回答三個問題：這件工作現在誰在做、每週花多少時間；需要的資料放在哪裡、是否完整；做錯時由誰把關。答得出來就可以開始；答不出來，先把資料整理好，本身就是很實在的第一步。',
          '遊遊協助製造業導入 AI 時，也是從這樣的盤點開始，再判斷哪些交給 AI、哪些用一般系統就夠、哪些還是要靠人。',
        ],
      },
    ],
  },
  en: {
    title: 'Taiwan\'s Manufacturing Labor Shortage, and Three Gaps AI Can Help Fill',
    description: 'What the latest Ministry of Labor and National Development Council figures say about hiring pressure in manufacturing, and three kinds of work AI and systems can realistically take over: master-technician know-how and SOPs, administrative paperwork and reports, and duplicate data entry across departments.',
    eyebrow: 'Industry Insight',
    lead: 'Manufacturing has more job vacancies than any other industry in Taiwan, and the working-age population shrinks every year. When positions cannot be filled, the practical move is to remove the work that does not need a person\'s hands. This article lays out the latest official figures, then covers three gaps AI can take on, and what it cannot do.',
    sections: [
      {
        heading: 'The numbers: the industry with the most vacancies, and a shrinking population',
        paras: [
          'The Ministry of Labor\'s Job Vacancy Survey for end-June 2026 (ROC year 115, released September 30, 2026) counted 296,000 vacancies across industry and services. Manufacturing accounted for 111,000 of them, or 37.4%, the most of any industry. The manufacturing vacancy rate was 3.7%, above the overall 3.3%, and full-time vacancies took an average of 2.9 months to fill through external recruitment. By occupation, craft workers and plant and machine operators and assemblers made up 68,000 full-time vacancies, 25% of the total. These are the shop-floor operators and technicians.',
          'The Ministry notes in the same release that vacancies measure hiring demand, which is not exactly the same as a labor shortage where demand exceeds supply. On the supply side, though, the direction is clear. Under the medium variant of the National Development Council\'s Population Projections for the R.O.C. (Taiwan): 2026-2075, the population aged 15 to 64 is 15.76 million in 2026 and falls to 14.16 million by 2035. From 2037, more than half of the working-age population will be aged 45 to 64.',
          'On the factory floor, that means new hires are harder to find while experienced technicians keep retiring. Recruiting still matters. At the same time, it makes sense to take back the hours that technicians and office staff spend on work a system could handle.',
        ],
      },
      {
        heading: 'Gap 1: Turning master technicians\' experience into something new hires can look up',
        paras: [
          'In many plants, critical knowledge lives in the heads of a few senior people: what to watch for during a mold change, which parameter to adjust for a certain batch of material, what a particular machine noise means. New hires can only watch and ask, and when the technician is busy, learning stops.',
          'The approach is to gather scattered documents into a knowledge base that people can query in plain Chinese. A new hire asks how many purges are needed when changing colors on an injection molding machine, and the system answers from the SOPs and incident records, with citations so the answer can be checked. Technicians can explain procedures verbally or on video; AI turns these into transcripts and draft procedures, which the technician then reviews and approves. The same material can become training content and quizzes.',
          'What to prepare: existing SOPs, work instructions, incident records, quality inspection standards, and a few key processes the technicians are willing to talk through. Paper documents can simply be photographed or scanned.',
          'The limits need to be stated up front. The knowledge base answers what the documents say. Feel, diagnosing problems by sound, and judging material condition still have to be taught on the floor. AI cuts the time spent searching and asking the same questions; it does not replace hands-on operation. If a document is wrong, the answer will be wrong too, so technicians should review the content on a regular schedule.',
        ],
      },
      {
        heading: 'Gap 2: Scheduling, daily reports, and inquiry replies with less repetitive work',
        paras: [
          'Office and production-control staff spend a lot of time each day on fixed-format paperwork: turning orders into schedules, compiling line output into daily reports, and answering customer questions about prices and lead times. The rules are clear and the formats are fixed, which makes this work a good fit for a system to produce the first draft.',
          'For example, production figures exported each day from existing Excel files or the ERP can generate a daily report and an exception summary automatically. When a customer emails about lead time or specifications, AI drafts a reply from product data and the current schedule, and sales confirms it before sending. For scheduling, the system produces a first pass based on due dates and machine capacity, and production control adjusts it.',
          'What to prepare: product specification sheets, the rules used to decide prices and lead times, past schedules and report templates, and typical inquiry emails. The clearer the rules, the more usable the drafts.',
          'Quotes, delivery commitments, and final schedules must be confirmed by a person. Rush orders, sudden machine breakdowns, and material delays are shop-floor variables the system only knows about if someone enters them.',
        ],
      },
      {
        heading: 'Gap 3: Stop having three departments type in the same data',
        paras: [
          'Sales enters the order, production control enters it again for scheduling, then the warehouse and accounting each enter it once more for shipping and invoicing. This is common in traditional manufacturing. Every extra entry is another chance for error, and mismatched quantities or prices often surface only at month-end reconciliation.',
          'Start by mapping an order from receipt to shipment: which forms and systems it passes through, and which fields get re-entered. Then designate one dataset as the source and pull other reports from it. Handwritten or PDF orders and delivery notes can be read by AI and converted into structured data, with people only checking the result.',
          'What to prepare: the forms and Excel files each department uses, export formats from the ERP or inventory system, and mapping tables for part numbers and customer codes. If part numbers are named inconsistently, standardize them first, or the systems cannot be connected.',
          'What usually holds this up is process and ownership rather than technology. Who maintains master data, and who must be told when a field changes, are decisions the owner or plant manager has to make. Tools only help a process that has already been agreed on run smoothly.',
        ],
      },
      {
        heading: 'Where to start',
        paras: [
          'Do not try to do everything at once. Pick one task that repeats most often each week and draws the most complaints about errors, such as compiling daily reports or replying to inquiries. Build a usable version, let the people who actually do the work try it and give feedback, then decide the next step.',
          'Before starting, answer three questions: who does this work now and how many hours a week it takes; where the needed data lives and whether it is complete; and who checks the result when something goes wrong. If you can answer them, you can begin. If you cannot, organizing the data is itself a worthwhile first step.',
          'When Twouring helps manufacturers adopt AI, we start with this kind of review, then decide what goes to AI, what an ordinary system can handle, and what still needs people.',
        ],
      },
    ],
  },
  ja: {
    title: '台湾製造業の人手不足の現状と、AIが補える3つの穴',
    description: '台湾労働部と国家発展委員会の最新統計から製造業の人手不足の程度を確認し、AIとシステムが実際に引き受けられる3種類の業務（熟練技術者の経験とSOP、事務書類と報告書、部門間の重複入力）を整理します。',
    eyebrow: '業界レポート',
    lead: '台湾では製造業の欠員数が全業種で最も多く、生産年齢人口も年々減っています。人が埋まらないなら、まず人の手でやる必要のない仕事を減らすのが現実的です。本稿では最新の公的統計を整理したうえで、AIが担える3つの穴と、AIにできないことを説明します。',
    sections: [
      {
        heading: '数字で見る：欠員が最も多い業種で、人口はさらに減る',
        paras: [
          '台湾労働部「2026年（民国115年）6月末職位空缺概況調査」（2026年9月30日公表）によると、鉱工業およびサービス業の欠員は計29.6万件で、うち製造業が11.1万件、37.4%と全業種で最多でした。製造業の欠員率は3.7%で全体の3.3%を上回り、フルタイム欠員の平均外部募集期間は2.9か月です。職業別では、技能工・機械設備操作・組立工のフルタイム欠員が6.8万件で、フルタイム欠員全体の25%を占めます。現場の作業員や技能工にあたる層です。',
          '労働部は同じ発表の中で、欠員は求人需要を示すもので、「需要が供給を上回る」労働力不足とは完全には一致しないと説明しています。ただ、供給側の方向ははっきりしています。国家発展委員会「中華民国人口推計（2026年～2075年）」の中位推計では、15～64歳の生産年齢人口は2026年の1,576万人から2035年には1,416万人に減少し、2037年以降は生産年齢人口の半数以上を45～64歳の中高年層が占めます。',
          '工場に置き換えれば、新人は見つけにくくなり、ベテラン技術者は順に退職していくということです。採用は続けるべきですが、同時に、技術者と事務スタッフの時間を、システムに任せられる仕事から取り戻すことも必要です。',
        ],
      },
      {
        heading: '穴その1：熟練技術者の経験を、新人が調べられる資料にする',
        paras: [
          '多くの工場では、重要なノウハウが数人のベテランの頭の中にしかありません。金型交換で注意すべき点、特定ロットの原料で調整するパラメータ、機械が特定の音を立てたときの意味などです。新人は見て覚え、聞いて覚えるしかなく、技術者が忙しいと学びが止まります。',
          '方法は、散らばった文書を、日常の言葉で質問できるナレッジベースにまとめることです。新人が「この射出成形機で色替えするとき、パージは何回必要か」と聞くと、システムがSOPや異常記録から該当箇所を探して答え、確認できるよう出典も示します。技術者は口頭説明や動画で手順を残し、AIが文字起こしと手順書の草案を作り、技術者が確認して確定させます。新人向け教材や確認テストにも転用できます。',
          '準備する資料：既存のSOP、作業標準書、異常処理記録、品質検査基準、そして技術者が時間を割いて説明してくれる重点工程。紙の資料は写真やスキャンで構いません。',
          '限界も最初に明確にしておきます。ナレッジベースが答えるのは文書に書かれていることです。手の感覚、音での異常判断、原料の状態の見極めは、引き続き現場で教える必要があります。AIが短縮するのは調べものと同じ質問の繰り返しにかかる時間で、現場作業の代わりにはなりません。文書が誤っていれば答えも誤るため、技術者による定期的な見直しを組み込みます。',
        ],
      },
      {
        heading: '穴その2：生産計画、日報、問い合わせ返信の繰り返し作業を減らす',
        paras: [
          '管理部や生産管理は毎日、定型書類に多くの時間を使っています。受注を生産計画表にまとめる、各ラインの生産量を日報に集計する、顧客からの見積や納期の問い合わせに返信する、といった業務です。ルールが明確で形式が決まっているため、システムに初稿を作らせるのに向いています。',
          'たとえば、既存のExcelやERPから毎日出力する生産データをもとに、日報と異常サマリーを自動作成します。顧客から納期や仕様の問い合わせメールが来たら、AIが製品データと現在の生産計画から返信案を作り、営業が確認してから送ります。生産計画は、納期と設備能力に基づいてシステムが一次案を作り、生産管理が調整します。',
          '準備する資料：製品仕様書、見積と納期の判断ルール、過去の生産計画表と日報のひな形、よくある問い合わせメール。ルールが明確なほど、草案はそのまま使えるものになります。',
          '社外への見積、納期の約束、最終的な生産計画は、必ず人が確認します。割り込み注文、設備の突発故障、原料の遅れといった現場の変数は、入力されたデータがなければシステムにはわかりません。',
        ],
      },
      {
        heading: '穴その3：同じデータを3つの部門で入力し直さない',
        paras: [
          '営業が受注を入力し、生産管理が計画のためにもう一度入力し、倉庫が出荷で、経理が請求でさらに入力する。伝統的な製造業ではよくある光景です。入力が一回増えるごとにミスの機会も増え、数量や単価の食い違いが月末の照合で初めて見つかることも珍しくありません。',
          'まず、1件の受注が入ってから出荷されるまでに、どの帳票とシステムを通り、どの項目が重複入力されているかを洗い出します。次に、1つのデータを正本と定め、ほかの帳票はそこから引き出す形にします。手書きやPDFの注文書・納品書は、AIで読み取って構造化データに変換し、人は確認だけを担当します。',
          '準備する資料：各部門が使っている帳票とExcelファイル、ERPや販売在庫管理システムの出力形式、品番と顧客コードの対応表。品番の付け方がばらばらなら、先に統一しないとシステムをつなげられません。',
          'ここで最も止まりやすいのは、技術よりも業務の流れと責任分担です。誰がマスターデータを管理するのか、項目を変えたら誰に知らせるのかは、経営者や工場長が決める必要があります。ツールは、決まった流れを滞りなく回すためのものです。',
        ],
      },
      {
        heading: 'どこから始めるか',
        paras: [
          '一度にすべてをやろうとしないことです。まず、毎週最も繰り返され、ミスへの不満が最も多い業務を一つ選びます。日報の集計や問い合わせへの返信などです。使える形のものを作り、実際にその業務を担う人に試してもらってフィードバックを受け、次の一手を決めます。',
          '着手前に3つの問いに答えてください。この業務は今だれが担当し、週に何時間かかっているか。必要なデータはどこにあり、そろっているか。間違えたときにだれがチェックするか。答えられるなら始められます。答えられないなら、データを整理すること自体が実のある第一歩です。',
          '遊遊（Twouring）が製造業のAI導入を支援する際も、こうした棚卸しから始め、AIに任せるもの、一般的なシステムで足りるもの、引き続き人が担うものを判断します。',
        ],
      },
    ],
  },
},

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
