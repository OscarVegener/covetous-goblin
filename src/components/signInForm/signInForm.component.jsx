import React from "react";
import { useState } from "react";
import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import { signInCommonUser } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        signInCommonUser(email, password).then(response => {
            console.log(response);
            resetFormFields();
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Wrong password');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                default:
                    console.log(error);
            }
        });
    }

    const inputChangeHandler = (event) => {
        setFormFields({...formFields, [event.target.name]: event.target.value});
    }

    return (
        <div>
            <h2>Already have an account?</h2>
            <span>Sign in with email or Google account</span>
            <form onSubmit={onSubmitHandler} className="sign-up-container">
                <FormInput label="Email" type="email" onChange={inputChangeHandler} name="email" value={email} required={true}/>
                <FormInput label="Password" type="password" onChange={inputChangeHandler} name="password" value={password} required={true}/>
                <Button type="submit">Sign in</Button>
            </form>
        </div>
    )
}

export default SignInForm;
