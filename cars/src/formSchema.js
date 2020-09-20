import * as yup from 'yup';
export default yup.object().shape({
    vin: yup.string().required('V.I.N. is required').min(17, 'V.I.N. must be 17 digits long').max(17, 'V.I.N. must be 17 digits long'),
    make: yup.string().required('Make is required'),
    model: yup.string().required('Model is required'),
    year: yup.string().required('Year is required').min(2, 'Number must be 2-4 digits').max(4, 'Number must be 2-4 digits'),
    color: yup.string(),
    mileage: yup.string(),
    wrecked: yup.boolean(),
    autoTrans: yup.boolean(),
    doors: yup.string().oneOf(['2', '3', '4', '5', '6'])
})