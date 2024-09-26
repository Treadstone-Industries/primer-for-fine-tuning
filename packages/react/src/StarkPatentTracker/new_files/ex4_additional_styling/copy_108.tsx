import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7ec3a8be-376a-4c4f-a0aa-0d00143c04b2', title: 'PATENT_TITLE_8559' },
                { id: 'b8260078-649d-4dc7-a578-2478b0140c78', title: 'PATENT_TITLE_8544' },
                { id: 'e08ea811-8461-4857-92e8-5a3b70a5182f', title: 'PATENT_TITLE_9762' },
                { id: '61ab7ffc-d6f4-4241-a54a-df3a3c09f986', title: 'PATENT_TITLE_8339' },
                { id: '16e93300-b590-4f22-894b-0df2c7241fc5', title: 'PATENT_TITLE_5735' },
            ]}
        />
    </Box>
)

export default App