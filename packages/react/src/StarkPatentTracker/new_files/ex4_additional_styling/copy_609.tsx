import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '95e31a2a-d9aa-4688-bebe-f063c3a47544', title: 'PATENT_TITLE_8634' },
                { id: '8da66632-c48d-4d6b-b02e-0a433ee76a04', title: 'PATENT_TITLE_4141' },
                { id: 'fe1be711-c62e-4293-9c5a-5f8da6497cf6', title: 'PATENT_TITLE_9634' },
                { id: '19a3a6e0-eebd-4356-8a39-7605d25f28a6', title: 'PATENT_TITLE_8051' },
            ]}
        />
    </Box>
)

export default App