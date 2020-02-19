import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 *  /**<Route path="/some/otherpage" component={SomeOtherPage} />*/

export default (
    <Route path="/" component={App} />
);