import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import logo from '../App/logo.svg';

const GridCardView = (props) => {
  const { item: { title, details, picId } } = props;

  return (
    <div className="card">
      <div className="container">
        <img src= {`https://d1xncxi4z6qosf.cloudfront.net/${picId}/${picId}.0000000.jpg`} alt="Movie" />
        {//<img src={logo} alt="Movie" />
        }
        {title}
        {details}
       
      </div>
    </div>
  );
};

GridCardView.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.string,
    picId: PropTypes.string,
  }),
};

GridCardView.defaultProps = {
  item: {
    title: 'Default Title',
    details: 'Default Details',
  },
};

export default GridCardView;
