import React from 'react';
import {render} from '@testing-library/react';
import Clue from './index';

describe('successfully loads', () => {
  test('renders correctly', () => {
    render(<Clue/>);
  });
});