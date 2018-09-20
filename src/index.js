import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
import { Route,HashRouter as Router,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store';


//组件
import App from './App';
import WeChat from './Components/Chat';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/chat/:id" component={WeChat} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
