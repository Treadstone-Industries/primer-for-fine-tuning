import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '320f8764-fd15-4c0f-88a2-b645323a533d', title: 'PATENT_TITLE_3452' },
                { id: '87fb0019-651d-4961-8b5c-d46e53db818a', title: 'PATENT_TITLE_4955' },
                { id: '5e769de9-4b49-4591-9fb6-c509f92f7198', title: 'PATENT_TITLE_8133' },
            ]}
        />
    </Box>
)

export default App