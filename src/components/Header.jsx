export default function Header() {
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
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe9L4RW42GX15gIB0587HXgewVum_5aOVWrMWs5S845DSJ-4Q/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          お問い合わせ
        </a>
      </nav>
    </header>
  );
}