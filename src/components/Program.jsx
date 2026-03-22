const programs = [
  {
    type: "main",
    title: "学習・教育支援",
    img: "public/images/academicsupport.jpg",
    description: (
      <>
        小中高校生向けに苦手な教科の克服や定期的な学習の場、テスト・受験対策としてご利用いただけるプログラムです。
        <br />
        英語や算数・数学などを中心に、さまざまな教科に対応いたします。
        <br />
        現役の大学生や塾講師の経験を持つスタッフからアドバイスをもらいながら学習し、苦手な教科の克服や学習の習慣化をしていきませんか？
        <br />
        進路等の悩みがある人・やる気が出ず学習の場が欲しい人も、ぜひご参加をお待ちしています。
      </>
    ),
    button: {
      label: "プログラムに参加する",
      link: "https://cevec.net/event"
    }
  },
  {
    type: "normal",
    title: "進路・キャリア支援",
    img: "public/images/careersupport.jpg",
    description: (
      <>
        受験・就活・留学・教員採用試験等の経験談や大学生活・高校生活・仕事の話などを下の世代に話す機会づくりをしています。
        <br />
        高校生・大学生向けの進路支援も実施しています。
      </>
    )
  },
  {
    type: "normal",
    title: "コミュニティの活性化",
    img: "public/images/community.jpg",
    description: (
      <>
        サードコミュニティでは地域の団体などと協力した企画や子どもたちと一緒に楽しめる企画を行っています。
        <br />
        現在は立川市の子ども未来センターのプログラムや児童館での企画に参加しています。
      </>
    )
  }
];

export default function Program() {
  return (
    <section className="section section-white">
      <div className="section-head">
        <h1 className="program">Program</h1>
      </div>

      <div className="section-body-lg">

        {programs.map((item, index) => {
          // メイン（最初の大きいレイアウト）
          if (item.type === "main") {
            return (
              <div className="activity" key={index}>
                <div className="activity-right">
                  <div className="activity-title">
                    <h1>{item.title}</h1>
                  </div>

                  <div className="activity-text">
                    <p>{item.description}</p>

                    {item.button && (
                      <div className="activity-bottom">
                        <p className="right_justified">
                          <a
                            href={item.button.link}
                            className="attend_button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.button.label}
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            );
          }

          // 通常カード
          return (
            <div className="activity-item" key={index}>
              <img src={item.img} alt={item.title} />

              <div className="activity-text">
                <div className="activity-top">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}