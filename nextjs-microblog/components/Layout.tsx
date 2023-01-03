import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "/styles/utils.module.css";

const name = "M Code";
export const siteTitle = "Next.js blog";

type LayoutProperty = {
  children: JSX.Element[];
  home: boolean;
};

function Layout({ children, home }: LayoutProperty) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile.png"
              className={`${utilStyles.borderCircle}`}
            />
            <h1 className={utilStyles.heading}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">ホームに戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
