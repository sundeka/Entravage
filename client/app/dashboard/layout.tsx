import styles from './dashboard.module.css'
import { FaUserLarge } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdApps } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
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
          <h1 className={styles.headerText}>Entra&nabla;age</h1>
        </header>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a className={styles.listItemLink}>
                <FaUserLarge />
                Users
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.listItemLink}>
                <FaUserGroup />
                Groups
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.listItemLink}>
                <IoMdApps />
                Applications
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.listItemLink}>
                <IoMdSettings />
                Settings
              </a>
            </li>
            <li className={styles.listItem}>
              <Link 
                className={styles.listItemLink}
                href="/"
              >
                <GrLogout />
                Log out
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
      <button className={styles.feed} /> {/** TODO: log stream */}
    </div>
  )
}