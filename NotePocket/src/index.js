//inport modules and style
 import "./styles/style.scss";
 import * as App from './js/appControler';

// init App
App;

// HMR 
if (module.hot) {
  module.hot.accept();
}
