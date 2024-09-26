import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd668757b-f497-453e-b153-4e6698585ef8', title: 'PATENT_TITLE_3527' },
                { id: '597e4ea4-0720-4d0c-877e-5262ecc9e656', title: 'PATENT_TITLE_7898' },
                { id: '33dee94e-49e2-4edf-b81c-0b9d738ebb8a', title: 'PATENT_TITLE_7489' },
                { id: '84c47477-af2a-471a-8ce9-612ca0acc744', title: 'PATENT_TITLE_7747' },
                { id: '79844bcb-4fe7-44e2-9343-cf9327412baa', title: 'PATENT_TITLE_8228' },
                { id: '6607e7b4-d66b-4893-b81a-055665880b25', title: 'PATENT_TITLE_9801' },
                { id: 'b9b0bdfb-0081-4ce3-ab2e-b204958eabbf', title: 'PATENT_TITLE_1061' },
                { id: 'bb04b06a-87cb-4f0c-9d4c-a507908d117e', title: 'PATENT_TITLE_5755' },
                { id: '08dc1062-0773-4455-bb28-a5dfae076541', title: 'PATENT_TITLE_8318' },
                { id: '5f6ebe83-e57e-412e-a5d7-26cf9774af9b', title: 'PATENT_TITLE_2524' },
            ]}
        />
    </Box>
)

export default App