import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '112e63f9-d86f-4698-a75d-c13a0f65e192', title: 'PATENT_TITLE_5596' },
                { id: '2984b122-cd97-4f34-9759-464cd49d367d', title: 'PATENT_TITLE_7192' },
                { id: 'ff4127db-60d8-4e3e-b963-237d1b7e82c8', title: 'PATENT_TITLE_2962' },
                { id: '7f5b1226-01c5-490c-84e3-69674defb079', title: 'PATENT_TITLE_3859' },
                { id: '13103b6f-9d0f-4c3f-9ddc-078bbe01c8e7', title: 'PATENT_TITLE_6114' },
            ]}
        />
    </Box>
)

export default App