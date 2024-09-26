import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3a0f90f6-0a04-4614-8321-5f948f00c7d6', title: 'PATENT_TITLE_4689' },
                { id: '98bf7177-fe2e-445f-b37e-eb8ecbaf6aad', title: 'PATENT_TITLE_7916' },
                { id: '844f5213-7165-41a6-bca5-c084b9076581', title: 'PATENT_TITLE_3691' },
                { id: '7ffe8958-86f6-4dca-8cfc-58a6c1f48b2e', title: 'PATENT_TITLE_8543' },
                { id: 'cd220d15-db58-4ae6-a522-7d4a0507f982', title: 'PATENT_TITLE_9729' },
            ]}
        />
    </Box>
)

export default App