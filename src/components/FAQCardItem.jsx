import React, { Fragment } from 'react'
import './FAQCardItem.scss'
export default props => {
    
    return (
        <Fragment>
            <input type="checkbox" id={props.id} className="question-input"/>
            <label className="question" htmlFor={props.id}>{props.faqquestion}
            </label>
            <div><p>{props.faqanswer}</p></div>
        </Fragment>
    )
}