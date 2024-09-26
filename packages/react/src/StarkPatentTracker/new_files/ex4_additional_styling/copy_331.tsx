import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5e5d658f-ef5b-4d8a-aa30-0310d861e826', title: 'PATENT_TITLE_9747' },
                { id: '0b39fa3a-85cc-492a-8cd0-2869421043e0', title: 'PATENT_TITLE_7415' },
                { id: '40f80539-1660-49f1-8442-d572bdf425a0', title: 'PATENT_TITLE_5810' },
                { id: '905dab47-8526-41e7-b39f-627c497ce51a', title: 'PATENT_TITLE_4483' },
                { id: '24f81443-75ed-4cb7-9f6b-4068c74d8b0c', title: 'PATENT_TITLE_4353' },
                { id: '2d845e11-05ec-4370-870d-0e5519a8bd0f', title: 'PATENT_TITLE_7402' },
                { id: 'ff974db0-8c11-43d5-aad7-56bc0a3d6d9d', title: 'PATENT_TITLE_4581' },
                { id: '5c729545-8e28-42be-91be-07c900c33e4e', title: 'PATENT_TITLE_6554' },
            ]}
        />
    </Box>
)

export default App