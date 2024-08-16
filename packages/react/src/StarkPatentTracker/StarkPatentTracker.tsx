import React from 'react'
import Box from '../Box'

type Patent = {
  id: string
  title: string
}

export type StarkPatentTrackerProps = {
  patents: Patent[]
}

export function StarkPatentTracker({patents}: StarkPatentTrackerProps) {
  return (
    <Box>
      {patents.map(patent => (
        <Box key={patent.id}>
          {patent.title} ({patent.id})
        </Box>
      ))}
    </Box>
  )
}

StarkPatentTracker.displayName = 'StarkPatentTracker'

export default StarkPatentTracker
