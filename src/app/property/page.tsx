"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Property = () => {
  const propertyData = [
    {id:1, name:'18 New Street Miami', price:2264000, description:'Rooms: 8 floor : 3', image:'/villa-ad1.jpg'},
    {id:2, name:'34 Old Street Ohio', price:3386000, description:'Rooms: 7 floor : 3', image:'/villa-ad2.jpg'},
    {id:3, name:'24 Mid Street Florida', price:4274000, description:'Rooms: 6 floor : 3', image:'/villa-ad3.jpg'},
    {id:4, name:'11 New Street Nevada', price:6446000, description:'Rooms: 9 floor : 3', image:'/villa-ad4.jpg'},
    {id:5, name:'6 Old Street Dakota', price:6522000, description:'Rooms: 8 floor : 3', image:'/villa-ad5.jpg'},
    {id:6, name:'41 Mid Street Arizona', price:1083000, description:'Rooms: 8 floor : 3', image:'/villa-ad6.jpg'},
  ];

  const router = useRouter()

  return (
    <div>
      <div className="property-head"><h1>We Provide Best Property You Like</h1></div>
        <div className="properties">
          {propertyData.map((property) => (
           <div key={property.id} className="property-card">
            <img src={property.image} alt={property.name}/>
            <h3>{property.name}</h3>
            <p>{property.description}</p>
            <div className="price">${property.price}</div>
            <button onClick={()=>router.push("/contact")}>Schedule a visit</button>
           </div>
      ))}
        </div>
    </div>
  )
}

export default Property