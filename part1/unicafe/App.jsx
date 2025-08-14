import { useState } from 'react'

const Statistics = (props) => {
    if (props.total > 0) {
    return (
        <div>
            <h1>statistics</h1>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {props.good + props.neutral + props.bad}</p>
            <p>average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p>
            <p>positive {props.good / (props.good + props.neutral + props.bad) * 100} %</p>
        </div>
    )
    }
    return (
        <div>
            <p>No feedback given</p>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
        setTotal(total + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setTotal(total + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={handleGoodClick}>good</button>
            <button onClick={handleNeutralClick}>neutral</button>
            <button onClick={handleBadClick}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
        </div>
    )
}

export default App