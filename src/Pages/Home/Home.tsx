import './HomeStyles.css'
import CactpotBoard from "./CactpotBoard.tsx";
import Payouts from "./Payouts.tsx";

function Home() {
    return (
        <div className='container h-100'>
            <div className='header-box text-center pt-2'>Mini Cactpot</div>
            <div className='cactpot-box row'>
                <div className='col-6 h-100 content-area'>
                    <CactpotBoard/>
                </div>
                <div className='col-6 h-100 content-area'>
                    <Payouts/>
                </div>
            </div>
            <div className='footer-box text-center mt-2'>Made by Alexander Brown</div>
        </div>
    )
}

export default Home;