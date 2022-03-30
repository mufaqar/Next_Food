import { useRouter } from 'next/router'
import Header from '../components/header/Header'
import fooddata from '../api/fooddata'
import Image from 'next/image';
import Link from 'next/link'
import Categorybanner from '../components/CategoryBanner/Categorybanner';


export default function Archive() {
  const router = useRouter();
  const getcategory = router.query.archive;
  const category = String(getcategory);
  return (
    <>
      <Header/>
      <Categorybanner data={fooddata}/>
      <div className='archivewrapper container'>
        {
          fooddata.filter(item => item.category === category).map((product,index)=>(
            <div key={index}>
              <Link href={`http://localhost:3000/shop/${product.id}`}>
                <div className="singlecontent  flex flex-col v_align">
                  <Image src={product.pic} alt={product.category} />
                  <div className="innercontent">
                    <h1>{product.title}</h1>
                    <h4>{product.category}</h4>
                    <p>{product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
     </div>
    </>
  )
}
