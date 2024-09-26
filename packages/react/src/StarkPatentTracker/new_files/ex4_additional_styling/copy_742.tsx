import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '00d7075b-8abd-429b-9b27-25ed739f3cd6', title: 'PATENT_TITLE_4374' },
                { id: 'f625d9c9-8296-4fe6-835d-956f0f964b14', title: 'PATENT_TITLE_9916' },
            ]}
        />
    </Box>
)

export default App