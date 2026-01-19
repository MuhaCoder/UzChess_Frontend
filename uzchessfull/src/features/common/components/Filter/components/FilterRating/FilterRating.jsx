import {useState} from "react";
import Var from "./FilterRating.module.css";

export default function FilterRating({item}) {
    const [rating, setRating] = useState(0);

    return (
        <div className={Var.ratingBox}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => setRating(star)}
                >
          <img src={rating >= star ? item.activeIcon : item.icon} alt="svg icon"/>
        </span>
            ))}
        </div>
    );
}