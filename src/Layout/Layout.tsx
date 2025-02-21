import './layoutStyles.css'
import {Outlet} from "react-router-dom";
import Navbar from "../Components/Navigation/Navbar.tsx";
import {MyContextType} from "../Components/MyContextType.tsx";
import {useState} from "react";

function Layout (){
    // useState used to update the number variable
    // when the variable updated inside the child elements.
    const [number, setNumber] = useState(0);

    // increment function created to increment variable number by 1
    const increment = () => setNumber(number + 1);

    // takes a passed in value and adds the value to the total 
    // amount of MGP (FFXIV currency)
    const totalMGP = (value: number) => {
        setNumber(number + value)
    };

    // const addMGP: MyContextType = (value) => {
    //     setNumber(number + value);
    // }


    // we use the variable number and the function increment
    // as values for the interface properties.
    const contextValue: MyContextType = {
        number,
        increment,
        totalMGP
    }

    return (
        <div className='container my-container'>
            <div className='container main-box'>
                <div className='row h-100'>
                    <div className='col-2'>
                        <Navbar />
                    </div>
                    <div className='col-10'>
                        <Outlet context={contextValue} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout;