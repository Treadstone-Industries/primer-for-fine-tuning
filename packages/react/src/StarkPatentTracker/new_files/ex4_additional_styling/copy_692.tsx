import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e05a5431-e040-498e-90b8-3af1a00bdd46', title: 'PATENT_TITLE_7383' },
                { id: 'c2edd63c-50be-4b69-ba1a-4bd92fd867cc', title: 'PATENT_TITLE_3163' },
                { id: '60ccc3b5-b4f9-47c0-aeeb-91ee4d382c73', title: 'PATENT_TITLE_5828' },
                { id: '44f8e9b7-ddee-49e8-8eaa-2e2cfa5c3a57', title: 'PATENT_TITLE_2169' },
                { id: 'c41752bb-ec34-47c6-a040-64d3a5c59d1a', title: 'PATENT_TITLE_7475' },
                { id: 'a2242c94-f45d-422c-b3e6-8e5cc1ceac9f', title: 'PATENT_TITLE_4590' },
            ]}
        />
    </Box>
)

export default App