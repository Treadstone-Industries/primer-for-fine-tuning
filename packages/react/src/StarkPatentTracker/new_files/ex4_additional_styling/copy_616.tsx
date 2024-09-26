import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9a5fe27b-cb32-4fff-a139-76e2aab6bcc8', title: 'PATENT_TITLE_5261' },
                { id: '1c935e34-4229-4fe6-9ea4-2e50e0316dce', title: 'PATENT_TITLE_4137' },
                { id: 'b5e80064-0beb-4568-a9ff-5622464af05f', title: 'PATENT_TITLE_1016' },
                { id: '4f85c4a3-15b0-4da9-991d-5ab589f1ab4c', title: 'PATENT_TITLE_3241' },
                { id: '300b5ab5-7f76-47fe-bf24-410c750cdce9', title: 'PATENT_TITLE_2907' },
                { id: '8b994615-5d75-422a-9d0a-a9116fda1600', title: 'PATENT_TITLE_1680' },
                { id: '6b05a44a-4484-4ea7-ba5f-5342a51afbdd', title: 'PATENT_TITLE_7331' },
                { id: '13e70379-4bc1-443e-ac87-477985506b04', title: 'PATENT_TITLE_8214' },
                { id: '47d32a29-6541-4720-aed2-50ec3e86e9ca', title: 'PATENT_TITLE_4878' },
                { id: '207b5bf6-2a89-471e-b4a9-86acadb88fb5', title: 'PATENT_TITLE_7592' },
            ]}
        />
    </Box>
)

export default App