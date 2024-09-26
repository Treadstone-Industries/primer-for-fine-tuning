import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '74b179fb-df2d-4ff7-b4cc-47fa15f057ba', title: 'PATENT_TITLE_3750' },
                { id: '777421b4-65dc-4cf0-ab9a-7d47d57f2ab4', title: 'PATENT_TITLE_3743' },
                { id: 'a665ca4b-e9d5-4fe6-bd9b-8f136b8cee71', title: 'PATENT_TITLE_3997' },
                { id: 'edf66964-2b20-4b8a-bf44-7539febeeca9', title: 'PATENT_TITLE_9485' },
                { id: '9d70a923-0e42-43b4-a5b7-fbbb1059fa1a', title: 'PATENT_TITLE_8049' },
            ]}
        />
    </Box>
)

export default App