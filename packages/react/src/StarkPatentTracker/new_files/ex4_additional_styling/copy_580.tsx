import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '949342c5-29ac-43f1-838c-a104812acaf1', title: 'PATENT_TITLE_9922' },
                { id: '7a9c867a-c4a9-486d-bfbc-80e5ee7544fe', title: 'PATENT_TITLE_8613' },
            ]}
        />
    </Box>
)

export default App