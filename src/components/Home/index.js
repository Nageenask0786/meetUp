import {Component} from 'react'

import {Link} from 'react-router-dom'

import Header from '../Header'

import {
  HomeContainer,
  Heading,
  Description,
  RegisterButton,
  Image,
} from './styledComponents'
import RegisterContext from '../../context/RegisterContext'

class Home extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {isRegistered, name, topicType} = value
          const FinalView = isRegistered ? (
            <HomeContainer>
              <Heading> Hello {name}</Heading>
              <Description>Welcome to {topicType}</Description>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          ) : (
            <HomeContainer>
              <Heading>Welcome to MeetUp</Heading>
              <Description>Please register for the topic.</Description>
              <Link to="/register">
                <RegisterButton type="button">Register</RegisterButton>
              </Link>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          )

          return (
            <>
              <Header />
              {FinalView}
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Home
