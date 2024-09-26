import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '712c4990-bdcc-4a92-bc1e-5ad32cd681a4', title: 'PATENT_TITLE_8426' },
                { id: '3178b8b8-8980-43d3-a6a9-ec66c2b8c1e5', title: 'PATENT_TITLE_9722' },
                { id: '55eaef4a-bdeb-4373-b84c-63ad0a1e07ef', title: 'PATENT_TITLE_2799' },
            ]}
        />
    </Box>
)

export default App