import { useState } from "react";
import { createCommonUser, createUserDoc } from "../../utils/firebase/firebase.utils";
import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import "./signUpForm.styles.scss";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        createCommonUser(email, password).then(
            user => createUserDoc({...user.user, displayName})
        )
        .then(response => {
            console.log(response);
            resetFormFields();
        })
        .catch(error => console.log("Error creating common user", error));
    }

    const inputChangeHandler = (event) => {
        setFormFields({...formFields, [event.target.name]: event.target.value});
    }


    return (
        <div>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmitHandler} className="sign-up-container">
                <FormInput label="Display name" type="text" onChange={inputChangeHandler} name="displayName" value={displayName} required={true}/>
                <FormInput label="Email" type="email" onChange={inputChangeHandler} name="email" value={email} required={true}/>
                <FormInput label="Password" type="password" onChange={inputChangeHandler} name="password" value={password} required={true}/>
                <FormInput label="Confirm password" type="password" onChange={inputChangeHandler} name="confirmPassword" value={confirmPassword} required={true}/>
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;
