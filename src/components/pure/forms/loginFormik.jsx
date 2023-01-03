import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Error de email')
        .required('El email es obligatorio'),
        password: Yup.string().required('Contraseña obligatoria')
    }
)

const LoginFormik = () => {

    const initialsCredencials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Formik Form</h4>
            <Formik
            initialValues={initialsCredencials}
            // **Yup validacion
            validationSchema = {loginSchema}

            onSubmit={async(values) => {
                await new Promise((r) => setTimeout(r, 100));
                alert(JSON.stringify(values, null, 2));
            }}>

                {/* Obtener props de Formik */}

                {({errors, touched, isSubmitting , values, handleChange, handleBlur}) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="example@email.com" />
                    
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

                        <button type="submit">Submit</button>
                        {isSubmitting ? ('Login your credentials...') : null}
                    </Form>
                )}

            </Formik>
        </div>
        
    );
}

export default LoginFormik;
