import React from "react";
import ReactDOM from 'react-dom/client';
import { useState , useEffect} from "react";

  




const App = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [meal, setMeal] = useState([])
  
   
  
  async function getmeal()
  {
     const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTxt}`)
    const json = await data?.json()
    setMeal(json.meals)
    console.log(json.meals)
    
  }
 
  
 
  return <>
    <div className="nav" ><h1>Welcome To MealDB</h1></div>
       <div>
         <p>Search Your Favourite Meal</p>
             <input type="text" placeholder="Search" value={searchTxt} onChange= {(e)=>{setSearchTxt(e.target.value)}} />
           <button onClick={() => {
             getmeal()               
      }}>Search</button>
       </div>
    <div>
      {meal.map((m) => {
        return (<div>
          <p><b>Name:</b>{m.strMeal}</p>
          <p><b>Locality:</b>{m.strArea}</p>
          <p><b>Instructions:</b>{m.strInstructions}</p>

        </div>)
      })}
    </div>
  </>
}


export default App;
