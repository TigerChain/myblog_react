import React from 'react' ;
import ReactDOM from 'react-dom' ;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Main from './component/Main';


const App = () => (
  <MuiThemeProvider >
    <Main />
  </MuiThemeProvider>
);

ReactDOM.render(
<App />,
    document.getElementById('container')
);
