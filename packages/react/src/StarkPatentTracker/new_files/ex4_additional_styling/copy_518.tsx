import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '46a46350-a8a9-44e1-bd71-a1377b4c024b', title: 'PATENT_TITLE_4843' },
                { id: 'fc24a82e-460b-4d0d-990c-9ca94b1aae0a', title: 'PATENT_TITLE_9654' },
            ]}
        />
    </Box>
)

export default App