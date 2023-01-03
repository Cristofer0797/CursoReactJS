import React from 'react';
import { User } from '../../../models/user.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Nombre de usuario demasiado corto')
                .max(12, 'Nombre de usuario demasiado largo')
                .required('Nombre de usuario obligatorio'),
            email: Yup.string()
                .email('Formato invalido')
                .required('Email requerido'),
            role: Yup.string().
                oneOf([ROLES.USER, ROLES.ADMIN], 'Selecciona tu rol')
                .required('Rol obligatorio'),
            password: Yup.string()
                .required('Contraseña requerida')
                .min(8, 'Contraseña demasiado corta'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Contraseña incorrecta'
                    )
                }).required('Confirma la contraseña')
        }
    )

    const submit = (values) => {
        alert('Register User')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema = {registerSchema}
                onSubmit={async(values) => {
                    await new Promise((r) => setTimeout(r, 100));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({errors, touched, isSubmitting , values, handleChange, handleBlur}) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" type="text" name="username" placeholder="username" />

                        {/* Username errors */}
                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name='username' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Email errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name='email' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="password" type="password"/>
                    
                        {/* Password errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name='password' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="confirm">Confirm Password</label>
                        <Field id="confirm" name="confirm" placeholder="confirm password" type="password"/>
                    
                        {/* Confirm Password errors */}
                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name='confirm' component='div'></ErrorMessage>
                            )
                        }

                        <button type="submit">Register Account</button>
                        {isSubmitting ? ('Login your credentials...') : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterFormik;
