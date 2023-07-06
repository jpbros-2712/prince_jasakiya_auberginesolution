// import React, { useEffect, useState } from 'react';
// import './UserList.css';

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://reqres.in/api/users')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data.data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       {users.map(user => (
//         <div key={user.id} className="card">
//           <img src={user.avatar} alt={`${user.first_name}'s avatar`} className="avatar" />
//           <div className="user-details">
//             <h3>{`${user.first_name} ${user.last_name}`}</h3>
//             <p>{user.email}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserList;





import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
