import Image from "next/image";
import styles from './Profile.module.css';

export default function Home() {
  return (
    <main className={styles.body}>
      <header className={styles.header}>
        <nav>
          <ul>
            <li><a href="#about">自己紹介</a></li>
            <li><a href="#projects">スキルと資格</a></li>
            <li><a href="#contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>
      <div className={styles.main}>
        <div>
          <Image
            className={styles.profileImage}
            src="/images/profile.png"
            alt="プロフィール画像"
            width={160}
            height={160}
          />
        </div>
        <br></br>
        <section id="about" className={styles.section}>
          <h1>こんにちは！<br />knjです</h1>
          <p>AIの知識を深めながら、システムエンジニアとして日々、実務での課題解決に取り組んでいます。</p>
        </section>

        <section id="projects" className={styles.section}>
          <h2>スキルと資格</h2>
          <div className={styles.project}>
            <h3>データサイエンティスト検定 リテラシーレベル 2025</h3>
            <p>2025年3月 DS検定★取得</p>
          </div>
          <div className={styles.project}>
            <h3>JDLA Deep Learning for ENGINEER 2025 #1</h3>
            <p>2025年2月 E資格取得</p>
          </div>
          <div className={styles.project}>
            <h3>JDLA Deep Learning for GENERAL 2024 #2</h3>
            <p>2024年3月 G検定取得</p>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <h2>お問い合わせ</h2>
          <p>Discord: <span>knj3981</span></p>
          <p>CDLE OSIRO/Slack: <span>@knj</span></p>
        </section>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2025 knj. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
