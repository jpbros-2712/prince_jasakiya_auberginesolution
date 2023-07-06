// import React, { useEffect, useState } from 'react';

// const UserDetails = ({ match }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const userId = match.params.id;

//     fetch(`https://reqres.in/api/users/${userId}`)
//       .then(response => response.json())
//       .then(data => {
//         setUser(data.data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, [match.params.id]);

//   if (!user) {
//     return <div>Loading user details...</div>;
//   }

//   return (
//     <div>
//       <h2>User Details</h2>
//       <img src={user.avatar} alt={`${user.first_name}'s avatar`} />
//       <h3>{`${user.first_name} ${user.last_name}`}</h3>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// export default UserDetails;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [id]);

  if (!user) {
    return <div>Loading user details...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <img src={user.avatar} alt={`${user.first_name}'s avatar`} />
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
