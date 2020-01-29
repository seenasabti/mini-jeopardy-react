import React from 'react';
import {render} from '@testing-library/react';
import Answer from './index';

describe('successfully loads', () => {
  test('renders correctly', () => {
    render(<Answer/>);
  });
});