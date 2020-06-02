import React from 'react';
import { render, screen, fireEvent, waitForElement, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import IDOCPage from './components/IDOCPage/IDOCPage'

test('user must enter IDOC number', async () => {
  render(<IDOCPage />);
  
  expect(screen.getByText("View Eligibility")).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button'))
  
  await waitForElement(() => screen.getByText('is required', {exact: false}))
  expect(screen.getByText('is required', {exact: false})).toBeInTheDocument()
});
