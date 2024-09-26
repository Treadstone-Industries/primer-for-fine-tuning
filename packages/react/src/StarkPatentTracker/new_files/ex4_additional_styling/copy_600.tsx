import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ad6cf99e-97ae-419f-91de-d3df7b2c86ab', title: 'PATENT_TITLE_4286' },
                { id: 'ec36b36e-2a83-4e3a-9778-bf9dc9073021', title: 'PATENT_TITLE_9298' },
                { id: 'd8641615-92f4-4690-a4ae-ab2376a00b6e', title: 'PATENT_TITLE_1801' },
                { id: '7a3b3aed-b6af-4f39-8f62-480a6ef8e620', title: 'PATENT_TITLE_2918' },
                { id: '9c749ad3-aa1c-4371-98f7-a614e0a244cf', title: 'PATENT_TITLE_4920' },
                { id: '8d5da885-42b8-4c03-8f45-f3c16d0349c8', title: 'PATENT_TITLE_7197' },
                { id: '4ab64fc1-0372-43d5-9b71-3e4e655e2947', title: 'PATENT_TITLE_1485' },
            ]}
        />
    </Box>
)

export default App