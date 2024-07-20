import { render, screen } from '@testing-library/react';
import { Input } from './index';

describe('Input component', () => {
  test('renders input field with tooltip when tooltip prop is provided', () => {
    const tooltip = 'This is a tooltip';
    render(<Input label="testInput" tooltip={tooltip} />);

    const input = screen.getByLabelText('testInput');
    const tooltipElement = screen.getByText(tooltip);

    expect(input).toBeInTheDocument();
    expect(tooltipElement).toBeInTheDocument();
    expect(tooltipElement).toBeVisible();
  });

  test('does not render tooltip when tooltip prop is not provided', () => {
    render(<Input label="testInput" />);

    const tooltipElement = screen.queryByText('This is a tooltip');

    expect(tooltipElement).toBeNull();
  });

  test('tooltip is hidden when mouse leaves the input field', () => {
    const tooltip = 'This is a tooltip';
    render(<Input label="testInput" tooltip={tooltip} />);

    const input = screen.getByLabelText('testInput');
    const tooltipElement = screen.getByText(tooltip);

    expect(tooltipElement).toBeVisible();

    fireEvent.mouseLeave(input);

    expect(tooltipElement).not.toBeVisible();
  });

  test('tooltip is shown when mouse hovers over the input field', () => {
    const tooltip = 'This is a tooltip';
    render(<Input label="testInput" tooltip={tooltip} />);

    const input = screen.getByLabelText('testInput');
    const tooltipElement = screen.getByText(tooltip);

    expect(tooltipElement).not.toBeVisible();

    fireEvent.mouseEnter(input);

    expect(tooltipElement).toBeVisible();
  });

  test('tooltip is shown when mouse hovers over the tooltip icon', () => {
    const tooltip = 'This is a tooltip';
    render(<Input label="testInput" tooltip={tooltip} />);

    const tooltipIcon = screen.getByTitle('Help');
    const tooltipElement = screen.getByText(tooltip);

    expect(tooltipElement).not.toBeVisible();

    fireEvent.mouseEnter(tooltipIcon);

    expect(tooltipElement).toBeVisible();
  });
});