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
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <style jsx>{`

      `}</style>
    </nav>
  )
}

export default NavBar;
