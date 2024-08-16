import StarkPatentTracker from '../StarkPatentTracker'
import type {Meta, StoryFn} from '@storybook/react'
import React from 'react'
import type {ComponentProps} from '../utils/types'

export default {
  title: 'Components/StarkPatentTracker',
  component: StarkPatentTracker,
} as Meta<ComponentProps<typeof StarkPatentTracker>>

export const Playground: StoryFn<ComponentProps<typeof StarkPatentTracker>> = args => <StarkPatentTracker {...args} />

Playground.args = {
  patents: [{id: '1234', title: 'Patent Title'}],
}

export const Default = () => (
  <StarkPatentTracker
    patents={[
      {id: '1234', title: 'Patent Title'},
      {id: '5678', title: 'Another Patent Title'},
    ]}
  />
)
