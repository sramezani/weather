import React from 'react';
import ReactDOM from 'react-dom';
import Text from '../Text';

import { render } from '@testing-library/react';

jest.setTimeout(15000);

test('Text', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Text />, div);
});
