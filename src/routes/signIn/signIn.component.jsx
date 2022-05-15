import { signInWithGooglePopup, createUserDoc } from "../../utils/firebase/firebase.utils"; 

const SignIn = () => {
    const logGoogleUser = async () => {
        signInWithGooglePopup().then(
            response => createUserDoc(response.user)
        )
        .then(
            userRef => console.log(userRef)
        )
        .catch(error => {
            console.log(`Error happened: ${error}`);
        });
    }


    return (
        <div>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <h1>SignIn</h1>
        </div>
    )
}

export default SignIn;
