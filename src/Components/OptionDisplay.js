import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlide";


const OptionDisplay = () => {
    let currentPotentials = useSelector(selectPotentials);
    console.log(currentPotentials);

    const dispatch = useDispatch();

    const content = currentPotentials.map((e, i)=> {
        return (
            <h2 
            key={e.name.official} 
            className='country-option'
            onClick={()=>{
                dispatch(setDisplayCountry(currentPotentials[i]));
            }}>
                {e.name.common}
            </h2>
        )
    });

    return <div className="stack">{content}</div>;
};

export default OptionDisplay;
