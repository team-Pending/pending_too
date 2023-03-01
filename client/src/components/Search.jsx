import React, { useState } from "react";

function Search() {
    // array copied for testing
    const testArray = [
        { id: "01", name: "Mercury", size: "2440", unit: "km" },
        { id: "02", name: "Venus", size: "6052", unit: "km" },
        { id: "03", name: "Earth", size: "6371", unit: "km" },
        { id: "04", name: "Mars", size: "3390", unit: "km" },
        { id: "05", name: "Jupiter", size: "69911", unit: "km" },
        { id: "06", name: "Saturn", size: "58232", unit: "km" },
        { id: "07", name: "Uranus", size: "25362", unit: "km" },
        { id: "08", name: "Neptune", size: "24622", unit: "km" },
      ];

    const [filtered, setFiltered] = useState(testArray);
    const [search, setSearch] = useState("");

    // search for items
    const useSearch = (event) => {
        const query = event.target.value
        setSearch(query);

        const searchList = testArray.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })

        setFiltered(searchList)
    };

    // filter items in search
    const filterChange = (event) => {

    }

    // copied for testing 
    return (
        <div className="container">
          <h2>Search Filter Array of Objects</h2>
          
          <div className="list-wrapper">
            <div className="filter-container">
              <input
                type="text"
                name="search"
                placeholder="Search"
                value={search}
                onChange={useSearch}
              />
              <div>
                <select name="size" onChange={filterChange}>
                  <option value="">Filter by Size</option>
                  <option value="2000">Greater Than 2000km</option>
                  <option value="6000">Greater Than 6000km</option>
                  <option value="10000">Greater Than 10000km</option>
                  <option value="25000">Greater Than 25000km</option>
                </select>
              </div>
            </div>
    
            {filtered.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <p className="num-text">{item.id}</p>
                  <div>
                    <p className="title">{item.name}</p>
                    <p className="description">
                      {item.size} {item.unit}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

export default Search;