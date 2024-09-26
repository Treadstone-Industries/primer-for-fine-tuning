import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '031273a2-f9c0-45ad-b6e3-6783334a498b', title: 'PATENT_TITLE_3415' },
                { id: '6fb1675a-e45b-469a-b753-1e26263e15e7', title: 'PATENT_TITLE_2975' },
            ]}
        />
    </Box>
)

export default App