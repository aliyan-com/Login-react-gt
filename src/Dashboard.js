// Dashboard.js
import React from 'react';

const Dashboard = () => {
  const getData = () => {
    return [
      { id: 1, name: 'Dummy Data 1' },
      { id: 2, name: 'Dummy Data 2' },
      { id: 3, name: 'Dummy Data 3' },
    ];
  };

  const data = getData();

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Welcome Admin</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;