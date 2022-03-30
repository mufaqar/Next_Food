import './components/header/Header';
import Landing from './Landing';
import fooddata from './api/fooddata';
import blogdata from './api/blogdata';

export const getStaticProps = async () => {
  return {
    props: {
      fooddata,
      blogdata,
    },
  };
};

export default function Home() {
  return (
    <>
      <Landing fooddata={fooddata} blogdata={blogdata} />
    </>
  );
}
