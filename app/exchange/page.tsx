import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import "./exchange.css";

export const metadata: Metadata = {
  title: "在 Temple 的一學期｜林琮原的交換紀錄",
  description: "2025 秋天，林琮原從逢甲資工到 Temple University 交換。記下英文課堂、OwlHacks、擊劍社、科技公司參訪，以及旅途中對大學教育的思考。",
  alternates: { canonical: "https://portfolio.tsungyuan.dev/exchange" },
  openGraph: {
    title: "在 Temple 的一學期",
    description: "課堂、擊劍、朋友，還有學期中的幾趟旅行。林琮原 · Fall 2025",
    url: "https://portfolio.tsungyuan.dev/exchange",
    locale: "zh_TW",
    type: "article",
    images: [{ url: "/portfolio/exchange/friends.webp", width: 1080, height: 512, alt: "林琮原與在美國認識的朋友" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "在 Temple 的一學期｜林琮原",
    description: "Temple University 交換生活與學習紀錄 · Fall 2025",
    images: ["/portfolio/exchange/friends.webp"],
  },
};

function WorkLink({ href, title, detail }: { href: string; title: string; detail: string }) {
  return <a className="exchange-work-link" href={href} target="_blank" rel="noreferrer"><span>{title}<small>{detail} · 另開分頁</small></span><ArrowUpRight size={20} aria-hidden="true" /></a>;
}

type VisitPhoto = { file: string; width: number; height: number; caption: string; alt: string };

function VisitPhotoRow({ photos }: { photos: VisitPhoto[] }) {
  return (
    <div className="exchange-photo-row">
      {photos.map(({ file, width, height, caption, alt }) => (
        <figure key={file} style={{ flexGrow: width / height }}>
          <a href={`/portfolio/exchange/${file}.webp`} target="_blank" rel="noreferrer" aria-label={`${caption}，另開分頁看大圖`}>
            <img src={`/portfolio/exchange/${file}.webp`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
          </a>
          <figcaption>{caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

const campusPhotos: VisitPhoto[][] = [
  [
    { file: "stanford-arcade", width: 1200, height: 1600, caption: "Stanford · 史丹佛大學", alt: "史丹佛大學石造拱廊，透過層層拱門看向內側庭院" },
    { file: "princeton-visit", width: 1200, height: 1600, caption: "Princeton · 普林斯頓大學", alt: "普林斯頓大學積雪的庭院與亮著暖光的拱廊" },
  ],
  [
    { file: "upenn-visit", width: 1200, height: 1600, caption: "UPenn · 賓州大學", alt: "賓州大學校園的磚牆入口與後方建築" },
    { file: "harvard-visit", width: 1200, height: 1600, caption: "Harvard · 哈佛大學周邊", alt: "哈佛大學周邊掛著 Harvard 招牌的紀念品店" },
    { file: "mit-visit", width: 1200, height: 1600, caption: "MIT · 麻省理工學院", alt: "MIT 的校園標誌與街景" },
  ],
  [
    { file: "ucla-visit", width: 1200, height: 900, caption: "UCLA · 加州大學洛杉磯分校", alt: "加州大學洛杉磯分校掛著 UCLA 標誌的校園建築" },
    { file: "washington-visit", width: 946, height: 1264, caption: "UW · 華盛頓大學", alt: "華盛頓大學廣場上的磚造高塔與校名旗幟" },
    { file: "ucla-walkway", width: 585, height: 439, caption: "UCLA · 雨後的校園步道", alt: "UCLA 校園雨後的樹蔭步道，兩側樹木向中央伸展" },
  ],
];

const companyPhotos: VisitPhoto[][] = [
  [
    { file: "google-silicon-valley", width: 1200, height: 1600, caption: "矽谷 · Google 園區", alt: "林琮原在矽谷 Google 園區的彩色標誌旁留影" },
    { file: "google-seattle-exterior", width: 472, height: 629, caption: "西雅圖 · Google 辦公室", alt: "西雅圖 Google 辦公室的玻璃外牆與 Google 標誌" },
    { file: "google-bike-workshop", width: 479, height: 639, caption: "Google · 腳踏車工作坊", alt: "西雅圖 Google 辦公室內的腳踏車工作坊與工具牆" },
  ],
  [
    { file: "google-seattle-cafe", width: 873, height: 655, caption: "Google · 辦公室內的咖啡廳", alt: "西雅圖 Google 辦公室內的咖啡廳與座位空間" },
    { file: "amazon-spheres", width: 1600, height: 1200, caption: "西雅圖 · Amazon Spheres", alt: "西雅圖 Amazon Spheres 的玻璃球體建築" },
  ],
];

const chapters = [
  ["speaking", "英文課堂"],
  ["learning", "課堂作品"],
  ["teamwork", "OwlHacks"],
  ["living", "擊劍與朋友"],
  ["career", "科技業與職涯"],
  ["campuses", "大學與旅途"],
  ["daily", "費城生活"],
  ["sharing", "返國分享"],
];

export default function ExchangePage() {
  return (
    <div className="exchange-page" lang="zh-Hant">
      <a className="exchange-skip" href="#exchange-story">跳至心得內容</a>
      <header className="exchange-topbar">
        <Link href="/#global" className="exchange-return"><ArrowLeft size={18} aria-hidden="true" />回到作品集</Link>
        <span lang="en">Tsung-Yuan Lin</span>
      </header>

      <main id="exchange-story" tabIndex={-1}>
        <section className="exchange-hero" aria-labelledby="exchange-title">
          <div className="exchange-hero-copy">
            <h1 id="exchange-title">在 Temple<br />的一學期</h1>
            <p className="exchange-meta" lang="en">Temple University · Philadelphia<br />Fall 2025 / Exchange semester</p>
            <p className="exchange-lead">我想體驗美式教育，也想親自去矽谷看看。到了 Temple，生活是五門課、兩個社團，還有每週一次的英文輔導。課堂上的嘗試、一起練擊劍的朋友，以及幾趟旅行，慢慢成了這一學期的樣子。</p>
            <a className="exchange-text-link" href="#speaking">開始閱讀 <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <figure className="exchange-hero-photo">
            <img src="/portfolio/global/philadelphia-life.webp" alt="林琮原在費城市政廳前跳躍留影" width={1050} height={1400} fetchPriority="high" />
            <figcaption>費城市政廳前。2025 年秋天，我從逢甲資工來到這裡交換。</figcaption>
          </figure>
        </section>

        <nav className="exchange-contents" aria-label="心得章節">
          {chapters.map(([id, title]) => <a href={`#${id}`} key={id}>{title}</a>)}
        </nav>

        <section className="exchange-chapter exchange-speaking" id="speaking" aria-labelledby="speaking-title">
          <div className="exchange-prose">
            <h2 id="speaking-title">老師說，他聽得懂。</h2>
            <p>簡報課第一天，我下課後去問老師，外國人是不是退選比較好。我擔心自己的口音會影響簡報。老師聽完，回我一句：「You have an accent, but I understand every single word you say.」所以我就硬著頭皮留下來了。</p>
            <p>真正上起課來，還有另一個麻煩：班上一大半是運動傳播相關科系的同學，報告常在講球賽。我原本對球賽沒什麼興趣，人名、術語都不熟，剛開始常常不知道大家在說什麼。</p>
            <p>自己的簡報也有得改。第一次自評，我寫下緊張時會低頭、卡住。後來發現自己在六分鐘裡塞了太多內容，忙著講完，反而顧不到聽眾。第四、第五次調整內容量後，才有餘裕練習眼神交流和語調。和同學熟了，也慢慢知道台下的人其實希望我講得好，上台就沒那麼緊張了。</p>
            <details className="exchange-note">
              <summary>看當時的簡報自評 <Plus size={18} aria-hidden="true" /></summary>
              <div>
                <p className="exchange-source">Presentation Self-Assessment #1 / #2</p>
                <blockquote lang="en">“I prepared too much content for a 6-minute presentation, and it hindered me from delivering my ideas with clarity.”</blockquote>
                <p>第二次自評裡，我記錄了後兩次簡報在語調和眼神交流上的進步，也寫下自己還沒有完全掌握這些技巧。回頭看，問題從「敢不敢上台」，變成了很具體的「這六分鐘到底要留下哪些內容」。</p>
              </div>
            </details>
          </div>
          <figure className="exchange-teacher">
            <img src="/portfolio/global/temple-classroom.webp" alt="林琮原與簡報課老師在 Temple 教室合照" width={1600} height={2133} loading="lazy" decoding="async" />
            <figcaption>和簡報課老師合照。課程結束後，他還寄信邀請我回課堂分享心得。</figcaption>
          </figure>
          <div className="exchange-presentation-work">
            <h3>Presentation for Digital Workplace</h3>
            <p>五次簡報從自我介紹、Marvel，接著是 Data Scientist、AI 招募偏見，到最後的政策提案。我用《魔球》（Moneyball）把資料科學連到同學熟悉的運動，也練習向非技術背景的人解釋自己的專業。後續做課堂訪談時，三位同學原本都不熟悉 AI 招募偏見，卻都在意篩選是否公平，希望有人把關。</p>
            <div className="exchange-artifact-pair">
              <figure>
                <a href="/portfolio/exchange/works/data-scientist-presentation.pdf" target="_blank" rel="noreferrer" aria-label="閱讀 Data Scientist 簡報節選，PDF，另開分頁"><img src="/portfolio/exchange/data-scientist-slide.webp" alt="Data Scientist 簡報以 Moneyball 介紹運動中的資料分析" width={1100} height={619} loading="lazy" decoding="async" /></a>
                <figcaption><WorkLink href="/portfolio/exchange/works/data-scientist-presentation.pdf" title="Data Scientist" detail="第 3 次簡報 · 節選 12 頁 · PDF" /></figcaption>
              </figure>
              <figure>
                <a href="/portfolio/exchange/works/ai-hiring-policy.pdf" target="_blank" rel="noreferrer" aria-label="閱讀 AI 招募政策提案，PDF，另開分頁"><img src="/portfolio/exchange/ai-hiring-slide.webp" alt="期末政策提案簡報中的履歷匿名化流程圖" width={1100} height={619} loading="lazy" decoding="async" /></a>
                <figcaption><WorkLink href="/portfolio/exchange/works/ai-hiring-policy.pdf" title="AI 招募與匿名履歷提案" detail="第 5 次簡報 · 節選 10 頁 · PDF" /></figcaption>
              </figure>
            </div>
            <p className="exchange-artifact-context">期末提案主張由政府提供免費工具，在履歷進入篩選模型前移除姓名、性別等資訊。以上保留 2025 年的課堂簡報內容，展示當時的論證與提案。</p>
          </div>
        </section>

        <section className="exchange-chapter exchange-learning" id="learning" aria-labelledby="learning-title">
          <div className="exchange-chapter-heading">
            <h2 id="learning-title">寫作與資料科學</h2>
            <p>這學期修了五門課。程式作業有原本資工系的底子可以接上，persuasive writing 的閱讀量就真的讓我吃不消。一直查字典，還是讀不完，每週還有 essay 要寫。</p>
          </div>
          <div className="exchange-courses">
            <article className="exchange-course-row">
              <div className="exchange-prose">
              <h3>persuasive writing</h3>
              <p>學期中後開始寫研究文章，我的題目是賓州是否應開放醫療輔助死亡（MAID），從找文獻、列題綱一路寫到草稿和修訂。同學互相做 peer review，圖書館也有專人協助找可引用的資料。以前修過的學術寫作課，在這時候派上了用場。</p>
              <p>雖然辛苦，我其實很喜歡這堂課。老師每次開頭都讓大家上台做一小段 elevator speech，也會帶二戰時期的雜誌來，甚至表演過雜耍。</p>
              <details className="exchange-note">
                <summary>我在 Writing Analysis 改了什麼 <Plus size={18} aria-hidden="true" /></summary>
                <div>
                  <p className="exchange-source">persuasive writing · Writing Analysis / Research Paper</p>
                  <p>這份作業要我逐句檢查自己的文章。有些句子是沒有足夠證據的主觀推測；有些用了「這些論點」之類的指稱，卻沒交代清楚指的是哪一段。</p>
                  <p>我也整理了冗句和過於口語的用法。期末回顧時，我寫下自己開始會站在讀者的角度想：句子太長、代名詞指得不清楚，或少交代了一小段背景，都可能讓讀者跟不上。</p>
                </div>
              </details>
              <div className="exchange-course-files">
                <WorkLink href="/portfolio/exchange/works/persuasive-writing-research-paper.pdf" title="期末研究文章：醫療輔助死亡" detail="2025 年課堂文章 · 英文 · 7 頁 PDF" />
                <WorkLink href="/portfolio/exchange/works/writing-analysis.pdf" title="Writing Analysis" detail="原句與我的修改分析 · 4 頁 PDF" />
              </div>
              </div>
              <figure className="exchange-teacher exchange-writing-teacher">
                <img src="/portfolio/exchange/writing-teacher.webp" alt="林琮原與 persuasive writing 老師在教室門口合照" width={1200} height={1600} loading="lazy" decoding="async" />
                <figcaption>和 persuasive writing 老師合照。</figcaption>
              </figure>
            </article>
            <article className="exchange-course-row">
              <div className="exchange-prose">
              <h3>Data science</h3>
              <p>Data science 每週有延伸閱讀，幾乎每堂都有練習和小組討論。我用 Tableau 比較疫情資料的總數、人口與每十萬人比例，也用 Excel 檢查商品名稱、促銷代碼和價格欄位裡的錯誤。資料怎麼整理、選哪個尺度呈現，都會影響後面的解讀。</p>
              <p>小組相處得很好，最後一堂課還一起集資請全班吃甜甜圈。這門通識課讓我學到資料科學基礎，也認識了很多不同科系的同學。</p>
              </div>
              <figure className="exchange-tableau">
                <a href="/portfolio/exchange/works/tableau-assignment.pdf" target="_blank" rel="noreferrer" aria-label="閱讀 Tableau 作業圖表，PDF，另開分頁"><img src="/portfolio/exchange/tableau-map.webp" alt="Tableau 課堂作業：美國各郡疫情資料的地圖" width={1379} height={812} loading="lazy" decoding="async" /></a>
                <figcaption><WorkLink href="/portfolio/exchange/works/tableau-assignment.pdf" title="Tableau 資料視覺化作業" detail="原作業圖表節選 · 7 頁 PDF" /></figcaption>
              </figure>
            </article>
          </div>
          <article className="exchange-scripting exchange-course-row">
            <div className="exchange-prose">
            <h3>Scripting for Data</h3>
            <p>這是五門課中，我在技術實作上學到最多的一門。每週的 Python 作業從檔案、JSON 和 API，到用 Pandas 整理資料、Matplotlib 畫圖。例如用紐約餐廳稽查資料，練習篩選行政區、統計違規項目，以及把日期轉成可以比較的格式。</p>
            <p>期末的題目是美國科技職缺薪資。我整理 Kaggle 的職缺資料，練習串接 Adzuna API、對齊兩份資料的欄位，再從地區、遠端工作和職缺描述裡提到的程式語言等角度做探索。除了比較薪資區間，也畫出散佈圖和直方圖，查看分布與極端值。</p>
            </div>
            <figure className="exchange-scripting-chart">
              <a href="/portfolio/exchange/works/tech-jobs-salary-scatter.png" target="_blank" rel="noreferrer" aria-label="查看 Scripting for Data 期末專案原始散佈圖，另開分頁"><img src="/portfolio/exchange/works/tech-jobs-salary-scatter.png" alt="科技職缺薪資下限與上限的散佈圖，呈現資料分布和少數偏離主要群集的職缺" width={989} height={590} loading="lazy" decoding="async" /></a>
              <figcaption><WorkLink href="/portfolio/exchange/works/tech-jobs-salary-scatter.png" title="Tech Jobs Salaries in the US" detail="2025 期末專案 · Notebook 原始圖表" />圖中為職缺刊登的薪資區間，並非實際錄取薪資。</figcaption>
            </figure>
          </article>
        </section>

        <section className="exchange-chapter exchange-teamwork" id="teamwork" aria-labelledby="teamwork-title">
          <div className="exchange-prose">
            <h2 id="teamwork-title">OwlHacks，<br />光定案就很辛苦。</h2>
            <p>我在群組裡找到當地學生，一起參加 OwlHacks 2025。原本在台灣參加過幾次黑客松，這次卻發現，熟悉的做事方式沒辦法直接搬過來。</p>
            <p>這組隊友都很有主見，大家一直提出想法，習慣用的工具也不同。討論很熱烈，但要收斂成一個能在時間內完成的作品，就沒有那麼容易。英文之外，還得適應彼此怎麼討論、怎麼做決定。</p>
            <p className="exchange-outcome">最後，我們拿到 Next Frontier Health Machine Learning Track 第二名。</p>
          </div>
          <figure className="exchange-film">
            <video controls playsInline preload="none" width={540} height={960} poster="/portfolio/showreels/owlhacks-2025.jpg" aria-label="OwlHacks 2025 活動紀錄，直式影片，28 秒">
              <source src="/portfolio/showreels/owlhacks-2025.mp4" type="video/mp4" />
              你的瀏覽器不支援影片播放。<a href="/portfolio/showreels/owlhacks-2025.mp4">開啟活動影片</a>
            </video>
            <figcaption>OwlHacks 2025 · 活動現場紀錄 · 28 秒</figcaption>
          </figure>
        </section>

        <section className="exchange-chapter exchange-living" id="living" aria-labelledby="living-title">
          <div className="exchange-chapter-heading">
            <h2 id="living-title">每週三天，<br />去擊劍社報到。</h2>
            <p>擊劍社是我在美國最喜歡的社團。一週練三次，每次兩小時，從沒碰過這項運動，到跟著大家出門比賽。社團還會用讓人付錢拿派砸我們的方式募款，大家玩得很開心。</p>
          </div>
          <div className="exchange-club-grid">
            <figure className="exchange-fencing">
              <img src="/portfolio/global/temple-fencing.webp" alt="林琮原與擊劍社隊友穿著擊劍服，並肩坐在場邊" width={1164} height={866} loading="lazy" decoding="async" />
              <figcaption>擊劍社 · 和隊友一起參加比賽。</figcaption>
            </figure>
            <div className="exchange-prose">
              <figure className="exchange-friends">
                <img src="/portfolio/exchange/friends.webp" alt="林琮原與朋友們在校園室內自拍" width={1080} height={512} loading="lazy" decoding="async" />
                <figcaption>在 Temple 認識的朋友。</figcaption>
              </figure>
              <p>跟一群當地同學聊天，比課堂英文難多了。他們私下用的字、內梗，還有不同地方的口音，我常常需要抓一個人幫忙「英翻英」，到後來才稍微好一點。</p>
            </div>
          </div>
          <div className="exchange-volleyball">
            <div className="exchange-prose">
              <h3>排球課</h3>
              <p>排球課也是我交朋友的地方。我本來就會打，教練示範時常找我搭配，也請我幫忙收器材。除了重新練基本動作，也學了很多英文的排球術語。下課後，大家還會另外約球、一起去看校隊比賽。在寫不完的作業中間，這堂課剛好讓我喘口氣。</p>
            </div>
            <figure><img src="/portfolio/exchange/volleyball-game.webp" alt="林琮原穿著逢甲上衣，在 Temple 排球比賽觀眾席留影" width={1000} height={1333} loading="lazy" decoding="async" /><figcaption>去看 Temple 校隊的排球比賽。</figcaption></figure>
          </div>
        </section>

        <section className="exchange-chapter exchange-career" id="career" aria-labelledby="career-title">
          <div className="exchange-career-intro">
          <div>
          <div className="exchange-chapter-heading">
            <h2 id="career-title">先去求職博覽會<br />看看。</h2>
            <p>我去學校的 STEM 求職博覽會，主要是想看看美國大學生怎麼找工作。和攤位上的人資聊聊，也看著朋友在現場到處加 LinkedIn。以前聽過 networking，這次終於看到同學實際怎麼做。</p>
          </div>
          <div className="exchange-prose exchange-career-club">
            <p>金融交易科技社則讓我多認識了一個方向。社課聊交易，群組裡有人分享趨勢、學校資源和實習資訊。我開始接觸 Quant，才更具體地想到，資工學的東西也能用在金融市場和量化交易。</p>
          </div>
          </div>
          <figure><img src="/portfolio/exchange/career-fair.webp" alt="Temple 求職博覽會現場，學生與企業攤位的人員交談" width={1200} height={1600} loading="lazy" decoding="async" /><figcaption>學校的 STEM 求職博覽會。</figcaption></figure>
          </div>
          <div className="exchange-company-visit">
            <h3>Google 與 Amazon 參訪</h3>
            <div className="exchange-visit-copy exchange-prose">
              <p>這趟也參訪了矽谷 Google 園區、西雅圖 Google 辦公室，以及 Amazon Spheres 和 Amazon Go。走進辦公室，最意外的是那些和工作桌放在一起的生活設施：小廚房、冥想室、腳踏車工作坊，甚至有跑步機升降桌。</p>
              <p>和員工聊天時，我才知道這些設施不一定每個人都會用。除了寫程式的工作桌，公司也花很多心思安排交流、休息和生活的空間，這是實際參訪後讓我印象很深的地方。</p>
            </div>
            <div className="exchange-visit-gallery" aria-label="科技公司參訪照片">
              {companyPhotos.map((photos) => <VisitPhotoRow key={photos[0].file} photos={photos} />)}
            </div>
          </div>
        </section>

        <section className="exchange-chapter exchange-campuses" id="campuses" aria-labelledby="campuses-title">
          <h2 id="campuses-title">很喜歡 MIT 博物館。</h2>
          <div className="exchange-campus-stories">
            <div className="exchange-prose">
              <p>我一個人去波士頓待了三天，逛了 Harvard 和 MIT。我特別喜歡 MIT 的博物館，逛完真的會讓人對學術又多一點憧憬。</p>
            </div>
            <div className="exchange-prose">
              <p>從美東到西岸，我還走訪了五所大學。校園建築、圖書館，甚至紀念品店，都讓我感覺到學校很用心經營自己的形象。我也開始留意，校友、捐款和產業連結怎麼圍繞著一所大學。</p>
            </div>
          </div>
          <div className="exchange-visit-gallery" aria-label="大學參訪照片">
            <h3>走訪七所大學</h3>
            {campusPhotos.map((photos) => <VisitPhotoRow key={photos[0].file} photos={photos} />)}
          </div>
          <div className="exchange-campus-list">
            <h3>這學期走訪的校園</h3>
            <dl>
              <div><dt>美東</dt><dd><span>哈佛大學 · Harvard University</span><span>麻省理工學院 · MIT</span><span>普林斯頓大學 · Princeton University</span><span>賓州大學 · University of Pennsylvania（UPenn）</span></dd></div>
              <div><dt>加州</dt><dd><span>史丹佛大學 · Stanford University</span><span>加州大學洛杉磯分校 · UCLA</span></dd></div>
              <div><dt>西雅圖</dt><dd><span>華盛頓大學 · University of Washington</span></dd></div>
            </dl>
          </div>
          <div className="exchange-campus-reflection exchange-prose">
            <p>逛的時候很嚮往，寫心得時卻一直想到費用。這麼好的環境，什麼樣的學生有機會進來？如果光是學費就很難負擔，再多資源也未必輪得到自己。這是參訪後留在我心裡的問題，也讓我更能理解，這次交換得到的學費互免和獎學金有多重要。</p>
          </div>
        </section>

        <section className="exchange-chapter exchange-daily" id="daily" aria-labelledby="daily-title">
          <div className="exchange-chapter-heading">
            <h2 id="daily-title">費城的日常，<br />也有很多第一次。</h2>
            <p>冬天的 Center City 有 Christmas Village、聖誕樹和溜冰場。我也在這裡看了人生第一場 NFL、MLB 和 NBA。雖然簡報課的球賽話題曾經讓我很頭痛，現場的大螢幕和重低音，還是很容易讓人跟著興奮起來。</p>
          </div>
          <div className="exchange-daily-stories">
            <article>
              <div className="exchange-prose">
              <h3>每週去 SSC 聊一小時</h3>
              <p>Student Success Center 的英文輔導，多半是在聊天。輔導員也是學生，除了課業，我還會問生活和文化上的問題。有些對他們來說是常識的事，我以前根本沒機會知道。</p>
              </div>
              <figure className="exchange-daily-photo"><img src="/portfolio/exchange/ssc-tutor.webp" alt="林琮原與 Student Success Center 的輔導員合照" width={1000} height={750} loading="lazy" decoding="async" /><figcaption>和 SSC 的學生輔導員合照。</figcaption></figure>
            </article>
            <article>
              <div className="exchange-prose">
              <h3>這趟有很多人幫忙</h3>
              <p>出發前可能會覺得，去國外就應該少跟台灣人混在一起。我回來後反而很想提醒下一屆：也要認識同鄉的夥伴。遇到一些生活上的麻煩，有人能幫忙真的差很多。</p>
              <p>交換要處理的事情從申請文件、推薦信、經費就開始了。到美國後，我也靠著朋友互相幫忙，才把這趟走完。照片裡有很多出去玩的時候，背後也有這些比較不會拍下來的事。</p>
              </div>
              <figure className="exchange-daily-photo"><img src="/portfolio/exchange/exchange-classmates.webp" alt="林琮原與其他同學在交換結業時一起合照" width={1200} height={900} loading="lazy" decoding="async" /><figcaption>交換結業時，和大家一起合照。</figcaption></figure>
            </article>
          </div>
          <div className="exchange-daily-reflection exchange-prose">
            <p>如果要說在 Temple 最喜歡什麼，我在百字心得裡寫的是「人」。我遇到把音樂、藝術當成人生方向的同學，也看到有人換過幾次科系，繼續找自己想做的事。老師給方法和建議，讓我覺得不會因為還做不好，就被否定。</p>
            <p>這裡的生活步調比我在台灣慢一些，讓我有時間思考、探索，也更了解自己想追求什麼。原本擔心應付不了的英文寫作和報告，慢慢變成每天都在使用語言的日常，即使犯錯也比較敢開口了。</p>
          </div>
        </section>

        <section className="exchange-closing" id="sharing" aria-labelledby="closing-title">
          <h2 id="closing-title">獎學金與返國分享</h2>
          <div className="exchange-sharing-story">
            <figure>
              <img src="/portfolio/moments-v2/exchange-scholarship.jpg" alt="林琮原在南投縣出國學習獎助學金成果發表活動中，手持出國獎學金牌合照" width={1400} height={874} loading="lazy" decoding="async" />
              <figcaption>南投縣出國學習獎助學金成果發表 · 2026 年 1 月 21 日</figcaption>
            </figure>
            <div className="exchange-prose">
              <p>這次交換獲得南投縣出國獎學金支持，加上逢甲大學的學費互免，讓我能完成在 Temple 的一學期。</p>
              <p>返國後，我在南投縣的出國學習獎助學金成果發表記者會上，分享課堂、社團和科技業參訪的經驗。活動在旭光高中舉行，縣府教育處的紀錄也收錄了我的分享。</p>
              <a className="exchange-text-link" href="https://ntctie.eduweb.tw/Ch/Module/News/Detail.php?ID=189" target="_blank" rel="noreferrer">閱讀教育處活動紀錄<span className="sr-only">（另開分頁）</span><ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="exchange-closing-notes">
            <div className="exchange-prose">
              <p>我也把選課、住宿、語言練習和生活經驗整理成交換分享簡報，回應準備出發的同學對花費、交朋友、英文和課業安排的疑問。這些是我當初也想知道、到了當地才慢慢弄懂的事。</p>
              <p>謝謝家人、師長、行政人員和朋友一路上的幫忙。以後如果有能力，我也希望能資助想出國、卻卡在經費的學生。</p>
            </div>
            <div className="exchange-resources">
              <h3>延伸紀錄</h3>
              <a href="/portfolio/exchange/works/scholarship-sharing.pdf" target="_blank" rel="noreferrer"><span>出國獎學金成果分享<small>簡報節選 11 頁 · PDF · 另開分頁</small></span><ArrowUpRight size={22} aria-hidden="true" /></a>
              <a href="/certificates/temple-exchange-fall-2025.pdf" target="_blank" rel="noreferrer"><span>交換證明<small>Temple University · PDF · 另開分頁</small></span><ArrowUpRight size={22} aria-hidden="true" /></a>
              <Link href="/#projects"><span>回到我的專案</span><ArrowRight size={22} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="exchange-footer"><span>林琮原 <span lang="en">/ Tsung-Yuan Lin</span></span><a href="#exchange-title">回到頁首 ↑</a></footer>
    </div>
  );
}
