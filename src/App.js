import React from 'react';
import { appStore } from './redux/store';
import { Provider } from 'react-redux';

import Home from './containers/Home';

function App() {
    return (
        <Provider store={appStore}>
            <Home />
        </Provider>
    );
}

export default App;
