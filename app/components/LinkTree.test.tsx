import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LinkTree from './LinkTree'

describe('LinkTree Component', () => {
  const mockLinks = [
    { id: 1, text: 'Link 1', url: 'https://example.com/1' },
    { id: 2, text: 'Link 2', url: 'https://example.com/2' },
  ];

  it('renders the correct number of links', () => {
    render(<LinkTree links={mockLinks} />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(mockLinks.length)
  })

  it('renders link text correctly', () => {
    render(<LinkTree links={mockLinks} />)
    expect(screen.getByText('Link 1')).toBeInTheDocument()
    expect(screen.getByText('Link 2')).toBeInTheDocument()
  })

  it('renders correct attributes for links', () => {
    render(<LinkTree links={mockLinks} />)
    const link1 = screen.getByRole('link', { name: 'Link 1' })
    
    expect(link1).toHaveAttribute('href', 'https://example.com/1')
    expect(link1).toHaveAttribute('target', '_blank')
    expect(link1).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
