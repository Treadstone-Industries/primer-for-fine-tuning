import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b513f3b2-5c55-4f09-ae9e-fd2a64cba8f9', title: 'PATENT_TITLE_4160' },
                { id: 'bced397c-abbc-4a93-8e4e-c13a4e5b9748', title: 'PATENT_TITLE_5927' },
            ]}
        />
    </Box>
)

export default App