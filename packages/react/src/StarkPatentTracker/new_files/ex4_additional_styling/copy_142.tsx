import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'dae8f118-c5ee-4328-b491-a8522f23d38d', title: 'PATENT_TITLE_7941' },
                { id: 'a075fe32-75c6-4d09-add4-57b830b41f4b', title: 'PATENT_TITLE_6927' },
                { id: '3f8e1bec-fcc3-4ebf-b79c-74cb38a01fe5', title: 'PATENT_TITLE_5772' },
                { id: '88f6034c-10db-4c95-aeb6-c03bc1e44284', title: 'PATENT_TITLE_3405' },
            ]}
        />
    </Box>
)

export default App