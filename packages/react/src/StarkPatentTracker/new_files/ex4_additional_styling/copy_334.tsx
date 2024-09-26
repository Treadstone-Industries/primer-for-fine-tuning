import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '46c55d82-a814-4b3e-bc65-d295b1e3b60f', title: 'PATENT_TITLE_2273' },
                { id: 'ac2faa8b-38ef-4a4e-a56c-90016a32b127', title: 'PATENT_TITLE_4680' },
                { id: 'ded33d3a-e4a9-4014-90d1-1e158033dfd4', title: 'PATENT_TITLE_1933' },
                { id: '5fba00c3-1a73-42ac-b8c0-03d5ee05450c', title: 'PATENT_TITLE_3488' },
                { id: '2d0990c7-abbc-44c3-bd7f-b494f2bceb31', title: 'PATENT_TITLE_2388' },
                { id: '788ae046-1fab-4710-b5a5-a9a61d8a981d', title: 'PATENT_TITLE_8403' },
                { id: '902a78f5-fc85-4e97-a92e-ee2aa3f42273', title: 'PATENT_TITLE_3790' },
            ]}
        />
    </Box>
)

export default App