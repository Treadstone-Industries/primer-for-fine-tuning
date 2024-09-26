import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6d3c4701-46c3-4c81-9bfc-8121b325d5d8', title: 'PATENT_TITLE_2790' },
                { id: '49bebb0e-0b29-4d9c-bae6-53c4b5633528', title: 'PATENT_TITLE_2702' },
                { id: '7d544034-c706-4471-bc03-4c4c1c3e2a5e', title: 'PATENT_TITLE_4264' },
                { id: '4261af99-7a95-4570-8826-92c3971236a8', title: 'PATENT_TITLE_8728' },
                { id: '1e751dc8-7923-4028-b924-6413dcda3c21', title: 'PATENT_TITLE_3314' },
            ]}
        />
    </Box>
)

export default App