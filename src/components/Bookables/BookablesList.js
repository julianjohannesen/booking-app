import {bookables} from "../../static.json";
 
export default function BookablesList () {
 
    // Hard code the group to "Rooms" for now
  const group = "Rooms";
 
  // Filter for an array of "Rooms"
  const bookablesInGroup = bookables.filter(bookable => bookable.group === group);
  
  // Initial value for the bookableIndex
  let bookableIndex = 1;

  function changeBookable(selectedIndex){
    bookableIndex = selectedIndex;
    console.log(selectedIndex);
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