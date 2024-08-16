import {render} from '@testing-library/react'
import React from 'react'
import AvengersList from './AvengersList'

describe('AvengersList', () => {
  it('renders', () => {
    const {container} = render(<AvengersList />)
    expect(container).toHaveTextContent('Iron Man')
    expect(container).toHaveTextContent('Tony Stark')
    expect(container).toHaveTextContent('flight')

    expect(container).toHaveTextContent('Captain America')
    expect(container).toHaveTextContent('Steve Rogers')
    expect(container).toHaveTextContent('super strength')
  })

  it('renders with count', () => {
    const {container} = render(<AvengersList count={1} />)
    expect(container).toHaveTextContent('Iron Man')
    expect(container).not.toHaveTextContent('Captain America')
  })
})
