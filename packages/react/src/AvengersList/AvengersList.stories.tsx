import AvengersList from '../AvengersList'
import type {Meta, StoryFn} from '@storybook/react'
import React from 'react'
import type {ComponentProps} from '../utils/types'

export default {
  title: 'Components/AvengersList',
  component: AvengersList,
} as Meta<ComponentProps<typeof AvengersList>>

export const Playground: StoryFn<ComponentProps<typeof AvengersList>> = args => <AvengersList {...args} />

Playground.argTypes = {
  count: {
    control: {
      type: 'number',
    },
  },
}

export const Default = () => <AvengersList />
