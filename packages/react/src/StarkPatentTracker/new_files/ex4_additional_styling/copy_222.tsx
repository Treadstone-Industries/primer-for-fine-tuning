import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '30d4bf24-6b47-4b80-b913-d4d0b9d04819', title: 'PATENT_TITLE_4821' },
                { id: '4f19faea-2ad4-4778-bfa0-34e774b4142e', title: 'PATENT_TITLE_3463' },
                { id: '47f44b62-504b-4768-acc6-51a195b59c10', title: 'PATENT_TITLE_9359' },
                { id: '388b12f5-6985-42c0-beef-6d8219de20b7', title: 'PATENT_TITLE_9451' },
                { id: '357f6d27-7c79-45a1-a332-dafc517ce4f9', title: 'PATENT_TITLE_5794' },
                { id: '02a42095-6b00-45eb-8112-99e9543040b0', title: 'PATENT_TITLE_3907' },
                { id: '8445bdf0-4947-4690-bf9f-77a844b895c4', title: 'PATENT_TITLE_5832' },
                { id: 'be8787fe-043f-4c82-8d68-8d07c499f098', title: 'PATENT_TITLE_4662' },
                { id: 'b3f57eef-4a45-404c-abf0-8505ff968c0a', title: 'PATENT_TITLE_2326' },
            ]}
        />
    </Box>
)

export default App