import React from 'react'
import BlogCard from '../BlogCard/BlogCard'

export default function LatestNews({blogdata}) {
  const slicedata = blogdata.slice(0,4);

  return (
    <div className='container-fluid latest-news flex v_align flex-col'>
        <h3>Latest News</h3>
        <div className='card_wrapper flex v_align space_between'>
        {
          slicedata.map((item,index)=> (
            <BlogCard id={item.id} title={item.title} pic={item.pic} desc={item.desc} key={index}/>
          ))
        }
        </div>
        
    </div>
  )
}
