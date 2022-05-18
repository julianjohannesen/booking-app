import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import data from "../../static.json";

export default function BookablesList() {
    
    const { bookables } = data;

    // Hard code the group to "Rooms" for now
    const group = "Rooms";

    // Filter for an array of "Rooms"
    const bookablesInGroup = bookables.filter(bookable => bookable.group === group);

    const [bookableIndex, setBookableIndex] = useState(1)

    function nextBookable() {
        setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
        console.log("The bookable index is ", bookableIndex);
    }

    return (
        <div>

            <ul className="bookables items-list-nav">
                {bookablesInGroup.map((bookable, index) => (
                    <li
                        key={bookable.id}
                        className={index === bookableIndex ? "selected" : null}
                    >
                        <button
                            className="btn"
                            onClick={()=>setBookableIndex(index)}
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