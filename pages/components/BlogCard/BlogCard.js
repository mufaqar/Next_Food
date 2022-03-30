import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard({title, pic, desc, id}) {
  return (
    <>
      <Link href={`blog/${id}`}>
        <div className="card">
          <figure><Image src={pic} alt={title} /></figure>
          <div className="content">
            <h4>{title}</h4>
            <p>{desc.slice(0, 100)}</p>
          </div>
        </div>
      </Link>
    </>
  )
}
