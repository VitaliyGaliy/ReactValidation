import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../../actions/UserActions'
import checkUser from './checkUser'
import LoginForm from './LoginForm'

export class LoginPage extends Component {

  state = {
    user: '',
    password: '',
    errors: {}
  }

  handleChange(e) {
    if(this.state.errors[e.target.name]){
      let errors = Object.assign({}, this.state.errors)
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  userSubmit(e) {
    e.preventDefault()
    this.validateInput(e)

  }

  validateInput(e){
    let errors = {};
    if (this.state.user === '') errors.user = 'Поле не должно быть пустым'
    if (this.state.password === '') errors.password = 'Поле не должно быть пустым'
    this.setState({ errors })
    const isValid = Object.keys(errors).length === 0
    const saveUserInLS = this.props.actions.saveUserInLS
    const login = this.props.actions.login;
    const storeUsers = this.props.storeUsers;
    const user = e.target.elements[0].value
    const password = e.target.elements[1].value

    if (isValid) {
      checkUser(user, storeUsers, saveUserInLS, password, login)
  }
}

  userLogout() {
    this.props.actions.logout()
    this.setState({
      user: '',
      password: '',
      errors: {}
    })
  }
  render() {
    return (
      <LoginForm
        userName={this.props.login.user}
        login={this.props.login}
        value={this.state}
        handleChange={this.handleChange.bind(this)}
        userSubmit={this.userSubmit.bind(this)}
        userLogout={this.userLogout.bind(this)}
        {...this.state}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    storeUsers: state.user,
    login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
