import {Link} from "react-router-dom";
import './NavbarStyles.css'

function Navbar (){
    return (
        <>
            <div className='row spacer1'></div>
            <div className='row navigation'>
                <Link to='/' className='left-links'>
                    Home
                </Link>
            </div>
            <div className='row navigation'>
                <Link to='/stats' className='left-links'>
                    Stats
                </Link>
            </div>
            <div className='row navigation'>
                <Link to='/play' className='left-links'>
                    How To Play
                </Link>
            </div>
            <div className='row navigation'>
                <Link to='/about' className='left-links'>
                    About
                </Link>
            </div>
            <div className='row spacer2'></div>
        </>
    )
}

export default Navbar;