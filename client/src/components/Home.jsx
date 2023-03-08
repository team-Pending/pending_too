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
  if (loading) {
    return <p>Loading...</p>
  }
  const content = data?.products;
  console.log(content)
  return content.map((item) => {
    return (
        <ShopCard key={item.id} content={item} />
    );
  });

}

export default Home;
