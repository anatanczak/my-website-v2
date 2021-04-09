import { BrowserRouter } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage/PrivacyPolicyPage';
import ProjectPage from './Pages/ProjectPage/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      {/* Wait for all the data before loading the app */}
      <Suspense fallback={null}>
        <div className="App">
          <Switch>
            <Route exact path="/" title="Home" component={HomePage} />

            <Route
              exact
              path="/portfolio/projects/:id"
              title="FullProject"
              component={ProjectPage}
            />
            <Route
              path="/portfolio"
              title="Portfolio"
              component={PortfolioPage}
            />
            <Route path="/contact" title="Contact" component={ContactPage} />
            <Route
              exact
              path="/privacypolicy"
              title="PrivacyPolicy"
              component={PrivacyPolicyPage}
            />

            <Route component={HomePage} />
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
