import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {

  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json()

    setfoodItem(response[0]);
    setfoodCat(response[1]);

    //console.log(response[0],response[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <div> <Navbar></Navbar></div>
      <div><Carousel /></div>
      <div className='container'>
        {
          foodCat.length > 0
            ? foodCat.map((data) => {
              return (<div className='row mb-3'>
                <div key={data._id} className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem.length > 0 ?
                  foodItem.filter((item) => item.CategoryName === data.CategoryName)
                    .map((filterItems) => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3 mx-3 mb-3 '>
                          <Card foodItem = {filterItems}
                            options={filterItems.options[0]}
                          ></Card>
                        </div>
                      )
                    })
                  : <div> No such data found </div>}
              </div>
              )
            })
            : ""
        }
      </div>
      <div> <Footer /> </div>
    </div>
  )
}
