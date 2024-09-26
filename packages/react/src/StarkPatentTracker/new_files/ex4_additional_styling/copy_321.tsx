import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '014f3f1b-80ff-4557-8eb1-e5de11f08dad', title: 'PATENT_TITLE_9212' },
                { id: '52c3c008-f622-4709-a647-afd270effd03', title: 'PATENT_TITLE_8382' },
                { id: '430807b5-77c6-4615-beb2-2427a142a511', title: 'PATENT_TITLE_5053' },
                { id: 'cacdd7a3-aa3c-40c7-b5c6-cfe3b623a4b8', title: 'PATENT_TITLE_5495' },
                { id: '16b6ab13-b809-48fd-8c99-d6e8b9eab00f', title: 'PATENT_TITLE_8814' },
                { id: '5fd3f67c-8594-44de-ad0d-b0a95f4273b7', title: 'PATENT_TITLE_9106' },
            ]}
        />
    </Box>
)

export default App