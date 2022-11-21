import Link from 'next/link';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Start
          </Link>
        </li>
        <li>
          <Link href="/blog/1">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
      <style jsx>{`

      `}</style>
    </nav>
  )
}

export default NavBar;
