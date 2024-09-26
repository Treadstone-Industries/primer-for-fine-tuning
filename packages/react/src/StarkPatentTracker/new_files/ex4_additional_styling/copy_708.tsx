import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '04c7fb2b-2f23-403c-8fb4-128a65795a7f', title: 'PATENT_TITLE_6285' },
                { id: 'a2cb5ce3-0092-4c37-b728-419807cd5277', title: 'PATENT_TITLE_1444' },
            ]}
        />
    </Box>
)

export default App