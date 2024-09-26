import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd0770a48-c1b2-4954-a503-6640577e8b40', title: 'PATENT_TITLE_3070' },
                { id: '05c0ce32-29d8-4363-9483-1cf4c804c345', title: 'PATENT_TITLE_3509' },
            ]}
        />
    </Box>
)

export default App