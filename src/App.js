import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import RegisterContext from './context/RegisterContext'

import Home from './components/Home'

import Register from './components/Register'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
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

// Replace your code here

class App extends Component {
  state = {
    name: '',
    topicType: 'Arts and Culture',
    isRegistered: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  toggleRegister = () => {
    this.setState(prevState => ({isRegistered: !prevState.isRegistered}))
  }

  getErrorMsg = message => {
    this.setState({errorMsg: message, showErrorMsg: true})
  }

  getName = name => {
    this.setState({name})
  }

  getTopic = topic => {
    this.setState({topicType: topic})
  }

  render() {
    const {name, topicType, isRegistered, errorMsg, showErrorMsg} = this.state
    console.log(name, topicType)
    return (
      <RegisterContext.Provider
        value={{
          name,
          topicType,
          isRegistered,
          toggleRegister: this.toggleRegister,
          getTopic: this.getTopic,
          getName: this.getName,
          errorMsg,
          showErrorMsg,
          getErrorMsg: this.getErrorMsg,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
