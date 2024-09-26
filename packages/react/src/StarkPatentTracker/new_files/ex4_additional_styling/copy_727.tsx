import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e11233b4-732a-47e3-a7e3-b83c9e6d9845', title: 'PATENT_TITLE_7633' },
                { id: 'af3d7be8-ef89-4ca5-abe4-7e05b82d45b7', title: 'PATENT_TITLE_5137' },
                { id: '2f10ce6e-ca85-49b5-a143-23e9c91fb4c2', title: 'PATENT_TITLE_8294' },
                { id: 'fdd6447b-dcd4-4cdf-9743-66dc3dd845e2', title: 'PATENT_TITLE_8345' },
                { id: '0fa2c9d3-b38b-46d9-a1c7-d66ff4878dc9', title: 'PATENT_TITLE_2268' },
            ]}
        />
    </Box>
)

export default App