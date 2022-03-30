import Header from '../components/header/Header'
import fooddata from '../api/fooddata'
import Image from 'next/image';
import Link from 'next/link'


export default function Shop() {
  
  return (
    <>
      <Header/>
      
      <div className='archivewrapper container'>
        {
          fooddata.map((product,index)=>(
            <div key={index}>
              <Link href={`shop/${product.id}`}>
                <div className="singlecontent  flex flex-col v_align">
                  <Image src={product.pic} alt={product.category} />
                  <div className="innercontent">
                    <h1>{product.title}</h1>
                    <h4>{product.category}</h4>
                    <p>{product.price}</p>
                    {/* <p>{product.desc.slice(0, 100)}</p> */}
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
