import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c3806308-33f0-432a-921d-65b506c5e7a3', title: 'PATENT_TITLE_2558' },
                { id: '64d6a1b4-3f52-48ef-b26c-27f76db54804', title: 'PATENT_TITLE_4540' },
                { id: '84848a18-a2bb-4d41-8d70-21f283cb8b37', title: 'PATENT_TITLE_3292' },
            ]}
        />
    </Box>
)

export default App