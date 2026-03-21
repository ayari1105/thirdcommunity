function Header() {
  return (
    <header>
      <h1>
        <a href="index.html" className="header-logo">
          サードコミュニティ
        </a>
      </h1>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav>
        <a href="about.html">団体概要</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9L4RW42GX15gIB0587HXgewVum_5aOVWrMWs5S845DSJ-4Q/viewform" target="_blank">
          お問い合わせ
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="new-hero">
      <div className="hero-text">
        <p>
          こどもたちに<br />
          <span className="space"></span>第3の居場所を
        </p>
      </div>

      <div className="hero-image-wrapper">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="hero-svg">
          <defs>
            <clipPath id="clip-curve" clipPathUnits="objectBoundingBox">
              <path d="M0.15,0 Q0,0.5 0.15,1 L1,1 L1,0 Z" />
            </clipPath>
          </defs>
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            href="./images/main.jpg"
            clipPath="url(#clip-curve)"
          />
        </svg>
      </div>
    </section>
  );
}

function Section({ title, children, bg = "white" }) {
  return (
    <section className={`section section-${bg}`}>
      <div className="section-head">
        <p>{title}</p>
      </div>
      <div className="section-body-lg">
        {children}
      </div>
    </section>
  );
}

function ActivityItem({ title, text, img }) {
  return (
    <div className="activity-item">
      <img src={img} alt={title} />
      <div className="activity-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

function NewsItem({ date, text }) {
  return (
    <div className="news-item">
      <p className="news-date">{date}</p>
      <p className="news-text">{text}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      &copy; 2025 特定非営利活動法人サードコミュニティ. All rights reserved.
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Hero />

      <Section title="Mission">
        <p className="mission-title">～こどもたちに第３の居場所を～</p>
        <p>
          すべての子ども・若者に、つながりと学び、そして未来への希望を。
        </p>
      </Section>

      <Section title="Action" bg="gray">
        <p>第3の居場所の創出を通じて支援します。</p>
      </Section>

      <Section title="Program">
        <ActivityItem
          title="学習・教育支援"
          text="小中高校生向けの学習支援プログラムです。"
          img="./images/academicsupport.jpg"
        />
      </Section>

      <Section title="News">
        <NewsItem
          date="2024年12月10日"
          text="特定非営利活動法人サードコミュニティを設立しました。"
        />
      </Section>

      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);