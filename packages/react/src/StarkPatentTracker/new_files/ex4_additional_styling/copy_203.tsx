import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '66644842-21fe-49d6-aaaf-d9c37b93b14b', title: 'PATENT_TITLE_4471' },
                { id: '63bd9f16-ff08-4a86-8369-08feda27b1c8', title: 'PATENT_TITLE_2285' },
            ]}
        />
    </Box>
)

export default App