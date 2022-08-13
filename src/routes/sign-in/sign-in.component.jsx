import { signInWithGooglePoup } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Button from '../../components/button/button.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePoup();
    const userDocRef = await createUserDocumentFromAuth(res);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <Button onClick={logGoogleUser}>dang nhap</Button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
