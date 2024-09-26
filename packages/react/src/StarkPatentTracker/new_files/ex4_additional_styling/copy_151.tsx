import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3ca07f0b-eea4-4549-bc01-1dc51ef21b17', title: 'PATENT_TITLE_9923' },
                { id: '4a3ece5c-0058-4469-b818-b45ab454f532', title: 'PATENT_TITLE_1214' },
                { id: '070eadf4-d501-4ef5-9d3d-295dadc70d1b', title: 'PATENT_TITLE_9472' },
            ]}
        />
    </Box>
)

export default App