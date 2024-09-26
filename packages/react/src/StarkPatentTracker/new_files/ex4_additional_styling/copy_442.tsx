import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'cb391e3d-9ebe-4408-9a82-1e0e1bec58d7', title: 'PATENT_TITLE_6076' },
                { id: '2dc75fda-b5a7-4768-be37-c88a4b19ae3b', title: 'PATENT_TITLE_4968' },
                { id: '1f1d29dc-15fa-4f4c-87e2-0b6b86ea43fe', title: 'PATENT_TITLE_1748' },
                { id: 'fc44a582-52e7-479d-8301-53720bbe61d1', title: 'PATENT_TITLE_7296' },
                { id: '3b1ec646-00e5-44c7-a9fd-3bbd964f2853', title: 'PATENT_TITLE_9764' },
                { id: '5141844c-dc66-4ac2-a6c5-dd45af95822c', title: 'PATENT_TITLE_2066' },
            ]}
        />
    </Box>
)

export default App