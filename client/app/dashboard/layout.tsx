import styles from './dashboard.module.css'
import { FaUserLarge } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdApps } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <header className={styles.header}>
          <Link 
            className={styles.navbarLink}
            href="/dashboard"
          >
            <h1 className={styles.headerText}>Entra&nabla;age</h1>
          </Link>
        </header>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a className={styles.navbarLink}>
                <FaUserLarge />
                Users
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.navbarLink}>
                <FaUserGroup />
                Groups
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.navbarLink}>
                <IoMdApps />
                Applications
              </a>
            </li>
            <li className={styles.listItem}>
              <Link 
                className={styles.navbarLink}
                href="/dashboard/settings"
              >
                <IoMdSettings />
                Settings
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link 
                className={styles.navbarLinkLogout}
                href="/"
              >
                <GrLogout />
              </Link>
            </li>
          </ul>
        </nav>
        <footer className={styles.footer}>
          <a 
            className={styles.footerLink}
            target="_blank" 
            rel="noopener noreferrer"
            href="https://github.com/sundeka/Entravage"
          >
            Contribute
          </a>
          <a className={styles.footerLink}>Donate</a>
          <a className={styles.footerLink}>Liability waiver</a>
        </footer>
      </div>
      <main className={styles.main}>
        {children}
      </main>
      <div className={styles.feed}>
        <button className={styles.feedToggle}>
          <RiArrowLeftDoubleFill className={styles.feedToggleSvg} />
        </button>
        <div className={styles.feedStream}>
          <p>foo</p>
        </div>
      </div>
    </div>
  )
}