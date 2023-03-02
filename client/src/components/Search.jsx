import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

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


    // copied for testing 
    return (
        <div className="container">
          
          <section className='main-search'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input
                  type="text"
                  placeholder='Search'
                  className='main-search'
                  value={search}
                  onChange={useSearch}
              />
          </section>


          {/* {filtered.map((item, index) => {
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
            })} */}
        </div>
      );
    }

export default Search;