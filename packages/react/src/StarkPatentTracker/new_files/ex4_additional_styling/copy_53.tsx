import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b9461b5c-4002-40eb-918c-7090da12f33b', title: 'PATENT_TITLE_5224' },
                { id: 'eada5470-281f-462a-8f1c-2b7d121bbc18', title: 'PATENT_TITLE_1812' },
                { id: '580720b0-fe26-4a39-b06a-88442b9b23a2', title: 'PATENT_TITLE_2247' },
                { id: '74f4067a-a1cd-4da4-9957-81f8b4db7c5c', title: 'PATENT_TITLE_2245' },
                { id: '626b3838-90ae-4a81-b3b9-9ccb9b8f6b27', title: 'PATENT_TITLE_5411' },
                { id: '8e2905ed-c498-45d7-900d-af722f697d86', title: 'PATENT_TITLE_2002' },
            ]}
        />
    </Box>
)

export default App