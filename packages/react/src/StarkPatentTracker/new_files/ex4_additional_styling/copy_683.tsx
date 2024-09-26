import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '33188dfd-d750-4145-b2d6-24ca1a21c01d', title: 'PATENT_TITLE_7730' },
                { id: 'dbb8a92b-b0be-4c6b-a3d7-a84d087a6d7e', title: 'PATENT_TITLE_9286' },
                { id: '8b65b5b0-ad36-4eaf-88e6-d080ab53d233', title: 'PATENT_TITLE_1493' },
            ]}
        />
    </Box>
)

export default App