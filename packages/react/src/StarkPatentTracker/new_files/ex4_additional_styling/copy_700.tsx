import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '78bd873e-d5e1-490f-a5da-f9623adc90ad', title: 'PATENT_TITLE_7890' },
                { id: '7aae0c30-ab20-4e1e-bc3e-086a774cdd08', title: 'PATENT_TITLE_8728' },
                { id: '4db10b6d-2da7-41a8-bb63-c5d85ab15ec6', title: 'PATENT_TITLE_5966' },
                { id: 'faf70a66-c2e6-40ce-aced-7ad670f2e830', title: 'PATENT_TITLE_1887' },
                { id: '236059bd-590d-4bf1-a3b4-1809609f28c7', title: 'PATENT_TITLE_9535' },
            ]}
        />
    </Box>
)

export default App