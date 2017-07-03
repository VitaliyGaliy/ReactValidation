import React, {PropTypes} from 'react';
import { withRouter, Link } from 'react-router'
import classnames from 'classnames'

const propTypes = {
  userName: PropTypes.string.isRequired,
  userSubmit: PropTypes.func.isRequired,
  userLogout: PropTypes.func.isRequired
}
const defaultProps = {
  userName: ''
}

const LoginForm = props => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
          {
            !props.login.isAuthenticated
            ?
            <form className='navbar-form navbar-right' onSubmit={props.userSubmit}>
              <div className={classnames('form-group validationForm', { 'has-error': !!props.errors.user})}>
                <label htmlFor='name'>Login:</label>
                <input className='form-control validationFormControl'
                       type='text'
                       placeholder='User'
                       name='user'
                       value={props.value.user}
                       onChange={props.handleChange}
                     />{' '}
              </div>
              <div className={classnames('form-group validationForm', { 'has-error': !!props.errors.password})}>
                <label htmlFor='pwd'>Password:</label>
              <input className='form-control validationFormControl'
                     type='text'
                     name='password'
                     placeholder='Password'
                     value={props.value.password}
                     onChange={props.handleChange}
                   />{' '}
              </div>
              <button className='btn btn-primary btnValidation' type='submit'>Войти</button>
            </form>
            :
            <div>
              { location.pathname === '/'
                ?
                <div>
                  <p className='navbar-text navbar-left'>Создать новое </p>
                <Link to='/edit'>
                    <button className='btn btn-primary navbar-btn navbar-left btnValidation' type='Logout' >
                      Объявление
                    </button>
                  </Link>
                </div>
                :
                null
              }

              <button className='btn btn-primary navbar-btn navbar-right btnValidation' type='Logout' onClick={::props.userLogout}>
                Выйти
              </button>
              <p className='navbar-text navbar-right'>Вы вошли как <strong>{props.userName}</strong></p>
            </div>
          }
          </div>
        </nav>
  );
}
LoginForm.propTypes = propTypes
LoginForm.defaultProps = defaultProps

export default withRouter(LoginForm)
