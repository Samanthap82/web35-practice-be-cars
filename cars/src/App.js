import React, {useState, useEffect} from 'react'
import './App.css'
import * as yup from 'yup';
import {Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import Buy from './Buy';
import Sell from './Sell';
import schema from './formSchema'

const initialformValues = {
  vin: '',
  make: '',
  model: '',
  year: '',
  color: '',
  mileage: '',
  wrecked: false,
  autoTrans: false,
};

const initialFormErrors = {
  vin: '',
  make: '',
  model: '',
  year: ''
};

const initialDisabled = true;

function App() {
  const [cars, setCars] = useState([]);
  const [formValues, setFormValues] = useState(initialformValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  useEffect(() => {
    axios.get('https://cars-be-practice.herokuapp.com/api/cars')
    .then(res => {
      setCars(res.data);
    })
  }, []);

 const change = (name, value) => {
   validate(name, value);
   setFormValues({
     ...formValues,
     [name]: value
   })
 }

 const validate = (name, value) => {
   yup
   .reach(schema, name)
   .validate(value)
   .then(valid => {
     setFormErrors({
       ...formErrors,
       [name]: ''
     })
   })
   .catch(error => {
     setFormErrors({
       ...formErrors,
       [name]: error.errors[0]
     })
   })
 }

 useEffect(() => {
  schema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  });
 }, [formValues]);

 const submit = () => {
   const newCar = {
    vin: parseInt(formValues.vin.trim()),
    make: formValues.make.trim(),
    model: formValues.model.trim(),
    year: parseInt(formValues.year.trim()),
    color: formValues.color.trim(),
    mileage: parseInt(formValues.mileage.trim()),
    wrecked: formValues.wrecked,
    autoTrans: formValues.autoTrans,
   }
   postCar(newCar);
 }

 const postCar = newCar => {
   axios.post('https://cars-be-practice.herokuapp.com/api/cars/add', newCar)
   .then(res => {
     setCars([...cars, res.data]);
     setFormValues(initialformValues)
   })
   .catch(error => {
     console.log(error)
   })
 }



  return (
    <div>
      <h1>Awesome Cars</h1>
      <h2>The best place to find an awesome car</h2>
      <nav>
        <Link to='/'>HOME</Link>
        <Link to='/buy'>BUY A CAR</Link>
        <Link to='/sell'>SELL A CAR</Link>
      </nav>
      <Switch>
        <Route path='/buy'>
          <Buy cars={cars}/>
        </Route>
        <Route path='/sell'>
          <Sell submit={submit} formValues={formValues} errorValues={formErrors} disabled={disabled} change={change}/>
        </Route>
        <Route path='/'>
          <div>
            <p>Welcome to Awesome Cars! The greatest place in the world to buy or sell a car</p>
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export default App