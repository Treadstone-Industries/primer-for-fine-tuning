import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bc9d9dce-c4cb-4a7a-9529-2555ff949345', title: 'PATENT_TITLE_7286' },
                { id: '820aeecf-b255-4f65-b8a9-b07b961dff10', title: 'PATENT_TITLE_2108' },
                { id: 'fc9e2ea4-e81d-44dd-9895-3e78761f3a5f', title: 'PATENT_TITLE_9441' },
                { id: '7891dd5f-3c28-4c51-898e-a047a65acd9d', title: 'PATENT_TITLE_1040' },
                { id: 'c4b85690-9748-4146-b166-153caeaebfbd', title: 'PATENT_TITLE_6524' },
            ]}
        />
    </Box>
)

export default App