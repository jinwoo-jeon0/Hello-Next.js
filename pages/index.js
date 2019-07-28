import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Nest.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Index;
