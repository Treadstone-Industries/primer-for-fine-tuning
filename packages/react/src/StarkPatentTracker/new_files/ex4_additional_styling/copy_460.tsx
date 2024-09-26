import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e0472a6b-23c7-4b03-b15a-db2fdf0f0c9a', title: 'PATENT_TITLE_8203' },
                { id: '1d9742e6-1264-4bc5-a600-e8e1002cbe03', title: 'PATENT_TITLE_2266' },
            ]}
        />
    </Box>
)

export default App