import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fb12baa8-6626-4911-9fe0-b9f8bc6104ba', title: 'PATENT_TITLE_7417' },
                { id: 'c3df2e85-f6ea-48c2-b1e1-413ec1fae5a1', title: 'PATENT_TITLE_3195' },
            ]}
        />
    </Box>
)

export default App