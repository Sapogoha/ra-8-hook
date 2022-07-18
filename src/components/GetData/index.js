import React from 'react';
import PropTypes from 'prop-types';

import useJsonFetch from '../../hooks/useJsonFetch';

function GetData({ endpoint }) {
  const [data, error, loading] = useJsonFetch(
    `${process.env.REACT_APP_URL}${endpoint}`
  );
  return (
    <div>
      {endpoint}: {(loading && 'Loading...') || (data && data.status) || error}
    </div>
  );
}

GetData.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default GetData;
