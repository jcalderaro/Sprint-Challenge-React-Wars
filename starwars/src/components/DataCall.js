import React, { useState, useEffect } from "react";
import axios from "axios";
import DataCard from "./DataCard";


const DataCall = () => {
    const [swapi, setSwapi] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(res => {
                const starwars = res.data.results;
                console.log(starwars);
                setSwapi(starwars);
            }, [])
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            {swapi.map(info => {
                return (
                    <DataCard
                        key={info.id}
                        id={info.id}
                        name={info.name}
                        gender={info.gender}
                    />
                )
            })}
        </div>
    )
}

export default DataCall;