import React from 'react'
import DownloadApp from '../components/DownloadApp/DownloadApp'
import FoodNearMe from '../components/FoodNearMe/FoodNearme'
import BookForLunch from '../components/BookForLunch/BookForLunch'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import LatestNews from '../components/LatestNews/LatestNews'
import Serving from '../components/serving/Serving'

export default function Landing({fooddata,blogdata}) {
  return (
    <div className="hero_main">
      <Header/>
      <Hero/>
      <FoodNearMe title="Food Near Me" link="/category" fooddata={fooddata}/>
      <BookForLunch title="Book for lunch today" link="/category" fooddata={fooddata}/>
      <DownloadApp/>
      <Serving/>
      <LatestNews blogdata={blogdata}/>
    </div>
  )
}
