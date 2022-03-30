import { useRouter } from 'next/router'
import blogdata from '../api/blogdata';
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'

export default function Single() {
  const router = useRouter();
  const idfromSlug = router.query.single;
  const id = parseInt(idfromSlug); 

  return(
  

    <>
     <Header/>
     <div>
        {
          blogdata.filter(item => item.id === id).map((blog,index)=>(
            <div key={index}>
              <Banner pic={blog.pic}/>
              <div className="singlecontent container-fluid flex flex-col v_align">
                <h1>{blog.title}</h1>
                <p>{blog.desc}</p>
              </div>
            </div>
          ))
        }
     </div>
    </>
  )
}
