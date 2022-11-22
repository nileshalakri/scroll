import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../css/main.css'
import InfiniteScroll from 'react-infinite-scroll-component';



export default function Card() {
    const [api, setApi] = useState([]);
    const [currentPage, setPage] = useState(1);

    useEffect(() => {
        fetchMoreData();
    }, [])
    const fetchMoreData = () => {
        setPage(currentPage + 1);
        axios
            .get('https://rickandmortyapi.com/api/character?page=' + currentPage)
            .then(res => {
                console.log(res);
                console.log(res.data);

                setApi([...api, ...res.data.results]);
            });
    };
    return (
        <InfiniteScroll
        dataLength={api.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}>
        <div className="container">
            <div className="row">
            
                
                    {
                        api.length > 0 && api.map(character =>
                            <div className="col-xl-6 text-center card" key={character.id}>
                                <img src={character.image} className="img-fluid" alt={character.name} />
                                <div className='carddetails'>
                                    <p>{character.name}</p>
                                    <p><i className={`fa fa-circle ${character.status.toLowerCase()}`}></i>{character.status}-{character.species}</p>
                                    <p>Last known location : <br />{character.location.name}</p>
                                    <p>First seen in : <br />{character.origin.name}</p>
                                </div>
                            </div>
                        )
                    }
               


            </div>
        </div>
        </InfiniteScroll>
    )
}
