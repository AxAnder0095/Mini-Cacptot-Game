import './CactpotBoardStyles.css'
import {GetMgpWon} from "./GetMgpWon.tsx";
import {useOutletContext} from "react-router-dom";
import {MyContextType} from "../../Components/MyContextType.tsx";


function CactpotBoard() {

    const {totalMGP} = useOutletContext<MyContextType>();

    const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function reEnableButtons(buttons: NodeListOf<HTMLButtonElement>) {
        buttons.forEach((button) => {
            button.disabled = false;
        })
    }

    function disableButtons(buttons: NodeListOf<HTMLButtonElement>) {
        buttons.forEach((button) => {
            button.disabled = true;
        })
    }

    function randomizeArray <T>(array: T[]): T[]{
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const resetGame = () => {
        const elementID = document.getElementById('board');
        const circles = document.querySelectorAll<HTMLElement>('.circle');
        const circleButtons = document.querySelectorAll<HTMLButtonElement>('.circle-button');
        const topArrows = document.querySelectorAll<HTMLButtonElement>('.top-arrow-buttons');
        const leftArrows = document.querySelectorAll<HTMLButtonElement>('.left-arrow-buttons');

        const numArr = randomizeArray(numList);
        let ctr = 0;
        let btnCtr = 1;

        if (elementID) {
            const style = getComputedStyle(elementID);
            const display = style.display;
            if (display === 'block') {
                circles.forEach(circle => {
                    circle.style.border = '0px';
                });

                reEnableButtons(topArrows)
                reEnableButtons(leftArrows)

                circleButtons.forEach( () => { // get buttonID's and re-enable them with original styling
                    const elementId = 'circle' + btnCtr;
                    const btn = document.getElementById(elementId) as HTMLButtonElement;

                    btn.disabled = false;
                    btn.style.backgroundColor = '#fcdc88';
                    btn.style.border = '5px solid white';
                    btn.style.color = '#fcdc88';
                    btn.innerText = numArr[ctr] + "";
                    ctr++;
                    btnCtr++;
                });
            }
        }
    }

    // Show the board on click
    const startGame = () => {
        const elementId = document.getElementById('board');
        const circles = document.querySelectorAll<HTMLElement>('.circle');
        const circleButtons = document.querySelectorAll<HTMLElement>('.circle-button');

        const numArr = randomizeArray(numList);
        let ctr = 0;

        // Check to see if elementID is null
        if (elementId) {
            const style = getComputedStyle(elementId);
            const display = style.display;
            if (display === "none") {
                elementId.style.display = "block";

                circles.forEach(circle => {
                    circle.style.border = '0px';
                });

                circleButtons.forEach(button => {
                    button.innerText = numArr[ctr] + "";
                    ctr++;
                })
            }
        }
    }

    // handle click function will find the id of the grid button clicked
    // and we use the id
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const elementId = event.currentTarget.id;
        // const parentId = event.currentTarget.parentElement.id;

        // get parent element of clicked button
        const pID = event.currentTarget.parentElement;
        let confirmPID = "";

        // check to see if parent element exists
        if (pID) {
            confirmPID = pID.id;
        }

        // set variable to the parent elements ID
        const parentId = confirmPID;


        const x = document.getElementById(elementId) as HTMLButtonElement;
        const y = document.getElementById(parentId);

        if (x){ // check to see if x is null or not
            if (x.style.display === 'none') {
                x.style.display = 'block';
            }
            else{
                x.style.backgroundColor = '#fafafa'
                x.style.color = 'red';
                x.disabled = true;
                y.style.border = '5px solid #fcdc88';
            }
        }
    }

    function getIdValues(eID1: string, eID2: string, eID3: string) {
        const val1 = document.getElementById(eID1);
        const val2 = document.getElementById(eID2);
        const val3 = document.getElementById(eID3);

        if (val1 && val2 && val3){ // parse innerText as an int
            const pNum1 = parseInt(val1.innerText, 10);
            const pNum2 = parseInt(val2.innerText, 10);
            const pNum3 = parseInt(val3.innerText, 10);

            return {
                sum: pNum1 + pNum2 + pNum3,
                e1: eID1,
                e2: eID2,
                e3: eID3
            }
        }
        else{
            return {
                sum: 0,
                e1: eID1,
                e2: eID2,
                e3: eID3
            };
        }
    }

    function getColRow(elementID: string) {
        switch (elementID) {
            case 'tCol1':
                return  getIdValues('circle1', 'circle4', 'circle7');
            case 'tCol2':
                return  getIdValues('circle2', 'circle5', 'circle8');
            case 'tCol3':
                return  getIdValues('circle3', 'circle6', 'circle9');
            case 'lRow1':
                return  getIdValues('circle1', 'circle2', 'circle3');
            case 'lRow2':
                return  getIdValues('circle4', 'circle5', 'circle6');
            case 'lRow3':
                return  getIdValues('circle7', 'circle8', 'circle9');
        }
    }

    function getArrowPressed(event: React.MouseEvent<HTMLButtonElement>) {
        const elementId = event.currentTarget.id;
        const topArrows = document.querySelectorAll<HTMLButtonElement>('.top-arrow-buttons');
        const leftArrows = document.querySelectorAll<HTMLButtonElement>('.left-arrow-buttons');

        const elementObj = getColRow(elementId);
        const wonAmount = GetMgpWon(elementObj.sum);
        document.getElementById('score-screen').innerHTML = `${wonAmount} MGP Won`;

        if (wonAmount){
            totalMGP(wonAmount);
        }

        disableButtons(topArrows);
        disableButtons(leftArrows);
    }

    return (
        <div className='board-container'>
            <button id='start-button' onClick={startGame}>START</button>
            <button id='reset-button' onClick={resetGame}>RESET</button>
            <span id='score-screen'></span>
            <div id='board'>
                <div className='top-board'>
                    <div className='arrow'>
                        <button className='top-arrow-buttons' id='tCol1' onClick={getArrowPressed}>↓</button>
                    </div>
                    <div className='arrow'>
                        <button className='top-arrow-buttons' id='tCol2' onClick={getArrowPressed}>↓</button>
                    </div>
                    <div className='arrow'>
                        <button className='top-arrow-buttons' id='tCol3' onClick={getArrowPressed}>↓</button>
                    </div>
                </div>
                <div className='bottom-board'>
                    <div className='left-arrows'>
                        <div className='arrow-left'>
                            <button className='left-arrow-buttons' id='lRow1' onClick={getArrowPressed}>→</button>
                        </div>
                        <div className='arrow-left'>
                            <button className='left-arrow-buttons' id='lRow2' onClick={getArrowPressed}>→</button>
                        </div>
                        <div className='arrow-left'>
                            <button className='left-arrow-buttons' id='lRow3' onClick={getArrowPressed}>→</button>
                        </div>
                    </div>
                    <div className='cactpot-board'>
                        <div className='circle' id='circle-container1'>
                            <button className='circle-button' id='circle1' onClick={handleClick}></button>
                        </div>
                        <div className='circle' id='circle-container2'>
                            <button className='circle-button' id='circle2' onClick={handleClick}></button>
                        </div>
                        <div className='circle' id='circle-container3'>
                            <button className='circle-button' id='circle3' onClick={handleClick}></button>
                        </div>
                        <div className='circle' id='circle-container4'>
                            <button className='circle-button' id='circle4' onClick={handleClick}></button>
                        </div>
                        <div className='circle' id='circle-container5'>
                            <button className='circle-button' id='circle5' onClick={handleClick}></button>
                        </div>
                        <div className='circle' id='circle-container6'>
                            <button className='circle-button' id='circle6' onClick={handleClick}></button>
                        </div>
                        <div className='circle' id='circle-container7'>
                            <button className='circle-button' id='circle7' onClick={handleClick}></button>
                        </div>
                        <div className='circle' id='circle-container8'>
                            <button className='circle-button' id='circle8' onClick={handleClick}></button>
                        </div>
                        <div className='circle' id='circle-container9'>
                            <button className='circle-button' id='circle9' onClick={handleClick}></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CactpotBoard

