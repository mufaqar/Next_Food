import React, { Component } from "react";
import Slider from "react-slick";
import Link from 'next/link'
import FoodCategory from "../FoodCategory/FoodCategory";
import FoodCard from "../FoodCard/FoodCard";

export default class FoodNearme extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      // autoplay:true,
      speed: 600,
      infinite:true,
      slidesToShow: 4,
      slidesToScroll: 1,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const data = this.props.fooddata;

    return (
      <div className="container-fluid food_near_me">
        <div className="top-header flex v_align space_between">
          <div className="title">
            <h4>{this.props.title}</h4>
          </div>
          <div className="view">
            <Link href='/shop'><p>View All</p></Link>
          </div>
        </div>
        <Slider {...settings}>
          {
            data.map((food, indux)=>(
              <FoodCard food={food} key={indux}/>
            ))
          }
        </Slider>
      </div>
    );
  }
}