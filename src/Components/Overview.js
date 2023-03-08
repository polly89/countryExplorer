import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlide";

function Overview(){
    let currentDisplay = useSelector(selectDisplay);
    
    return (
    <div className='stack'>
        <h1>{currentDisplay.name.official}</h1>
        
        <div>
            <table className='overview-table'>
            <thead>
                <tr key={currentDisplay.name}>
                    <th> Common Name</th>
                    <th> Capital </th>
                    <th> Population </th>
                    <th> Continent </th>
                    <th> Borders </th>
                </tr> 
            </thead>
            <tbody>
                <tr>
                    <td>{currentDisplay.name.common}</td>
                    <td>{currentDisplay.capital}</td>
                    <td>{currentDisplay.population.toLocaleString()}</td>
                    <td>{currentDisplay.continents}</td>
                    <td>{currentDisplay.borders 
                        ? currentDisplay.borders.map((e, i, arr)=>{
                            if(i + 1 === arr.length){
                                return `${e}`;
                            }else{
                                return `${e}, `;
                            }
                        })
                    : 'N/A'}</td>
                <td></td>
                </tr>
            </tbody>
        </table>
        </div>
        <img src={currentDisplay.coatOfArms.png} alt='coat of arms'/>
    </div>
    )
};
export default Overview;