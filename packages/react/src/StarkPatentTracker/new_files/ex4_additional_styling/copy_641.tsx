import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9f156782-f56e-4b2d-acff-11b71f2b4151', title: 'PATENT_TITLE_5332' },
                { id: '1e3632c4-aa2b-4e25-b463-b00ff23b4f22', title: 'PATENT_TITLE_6300' },
                { id: 'a5fef560-e33a-4e93-b378-d6e6aad571dc', title: 'PATENT_TITLE_7061' },
            ]}
        />
    </Box>
)

export default App