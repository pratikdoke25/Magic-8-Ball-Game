import React from "react"

class Ball extends React.Component {
    constructor() {
        super()
        this.state = {
            answers: null,
            currentAnswer: null
        }
    }

    render() {
        return (
            <div className="ball">
                <h1>Magic 8-Ball</h1>
                <h2>Press the <kbd>spacebar</kbd> for an answer...</h2>
            </div>
        )
    }
}

export default Ball
