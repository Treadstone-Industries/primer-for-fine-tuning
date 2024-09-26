import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'de581289-cc43-456d-b995-341c8a4ab0a1', title: 'PATENT_TITLE_1783' },
                { id: 'a2743e16-be5d-48d6-8a58-8d249491e694', title: 'PATENT_TITLE_3494' },
            ]}
        />
    </Box>
)

export default App