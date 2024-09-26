import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2dcba55a-0695-486a-8aab-f9053ccef2ca', title: 'PATENT_TITLE_2475' },
                { id: 'ef29274b-2211-46cc-a29d-13c6b76cc0e1', title: 'PATENT_TITLE_9766' },
            ]}
        />
    </Box>
)

export default App