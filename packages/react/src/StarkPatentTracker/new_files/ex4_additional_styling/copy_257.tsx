import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f8a677c1-0277-4344-ae9c-b322bc4b1c58', title: 'PATENT_TITLE_5070' },
                { id: 'f4214ec2-6eed-41c9-be3d-fa89e376af97', title: 'PATENT_TITLE_3450' },
            ]}
        />
    </Box>
)

export default App