import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f9a5de12-a7ed-4825-9d89-e6cd310b7caa', title: 'PATENT_TITLE_8124' },
                { id: '1eb138fb-8995-4bf0-ba45-68051704e9da', title: 'PATENT_TITLE_1651' },
                { id: '87cbf3c7-3eeb-441d-8578-4f5e6819c3a1', title: 'PATENT_TITLE_6275' },
                { id: 'f734ca65-bd62-4623-9e6c-e1a6b55c0876', title: 'PATENT_TITLE_3297' },
            ]}
        />
    </Box>
)

export default App