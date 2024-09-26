import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '80001098-b761-4f5a-8c46-d82f505593df', title: 'PATENT_TITLE_9566' },
                { id: '1e0e177b-9c4b-4cde-ae2d-d295fe00e18d', title: 'PATENT_TITLE_2297' },
                { id: 'e669d45a-3034-4f0b-b1d1-3d21a3521619', title: 'PATENT_TITLE_3171' },
            ]}
        />
    </Box>
)

export default App