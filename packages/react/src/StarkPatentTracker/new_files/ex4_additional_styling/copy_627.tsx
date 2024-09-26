import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1ebb8973-2a05-46f3-b98c-be6c6856f9d6', title: 'PATENT_TITLE_7577' },
                { id: '5d14fb80-8f01-4ee0-bb9c-b47b78ad92a0', title: 'PATENT_TITLE_1793' },
            ]}
        />
    </Box>
)

export default App