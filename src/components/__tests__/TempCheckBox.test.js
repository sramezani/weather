import React from 'react';
import ReactDOM from 'react-dom';
import TempCheckBox from '../TempCheckBox';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

jest.setTimeout(15000);

test('TempCheckBox', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TempCheckBox />, div);
});

test('renders TempCheckBox with Fahrenheit text', () => {
    const { getByText } = render(<TempCheckBox />);
    const linkElement = getByText(/Fahrenheit/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders TempCheckBox with Fahrenheit text', () => {
    const { getByText } = render(<TempCheckBox />);
    const linkElement = getByText(/Celsius/i);
    expect(linkElement).toBeInTheDocument();
});

describe('TempCheckBox Button', () => {
    it('should be defined', () => {
        expect(TempCheckBox).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(<TempCheckBox name="button test" />);
        expect(tree).toMatchSnapshot();
    });
});
