import AmortizationTable from '../AmortizationTable'
import type {Meta, StoryFn} from '@storybook/react'
import React from 'react'
import type {ComponentProps} from '../utils/types'

export default {
  title: 'Components/AmortizationTable',
  component: AmortizationTable,
} as Meta<ComponentProps<typeof AmortizationTable>>

export const Playground: StoryFn<ComponentProps<typeof AmortizationTable>> = args => <AmortizationTable {...args} />

Playground.args = {
  durationInYears: 1,
  monthlyPayment: 100,
  principal: 1000,
  ratePercent: 5,
}

Playground.argTypes = {
  durationInYears: {
    control: {
      type: 'number',
      min: 0,
    },
  },
  monthlyPayment: {
    control: {
      type: 'number',
      min: 0,
    },
  },
  principal: {
    control: {
      type: 'number',
      min: 0,
    },
  },
  ratePercent: {
    control: {
      type: 'number',
      min: 0,
      max: 100,
    },
  },
}

export const Default = () => (
  <AmortizationTable durationInYears={1} monthlyPayment={100} principal={1000} ratePercent={5} />
)
