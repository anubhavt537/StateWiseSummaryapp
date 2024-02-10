// DetailPage.js
import React from 'react';

function DetailPage(props) {
  // Access data from props.location.state
  const { data } = props.location.state;

  return (
    <div>
      <h1>Detail Page</h1>
      {/* Display data as needed */}
    </div>
  );
}

export default DetailPage;
