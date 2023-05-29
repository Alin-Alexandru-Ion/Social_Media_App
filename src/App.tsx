import React, { useEffect, useState } from 'react';
import axios from 'axios';

type User = {
  id: number;
  username: string;
  nickname: string;
  password: string;
  question: number;
  answer: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>('http://127.0.0.1:3001/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} >
            <h2> {user.username} </h2>
            <p> Nickname: {user.nickname} </p>
            <p> Password: {user.password} </p>
            <p> Secret Question: {user.question} </p>
            <p> Secret Answer: {user.answer} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;