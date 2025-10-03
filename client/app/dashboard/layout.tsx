import styles from './dashboard.module.css'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <header className={styles.header}>
          <h1>Entravage</h1>
        </header>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Users</li>
            <li className={styles.listItem}>Groups</li>
            <li className={styles.listItem}>Applications</li>
            <li className={styles.listItem}>Settings</li>
          </ul>
        </nav>
        <footer className={styles.footer}>
          <a>Contribute</a>
          <a>Donate</a>
          <a>Liability waiver</a>
        </footer>
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}