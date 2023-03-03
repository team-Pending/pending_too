import { useEffect, useState } from 'react';

// Find where data (db) is going to be stored, then call to here and use it.
import { idbPromise } from "../utils/helpers";
// import { collection, getDocs } from "";

const useGetData = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    // const collectionRef = collection(idbPromise, collectionName);

    // useEffect(() => {
    //     const getData = async() => {
    //         const data = await getDocs(collectionRef)
    //         setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    //         setLoading(false);
    //     };

    //     getData();
    // },[]);

    return{
        data, loading
    };
};

export default useGetData;