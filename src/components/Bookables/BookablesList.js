import {useState} from 'react';
import data from "../../static.json";
const {bookables} = data;
 
export default function BookablesList () {

    // Hard code the group to "Rooms" for now
  const group = "Rooms";
 
  // Filter for an array of "Rooms"
  const bookablesInGroup = bookables.filter(bookable => bookable.group === group);
  
  const [bookableIndex, setBookableIndex] = useState(1)

  function changeBookable(selectedIndex){
    setBookableIndex(selectedIndex);
    console.log("The bookable index is ", selectedIndex);
  }
 
  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((bookable, index) => (
        <li
          key={bookable.id} 
          className={index === bookableIndex ? "selected" : null}
        >
          <button
            className="btn"
            onClick={()=>changeBookable(index)}
          >
            {bookable.title}
          </button>
        </li>
      ))}
    </ul>
  );
}