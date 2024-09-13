import React from 'react'
import EachPageHead from '../../components/EachPageHead'
import { contactElements } from '../../data'
import ContactList from '../../components/ContactList'
import ContactForm from '../../components/ContactForm'
import styled from 'styled-components'

const pageName = 'Contact Us'

const Section = styled.section`
  overflow: hidden;
  position: relative;
  z-index: 1;
  padding-bottom: 120px;
  padding-top: 120px;

  @media (max-width: 767px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }
`

const InfosContainer = styled.div`
  padding-bottom: 120px;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 575px;
  border-radius: 10px;
  border: 0;
`

function Contact() {
  return (
    <React.Fragment>
      <EachPageHead pageName={pageName} />

      <Section>
        <div className="container">
          <InfosContainer>
            <div className="row g-4">
              {contactElements.map(({ id, icone, title, text }) => (
                <ContactList id={id} icone={icone} title={title} text={text} />
              ))}
            </div>
          </InfosContainer>

          <div className="row g-5">
            <div className="col-lg-5 order-2 order-lg-1">
              <div>
                <Iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.8398865692!2d-0.2664030556096407!3d51.528739805074714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1715323253262!5m2!1sen!2sbd"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></Iframe>
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Contact
