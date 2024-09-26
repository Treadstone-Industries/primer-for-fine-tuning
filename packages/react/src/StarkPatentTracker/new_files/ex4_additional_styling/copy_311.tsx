import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6b913caf-b8a6-4a37-8597-3f235fb79893', title: 'PATENT_TITLE_9466' },
                { id: '759aeb26-4dea-4910-aca6-3ebe7c61aa98', title: 'PATENT_TITLE_4689' },
                { id: '73eb3861-d534-45d2-83a6-dc5e64b458aa', title: 'PATENT_TITLE_3121' },
                { id: 'cfbb3228-a94f-4f14-9742-e8b16cb105ed', title: 'PATENT_TITLE_9084' },
                { id: 'eef045d7-88b2-426e-a790-12b71634e88c', title: 'PATENT_TITLE_4487' },
            ]}
        />
    </Box>
)

export default App