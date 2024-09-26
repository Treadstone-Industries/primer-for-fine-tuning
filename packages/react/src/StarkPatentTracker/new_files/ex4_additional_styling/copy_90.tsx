import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '746a0c2e-db2a-4ae8-b068-de96c323fb08', title: 'PATENT_TITLE_8414' },
                { id: '1a72e5f4-a583-469a-b0cb-55b2e6df2594', title: 'PATENT_TITLE_1760' },
                { id: '8934f294-e94f-4820-94bf-ec2372553d76', title: 'PATENT_TITLE_9825' },
                { id: '07f5d0b7-fcdf-496d-b3d0-297cd9fda1ca', title: 'PATENT_TITLE_1293' },
                { id: '79a3d9e2-3e34-4ddd-93ea-1cd7c55e69f4', title: 'PATENT_TITLE_8871' },
                { id: '00228a2e-208e-4c82-b295-b49d6307a898', title: 'PATENT_TITLE_2910' },
                { id: '44a50697-f5ea-45f7-8d5e-69a5931df239', title: 'PATENT_TITLE_1734' },
                { id: 'dddd43e3-59ce-4f15-a6c2-6b818f37903e', title: 'PATENT_TITLE_3298' },
                { id: '33b739ae-c914-4df0-b396-922117502537', title: 'PATENT_TITLE_2707' },
            ]}
        />
    </Box>
)

export default App