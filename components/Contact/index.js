import { Field, Form, Formik } from 'formik';
import React from 'react'
import style from "./style.module.css"
import * as yup from 'yup';

function Contact() {
    const initialValue = {
        name: '',
        email: '',
        description: '',
    }
    const validationSchema = yup.object().shape({
        name: yup.string().required("Required"),
        email: yup.string().email('Invalid email').required('Required'),
        description: yup.string().required('Required').max(50,'Please enter a message of length b/w 1-50').min(2,'Please enter a message of length b/w 2-50'),
    })
    return (
        <div className={style.main}>
            <div className={style.upperContent}>
                {/* News Letter */}
                <div className={style.w30}>
                    <p className={style.newsTitle}>NewsLetter</p>
                    <p className={style.newsText}>Get news about articles and updates in your inbox.</p>
                </div>
                <div className={style.w40}>
                    <Formik initialValues={initialValue} validationSchema={validationSchema}>
                        {({ values, errors,handleChange,touched, handleSubmit, handleBlur, setFieldValue, setFieldTouched
                        }) => {
                            return (
                                <Form className='flex flex-col gap-[40px]'>
                                    <div>
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="NAME"
                                        className={style.customInput}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    {touched.name && errors.name && <p className='text-white'>{errors.name}</p>}
                                    </div>
                                    <div>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="EMAIL"
                                        className={style.customInput}
                                        onChange={handleChange}
                                        value={values.email}
                                        onBlur={handleBlur}
                                    />
                                    {touched.email && errors.email && <p className='text-white'>{errors.email}</p>}
                                    </div>
                                    <div>
                                    <Field
                                        type="text"
                                        name="description"
                                        placeholder="MESSAGE"
                                        className={style.customInput}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                    />
                                    {touched.description && errors.description && <p className='text-white'>{errors.description}</p>}
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
            {/* Get in touch */}
            <div className='relative flex p-8'>
                <div>
                    <h1 className={style.getintouchtext}>GET </h1>
                    <h1 className={style.getintouchtext}>IN TOUCH </h1>
                </div>
                <button className={style.circlebutton}><span>SEND</span></button>
            </div>
        </div>
    )
}

export default Contact;
