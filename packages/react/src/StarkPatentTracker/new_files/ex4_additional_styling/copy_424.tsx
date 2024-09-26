import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '00beb7b5-c7bf-4c4e-ad09-8bda9fc53112', title: 'PATENT_TITLE_7505' },
                { id: 'c22c0dbd-d017-4c6e-b586-c537d72f0a6c', title: 'PATENT_TITLE_2527' },
                { id: '891583db-e12b-4a75-844e-70fe97bcc805', title: 'PATENT_TITLE_5096' },
            ]}
        />
    </Box>
)

export default App