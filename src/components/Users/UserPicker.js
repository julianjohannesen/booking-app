import {useState} from "react";
import {users} from "../../static.json";

export default function UserPicker () {

  const [userIndex, setUserIndex] = useState();

  function selectUser (selectedIndex) {
    setUserIndex(selectedIndex);
    console.log("The selected user has user index ", userIndex);
  }

  return (
      <select
        className=""
      >
        {
          users.map((user, index)=>(
            <option
              className=""
              key={index}
              onClick={()=>selectUser(index)}
            >
              {user.name}
            </option>
          ))
        }
      </select>
    );
  }