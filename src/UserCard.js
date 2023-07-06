import React from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import './UserList.css';

const UserCard = ({ user }) => {
  const handleDownload = () => {
    const fileName = `${user.first_name}_${user.last_name}.jpeg`;

    html2canvas(document.querySelector(`#userCard-${user.id}`)).then(canvas => {
      const link = document.createElement('a');
      link.download = fileName;
      link.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
      link.click();
    });
  };

  return (
    <div id={`userCard-${user.id}`} className="card">
      <div className="card-content">
        <div className="avatar">
          <img src={user.avatar} alt={`${user.first_name}'s avatar`} />
        </div>
        <div className="user-details">
          <h3>{`${user.first_name} ${user.last_name}`}</h3>
          <p>{user.email}</p>
          <button onClick={handleDownload}>Download</button>
        </div>
      </div>
      <Link to={`/user/${user.id}`} className="overlay-link">
        View Details
      </Link>
    </div>
  );
};

export default UserCard;



