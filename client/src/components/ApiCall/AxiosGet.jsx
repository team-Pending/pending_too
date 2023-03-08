import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL ="/api/products"

const GraphQLFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const query = `
            query {
                products {
                    id
                }
            }
            `;
      try {
        const response = await axios.post(API_URL, { query });
        setData(response.data);        
      } catch (error) {
        console.error(error)
      }
    };
    fetchData();
  }, []);

  return (
    <>
{ data ? ( 
    <pre>{JSON.stringify(data, null, 2)}</pre>
):(
    <p>Loading...</p>
)
}
    </>
  );
};

export default GraphQLFetch;

