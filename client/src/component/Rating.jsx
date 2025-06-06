import { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
// Rating Component
const Rating = ({ initialRating }) => {
    const [rating, setRating] = useState(initialRating);
    const [hoverValue, setHoverValue] = useState(null);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleMouseOver = (newValue) => {
        setHoverValue(newValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(null);
    };

    return (
        <div className="flex items-center">
           <p className='text-sm mr-1 '>
            {rating}
            </p> 
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                const isHalf = hoverValue === ratingValue - 0.5;
                const isSelected = hoverValue ? hoverValue >= ratingValue : rating >= ratingValue;
                return (
                    <label
                        key={index}
                        className="cursor-pointer"
                        onMouseOver={() => handleMouseOver(ratingValue)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleRatingChange(isHalf ? ratingValue - 0.5 : ratingValue)}
                    >
                        <input type="radio" name="rating" value={ratingValue} hidden />
                        {isHalf ? (
                            <FaStarHalfAlt
                                className={`h-6 w-6 ${isSelected ? 'text-yellow-400' : 'text-gray-400'}`}
                            />
                        ) : (
                            <FaStar className={`h-3 w-3 ${isSelected ? 'text-yellow-400' : ' text-gray-300'} `} />
                        )}
                    </label>
                );
            })}
        </div>
    );
};
export default Rating;