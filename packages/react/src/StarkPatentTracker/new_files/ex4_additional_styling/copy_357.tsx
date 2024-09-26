import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ba578719-a5db-4b80-ba35-e2a1c11df865', title: 'PATENT_TITLE_5170' },
                { id: 'd6a56d5b-2856-44c8-9728-97ad385af13b', title: 'PATENT_TITLE_3882' },
                { id: '37bc1c41-2c05-4ca4-a977-82898b7fb092', title: 'PATENT_TITLE_4822' },
                { id: '3d524d31-0683-46d3-9e6a-a420618840aa', title: 'PATENT_TITLE_1937' },
                { id: 'd7880a3d-d1d3-4c8c-bf72-a4f929ce75cf', title: 'PATENT_TITLE_2992' },
                { id: '19aa57e7-81c4-4814-af26-01bed38f2f62', title: 'PATENT_TITLE_2527' },
                { id: '70197b05-2567-42ce-9886-83f85d8766cb', title: 'PATENT_TITLE_7348' },
                { id: 'c610400e-8a2f-4d12-a61c-16fc6fe5b7c0', title: 'PATENT_TITLE_5295' },
                { id: '6afe7982-35c2-40dd-9d86-9c92f58147bb', title: 'PATENT_TITLE_5688' },
                { id: '6193ac58-a311-452b-8820-08cc205e0a65', title: 'PATENT_TITLE_2506' },
            ]}
        />
    </Box>
)

export default App