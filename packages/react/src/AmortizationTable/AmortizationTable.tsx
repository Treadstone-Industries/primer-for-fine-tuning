import React from 'react'

export type AmortizationTableProps = {
  durationInYears: number
  monthlyPayment: number
  principal: number
  ratePercent: number
}

function AmortizationTable({durationInYears, monthlyPayment, principal, ratePercent}: AmortizationTableProps) {
  return <div>{JSON.stringify({durationInYears, monthlyPayment, principal, ratePercent})}</div>
}

AmortizationTable.displayName = 'AmortizationTable'

export default AmortizationTable
