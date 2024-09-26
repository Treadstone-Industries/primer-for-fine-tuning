import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '154358c3-bc1a-4300-9101-1c0235d46b57', title: 'PATENT_TITLE_3806' },
                { id: 'df98123f-a6d2-4451-96bd-b1e3558e8bed', title: 'PATENT_TITLE_1163' },
            ]}
        />
    </Box>
)

export default App