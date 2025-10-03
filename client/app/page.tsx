import Link from 'next/link';
import './index.css'

const Home = () => {
  return (
    <div className="home_root__div">
      <main className="home__main">
        <Link href="/dashboard">Login</Link>
      </main>
    </div>
  );
}

export default Home