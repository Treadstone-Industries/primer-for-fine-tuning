import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '699188a9-1388-4bb2-8c64-992ec9def4d3', title: 'PATENT_TITLE_9817' },
                { id: 'f2bf70eb-f0a7-4d8a-9b3e-70c7f3be9f2c', title: 'PATENT_TITLE_1884' },
                { id: 'fb873dd4-2236-4011-b69e-6de54c09561e', title: 'PATENT_TITLE_5114' },
                { id: '730477b7-6b0d-4aa5-b0f8-38ef666adf3b', title: 'PATENT_TITLE_1917' },
                { id: 'ac6d142f-eb9a-4952-8de4-f41e80c0881b', title: 'PATENT_TITLE_3822' },
                { id: '48b305d1-a359-42e5-bfd2-6972e05173d1', title: 'PATENT_TITLE_9524' },
            ]}
        />
    </Box>
)

export default App