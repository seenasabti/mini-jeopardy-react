import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Clue from './index';

describe('successfully loads', () => {
  test('renders correctly', () => {
    const {getByText} = render(<Clue answer='answer 1' value='100' question='question 1' />);
    const questionElement = getByText('question 1');
    const valueElement = getByText('100');

    expect(questionElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

  test('user clicks on clue', () => {
    const {getByText, getByTestId} = render(<Clue answer='answer 1' value='100' question='question 1' />);

    expect(getByText('question 1')).toHaveClass('hidden');
    expect(getByText('100')).not.toHaveClass('hidden');
    expect(getByTestId('clue-answer')).toHaveClass('hidden');

    fireEvent.click(getByText('100'));

    expect(getByText('question 1')).not.toHaveClass('hidden');
    expect(getByTestId('clue-answer')).not.toHaveClass('hidden');
    expect(getByText('100')).toHaveClass('hidden');
  });
});