import AvengersList from '../AvengersList'
import type {Meta} from '@storybook/react'
import React from 'react'
import type {ComponentProps} from '../utils/types'

export default {
  title: 'Components/AvengersList/Features',
  component: AvengersList,
} as Meta<ComponentProps<typeof AvengersList>>

export const All = () => <AvengersList />

export const OnlyOne = () => <AvengersList count={1} />
