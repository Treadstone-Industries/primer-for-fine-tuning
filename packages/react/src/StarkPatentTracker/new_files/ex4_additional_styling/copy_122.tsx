import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd903c048-df6c-4f95-a934-ba53db24c00b', title: 'PATENT_TITLE_1304' },
                { id: 'c12a96c4-f207-4c2a-8292-5cac728d7404', title: 'PATENT_TITLE_6065' },
                { id: 'bde26a64-d8d6-4615-82d4-659d359b0f41', title: 'PATENT_TITLE_3918' },
                { id: '8cb10645-a064-471c-99ca-0efb832010d6', title: 'PATENT_TITLE_4547' },
            ]}
        />
    </Box>
)

export default App