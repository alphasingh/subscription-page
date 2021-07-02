import React from 'react';
import Axios from 'axios';
import {useFormik} from 'formik';
import './Buyer.css';


export default function App() {
    const url = "https://tiffin-umbrella.herokuapp.com/post_buyer";

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            area: '',
            zip: ''
        },

        onSubmit: (values, onSubmitProps) => {
            console.log('Form data', values)
            onSubmitProps.resetForm()
            const postData = {
                firstName: values.firstName,
                lastName: values.lastName,
                contact: {
                    phone: values.phone,
                    email: values.email,
                    address: {
                        line1: values.address,
                        area: values.area,
                        zip: values.zip
                    }
                }
            };

            Axios.post(url, postData, {headers: {'Content-Type': 'application/json'}})
                .then(res => {
                    console.log(res.values)
                })
                .catch(errors => {
                    console.log(errors)
                })

        },

        validate: values => {

            let errors = {}

            if (!values.firstName) {
                errors.firstName = 'Required'
            }

            if (!values.lastName) {
                errors.lastName = 'Required'
            }

            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid'
            }

            if (!values.phone) {
                errors.phone = 'Required'

            } else if (!/([0-9])/.test(values.phone)) {
                errors.phone = 'Invalid'
            }

            if (!values.address) {
                errors.address = 'Required'
            }

            if (!values.area) {
                errors.area = 'Required'
            }

            if (!values.zip) {
                errors.zip = 'Required'
            } else if (/([a-z])/.test(values.zip)) {
                errors.zip = 'Invalid'
            }

            return errors
        }
    })

    return (

        <div>
            <hr/>
            <hr/>
            <hr/>
            <div className='p'>Here the Buyers order will be displayed!!</div>

            <div className="inner">

                <h2 className='heading'>Buyer Details Form</h2>

                <div className="form-group">
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label></label>
                            <input className="cinput"
                                   placeholder='First Name'
                                   type='text'
                                   name='firstName'
                                   id='firstName'
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.firstName}
                            />
                            {formik.touched.firstName && formik.errors.firstName ?
                                <div className='error'>{formik.errors.firstName}</div> : null}
                        </div>

                        <div>
                            <label> </label>
                            <input className="cinput"
                                   placeholder='Last Name'
                                   type='text'
                                   name='lastName'
                                   id='lastName'
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.lastName}
                            />
                            {formik.touched.lastName && formik.errors.lastName ?
                                <div className='error'>{formik.errors.lastName}</div> : null}
                        </div>

                        <div>
                            <label></label>
                            <input className="cinput"
                                   placeholder='Email'
                                   type='email'
                                   name='email'
                                   id='email'
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ?
                                <div className='error'>{formik.errors.email}</div> : null}
                        </div>

                        <div>
                            <label></label>

                            <input className="cinput"
                                   placeholder='Phone'
                                   type='text'
                                   name='phone'
                                   id='phone'
                                   maxLength="10"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.phone}
                            />
                            {formik.touched.phone && formik.errors.phone ?
                                <div className='error'>{formik.errors.phone}</div> : null}
                        </div>

                        <div>
                            <label></label>
                            <input className="cinput"
                                   placeholder='Address'
                                   type='textarea'
                                   name='address'
                                   id='address'
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.address}
                            />
                            {formik.touched.address && formik.errors.address ?
                                <div className='error'>{formik.errors.address}</div> : null}
                        </div>

                        <div>
                            <label></label>
                            <input className="cinput"
                                   placeholder='Area'
                                   type='text'
                                   name='area'
                                   id='area'
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.area}
                            />
                            {formik.touched.area && formik.errors.area ?
                                <div className='error'>{formik.errors.area}</div> : null}
                        </div>

                        <div>
                            <label></label>
                            <input className="cinput"
                                   placeholder='Zipcode'
                                   type='tel'
                                   name='zip'
                                   id='zip'
                                   pattern="[A-Z0-9]{6}"
                                   maxLength="6"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.zip}
                            />
                            {formik.touched.zip && formik.errors.zip ?
                                <div className='error'>{formik.errors.zip}</div> : null}
                        </div>

                        <br/>

                        <div className="centerblock">

                            <input type="checkbox" id="checkbox" className="check"/>&nbsp;
                            I hereby agree to share my details with the seller

                            <br/>
                            <br/>

                            <button type='submit' disabled={!formik.isValid}>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
        </div>

    );

}