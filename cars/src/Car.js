import React from 'react';
import {useParams, useRouteMatch} from 'react-router-dom';

export default function Car(props) {
    const {cars} = props;
    const {url, path} = useRouteMatch();
    const {id} = useParams();

    const car = cars.find(car => {
        return car._id == id;
    }) || {};
    console.log(cars)
    return (
        <div>
            <h3>Make: {car.make}</h3>
            <h3>Model: {car.model}</h3>
            <h3>Year: {car.year}</h3>
            {car.mileage && <h3>Mileage: {car.mileage}</h3>}
            {car.color && <h3>Color: {car.color}</h3>}
            {car.doors && <h3>Doors: {car.doors}</h3>}
            {car.wrecked===true && <h3>**WRECKED**</h3>}
        </div>
    )
}