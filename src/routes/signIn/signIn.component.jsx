import {
  signInWithGooglePopup,
  createUserDoc,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/signUpForm/signUpForm.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    signInWithGooglePopup()
      .then((response) => createUserDoc(response.user))
      .then((userRef) => console.log(userRef))
      .catch((error) => {
        console.log(`Error happened: ${error}`);
      });
  };

  return (
    <div>
      <div>
        <button onClick={logGoogleUser}>Sign in with Google</button>
        <h1>SignIn</h1>
      </div>
      <div>
        <SignUpForm/>
      </div>
    </div>
  );
};

export default SignIn;
