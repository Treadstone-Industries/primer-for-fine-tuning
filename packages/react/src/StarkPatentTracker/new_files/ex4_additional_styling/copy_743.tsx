import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ca5e9d3a-739a-4930-b8cc-ae1161cc761d', title: 'PATENT_TITLE_5060' },
                { id: 'a5fc8100-063d-4f07-a507-762002b3e123', title: 'PATENT_TITLE_3764' },
                { id: '7992ef9b-9978-49dd-8e35-70f0fad616b6', title: 'PATENT_TITLE_1718' },
                { id: '75a6272a-bb93-4c45-a7bc-021eb0839376', title: 'PATENT_TITLE_3674' },
                { id: 'b2e02ea5-fe87-4654-bd45-057c7af87f95', title: 'PATENT_TITLE_5242' },
            ]}
        />
    </Box>
)

export default App