import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c5efd58f-f90d-4874-a341-c918475ff55b', title: 'PATENT_TITLE_9880' },
                { id: '2e52cd44-d0db-4327-8ff3-f7527d6d5556', title: 'PATENT_TITLE_8693' },
                { id: '1bba47e5-50a6-4825-9cd8-165cf4346e5e', title: 'PATENT_TITLE_6130' },
            ]}
        />
    </Box>
)

export default App