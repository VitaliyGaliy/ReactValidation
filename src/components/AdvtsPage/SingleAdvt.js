import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  createdBy: PropTypes.object.isRequired
}

const SingleAdvts = (props) => {
  return (
    <div className='row'>
      <div className='col-md-6 col-md-offset-3'>
        <div className='jumbotron' style={{overflow: 'auto', padding: '20px'}}>
          <h3>{props.title}</h3>
          <div className='textWrapper'>
            <p>{props.text}</p>
          </div>
          <div>
            <h6>{`Создано: ${props.date}`}</h6>
          <h6>{`Автор: ${props.createdBy.user}`}</h6>
          </div>
          {
            props.login.isAuthenticated && props.login.user === props.createdBy.user
            ?
            <div>
              <Link to={`/edit/${props.id}`}><button className='btn btn-primary btn-md pull-left ' type='submit'>Редактировать</button></Link>
              <button className='btn btn-primary btn-md pull-right ' type='submit' onClick={() => props.deleteItemInLS(props.id)}>Удалить</button>
            </div>
            :
            null
          }
        </div>
      </div>
    </div>
  );
}

SingleAdvts.propTypes = propTypes

export default SingleAdvts
