import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6d80ed7b-59b9-464d-8e8d-c3aec99b9603', title: 'PATENT_TITLE_5577' },
                { id: 'e0da375d-d6c5-41a8-b4c6-2102f8ac96b9', title: 'PATENT_TITLE_8996' },
                { id: 'c86ed135-2ec1-442c-ab34-cacdea77f9c7', title: 'PATENT_TITLE_8873' },
                { id: 'ef5dc2ca-ee2c-4ec9-9aee-5e8a7b639412', title: 'PATENT_TITLE_3270' },
                { id: '567b2203-753d-4d43-86b7-9507affafc0a', title: 'PATENT_TITLE_8767' },
                { id: '8696fc30-b53a-47fc-9cc6-991f59075c16', title: 'PATENT_TITLE_9371' },
                { id: 'f2f55638-109d-433b-a337-352c7ba83544', title: 'PATENT_TITLE_5479' },
                { id: '8161a651-3cf3-407c-ab4e-9b9b3d21fad5', title: 'PATENT_TITLE_2536' },
                { id: '36aa862a-58ba-4bfb-9c73-da9ff17ba760', title: 'PATENT_TITLE_5414' },
            ]}
        />
    </Box>
)

export default App