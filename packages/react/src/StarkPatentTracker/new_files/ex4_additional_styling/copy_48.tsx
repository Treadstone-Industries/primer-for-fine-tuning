import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'dd698392-cd7e-4a8e-96b1-31e85208e73b', title: 'PATENT_TITLE_7306' },
                { id: '40f9206d-7c0f-420d-97fb-7de49157e98e', title: 'PATENT_TITLE_5248' },
                { id: 'bb4132b1-1417-4325-8820-56a34025779b', title: 'PATENT_TITLE_2580' },
            ]}
        />
    </Box>
)

export default App