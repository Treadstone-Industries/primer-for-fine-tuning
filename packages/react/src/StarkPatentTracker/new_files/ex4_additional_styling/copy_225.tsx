import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5a77da4f-d629-470c-80e9-9aeca5fd62d4', title: 'PATENT_TITLE_8383' },
                { id: '0b8e1993-5e7c-4da4-9063-31de5d5d5f6b', title: 'PATENT_TITLE_1459' },
                { id: 'ee1c1530-8d02-48d8-8e06-73d1e60bf269', title: 'PATENT_TITLE_9060' },
                { id: '3a53b428-37e1-4edf-bf7b-acdff6dbfb54', title: 'PATENT_TITLE_8660' },
                { id: '3727c242-8d2e-4296-8a6c-0939307a7d21', title: 'PATENT_TITLE_5358' },
                { id: 'dde80db2-1763-4eec-bbe1-7b1baf348751', title: 'PATENT_TITLE_1360' },
                { id: '67f79398-0f02-4b91-962f-0e13cfea28ae', title: 'PATENT_TITLE_6178' },
                { id: '886e1254-d9b4-419f-81d2-05f2e92284d1', title: 'PATENT_TITLE_7279' },
                { id: '1d6ac21d-56db-484e-a9dd-e55e737f5639', title: 'PATENT_TITLE_1613' },
            ]}
        />
    </Box>
)

export default App