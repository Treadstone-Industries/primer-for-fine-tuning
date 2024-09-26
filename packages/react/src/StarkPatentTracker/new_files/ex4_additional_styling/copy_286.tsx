import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'eaf737aa-b3b8-4e26-9b8a-6854c29bfc33', title: 'PATENT_TITLE_3173' },
                { id: 'f23272da-ca3a-4c67-b548-ae14e76cd5c0', title: 'PATENT_TITLE_5877' },
                { id: '59ce13f5-2b36-40a0-bc04-b0fb041d82b5', title: 'PATENT_TITLE_6242' },
                { id: '2b6f22b1-5f35-492e-964b-42399fc3fdc9', title: 'PATENT_TITLE_5637' },
                { id: 'fa885e83-a242-49a3-bbc5-914a2fcb9946', title: 'PATENT_TITLE_8826' },
                { id: 'a5c60c41-4922-4b4e-a509-2abae6624061', title: 'PATENT_TITLE_9841' },
            ]}
        />
    </Box>
)

export default App