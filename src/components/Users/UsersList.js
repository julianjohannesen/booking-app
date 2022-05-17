import {useState} from "react";
import data from "../../static.json";
const {users} = data;

export default function UsersList(){

    console.log("The full data ", data, "and just the users ", users);

    const [userIndex, setUserIndex] = useState(1);

    function changeUser(selectedIndex){
        setUserIndex(selectedIndex);
        console.log("The user index is ", selectedIndex);
    }

    return (
        <ul className="users items-list-nav">
            {
                users.map( (user, index) => (
                    <li
                        key={index}
                        className={index === userIndex ? "selected" : null}
                    >
                        <button
                            className="btn"
                            onClick={()=>changeUser(index)}
                        >
                            {user.name}
                        </button>
                    </li>
                ))
            }
        </ul>
    );
}