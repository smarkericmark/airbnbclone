import React from "react"
import Navbar from "./components/Navber"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App() {
  
  const cards = data.map(item => {
    return (
      <Card
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title ={item.title}
          price={item.price}
          openSpots={item.openSpots} 
      />
    )
  })
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
        </section>
    </div>
  )
}


