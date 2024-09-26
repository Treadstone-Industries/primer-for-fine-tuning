import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e5f479fe-bc8e-4c2e-bbfa-37aedf7f29ad', title: 'PATENT_TITLE_2375' },
                { id: '89f68cdc-309d-475e-a1db-baf279c4323d', title: 'PATENT_TITLE_9784' },
                { id: '132338ac-5441-4826-b620-1c50b4240880', title: 'PATENT_TITLE_8051' },
                { id: 'ffa0cba7-54cd-4bf9-b95e-425317a55963', title: 'PATENT_TITLE_5296' },
            ]}
        />
    </Box>
)

export default App