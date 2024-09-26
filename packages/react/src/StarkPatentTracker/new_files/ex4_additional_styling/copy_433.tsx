import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd8f41f56-c38d-4e0e-b057-81ec7ae49583', title: 'PATENT_TITLE_2688' },
                { id: '78c9e95f-1f6e-4138-baee-3884ced614fd', title: 'PATENT_TITLE_4017' },
                { id: '8e45daff-0c6b-456e-a1a8-0237fdf03aa5', title: 'PATENT_TITLE_2485' },
                { id: '8fc90eba-3346-4146-b570-d8c2476d674e', title: 'PATENT_TITLE_8254' },
                { id: '9f913ed2-ef39-43dd-bae1-13966d1c392b', title: 'PATENT_TITLE_5957' },
            ]}
        />
    </Box>
)

export default App