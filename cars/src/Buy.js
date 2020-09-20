import React from 'react';
import {Link, Route, Switch, useRouteMatch, useParams} from 'react-router-dom';
import Car from './Car';
import styled from 'styled-components';

export default function Buy(props) {
    const {cars} = props;
    const {url, path} = useRouteMatch();

    return (
        <>
        <div>
        <h2>Buy a car</h2>
        <h3>In stock</h3>
        {cars.map(car => {
            console.log(car)
            return (
                <div className='buy-list'>
                    <Link to={`${url}/${car._id}`}>
                        {car.year} {car.make} {car.model}
                    </Link>
                </div>
            )
        })}
        </div>
        <div>
            <Route path={`${path}/:id`}>
                <Car cars={cars}/>
            </Route>
        </div>
        </>
    )
}