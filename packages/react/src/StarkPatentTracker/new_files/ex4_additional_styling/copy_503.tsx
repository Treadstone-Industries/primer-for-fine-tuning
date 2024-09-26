import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7330b792-a0c5-4eed-bb5b-0411d998ba67', title: 'PATENT_TITLE_4066' },
                { id: '9c57a8ca-0f2b-4261-9534-4bab22f4d02d', title: 'PATENT_TITLE_3223' },
            ]}
        />
    </Box>
)

export default App