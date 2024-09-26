import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e0907722-c92e-4ad7-bebe-f174cc9d9ab5', title: 'PATENT_TITLE_2041' },
                { id: '1041d89f-93e2-497f-bce9-02e99cfc6ee4', title: 'PATENT_TITLE_1820' },
            ]}
        />
    </Box>
)

export default App