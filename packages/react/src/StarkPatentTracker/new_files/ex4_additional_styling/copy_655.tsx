import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e6c24f68-3c8e-480a-935f-01f23e3c18fa', title: 'PATENT_TITLE_3036' },
                { id: 'd41074d8-e048-42f8-8d65-76e6dcbc23cf', title: 'PATENT_TITLE_8704' },
                { id: '581ce97c-1553-4707-83e1-e59fd35943f8', title: 'PATENT_TITLE_7808' },
            ]}
        />
    </Box>
)

export default App