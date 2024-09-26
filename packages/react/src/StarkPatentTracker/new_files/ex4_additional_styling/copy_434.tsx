import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '20587c76-86ed-4854-9916-52acafd662a4', title: 'PATENT_TITLE_1841' },
                { id: '6719eef4-ad73-41e2-a2e0-72f8338b2b56', title: 'PATENT_TITLE_9463' },
                { id: 'f281723c-d140-4f7e-8cd9-b2b1f38c0646', title: 'PATENT_TITLE_5980' },
                { id: 'f1b0eabe-0d4a-4889-b7f2-eb65405f38a3', title: 'PATENT_TITLE_5690' },
                { id: 'fc4cf5d4-7910-4c11-ab6f-2c6c4a60505f', title: 'PATENT_TITLE_1627' },
            ]}
        />
    </Box>
)

export default App