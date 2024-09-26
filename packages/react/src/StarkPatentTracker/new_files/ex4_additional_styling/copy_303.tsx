import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6d7447d3-44ff-4a28-a2ea-5d5b36a27b42', title: 'PATENT_TITLE_3804' },
                { id: 'cae204b4-e55d-4f12-8546-6767b46fe8d4', title: 'PATENT_TITLE_4586' },
                { id: 'ee39c809-03b4-4da5-b38f-87bd49a6592a', title: 'PATENT_TITLE_8875' },
            ]}
        />
    </Box>
)

export default App