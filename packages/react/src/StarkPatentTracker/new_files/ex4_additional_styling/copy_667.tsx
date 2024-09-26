import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '85f95b88-f012-4734-90d4-9e78f3ea7799', title: 'PATENT_TITLE_8091' },
                { id: '01165c34-b947-4b33-b47d-913b25569cf8', title: 'PATENT_TITLE_4237' },
                { id: '90b03f1c-fb5b-4691-bd7e-fd3261d4802c', title: 'PATENT_TITLE_9004' },
                { id: '7eabe3d1-1266-411e-b8bb-f731e462c7c7', title: 'PATENT_TITLE_5573' },
            ]}
        />
    </Box>
)

export default App