import React from 'react'
import { connect } from 'react-redux'
import { ROUTING } from '../../constants/Routing'

export default function requireAuthentication(Component) {

 class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      this.checkAuth(this.props.login.isAuthenticated)
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.login.isAuthenticated)
    }

    checkAuth(isAuthenticated) {
      if (!isAuthenticated) {
        this.props.dispatch({
          type: ROUTING,
          payload: {
            method: 'push',
            nextUrl: '/'
          }
        })
      }
    }
    render() {

      return (
        <div>
          {this.props.login.isAuthenticated === true
            ? <Component {...this.props} />
            : null
          }
        </div>
      )
    }
  }


  const mapStateToProps = (state) => {
    return {
      login: state.login
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}
