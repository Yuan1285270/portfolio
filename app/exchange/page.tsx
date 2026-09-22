import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import "./exchange.css";

export const metadata: Metadata = {
  title: "在費城，把想法說清楚。｜林琮原的 Temple 交換紀錄",
  description: "林琮原在 Temple University 的 2025 秋季交換紀錄：從英文簡報與資料分析，到 OwlHacks 跨文化合作、擊劍社與返國分享。",
  alternates: { canonical: "https://portfolio.tsungyuan.dev/exchange" },
  openGraph: {
    title: "在費城，把想法說清楚。",
    description: "一學期的課堂、團隊與生活練習。林琮原 · Temple University · Fall 2025",
    url: "https://portfolio.tsungyuan.dev/exchange",
    locale: "zh_TW",
    type: "article",
    images: [{ url: "/portfolio/exchange/friends.webp", width: 1080, height: 512, alt: "林琮原與在美國認識的朋友" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "在費城，把想法說清楚。｜林琮原",
    description: "Temple University 交換生活與學習紀錄 · Fall 2025",
    images: ["/portfolio/exchange/friends.webp"],
  },
};

const chapters = [
  ["speaking", "把想法說清楚"],
  ["learning", "讓判斷有依據"],
  ["teamwork", "在差異中合作"],
  ["living", "走進日常生活"],
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
            <h1 id="exchange-title">在費城，<br />把想法<br />說清楚。</h1>
            <p className="exchange-meta" lang="en">Temple University · Philadelphia<br />Fall 2025 / Exchange semester</p>
            <p className="exchange-lead">第一次用英文站上講台、和陌生隊友做專案、穿上擊劍服。這一學期，我把熟悉的資訊能力帶到新的環境，也重新練習如何表達、合作與生活。</p>
            <a className="exchange-text-link" href="#speaking">從課堂開始看 <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <figure className="exchange-hero-photo">
            <img src="/portfolio/global/philadelphia-life.webp" alt="林琮原在費城市政廳前跳躍留影" width={1050} height={1400} fetchPriority="high" />
            <figcaption>在這座城市，住了一個學期。</figcaption>
          </figure>
        </section>

        <nav className="exchange-contents" aria-label="心得章節">
          {chapters.map(([id, title]) => <a href={`#${id}`} key={id}>{title}</a>)}
        </nav>

        <section className="exchange-chapter exchange-speaking" id="speaking" aria-labelledby="speaking-title">
          <div className="exchange-prose">
            <h2 id="speaking-title">從擔心口音，<br />到留心聽眾。</h2>
            <p>簡報課第一天，我問老師：英文不是母語，是否應該退選？老師告訴我，他聽得懂我說的每一句話。我留了下來，完成了學期中的五次簡報。</p>
            <p>第一次自評，我記下緊張時會低頭、忘記停頓。到學期末，我發現另一個更具體的問題：六分鐘的簡報，塞了太多內容。刪減後，才有餘裕照顧眼神、語調與轉場。</p>
            <p>現在準備報告時，我會先想聽眾需要帶走什麼，再決定放進多少資訊。這是我想繼續帶進技術簡報與研究報告的習慣。</p>
            <details className="exchange-note">
              <summary>看我的簡報自評摘記 <Plus size={18} aria-hidden="true" /></summary>
              <div>
                <p className="exchange-source">課程作業 · Presentation Self-Assessment #1 / #2</p>
                <blockquote lang="en">“I prepared too much content for a 6-minute presentation, and it hindered me from delivering my ideas with clarity.”</blockquote>
                <p>在第二次自評中，我記錄了內容刪減後，第四、第五次簡報較能兼顧眼神交流與語調；也坦承這些技巧還在練習，並未完全掌握。</p>
              </div>
            </details>
          </div>
          <figure className="exchange-teacher">
            <img src="/portfolio/global/temple-classroom.webp" alt="林琮原與簡報課老師在 Temple 教室合照" width={1600} height={2133} loading="lazy" decoding="async" />
            <figcaption>簡報課結束後，和老師留下一張合照。</figcaption>
          </figure>
        </section>

        <section className="exchange-chapter exchange-learning" id="learning" aria-labelledby="learning-title">
          <div className="exchange-chapter-heading">
            <h2 id="learning-title">把「我覺得」，<br />往前推一步。</h2>
            <p>資料課讓我檢查數據，寫作課讓我檢查自己的論點。兩邊都在練習同一件事：說出結論以前，先確認依據。</p>
          </div>
          <div className="exchange-work-grid">
            <article>
              <h3>先處理資料，再解讀結果。</h3>
              <p>在 Data Science 的資料清理作業裡，我逐項整理商品名稱、促銷碼與金額欄位的問題。Scripting for Data 則讓我把 Python、Pandas、NumPy、Matplotlib、EDA 與 API 用在實作中，期末以美國科技業薪資分析串起這些練習。</p>
              <details className="exchange-note">
                <summary>看資料清理作業摘記 <Plus size={18} aria-hidden="true" /></summary>
                <div>
                  <p className="exchange-source">Data Science · Assignment 2: Cleaning a Dataset</p>
                  <table>
                    <caption>作業中記錄的欄位正規化例子</caption>
                    <thead><tr><th scope="col">原始值</th><th scope="col">統一後</th></tr></thead>
                    <tbody><tr><td lang="en">Cotton Deckers Jeans</td><td lang="en">Cotton Dockers Jeans</td></tr><tr><td lang="en">GROUPN</td><td lang="en">GROUPON</td></tr></tbody>
                  </table>
                  <p>作業也要求檢查單價與總價欄位。這些紀錄提醒我，同一個名稱的不同拼法，都可能影響後續分類與彙整。</p>
                </div>
              </details>
            </article>
            <article>
              <h3>把立場寫成可以討論的論證。</h3>
              <p>Persuasive Writing 的研究寫作經過題綱、文獻整理、草稿、同儕回饋與修訂。我選擇醫療倫理議題，練習整理不同立場，以及區分自己的判斷和資料能支持的主張。</p>
              <p>在 Writing Analysis 作業裡，我逐句回看用字與論證：哪裡太主觀、指涉不清，哪裡只是多餘的句子。修訂也成為一次檢查思考的機會。</p>
              <details className="exchange-note">
                <summary>看寫作修訂摘記 <Plus size={18} aria-hidden="true" /></summary>
                <div>
                  <p className="exchange-source">Persuasive Writing · Writing Analysis / Research Paper</p>
                  <ul>
                    <li>辨認沒有足夠證據支持的主觀推測。</li>
                    <li>釐清代名詞與「這些論點」究竟指向什麼。</li>
                    <li>刪除冗句，調整過於口語的連接方式。</li>
                  </ul>
                  <p>這些是當時作業中的修訂紀錄。對我而言，寫得更精確，也意味著更清楚知道自己能主張到哪裡。</p>
                </div>
              </details>
            </article>
          </div>
        </section>

        <section className="exchange-chapter exchange-teamwork" id="teamwork" aria-labelledby="teamwork-title">
          <div className="exchange-prose">
            <h2 id="teamwork-title">同一個目標，<br />不同的做事方式。</h2>
            <p>參加 OwlHacks 2025 時，我透過群組找到當地學生一起組隊。過去在台灣累積的黑客松經驗，到了這裡，還需要重新磨合。</p>
            <p>每個人都有想法，也有自己慣用的工具。最難的部分是讓討論收斂，在有限時間內決定要完成什麼。這次經驗讓我更留意團隊怎麼形成共識，而不只關注程式怎麼寫。</p>
            <p className="exchange-outcome">我們最後獲得 Next Frontier Health Machine Learning Track 第二名。我記得的，還有那些必須把彼此的想法說清楚的討論。</p>
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
            <h2 id="living-title">熟悉一個地方，<br />從一起做事開始。</h2>
            <p>擊劍社成了我認識當地朋友的重要地方。每週三次、每次兩小時的練習，讓原本陌生的名字，慢慢變成會一起訓練、比賽與募款的隊友。</p>
          </div>
          <figure className="exchange-fencing">
            <img src="/portfolio/global/temple-fencing.webp" alt="林琮原與擊劍社隊友穿著擊劍服，並肩坐在場邊" width={1164} height={866} loading="lazy" decoding="async" />
            <figcaption>Temple 擊劍社 · 在場邊，也在團隊裡。</figcaption>
          </figure>
          <div className="exchange-life-notes">
            <figure>
              <img src="/portfolio/exchange/friends.webp" alt="林琮原與朋友們在校園室內自拍" width={1080} height={512} loading="lazy" decoding="async" />
              <figcaption>一起度過日常的朋友。</figcaption>
            </figure>
            <div className="exchange-prose">
              <p>我也每週到 Student Success Center 練習英文。聊天時遇到聽不懂的用法，就請對方換個方式說；課堂之外，這些小小的對話讓我更理解當地生活。</p>
              <p>到 Google、Amazon 與其他大學參訪，則讓我開始觀察工作與學習環境如何影響一個人。這些參訪成了我繼續探索職涯的起點。</p>
            </div>
          </div>
        </section>

        <section className="exchange-closing" aria-labelledby="closing-title">
          <div>
            <h2 id="closing-title">把經驗帶回來，<br />也分享出去。</h2>
            <p>回國後，我把課程、社團與生活經驗整理成交換分享與獎學金成果報告。這一趟得到家人、師長、朋友與南投縣出國獎學金的支持；把走過的路整理清楚，是我現在能做的回饋。</p>
            <p>接下來，我想繼續練習：讓技術判斷有依據，讓表達照顧聽眾，也讓合作容得下不同的做事方式。</p>
          </div>
          <div className="exchange-resources">
            <h3>延伸紀錄</h3>
            <a href="/portfolio/exchange/exchange-sharing-selected.pdf" target="_blank" rel="noreferrer"><span>返國分享簡報<small>節選 4 頁 · PDF · 另開分頁</small></span><ArrowUpRight size={22} aria-hidden="true" /></a>
            <a href="/certificates/temple-exchange-fall-2025.pdf" target="_blank" rel="noreferrer"><span>交換證明<small>Temple University · PDF · 另開分頁</small></span><ArrowUpRight size={22} aria-hidden="true" /></a>
            <Link href="/#projects"><span>回到我的專案<small>把學習帶回實作</small></span><ArrowRight size={22} aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <footer className="exchange-footer"><span>林琮原 <span lang="en">/ Tsung-Yuan Lin</span></span><a href="#exchange-title">回到頁首 ↑</a></footer>
    </div>
  );
}
