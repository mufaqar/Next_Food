import React from 'react'


export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        data
    }
}
export default function Blog({data}) {
  return (
    <div className='lastes_news'>
        <h3>blog</h3>
    </div>
  )
}
