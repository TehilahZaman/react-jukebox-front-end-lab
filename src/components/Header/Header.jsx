import { Link } from "react-router";

export default function Header(props) {
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>;
}

/*
Done: 

1. install: npm i react-router
2. import in main.jsx:   import { BrowserRouter } from 'react-router';
3. added: <BrowserRouter> around <App/> 
4. import: {Link} in file of use 
5. create the links
6. import the routes: import { Route, Routes } from 'react-router';
7. creates the routes (app)
*/
