import {useEffect, useState} from "react";


export default function API(){
    let [flightsList, setFlightsList] = useState( [])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(flights => {
                setFlightsList(flights.filter(flight => flight.launch_year !== '2020'));
               })
    }, []);
    return (
        <div className={'wrap'}>
                       {
                    flightsList.map(value =>
                        <div className={'fly'} key={value.flight_number}>
                            <h3>{value.mission_name}</h3>
                            <h4>{value.launch_year}</h4>
                            <img src={value.links.mission_patch} alt="mission_patch"/>

                        </div>)
                }
       </div>
    )
}