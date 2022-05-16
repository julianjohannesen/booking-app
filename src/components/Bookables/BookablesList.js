import {bookables} from "../../static.json";
 
export default function BookablesList () {
 
    // Hard code the group to "Rooms" for now
  const group = "Rooms";
 
  // Filter for an array of "Rooms"
  const bookablesInGroup = bookables.filter(bookable => bookable.group === group);
  
  // Hard code the bookableIndex for now
  const bookableIndex = 1;
 
  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((bookable, index) => (
        <li
          key={bookable.id} 
          className={index === bookableIndex ? "selected" : null}
        >
          <button
            className="btn"
          >
            {bookable.title}
          </button>
        </li>
      ))}
    </ul>
  );
}