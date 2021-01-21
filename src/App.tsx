import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      {/* Wait for all the data before loading the app */}
      <Suspense fallback={null}>
        <div className="App">
          <Switch>
            <Route exact path="/" title="Home" component={HomePage} />
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
