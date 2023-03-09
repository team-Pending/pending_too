import React, { useState } from "react";
import ShopCard from "./ShopCard/ShopCard";
import Search from "./Search";
import { useQuery } from "@apollo/client";
import { QUERY_SEARCH_PRODUCT } from "../utils/queries";
import { QueryManager } from "@apollo/client/core/QueryManager";
import "./ShopCard/shopCard.css";

function Home() {
  const [search, setSearch] = useState("");
  const { data, loading } = useQuery(QUERY_SEARCH_PRODUCT, {
    variables: { name: search },
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  const content = data?.products;
  console.log(content);
  return (
    <div>
      <Search search={search} handleSearch={setSearch} />
      <h1>{search}</h1>
      {content.map((item) => (
        <ShopCard key={item.id} content={item} />
      ))}
      ;
    </div>
  );
}

export default Home;
