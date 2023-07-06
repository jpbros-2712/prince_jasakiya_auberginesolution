// import React from 'react';
// import UserList from './UserList';

// const App = () => {
//   return (
//     <div>
//       <UserList />
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

