import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/about">
      <button title="About Page">About Page</button>
    </Link>
  </div>
);

export default Header;
