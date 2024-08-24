// ChatComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ChatComponent from '../ChatComponent';

describe('ChatComponent', () => {
  test('renders chat icon initially', () => {
    render(<ChatComponent />);
    const chatIcon = screen.getByText('💬');
    expect(chatIcon).toBeInTheDocument();
  });

  test('opens chat window when icon is clicked', () => {
    render(<ChatComponent />);
    const chatIcon = screen.getByText('💬');
    fireEvent.click(chatIcon);
    const chatHeader = screen.getByText('Chat');
    expect(chatHeader).toBeInTheDocument();
  });

  test('closes chat window when close button is clicked', () => {
    render(<ChatComponent />);
    const chatIcon = screen.getByText('💬');
    fireEvent.click(chatIcon);
    const closeButton = screen.getByText('X');
    fireEvent.click(closeButton);
    expect(screen.queryByText('Chat')).not.toBeInTheDocument();
  });
});