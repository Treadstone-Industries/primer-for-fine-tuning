import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '77675463-bff8-4f5e-ace9-4c35bca95898', title: 'PATENT_TITLE_1612' },
                { id: 'd3ab8fd4-b0bd-4ad0-bcfe-0615e8b0212d', title: 'PATENT_TITLE_5243' },
                { id: 'dc2fcd78-73b1-4207-85df-e260c0405cc7', title: 'PATENT_TITLE_1036' },
            ]}
        />
    </Box>
)

export default App