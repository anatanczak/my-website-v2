import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <BrowserRouter>
      {/* Wait for all the data before loading the app */}
      <Suspense fallback={null}>
        <div className="App">
          <Switch>
            <Route exact path="/" title="Home" component={HomePage} />
            <Route
              path="/portfolio"
              title="Portfolio"
              component={PortfolioPage}
            />
            <Route path="/contact" title="Contact" component={ContactPage} />
            <Route component={HomePage} />
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
