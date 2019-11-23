import React from "react"

class Ball extends React.Component {
    constructor() {
        super()
        this.state = {
            answers: ['It is certain', 'Without a doubt', 'You may rely on it', 'Yes definitely', 'It is decidedly so', 'As I see it, yes', 'Most likely', 'Yes', 'Outlook good', 'Signs point to yes', 'Reply hazy try again', 'Better not tell you now', 'Ask again later', 'Cannot predict now', 'Concentrate and ask again', 'Don’t count on it', 'Outlook not so good', 'My sources say no', 'Very doubtful', 'My reply is no'],
            currentAnswer: "Magic 8-Ball\nPress the spacebar"
        }
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    componentDidMount() {
        // document.addEventListener("click", this.handleClick) -> gives an answer whenever the user clicks
        document.addEventListener("keydown", this.handleKeyDown)
    }

    handleKeyDown(e) {
        if (e.keyCode !== 32) // if the user did not press the spacebar, exit the function
            return
        const index = Math.floor(Math.random() * this.state.answers.length)
        this.setState({ currentAnswer: this.state.answers[index] })
    }

    render() {
        return (
            <div className="ball">
                <h1>{this.state.currentAnswer}</h1>
            </div>
        )
    }
}

export default Ball
