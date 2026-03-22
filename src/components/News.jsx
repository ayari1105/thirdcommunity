
//　タイトル部分
function NewsHeader() {
  return (
    <div className="section-head">
      <p className="news">
        <span className="news-deco">- </span>
        News
        <span className="news-deco"> -</span>
      </p>
    </div>
  );
}

// 件分
function NewsItem({ date, text }) {
  return (
    <div className="news-item">
      <p className="news-date">{date}</p>
      <p className="news-text">{text}</p>
    </div>
  );
}

// リスト
function NewsList() {
  const newsData = [
    {
      date: "2024年12月10日",
      text: "特定非営利活動法人サードコミュニティを設立しました。",
    },
  ];

  return (
    <div className="section-body-md">
      {newsData.map((item, index) => (
        <NewsItem key={index} date={item.date} text={item.text} />
      ))}
    </div>
  );
}

// メインコンポーネント
export default function News() {
  return (
    <section className="section section-white section-news">
      <NewsHeader />
      <NewsList />
    </section>
  );
}