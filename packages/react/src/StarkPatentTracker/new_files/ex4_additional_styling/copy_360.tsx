import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9cdfb66c-3f68-430c-89d0-0a61911bc4ca', title: 'PATENT_TITLE_9308' },
                { id: '4ade31bb-0006-493b-a1d4-7fe3fabcc7c0', title: 'PATENT_TITLE_7362' },
                { id: '4dc55cb1-2657-45cb-b150-c20da92e829c', title: 'PATENT_TITLE_8879' },
                { id: '5119a162-a816-4313-aba8-a7c9f6600daf', title: 'PATENT_TITLE_8672' },
            ]}
        />
    </Box>
)

export default App