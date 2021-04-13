import React, { Fragment } from 'react'
import './FAQCardItem.scss'
export default props => {
    
    return (
        <Fragment>
            <input type="checkbox" id={props.id} className="question-input"/>
            <label className="question" htmlFor={props.id}>{props.faqquestion}
                <i src="./assets/img/icon-arrow-down.svg"></i>
            </label>
        </Fragment>
    )
}