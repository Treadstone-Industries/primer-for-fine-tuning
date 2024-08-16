import {render} from '@testing-library/react'
import React from 'react'
import AmortizationTable from './AmortizationTable'

describe('AmortizationTable', () => {
  it('renders', () => {
    const props = {
      durationInYears: 1,
      monthlyPayment: 100,
      principal: 1000,
      ratePercent: 3.125,
    }

    const {container} = render(
      <AmortizationTable durationInYears={1} monthlyPayment={100} principal={1000} ratePercent={3.125} />,
    )

    expect(container).toHaveTextContent(props.durationInYears.toString())
    expect(container).toHaveTextContent(props.monthlyPayment.toString())
    expect(container).toHaveTextContent(props.principal.toString())
    expect(container).toHaveTextContent(props.ratePercent.toString())
  })
})
