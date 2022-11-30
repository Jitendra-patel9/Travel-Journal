import React from "react"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import data from "./data"

export default function App()
{
    const items = data.map((item)=>{
        return(
        <Cards
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
         />
        )
    })
    
    return (
        <div>
        <Navbar />
        {items}
        </div>
    )
}


        // title="Mount Fuji"
        // location="Japan"
        // googleMapsUrl="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
        // startDate="12 Jan, 2021"
        // endDate="24 Jan, 2021"
        // description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        // imageUrl="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80"
        
        
        //         key = {item.id}
        // title={item.title}
        // location={item.location}
        // googleMapsUrl={item.googleMapsUrl}
        // startDate={item.startDate}
        // endDate={item.endDate}
        // description={item.description}
        // imageUrl={item.imageUrl}