import { useEffect, useState } from "react";
import { BaseURL } from "../../utils/Base-url";
import "./Users.css";
import { PuText } from "react-library";

interface UserData {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  groups: {
    id: number;
    name: string;
  }[];
}

const Users = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    fetch(`${BaseURL}/authen/api${window.location.pathname}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP xato, so'rov bajarilmadi");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Xato:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  return (
    <div className="component">
      <PuText className="component-title">
        <h1>{users[0]?.groups[0]?.name}</h1>
      </PuText>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Usename</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user?.first_name}</td>
              <td>{user?.last_name}</td>
              <td>{user?.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
