import {
  signInWithGooglePopup,
  createUserDoc,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/signUpForm/signUpForm.component";
import SignInForm from "../../components/signInForm/signInForm.component";
import Button from "../../components/button/button.component";
import "./authentication.styles.scss";

const Authentication = () => {
  const signGoogleUser = async () => {
    signInWithGooglePopup()
      .then((response) => createUserDoc(response.user))
      .then((userRef) => console.log(userRef))
      .catch((error) => {
        console.log(`Error happened: ${error}`);
      });
  };

  return (
    <div>
      <div className="page-heading">
        <h1>SignIn</h1>
      </div>
      <div className="auth-forms-container">
        <div className="form-container">
          <SignInForm/>
          <Button onClick={signGoogleUser} buttonType="google" additionalClass='google-button'>Sign in with Google</Button>
        </div>
        <div className="form-container">
          <SignUpForm/>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
