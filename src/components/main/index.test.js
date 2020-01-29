import React from 'react';
import {render} from '@testing-library/react';
import Main from './index';

describe('successfully loads', () => {
  test('renders correctly', () => {
    render(<Main/>);
  });
});