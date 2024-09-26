import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e43ba35a-6749-478a-96ba-bfd43761f153', title: 'PATENT_TITLE_1890' },
                { id: 'e277d5e0-9771-486e-a059-052f9df10740', title: 'PATENT_TITLE_1262' },
            ]}
        />
    </Box>
)

export default App