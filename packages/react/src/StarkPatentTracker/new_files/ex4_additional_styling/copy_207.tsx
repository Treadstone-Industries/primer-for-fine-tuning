import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '08a971d3-8efa-4f67-a715-d9fdf5bb84bb', title: 'PATENT_TITLE_5294' },
                { id: 'fd192a70-0a2f-46ea-8fef-0a5d573b68c5', title: 'PATENT_TITLE_5582' },
                { id: '9c52deb8-0986-4098-9de8-37b163c33628', title: 'PATENT_TITLE_3002' },
                { id: '3eca1288-ca07-4db5-ba12-3fc3630eeccf', title: 'PATENT_TITLE_1559' },
            ]}
        />
    </Box>
)

export default App