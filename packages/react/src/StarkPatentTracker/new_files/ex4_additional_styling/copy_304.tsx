import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c8d0e9f5-7e3a-4163-8cbc-e449aa483647', title: 'PATENT_TITLE_9630' },
                { id: 'ea24cfcd-91b7-497d-aa09-2dfee6cfd983', title: 'PATENT_TITLE_1223' },
            ]}
        />
    </Box>
)

export default App