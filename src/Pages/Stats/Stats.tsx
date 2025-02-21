import './StatsStyles.css'
import {useOutletContext} from "react-router-dom";
import {MyContextType} from "../../Components/MyContextType.tsx";

function Stats() {
    const {number} = useOutletContext<MyContextType>();

    return (
        <div className='container h-100 d-flex justify-content-center align-items-center'>
            <div className='stats-box'>
                <h1 className='text-center mt-3'>TOTAL MGP WON</h1>
                <div className='mgp-box text-center'>{number} MGP</div>
            </div>
        </div>

    )
}

export default Stats;