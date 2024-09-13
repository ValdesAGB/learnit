import React from 'react'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'
import styled from 'styled-components'
import { underline } from '../data'
import { Link } from 'react-router-dom'

const HeadSection = styled.div`
  margin-bottom: 40px;

  h5 {
    color: ${colors.primary_color};
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    font-family: ${polices.spartan};
  }

  h2 {
    text-transform: capitalize;
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
    margin: 0;
    padding: 0;
    color: ${colors.secondary_color};
    font-family: ${polices.spartan};

    @media (max-width: 425px) {
      font-size: 30px;
      font-weight: 600;
      line-height: 38px;
    }

    span {
      color: ${colors.secondary_color};
      position: relative;
      z-index: 1;
      display: inline-block;

      img {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        vertical-align: middle;
      }
    }
  }

  p {
    margin-top: 20px;
    margin: 0;
    padding: 0;
    line-height: 28px;
    font-size: 16px;
  }
`
const Label = styled.label`
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 10px;
  color: ${colors.heading_color};
  display: inline-block;
`

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid ${colors.border};
  margin-bottom: 25px;
  border-radius: 4px;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid ${colors.border};
  margin-bottom: 25px;
  border-radius: 4px;
  height: 200px;
  resize: none;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`

const Button = styled(Link)`
  padding: 15px 25px;
  background-color: ${colors.primary_color}; /* Couleur de fond initiale */
  font-weight: 600;
  line-height: 18px;
  color: ${colors.white};
  position: relative;
  font-family: ${polices.spartan};
  border-radius: 8px;
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  text-transform: capitalize;
  margin-top: 50px;
  text-decoration: none;
  transition: color 0.3s ease;

  i {
    font-weight: 300;
    margin-left: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    left: -100%; /* Commence en dehors du bouton */
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.secondary_color}; /* Couleur de fond au survol */
    z-index: -1;
    transition: left 0.5s ease;
  }

  &:hover {
    color: ${colors.white};

    &::after {
      left: 0; /* Se déplace pour couvrir le bouton */
    }
  }
`
function ContactForm() {
  return (
    <React.Fragment>
      <div>
        <HeadSection>
          <h5>Contact US</h5>
          <h2>
            Get In{' '}
            <span>
              Touch
              <img src={underline} alt="underline" />
            </span>
          </h2>
        </HeadSection>

        <form>
          <div className="row g-4">
            <div className="col-6">
              <Label for="name">Your Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="col-6">
              <Label for="mail">Your Email</Label>
              <Input id="mail" placeholder="Your Email" />
            </div>
          </div>

          <Label for="review">Your Review</Label>
          <Textarea name="review"></Textarea>

          <Button href="#">
            Send Now
            <i className="bi bi-arrow-right" />
          </Button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default ContactForm
