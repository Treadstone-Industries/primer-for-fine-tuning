import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '33af2247-b443-427a-aa03-e2b443367244', title: 'PATENT_TITLE_4758' },
                { id: '9c585cd6-97ec-4eb5-b209-44be37b482ed', title: 'PATENT_TITLE_9156' },
                { id: '94cb3623-5f72-42c5-a1a1-caecfeef936e', title: 'PATENT_TITLE_6228' },
                { id: '259dcbf4-a1d9-4a84-a2a0-69eedda466b4', title: 'PATENT_TITLE_8407' },
            ]}
        />
    </Box>
)

export default App