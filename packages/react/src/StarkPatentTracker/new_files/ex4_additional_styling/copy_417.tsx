import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3f275c1b-5109-4847-96d9-ccaf30a8966f', title: 'PATENT_TITLE_1071' },
                { id: 'ce2a1696-2153-475a-a520-e9e06ae6f8fc', title: 'PATENT_TITLE_3299' },
                { id: '00b5b02b-1f10-467c-b6ca-5a9ec0a5d1c1', title: 'PATENT_TITLE_8615' },
                { id: 'b87f5e53-aaba-466a-81e4-7622ffae5f4a', title: 'PATENT_TITLE_8316' },
                { id: '8722d8c8-a9f8-4672-a118-1c934dcc6bc0', title: 'PATENT_TITLE_1537' },
                { id: 'bbc989ba-1914-4aaf-b989-7b2bcd04ad61', title: 'PATENT_TITLE_1514' },
                { id: '0374900d-093d-4dbf-8cd3-b2904de05f25', title: 'PATENT_TITLE_2087' },
            ]}
        />
    </Box>
)

export default App