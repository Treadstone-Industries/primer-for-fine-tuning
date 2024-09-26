import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd22e083d-0f02-4f90-81e3-784736a9bae0', title: 'PATENT_TITLE_5134' },
                { id: '5bfb5fde-6868-4cf8-85db-42bcd2dbd88d', title: 'PATENT_TITLE_3655' },
                { id: 'eaff85c5-5c60-4075-a19c-81860ce8522b', title: 'PATENT_TITLE_3264' },
            ]}
        />
    </Box>
)

export default App