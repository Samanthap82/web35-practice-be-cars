import React from 'react';

export default function Sell(props) {
    const {submit, formValues, errorValues, disabled, change} = props;

    const onChange = e => {
        const {name, type, value, checked} = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }

    const onSubmit = e => {
        e.preventDefault();
        submit();
    }


    return (
        <div>
        <h2>Sell a car</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor='make'>Make
            <input
            type='text'
            name='make'
            value={formValues.make}
            onChange={onChange} />
            </label>
            <p>{errorValues.make}</p>

            <label htmlFor='model'>Model
            <input
            type='text'
            name='model'
            value={formValues.model}
            onChange={onChange} />
            </label>
            <p>{errorValues.model}</p>

            <label htmlFor='vin'>V.I.N.
            <input
            type='text'
            name='vin'
            value={formValues.vin}
            onChange={onChange} />
            </label>
            <p>{errorValues.vin}</p>

            <label htmlFor='year'>Year
            <input
            type='text'
            name='year'
            value={formValues.year}
            onChange={onChange} />
            </label>
            <p>{errorValues.year}</p>

            <label htmlFor='mileage'>Mileage
            <input
            type='text'
            name='mileage'
            value={formValues.mileage}
            onChange={onChange} />
            </label><br></br>

            <label htmlFor='color'>Color
            <input
            type='text'
            name='color'
            value={formValues.color}
            onChange={onChange} />
            </label><br></br>

            <label htmlFor='wrecked'>Wrecked
            <input
            type='checkbox'
            checked={formValues.wrecked}
            name='wrecked'
            onChange={onChange} />
            </label><br></br>

            <label htmlFor='autoTrans'>Auto-transmission
            <input
            type='checkbox'
            name='autoTrans'
            checked={formValues.autoTrans}
            onChange={onChange} />
            </label><br></br>

            <label htmlFor='doors'>Doors
            <select onChange={onChange} value={formValues.doors} name='doors'>
                <option value=''>Select</option>
                <option value='2'>2</option>
                <option value='3'>3...?</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </select>
            </label><br></br>

            <button disabled={disabled}>Sell!</button>
        </form>
        </div>
    )
}