import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'adf9c98e-a8c1-4a1e-b1d2-32410cc28981', title: 'PATENT_TITLE_2275' },
                { id: '2fa1096a-a1df-4c17-b47b-7b32e4623e88', title: 'PATENT_TITLE_6163' },
                { id: 'd0e62c36-a4f9-4155-9192-e63d93b980e8', title: 'PATENT_TITLE_1020' },
            ]}
        />
    </Box>
)

export default App