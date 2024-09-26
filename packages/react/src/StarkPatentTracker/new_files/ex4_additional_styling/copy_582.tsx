import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f418b503-2c72-4e8c-88eb-501faa31a75f', title: 'PATENT_TITLE_8301' },
                { id: 'a6ae4b23-24be-4a26-881e-9b45ef867aa7', title: 'PATENT_TITLE_3717' },
                { id: '821d4726-63f6-462b-8fd8-9d46c80eb633', title: 'PATENT_TITLE_4679' },
                { id: '581afa7a-5005-4d5b-a60d-acee6b8ddc13', title: 'PATENT_TITLE_9654' },
                { id: 'e013bb1d-eaa1-4a83-8bd3-90681c0b4d4f', title: 'PATENT_TITLE_5787' },
                { id: 'a2359850-2a3e-47f4-ac15-fc59f1a710f8', title: 'PATENT_TITLE_9331' },
                { id: '2e3f27c5-8fd7-49e5-89d4-f179564e8ef6', title: 'PATENT_TITLE_3539' },
                { id: '2fa766cf-5724-4a0a-8467-32776c1719d3', title: 'PATENT_TITLE_9259' },
                { id: 'be223dce-178c-415e-961f-064badf1dc1e', title: 'PATENT_TITLE_7900' },
            ]}
        />
    </Box>
)

export default App