import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e7053014-66ea-42d5-96e2-5f3454c243a5', title: 'PATENT_TITLE_6039' },
                { id: '10fe82e9-5781-467b-a004-23f71b3e2cab', title: 'PATENT_TITLE_3997' },
                { id: 'c4c00580-7c6e-46d2-8f89-37f65b3f04d8', title: 'PATENT_TITLE_8993' },
            ]}
        />
    </Box>
)

export default App