import React from 'react'
import './FAQCardItem.scss'
import arrowDown from '../assets/img/icon-arrow-down.svg'
export default props => {
    
    return (
        <div className="faq-item">
            <input type="checkbox" id={props.id} className="toggle"/>
            <label className="question" htmlFor={props.id}>{props.faqquestion}
            <div className="arrow-icon"><img src={arrowDown}></img></div>
            </label>
            <div class="answer"><p>{props.faqanswer}</p></div>
        </div>
    )
}