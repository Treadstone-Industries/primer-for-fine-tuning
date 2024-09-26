import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '93896623-f357-4031-a29d-7c1e954955b7', title: 'PATENT_TITLE_2429' },
                { id: '983e0b27-5e08-43c6-afe3-fec76bc5b753', title: 'PATENT_TITLE_6205' },
                { id: 'f2ec0dac-9d34-4b25-9728-395f0c2b034d', title: 'PATENT_TITLE_1108' },
                { id: 'c00f5680-0d83-4270-9820-99bbe546523a', title: 'PATENT_TITLE_9798' },
                { id: 'cd8194b6-6802-478e-a539-f391e4a13972', title: 'PATENT_TITLE_1799' },
                { id: 'f452f0e3-0f40-48aa-8997-de00e8f2883d', title: 'PATENT_TITLE_5869' },
                { id: '2137d99e-0dff-47d9-966a-93335a511c0c', title: 'PATENT_TITLE_8461' },
                { id: '0e939d70-6e1a-4b6c-89df-5d866a2690c7', title: 'PATENT_TITLE_5644' },
            ]}
        />
    </Box>
)

export default App