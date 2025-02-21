import './AboutStyles.css'

function About() {
    return (
        <div className='container h-100 d-flex justify-content-center align-items-center'>
            <div>
                <h1 className='text-center about-title'>How this app came to be</h1>
                <div className='about-text text-center'>
                    This project was made with React and TypeScript. I made this project
                    because I enjoy playing the MMORPG Final Fantasy XIV and the mini games they have within the game.
                    This idea came to me when I first started the layout of this app. A small container centered
                    within the screen would be perfect for a mini game. Thinking of what game I could create or mimic,
                    I thought of many games i've played and looked at the more recent ones I played. Eventually the
                    idea of the mini cactpot game came to mind and I set off to creating this game.
                </div>
            </div>
        </div>
    )
}

export default About;