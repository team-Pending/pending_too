import React, { useState } from 'react';
import ShopCard from './ShopCard/ShopCard';
import placeholderContent from './placeholderData/data.json';
import Search from './Search';
import { useQuery } from '@apollo/client';
import { QUERY_SEARCH_PRODUCT } from '../utils/queries';
import { QueryManager } from '@apollo/client/core/QueryManager';

function Home() {
	const [search, setSearch] = useState('');
	const { data, loading } = useQuery(QUERY_SEARCH_PRODUCT, { variables: { name: search } });
	console.log(data?.products);
	const content = data?.products;
	return (
		<div>
			<Search search={search} handleSearch={setSearch} />
			<h1>{search}</h1>
			{/* <ShopCard content = {content} /> */}
			<pre>{JSON.stringify(content, null, 2)}</pre>
		</div>
	);
}

export default Home;
