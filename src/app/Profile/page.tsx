// "use client";

// import { useEffect, useState } from "react";
// import jwtDecode from "jwt-decode";

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please log in first!");
//       return;
//     }

//     const decoded = jwtDecode(token);
//     setUser(decoded);
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h1>Welcome, {user.email}</h1>
//           {/* Add more user details */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;
