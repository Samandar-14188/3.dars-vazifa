// "use client";
// interface Ipost {
//   title:string
// }

// const getData: ()=> Promise<Ipost[]> = async ()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }


import { FiMoon } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import Countries from './components/countries'
async function getData() {
  try {
    const res = await fetch(
      "https://frontend-mentor-apis-6efy.onrender.com/countries"
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function page() {
  const data = await getData();
  return (
    <div className="main-container" >
      <header>
        <h2>Where in the world?</h2>
        <span>
        <FiMoon/>
        Dark Mode
        </span>
      </header>
      <main>
        <div className="search-container">
          <div className="search">
            <label htmlFor="search">          <FaSearch />
</label>
            <input type="search" id="search" placeholder="Search for a country…" />
          </div>
 <select defaultValue="" className="custom-select">
  <option value="" disabled hidden>
    Filter by Region
  </option>
  <option value="Africa">Africa</option>
  <option value="America">America</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>
</select>

       </div>
       <div className="card-container">
       <Countries countries={data} />

       </div>
      </main>
    </div >
  )
}