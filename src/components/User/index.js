import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as adAction from '../../actions/adAction'
import advertisment from '../../modules/selectors'
import AdvForm from './AdvForm'
import { v4 } from 'node-uuid'


class userPage extends Component {

  state = {
    id: this.props.advts ? this.props.advts.id : '',
    title: this.props.advts ? this.props.advts.title : '',
    text: this.props.advts ? this.props.advts.text : '',
    errors: {}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.advt.id,
      title: nextProps.advt.title,
      text: nextProps.advt.text
    })
  }

  componentDidMount() {
    if(this.props.params._id){
      this.props.actions.getAdvtsInLS()
    }
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

  onSubmit(e) {
    e.preventDefault()
    this.validateInput(e)
  }

  validateInput(){
    let errors = {};
    if (this.state.title === '') errors.title = 'Поле не должно быть пустым'
    if (this.state.text === '') errors.text = 'Поле не должно быть пустым'
    this.setState({ errors })
    const isValid = Object.keys(errors).length === 0

    const dateOptions = {year: 'numeric', month: 'numeric', day: 'numeric'}
    const createdBy = this.props.login
    const { saveAdInLS, updateAdInLS } = this.props.actions
    if (isValid) {
      const { id, text, title } = this.state
      if(id){
        updateAdInLS({ id, text, title})
      } else {
      saveAdInLS({title, text, createdBy, id: v4(), date: new Date().toLocaleString('ru', dateOptions)})
    }
  }
}
  render() {
    return (
      <AdvForm
        onSubmit={this.onSubmit.bind(this)}
        value={this.state}
        handleChange={this.handleChange.bind(this)}
        {...this.state}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  if(props.params._id) {
    return {
      login: state.login.user,
      advt: advertisment.getAdvt({...state, ...props})
    }
  }
  return { advts: null }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(adAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(userPage)
