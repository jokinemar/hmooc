import { useState } from 'react'

const Statistics = (props) => {
    if (props.total > 0) {

    return (
        <div>
            <h1>statistics</h1>
            <StatisticLine name='good' value={props.good} />
            <StatisticLine name='neutral' value={props.neutral} />
            <StatisticLine name='bad' value={props.bad} />
            <StatisticLine name='all' value={props.good + props.neutral + props.bad} />
            <StatisticLine name='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
            <StatisticLine name='positive' value={props.good / (props.good + props.neutral + props.bad) * 100 + ' %'}/>
        </div>
    )
    }
    return (
        <div>
            <p>No feedback given</p>
        </div>
    )
}

const StatisticLine = ({name, value}) => <p>{name} {value}</p>

const Button = ({onClick, name}) => <button onClick={onClick}>{name}</button>


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
            <Button onClick={handleGoodClick} name='good' />
            <Button onClick={handleNeutralClick} name='neutral' />
            <Button onClick={handleBadClick} name='bad' />
            <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
        </div>
    )
}

export default App