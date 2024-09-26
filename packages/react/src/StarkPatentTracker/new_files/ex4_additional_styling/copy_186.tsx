import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'cbf0cbb0-b8bf-4f1b-902d-ead4900e5e4d', title: 'PATENT_TITLE_5729' },
                { id: '50c48b26-e257-40d3-a074-b56eab519a26', title: 'PATENT_TITLE_3564' },
                { id: 'a18180a1-5e6a-40f5-a871-4242c025c040', title: 'PATENT_TITLE_5592' },
            ]}
        />
    </Box>
)

export default App