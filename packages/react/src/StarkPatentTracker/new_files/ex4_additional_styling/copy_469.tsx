import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd612804c-b3cd-4f55-9280-cf3d756b8edd', title: 'PATENT_TITLE_3934' },
                { id: 'f779f4c6-d8e6-4050-8f15-14b5f3d7fd46', title: 'PATENT_TITLE_7385' },
                { id: '707da98c-b34e-48cd-907a-45b72c2c4131', title: 'PATENT_TITLE_8655' },
                { id: '2f7b9c22-daa7-45ad-9522-a9c9f5e8111b', title: 'PATENT_TITLE_7914' },
            ]}
        />
    </Box>
)

export default App