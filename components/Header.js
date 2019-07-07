import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/">
      <a title="Home" style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a title="About Page" style={linkStyle}>About Page</a>
    </Link>
  </div>
);

export default Header;
