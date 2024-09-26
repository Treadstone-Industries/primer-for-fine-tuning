import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '75734a0d-f99a-4c7c-a0cc-81f15965e0de', title: 'PATENT_TITLE_9511' },
                { id: '14663825-0524-486c-bc4e-6335b0c610a0', title: 'PATENT_TITLE_5746' },
                { id: '029c3c55-94ad-4516-af1a-a92386dfd6e5', title: 'PATENT_TITLE_7340' },
                { id: '3faf1bc3-637f-4855-994e-1782ba38204f', title: 'PATENT_TITLE_6543' },
            ]}
        />
    </Box>
)

export default App