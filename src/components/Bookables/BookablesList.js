import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import data from "../../static.json";

// Bookable items are categorized by "group" and user can select group
// to show filtered view of bookables in that group
export default function BookablesList() {

    // Fetch bookables
    const { bookables } = data;
    // Store active group in state
    const [group, setGroup] = useState("Kit");
    // Store a list of unique group names, found by mapping over 
    // bookables, but do it just once
    const [groups, setGroups] = useState(() => [...new Set(bookables.map(bookable => bookable.group))]);
    // Filter for an array of bookables in the specified group
    // everytime the user changes the selected group
    const bookablesInGroup = bookables.filter(bookable => bookable.group === group);
    // Store the index of selected bookable
    const [bookableIndex, setBookableIndex] = useState(1);
    // Handle clicks on the Next button by setting the bookableIndex to the
    // index of the next item in the list of bookables
    function nextBookable() {
        // Pass a function to setBookableIndex to use the most recent 
        // version of bookableIndex. Use modulo to cycle through indeces
        // from 0 to whatever and back to 0 again.
        setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
        console.log("The bookable index is ", bookableIndex);
    }

    return (
        <div>

            <select
                defaultValue={group}
                onChange={(e) => { setGroup(() => e.target.value) }}
            >
                {groups.map((group, index) => (
                    <option
                        key={group + index}
                        value={group}
                    >{group}</option>
                ))}
            </select>

            <ul className="bookables items-list-nav">
                {bookablesInGroup.map((bookable, index) => (
                    <li
                        key={bookable.id}
                        className={index === bookableIndex ? "selected" : null}
                    >
                        <button
                            className="btn"
                            onClick={() => setBookableIndex(index)}
                        >
                            {bookable.title}
                        </button>
                    </li>
                ))}
            </ul>

            <p>
                <button
                    autoFocus
                    className="btn"
                    onClick={nextBookable}
                >
                    <FaArrowRight />
                    <span>Next</span>
                </button>
            </p>

        </div>
    );
}