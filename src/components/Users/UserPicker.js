import {useState} from "react";
import data from "../../static.json";
const {users} = data;

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