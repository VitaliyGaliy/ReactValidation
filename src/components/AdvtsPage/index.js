import React, { Component, PropTypes } from 'react'
import SingleAdvt from './SingleAdvt'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as adAction from '../../actions/adAction'
import advertisment from '../../modules/selectors'

const propTypes = {
  advt: PropTypes.object,
  login: PropTypes.object,
  actions: PropTypes.object
}

class AdvtsPage extends Component {
  componentWillMount() {
    this.props.actions.getAdvtsInLS()
  }
  render() {
    const advt = this.props.advt;
    const login = this.props.login
    return (
            advt ? <SingleAdvt
              deleteItemInLS={this.props.actions.deleteItemInLS.bind(this)}
              login={login}
              {...advt}
            /> :
            null
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    advt: advertisment.getAdvt({...state, ...props}),
    isAuth: state.login.isAuthenticated,
    login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(adAction, dispatch)
  }
}

AdvtsPage.propTypes = propTypes

export default connect(mapStateToProps, mapDispatchToProps)(AdvtsPage)
