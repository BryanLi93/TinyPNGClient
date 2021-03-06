import { HashRouter, Route } from 'react-router-dom';
import home from '../view/home.js';
import menu from '../view/menu.js';

export default (
  <HashRouter>
    <div>
      <Route exact path="/" component={home} />
      <Route path="/menu" component={menu} />
    </div>
  </HashRouter>
);
