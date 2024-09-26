import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2143761a-5c2b-4eff-9ebf-3fd992b0407f', title: 'PATENT_TITLE_3646' },
                { id: 'e714307f-db52-42ad-a9ff-f23aa9d20e87', title: 'PATENT_TITLE_6242' },
                { id: 'b7248cc4-7200-4dc6-9245-b645c07e2e4b', title: 'PATENT_TITLE_3387' },
                { id: 'e8d3c8a3-6a3a-42c6-aa0b-4d74c9dcbccd', title: 'PATENT_TITLE_8166' },
            ]}
        />
    </Box>
)

export default App