import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Answer from './index';

describe('successfully loads', () => {
  test('renders correctly', () => {
    const {getByTestId, queryByTestId} = render(<Answer answer='answer 1' />);
    const defaultAnswerElement = getByTestId('default_answer');
    const wrongAnswerElement = queryByTestId('wrong_answer');
    const correctAnswerElement = queryByTestId('correct_answer');


    expect(defaultAnswerElement).toBeInTheDocument();
    expect(wrongAnswerElement).toBe(null);
    expect(correctAnswerElement).toBe(null);
  });

  test('user answers correctly', () => {
    const {getByText, getByTestId} = render(<Answer answer='answer 1' />);
    const input = getByTestId('input');

    fireEvent.change(input, {target: { value: 'answer 1' }});
    fireEvent.click(getByText('Go!'));

    const correctAnswerElement = getByTestId('correct_answer');
    expect(correctAnswerElement).toBeInTheDocument();
  });

  test('user answers wrongly', () => {
    const {getByText, getByTestId} = render(<Answer answer='answer 1' />);
    const input = getByTestId('input');

    fireEvent.change(input, {target: { value: 'wrong answer' }});
    fireEvent.click(getByText('Go!'));

    const wrongAnswerElement = getByTestId('wrong_answer');
    expect(wrongAnswerElement).toBeInTheDocument();
  });
});