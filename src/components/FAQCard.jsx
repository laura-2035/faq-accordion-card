import React from 'react'
import FAQCardItem from './FAQCardItem.jsx'
import './FAQCard.scss'
import {ReactComponent as MainIMG} from '../assets/img/illustration-woman-online-desktop.svg'
import {ReactComponent as MainIMGMobile} from '../assets/img/illustration-woman-online-mobile.svg'
import {ReactComponent as BoxIMG} from '../assets/img/illustration-box-desktop.svg'

const questionAnswer = [
    {
      question: 'How many team members can I invite?',
      answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    },
    {
      question: 'What is the maximum file upload size?',
      answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
    },
    {
      question: 'How do I reset my password?',
      answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes! Send us a message and we’ll process your request no questions asked.'
    },
    {
      question: 'Do you provide additional support?',
      answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
    }
  ]
export default props => {
    const cardList = questionAnswer.map((faqList, key) =>{
        return <FAQCardItem key={key} id={key} faqquestion={faqList.question} faqanswer={faqList.answer}></FAQCardItem>
    })
    return (
    <div className="faq-wrapper">
        <div className="faq-img-wrapper">
          <BoxIMG></BoxIMG>
          <MainIMG></MainIMG>
        </div>
       <div className="faq-list">
       <h1>FAQ</h1>
            {cardList}
        </div>
    </div>
    )
}