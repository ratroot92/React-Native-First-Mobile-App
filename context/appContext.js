// import React, { createContext, useState, useEffect } from 'react';

// import { useMethods } from 'react-use';

// import userService from '../services/user.service';

// const initialState = {
//   allUsers: [],
// };

// function createMethods(state) {
//   return {
//     reset() {
//       return initialState;
//     },
//     initUsers(allUsers) {
//       return { ...state, allUsers };
//     },
//   };
// }

// export const AppContext = createContext();

// export default ({ children }) => {
//   //   const { isAuthenticated } = React.useContext(AuthContext);
//   const [loaded, setLoaded] = useState(false);
//   const [store, methods] = useMethods(createMethods, initialState);

//   useEffect(async () => {
//     console.log('====================================');
//     console.log('useEffect -- appContext');
//     console.log('====================================');

//     const allUsers = await userService.getAllUsers();
//     console.log('====================================');
//     console.log(allUsers);
//     console.log('====================================');
//     await methods.initUsers(allUsers.data);

//     setLoaded(true);
//   }, []);
//   return (
// 		<View>
// 			<AppContext.Provider
// 				value={{
// 				  store,
// 				  methods,
// 				}}
// 			>
// 				{children}
// 			</AppContext.Provider>
// 		</View>
//   );
// };
