import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bfce366e-e04a-4f82-b3d9-75ecdddd7f0c', title: 'PATENT_TITLE_7174' },
                { id: '650bbf97-ad57-4e51-ada3-06c123b633e5', title: 'PATENT_TITLE_1051' },
                { id: '529162df-b7fe-4b58-b5da-35cb751f6c7c', title: 'PATENT_TITLE_2913' },
            ]}
        />
    </Box>
)

export default App