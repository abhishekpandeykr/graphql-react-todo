import React from 'react';
import { Typography } from '@material-ui/core';

const HeaderComponent = () => (
  <div style={HeaderStyle}>
    <Typography variant="h5" component="h2">
      To-Do Application
    </Typography>
  </div>
);


const HeaderStyle = {
  height: '100%',
  width: '100%',
  background: '#6562e2',
  padding: '10px',
  margin:'auto'
}

export default HeaderComponent;

