import { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export function useAuth(authFirebase) {
  const [authentication, setAuthentication] = useState(null);

  // const auth = authFirebase();
  const auth = authFirebase;

  // const provider = new authFirebase.GoogleAuthProvider();
  const provider = new GoogleAuthProvider();

  // const login = () => auth.signInWithPopup(provider);
  const logIn = () => {
    signInWithPopup(auth, provider);
  };

  // const logOut = () => auth.signOut().catch(err => console.error());
  const logOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.error()
    });
  }; 

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setAuthentication(user)
      } else {
        setAuthentication(null)
      }
    })

  }, [authentication, auth]);

  return { authentication, logIn, logOut };
}