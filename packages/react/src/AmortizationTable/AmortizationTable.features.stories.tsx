import AmortizationTable from '../AmortizationTable'
import type {Meta} from '@storybook/react'
import React from 'react'
import type {ComponentProps} from '../utils/types'

export default {
  title: 'Components/AmortizationTable/Features',
  component: AmortizationTable,
} as Meta<ComponentProps<typeof AmortizationTable>>

export const Default = () => (
  <AmortizationTable durationInYears={1} monthlyPayment={100} principal={1000} ratePercent={5} />
)
