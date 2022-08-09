import { signInWithGooglePoup } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePoup();
    const userDocRef = await createUserDocumentFromAuth(res);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>dang nhap</button>
    </div>
  );
};

export default SignIn;
