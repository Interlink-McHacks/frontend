
import Link from 'next/link'


export default function Home() {
  return (
      <ul>
        <li>
          <Link href="/">
            <a>Empty</a>
          </Link>
        </li>
        <li>
          <Link href="about">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
          <li>
              <Link href="login">
                  <a>Login</a>
              </Link>
          </li>
          <li>
              <Link href="tenant">
                  <a>Tenant Pane</a>
              </Link>
          </li>

      </ul>
  )
}
