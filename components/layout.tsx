import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link href="/">
          <a className="navbar-brand">
            Dave Nguyen
          </a>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/posts">
              <a className="nav-link" href="#">
                Posts
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export const Layout: FC = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column bg-light">
      <Head>
        <title>Nguyen Huy Cuong</title>
        <meta name="description" content="Nguyen Huy Cuong's Blogs" />
      </Head>
      <Header />
      <main className="container py-4 flex-grow-1">{children}</main>
    </div>
  );
};
