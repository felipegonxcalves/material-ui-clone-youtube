import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

import Home from './Home';

// const useStyles = makeStyles({
//   root: {
    
//   },
// });

function App() {

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5',
      },
    },
  });

  // const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>    
  );
}

export default App;
