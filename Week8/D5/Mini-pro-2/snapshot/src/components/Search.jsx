import { useParams } from "react-router"
import { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import './Search.css'


const Search = () => {
    const [query, setQuery] = useState('mountains')
    const [photos, setPhotos] = useState([])
    const params = useParams()
    
   
    const client = createClient('zGvzY4mjh8XWQHfUVUHo2LRUXbdpSrIlQttaGTH59DYHEY4KjO7cBHhH')

    useEffect(() => {
        setQuery(params.element); 
    }, [params.element]);
    
    useEffect(() => {
        if (query) {
            client.photos
                .search({ query, per_page: 30 })
                .then(pictures => setPhotos(pictures.photos));
        }
    }, [query]);

    return (
        <><h2>{query.charAt(0).toUpperCase() + query.slice(1)} Pictures</h2>
        <section>
            
            {photos.map((picture, index) => {
                return(
                    <img src={picture.src.medium} alt={picture.alt} key={index} />
                )
            })}
        </section>
        </>
    )
}

export default Search