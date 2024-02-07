interface Ipost {
  name:string
}

const getData: ()=> Promise<Ipost> = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  return res.json();
}


import { FiMoon } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
export default function page() {
  const posts = getData()
  
  return (
    <div className="main-container" >
      <header>
        <h2>Where in the world?</h2>
        <span>
        <FiMoon />
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
       { posts && posts.map(post => {
   <h1>{post.name}</h1>
       })}
      </main>
    </div >
  )
}