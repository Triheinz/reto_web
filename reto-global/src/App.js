import React from "react";
import {Route, Switch} from 'react-router';
import AllPhones from '../src/pages/AllPhones';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={AllPhones} />
      </Switch>

    </div>
  );
}

export default App;
