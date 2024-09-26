import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '86860a38-73c6-47a0-8dff-f06bb4954349', title: 'PATENT_TITLE_3547' },
                { id: '991accee-8410-4cce-a009-97aad5d2f95a', title: 'PATENT_TITLE_2308' },
                { id: 'c6d14f7a-ba88-4e06-9755-f74d0dc3d0d1', title: 'PATENT_TITLE_7240' },
            ]}
        />
    </Box>
)

export default App