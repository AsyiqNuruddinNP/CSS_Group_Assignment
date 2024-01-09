import Image from "next/image";
import React from "react";

// TODO complete the Show component
/*
function Navbar() {
  return (
  <ul class="nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  );
}
*/

function Movie({title,year,poster}) {
  return (
    <div>
      <h2>
        {title} {year}
      </h2>
      <Image src={poster} width ={500} height={800}/>
    </div>
  );
}

function Car({name,image}){
  return (
    <div>
      <h2>
        {name}
      </h2>
      <Image src={image} width = {1000} height={800}/>
    </div>
  );
}

export default function App(){
  return (
    <section>
      <h1>My Top 3 Movies</h1>
      <Movie title="Spirit Away" year={2001} poster="/spirit_away.png" />
      <Movie title="Fight Club" year={1999} poster="/fight_club.jpg" />
      <Movie title="The Shining" year={1980} poster="/the_shining.jpg" />
      <h1>My Favourite Cars</h1>
      <Car name = "Supra MK4" image="/supra_mk4.jpg"/>
      <Car name = "Skyline GTR R34" image="/r34.jpg"/>
    </section>
  );
}
