import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2a3a68e9-19a8-4a29-8e9d-f54cb258d523', title: 'PATENT_TITLE_5092' },
                { id: '91bb4f48-b88a-4b28-9aaf-7d2e6a85e582', title: 'PATENT_TITLE_7383' },
                { id: '74e71e8e-9e6d-4990-a34e-f019e9d7f52c', title: 'PATENT_TITLE_9876' },
                { id: '8ea4b4de-290d-4e7f-a237-0ba7e10b182d', title: 'PATENT_TITLE_1535' },
                { id: '79c5d8cd-2a93-4f15-bcc6-e4577379b28e', title: 'PATENT_TITLE_6352' },
                { id: 'a167da3e-d0e9-4613-8fff-862328514b77', title: 'PATENT_TITLE_1046' },
                { id: '0a470067-98ad-4f1c-baba-50f23caa004d', title: 'PATENT_TITLE_3179' },
                { id: '40f38f8c-28d5-44cc-89f5-b25978353f7d', title: 'PATENT_TITLE_7586' },
            ]}
        />
    </Box>
)

export default App