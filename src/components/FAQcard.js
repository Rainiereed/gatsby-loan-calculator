import * as React from 'react'

import { card } from './FAQcard.module.css'

const FAQcard = ({ item, index }) => {
    const [showAnswer, setShowAnswer] = React.useState(false)

    function toggleHandler() {
        setShowAnswer(!showAnswer)
    }

    return (
        <div className={card}>
            <p key={item.id}>{item.attributes.questions}</p>
            {showAnswer && <p key={item.id}>{item.attributes.answers}</p>}
            <button onClick={toggleHandler}>Answer</button>
        </div>
    )
}

export default FAQcard