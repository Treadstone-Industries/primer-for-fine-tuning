import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'abe7d7f6-d06e-447c-ab3a-59b5babb60b0', title: 'PATENT_TITLE_9574' },
                { id: '6b3f0a7b-a50d-418d-9f6e-efd745acb3fe', title: 'PATENT_TITLE_6536' },
                { id: '2c0d5824-2512-4078-a4e5-399473e26a8d', title: 'PATENT_TITLE_8221' },
                { id: '92e03613-c5a6-4acb-b468-40935e6e9a64', title: 'PATENT_TITLE_3400' },
            ]}
        />
    </Box>
)

export default App