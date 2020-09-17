import 'https://unpkg.com/react@16/umd/react.development.js';
import 'https://unpkg.com/react-dom@16/umd/react-dom.development.js';

const HelloWorld = () => React.createElement('h1', null, 'Hello, programmers');

const target = document.querySelector('main');
const app = React.createElement(HelloWorld, null);
ReactDOM.render(app, target);
