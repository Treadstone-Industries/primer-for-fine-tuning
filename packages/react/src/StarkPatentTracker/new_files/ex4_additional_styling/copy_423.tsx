import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2b500d9e-08ac-41af-9c59-b838d0ac2281', title: 'PATENT_TITLE_9097' },
                { id: '59c3e749-06fc-44ff-96e4-488c7531a381', title: 'PATENT_TITLE_2731' },
                { id: '0d4ff963-89c7-48c0-9d0e-bee4eedfc80f', title: 'PATENT_TITLE_5111' },
            ]}
        />
    </Box>
)

export default App