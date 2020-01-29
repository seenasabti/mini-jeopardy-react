import React from 'react';
import {render, waitForElement} from '@testing-library/react';
import Main from './index';
import Data from "../../services/data";

jest.mock("../../services/data");

describe('successfully loads', () => {

  const data = [
    {
      "id": 1,
      "answer": "answer 1",
      "question": "question 1",
      "value": 100,
      "invalid_count": null,
    },
    {
      "id": 2,
      "answer": "answer 2",
      "question": "question 2",
      "value": 300,
      "invalid_count": null,
    },
    {
      "id": 3,
      "answer": "answer 3",
      "question": "question 3",
      "value": 200,
      "invalid_count": null,
    },
    {
      "id": 4,
      "answer": "answer 4",
      "question": "question 4",
      "value": 100,
      "invalid_count": null,
    },
    {
      "id": 5,
      "answer": "answer 5",
      "question": "question 5",
      "value": 500,
      "invalid_count": null,
    },
    {
      "id": 6,
      "answer": "answer 6",
      "question": "question 6",
      "value": null,
      "invalid_count": null,
    },
    {
      "id": 7,
      "answer": "answer 7",
      "question": "question 7",
      "value": 200,
      "invalid_count": 1,
    }
  ];

  beforeEach(()=>{
    Data.mockImplementation(() => {
      return {
        get: async () => {
          return await new Promise(resolve => {resolve({success: true, data: data})})
        },
      };
    });
  })

  test('loads header', () => {
    const {getByText} = render(<Main/>);
    const containerElement = getByText('Category: Science!');
    expect(containerElement).toBeInTheDocument();
  });

  test('loads clues successfully', async () => {
    const {findAllByTestId} = render(<Main/>);

    const clueElements = await waitForElement(() =>
        findAllByTestId('clue')
    );

    const clueValueElements = await waitForElement(() =>
        findAllByTestId('clue-value')
    );

    const clueValues = clueValueElements.map(value => value.innerHTML);

    expect(clueElements).toHaveLength(5);
    expect(clueValues).not.toContain('');
    expect(isAscending(clueValues)).toBe(true);
  });
});

describe('fails to load', () => {
  test('fails to load clues', async () => {
    Data.mockImplementation(() => {
      return {
        get: async () => {
          return await new Promise(resolve => {resolve({success: false, data: []})})
        },
      };
    });
    const {findByText} = render(<Main/>);
    const fail = await waitForElement(() =>
        findByText('Oops! Something went wrong :(')
    );
    expect(fail).toBeInTheDocument()
  });
});

function isAscending(arr) {
  return arr.every((x, i) => {
    return i === 0 || x >= arr[i - 1];
  });
}