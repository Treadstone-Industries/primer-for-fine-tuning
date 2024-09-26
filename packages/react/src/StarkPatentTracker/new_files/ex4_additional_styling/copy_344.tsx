import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b7756ea0-1512-4a1f-9d8b-3c6579826310', title: 'PATENT_TITLE_5654' },
                { id: 'f1e2cc4d-278e-476e-9d9c-b3c7c1d95d41', title: 'PATENT_TITLE_8359' },
                { id: '3228df00-5e63-4aac-a238-79414001d39f', title: 'PATENT_TITLE_2184' },
            ]}
        />
    </Box>
)

export default App