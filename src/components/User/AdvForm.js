import React, {PropTypes} from 'react';
import classnames from 'classnames'

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

const AdvForm = props => (
    <div className='row'>
      <div className='col-md-6 col-md-offset-3'>
          <form onSubmit={props.onSubmit}>
            <div className={classnames('form-group ', { 'has-error': !!props.errors.title})}>
              <label htmlFor='exampleTextarea'>Введите заголовок объявления</label>
              <input className='form-control'
                     name='title'
                     type='text'
                     value={props.value.title}
                     onChange={props.handleChange}
              />
            <span>{props.errors.title}</span>
            </div>
            <div className={classnames('form-group ', { 'has-error': !!props.errors.text})}>
              <label htmlFor='exampleTextarea'>Введите текст объявления</label>
            <textarea className='form-control'
                      id='exampleTextarea'
                      rows='10'
                      name='text'
                      type='text'
                      value={props.value.text}
                      onChange={props.handleChange}>
            </textarea>
            </div>
          <button className='btn btn-primary btn-lg pull-right adButton' type='submit'>Разместить</button>
          </form>
      </div>
    </div>
  )

AdvForm.propTypes = propTypes

export default AdvForm
