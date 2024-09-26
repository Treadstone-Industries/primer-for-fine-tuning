import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8c975bb8-4b45-46a8-bac4-753d0e650758', title: 'PATENT_TITLE_9415' },
                { id: '56866653-019c-42ff-99d1-ab10f46f1d77', title: 'PATENT_TITLE_3696' },
            ]}
        />
    </Box>
)

export default App