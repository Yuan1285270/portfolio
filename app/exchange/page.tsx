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
    description: "課堂、擊劍、朋友，還有離開費城後的幾趟旅行。林琮原 · Fall 2025",
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
            <p className="exchange-lead">簡報課第一天，我下課後跑去問老師，外國人是不是退選比較好。後來我留了下來。這裡記下那五次簡報，也記下擊劍社的朋友、第一次逛美國求職博覽會，和幾趟離開費城的旅行。</p>
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
            <p>我擔心自己的口音會影響簡報。老師聽完，回我一句：「You have an accent, but I understand every single word you say.」所以我就硬著頭皮留下來了。</p>
            <p>真正上起課來，還有另一個麻煩：班上一大半是運動傳播相關科系的同學，報告常在講球賽。我原本對球賽沒什麼興趣，人名、術語都不熟，剛開始常常不知道大家在說什麼。</p>
            <p>自己的簡報也有得改。第一次自評，我寫下緊張時會低頭、卡住。後來學了停頓、手勢和眼神交流，卻又在六分鐘裡塞進太多內容，忙著講完，反而顧不到聽眾。第四、第五次刪掉一些內容，表現才比較自然。</p>
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
        </section>

        <section className="exchange-chapter exchange-learning" id="learning" aria-labelledby="learning-title">
          <div className="exchange-chapter-heading">
            <h2 id="learning-title">寫作與資料科學</h2>
            <p>這學期修了五門課。程式作業有原本資工系的底子可以接上，Persuasive Writing 的閱讀量就真的讓我吃不消。一直查字典，還是讀不完，每週還有 essay 要寫。</p>
          </div>
          <div className="exchange-work-grid">
            <article>
              <h3>寫作課裡的反覆修改</h3>
              <p>雖然辛苦，我其實很喜歡這堂課。老師每次開頭都讓大家上台做一小段 elevator speech，也會帶二戰時期的雜誌來，甚至表演過雜耍。</p>
              <p>學期中後開始寫研究文章，我選了醫療倫理議題，從找文獻、列題綱一路寫到草稿和修訂。同學互相做 peer review，圖書館也有專人協助找可引用的資料。以前修過的學術寫作課，在這時候派上了用場。</p>
              <details className="exchange-note">
                <summary>我在 Writing Analysis 改了什麼 <Plus size={18} aria-hidden="true" /></summary>
                <div>
                  <p className="exchange-source">Persuasive Writing · Writing Analysis / Research Paper</p>
                  <p>這份作業要我逐句檢查自己的文章。有些句子是沒有足夠證據的主觀推測；有些用了「這些論點」之類的指稱，卻沒交代清楚指的是哪一段。</p>
                  <p>我也整理了冗句和過於口語的用法，重新檢查引用與 APA／MLA 格式。比起只修單字，這些地方得回頭看整段的意思。</p>
                </div>
              </details>
            </article>
            <article>
              <h3>資料課，以及怎麼向同學介紹它</h3>
              <p>Scripting for Data 每週都有 Python 作業，練習用 Pandas、NumPy、Matplotlib 做探索性資料分析，也接觸 API。期末我做了美國科技業薪資分析，將學期中的操作用在同一份專案裡。</p>
              <p>Data Science 則有很多閱讀、小組活動和 Tableau、Excel 練習。幾乎每堂都要和同學討論，大家熟了以後，最後一堂課還集資請全班吃甜甜圈。</p>
              <details className="exchange-note">
                <summary>從 Data Scientist 講到 AI 招募偏見 <Plus size={18} aria-hidden="true" /></summary>
                <div>
                  <p className="exchange-source">Presentation 3 Outline / Presentation 5 Policy Outline</p>
                  <p>我把資料科學帶進簡報課，向不同科系的同學介紹 Data Scientist 的工作。第三次簡報用了《魔球》（Moneyball）的例子，連到班上同學熟悉的運動，也談到資料工作者需要和非技術背景的同事溝通。</p>
                  <p>後續簡報延伸到 AI 招募中的歧視問題。最後的課堂政策提案，是由政府提供免費工具，在履歷進入篩選模型前移除姓名、性別等資訊。這是當時提出的方案，還沒有做成產品或驗證成效。</p>
                </div>
              </details>
            </article>
          </div>
        </section>

        <section className="exchange-chapter exchange-teamwork" id="teamwork" aria-labelledby="teamwork-title">
          <div className="exchange-prose">
            <h2 id="teamwork-title">OwlHacks，<br />光定案就很辛苦。</h2>
            <p>我在群組裡找到當地學生，一起參加 OwlHacks 2025。原本在台灣參加過幾次黑客松，這次卻發現，熟悉的做事方式沒辦法直接搬過來。</p>
            <p>這組隊友都很有主見，大家一直提出想法，習慣用的工具也不同。討論很熱烈，但要收斂成一個能在時間內完成的作品，就沒有那麼容易。英文之外，還得適應彼此怎麼討論、怎麼做決定。</p>
            <p className="exchange-outcome">最後，我們拿到 Next Frontier Health Machine Learning Track 第二名。</p>
          </div>
          <figure className="exchange-film">
            <video controls playsInline preload="none" poster="/portfolio/showreels/owlhacks-2025.jpg" aria-label="OwlHacks 2025 活動紀錄，28 秒">
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
          <div className="exchange-volleyball exchange-prose">
            <h3>排球課</h3>
            <p>排球課也是我交朋友的地方。我本來就會打，教練示範時常找我搭配，也請我幫忙收器材。下課後，大家還會另外約球、一起去看校隊比賽。在寫不完的作業中間，這堂課剛好讓我喘口氣。</p>
          </div>
        </section>

        <section className="exchange-chapter exchange-career" id="career" aria-labelledby="career-title">
          <div className="exchange-chapter-heading">
            <h2 id="career-title">先去求職博覽會<br />看看。</h2>
            <p>我去學校的 STEM 求職博覽會，主要是想看看美國大學生怎麼找工作。和攤位上的人資聊聊，也看著朋友在現場到處加 LinkedIn。以前聽過 networking，這次終於看到同學實際怎麼做。</p>
          </div>
          <div className="exchange-prose exchange-career-club">
            <p>金融交易科技社則讓我多認識了一個方向。社課聊交易，群組裡有人分享趨勢、學校資源和實習資訊。我開始接觸 Quant，才更具體地想到，資工學的東西也能用在金融市場和量化交易。</p>
          </div>
          <div className="exchange-company-visit">
            <h3>Google 與 Amazon 參訪</h3>
            <div className="exchange-visit-copy exchange-prose">
              <p>這趟也參訪了矽谷 Google 園區、西雅圖 Google 辦公室，以及 Amazon Spheres 和 Amazon Go。走進辦公室，最意外的是那些和工作桌放在一起的生活設施：小廚房、冥想室、腳踏車工作坊，甚至有跑步機升降桌。</p>
              <p>以前想像科技業，比較容易想到技術和職稱。這次和員工聊天、看到實際的工作空間，才多了一些可以想像自己未來生活的細節。</p>
            </div>
            <div className="exchange-company-photos">
              <figure>
                <img src="/portfolio/exchange/google-visit.webp" alt="林琮原在 Google 園區的大型標誌旁留影" width={1200} height={1600} loading="lazy" decoding="async" />
                <figcaption>Google 園區</figcaption>
              </figure>
              <figure>
                <img src="/portfolio/exchange/amazon-spheres.webp" alt="西雅圖 Amazon Spheres 的玻璃球體建築" width={1600} height={1200} loading="lazy" decoding="async" />
                <figcaption>Amazon Spheres · 西雅圖</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="exchange-chapter exchange-campuses" id="campuses" aria-labelledby="campuses-title">
          <h2 id="campuses-title">很喜歡 MIT 博物館。</h2>
          <div className="exchange-campus-stories">
            <div className="exchange-prose">
              <p>我一個人去波士頓待了三天，逛了 Harvard 和 MIT。我特別喜歡 MIT 的博物館，逛完真的會讓人對學術又多一點憧憬。</p>
              <figure>
                <img src="/portfolio/exchange/mit-visit.webp" alt="MIT 的校園標誌與街景" width={1200} height={1600} loading="lazy" decoding="async" />
                <figcaption>波士頓獨旅 · MIT 校園</figcaption>
              </figure>
            </div>
            <div className="exchange-prose">
              <p>另外也走訪了 Stanford、Princeton、UPenn、UCLA 和 University of Washington。校園建築、圖書館，甚至紀念品店，都讓我感覺到學校很用心經營自己的形象。我也開始留意，校友、捐款和產業連結怎麼圍繞著一所大學。</p>
              <figure>
                <img src="/portfolio/exchange/princeton-visit.webp" alt="積雪中的普林斯頓大學校園" width={1200} height={1600} loading="lazy" decoding="async" />
                <figcaption>Princeton 校園</figcaption>
              </figure>
            </div>
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
          <div className="exchange-work-grid">
            <article>
              <h3>每週去 SSC 聊一小時</h3>
              <p>Student Success Center 的英文輔導，多半是在聊天。輔導員也是學生，除了課業，我還會問生活和文化上的問題。有些對他們來說是常識的事，我以前根本沒機會知道。</p>
              <p>我很喜歡遇到的老師願意給建議的方式。不懂可以問，答得不完整也可以繼續講。這種上課的感覺，讓我比較敢在還沒想得很完整時先開口。</p>
            </article>
            <article>
              <h3>這趟有很多人幫忙</h3>
              <p>出發前可能會覺得，去國外就應該少跟台灣人混在一起。我回來後反而很想提醒下一屆：也要認識同鄉的夥伴。遇到一些生活上的麻煩，有人能幫忙真的差很多。</p>
              <p>交換要處理的事情從申請文件、推薦信、經費就開始了。到美國後，我也靠著朋友互相幫忙，才把這趟走完。照片裡有很多出去玩的時候，背後也有這些比較不會拍下來的事。</p>
            </article>
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
              <a href="/portfolio/exchange/exchange-sharing-selected.pdf" target="_blank" rel="noreferrer"><span>出國獎學金成果分享<small>簡報節選 4 頁 · PDF · 另開分頁</small></span><ArrowUpRight size={22} aria-hidden="true" /></a>
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
