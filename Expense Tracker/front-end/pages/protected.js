// import { useContext } from "react";
// import { AuthContext } from "./providers/AuthProvider";
// import { useRouter } from "next/router";

// const Page = () => { 
//     const {currentUser, isLoading} = useContext(AuthContext);
//     const router = useRouter;

//     if(isLoading) return <div>loading...</div>

//     if(currentUser.isAuthenticated){
//         router.push("/login");
//     } 


//     return <div>Protected Page</div>;



// };

// export default Page

import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { useRouter } from "next/router";

const Page = () => {
  const { currentUser, isLoading } = useContext(AuthContext);
  const router = useRouter(); // Call the hook correctly

  if (isLoading) return <div>loading...</div>;

  if (!currentUser.isAuthenticated) {
    // Check if the user is not authenticated
    router.push("/login"); // Push them to the login page
  } else {
    return <div>Protected Page</div>; // Show the protected page
  }
};

export default Page;