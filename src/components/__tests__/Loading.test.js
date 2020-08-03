import React from 'react';
import ReactDOM from 'react-dom';
import Loading from '../Loading';

import { render } from '@testing-library/react';

jest.setTimeout(15000);

test('Loading', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading />, div);
});
