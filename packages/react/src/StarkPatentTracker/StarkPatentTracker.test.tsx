import {render} from '@testing-library/react'
import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

describe('StarkPatentTracker', () => {
  it('renders', () => {
    const patent = {id: '1234', title: 'Patent Title'}
    const {container} = render(<StarkPatentTracker patents={[patent]} />)
    expect(container).toHaveTextContent(patent.title)
    expect(container).toHaveTextContent(patent.id)
  })
})
