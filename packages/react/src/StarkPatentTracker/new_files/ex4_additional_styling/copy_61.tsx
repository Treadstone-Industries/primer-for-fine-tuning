import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8491d3d2-c84f-4dc9-9f0b-0c76efb77803', title: 'PATENT_TITLE_5779' },
                { id: 'ab861bd3-4b4c-4913-97e5-20f02b45761b', title: 'PATENT_TITLE_3901' },
            ]}
        />
    </Box>
)

export default App