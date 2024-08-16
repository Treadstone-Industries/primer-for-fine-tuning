import StarkPatentTracker from '../StarkPatentTracker'
import type {Meta} from '@storybook/react'
import React from 'react'
import type {ComponentProps} from '../utils/types'

export default {
  title: 'Components/StarkPatentTracker/Features',
  component: StarkPatentTracker,
} as Meta<ComponentProps<typeof StarkPatentTracker>>

export const Populated = () => (
  <StarkPatentTracker
    patents={[
      {id: '1234', title: 'Patent Title'},
      {id: '5678', title: 'Another Patent Title'},
    ]}
  />
)

export const Empty = () => <StarkPatentTracker patents={[]} />
