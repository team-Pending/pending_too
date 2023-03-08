import React, { useState } from "react";
import ShopCard from "./ShopCard/ShopCard";
import Search from "./Search";
import { useQuery } from "@apollo/client";
import { QUERY_SEARCH_PRODUCT } from "../utils/queries";
import { QueryManager } from "@apollo/client/core/QueryManager";
import "./ShopCard/shopcard.css";

function Home() {
  const [search, setSearch] = useState("");
  const { data, loading } = useQuery(QUERY_SEARCH_PRODUCT, {
    variables: { name: search },
  });
  console.log(data);
  const content = data?.products;
  console.log(content)
  return content.map((content) => {
    return (
      <>

        <ShopCard key={content.id} content={content} />
      </>
    );
  });

  // return (
  //   <div>
  //     <Search search={search} handleSearch={setSearch}/>
  //     <h1>{search}</h1>
  //     <pre>{JSON.stringify(content, null, 2 )}</pre>
  //     </div>
  //     );
}

export default Home;
