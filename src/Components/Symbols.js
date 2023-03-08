import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlide";

function Symbols(){
    const currentDisplay = useSelector(selectDisplay);

    return (
    <div className='symbols'>
        <div className='stack'>
            <h2> Flag of {currentDisplay.name.common}</h2>
            {currentDisplay.flags ? (
                <img src={currentDisplay.flags.png} alt='flag'/>
            ):(
                '(No Data Found)'
            )}
        </div>
        <div className='stack'>
            <h2> Coat of Arms of {currentDisplay.name.common}</h2>
            {currentDisplay.coatOfArms ? (
                <img src={currentDisplay.coatOfArms.png} alt='coat of arms'/>
            ): (
                '(No Data Found)'
            )}
        </div>
    </div>)
};
export default Symbols;