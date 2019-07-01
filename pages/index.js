import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <button title="About Page">About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
