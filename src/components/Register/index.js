import {Component} from 'react'

import {
  RegisterContainer,
  ImageContainer,
  FormContainer,
  Container,
  Container2,
  Heading,
  Select,
  Label,
  Input,
  Option,
  RegisterNowButton,
} from './styledComponents'

import RegisterContext from '../../context/RegisterContext'

import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {
            toggleRegister,
            name,
            topicType,
            getName,
            getTopic,
            getErrorMsg,
            errorMsg,
            showErrorMsg,
          } = value
          const onClickRegisterNow = () => {
            toggleRegister()
          }
          const ChangeOfName = event => {
            getName(event.target.value)
          }

          const onSubmitForm = event => {
            event.preventDefault()
            if (name !== '') {
              const {history} = this.props
              history.replace('/')
            }
            getErrorMsg('Please enter your name')
          }

          const onChangeTopic = event => {
            getTopic(event.target.value)
          }

          return (
            <>
              <Header />
              <Container>
                <RegisterContainer>
                  <ImageContainer>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                      alt="website register"
                      width="90%"
                      height="80%"
                    />
                  </ImageContainer>
                  <Container2>
                    <Heading>Let us Join</Heading>
                    <FormContainer onSubmit={onSubmitForm}>
                      <Label htmlFor="name">NAME</Label>
                      <Input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={ChangeOfName}
                      />

                      <Label htmlFor="topic">TOPICS</Label>
                      <Select
                        value={topicType}
                        id="topic"
                        onChange={onChangeTopic}
                      >
                        {topicsList.map(each => (
                          <Option key={each.id} value={each.id}>
                            {each.displayText}
                          </Option>
                        ))}
                      </Select>

                      <RegisterNowButton
                        type="submit"
                        onClick={onClickRegisterNow}
                      >
                        Register Now
                      </RegisterNowButton>
                    </FormContainer>
                    {showErrorMsg && <p>{errorMsg}</p>}
                  </Container2>
                </RegisterContainer>
              </Container>
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
