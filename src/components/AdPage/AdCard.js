import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  createdBy: PropTypes.object.isRequired
}

const AdCard = (props) => {
  return (
    <div className='row'>
      <div className='col-md-6 col-md-offset-3'>
        <Link to={`/${props.id}`}>
          <div className='thumbnail'>
            <div className='caption'>
              <h4>{props.title}</h4>
              <div className='textWrapper'>
                <p>{props.text}</p>
              </div>
              <div>
                <h6>{`Создано: ${props.date}`}</h6>
              <h6>{`Автор: ${props.createdBy.user}`}</h6>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

AdCard.propTypes = propTypes

export default AdCard
