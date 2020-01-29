import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import Data from "./services/data";

jest.mock("./services/data");

beforeEach(()=>{
  Data.mockImplementation(() => {
    return {
      get: async () => {
        return await new Promise(resolve => {resolve({success: true, data: []})})
      },
    };
  });
})

test('loads the app', () => {
  const {getByTestId} = render(<App/>);
  const containerElement = getByTestId('app-container');
  expect(containerElement).toBeInTheDocument();
});
