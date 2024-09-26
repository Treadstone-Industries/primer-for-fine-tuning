import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5bc25db9-812f-45cd-9b21-b8005a99a25f', title: 'PATENT_TITLE_9479' },
                { id: '66dfd7cf-1e47-4996-8c2a-6c7cd464474d', title: 'PATENT_TITLE_1979' },
                { id: '003f9a6e-aae8-4e36-ae16-d79c9c452cdd', title: 'PATENT_TITLE_2859' },
            ]}
        />
    </Box>
)

export default App