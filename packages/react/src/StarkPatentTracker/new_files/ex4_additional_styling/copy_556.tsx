import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '488132eb-247f-4ddf-adf3-31c6d2a9a3e4', title: 'PATENT_TITLE_7250' },
                { id: '26fbb3f1-c903-4e09-a575-b3ae32adf17e', title: 'PATENT_TITLE_3453' },
                { id: '8f7d2ed9-a5d9-4a9f-b654-0826dbaa3a47', title: 'PATENT_TITLE_3503' },
                { id: '531958c9-36cd-48fd-9818-07f71cd7a2ba', title: 'PATENT_TITLE_6014' },
                { id: '1124b7f5-f71e-4a34-9b4d-011d759d0621', title: 'PATENT_TITLE_8481' },
                { id: '5b3240ee-8e7e-45de-a232-a577d6698327', title: 'PATENT_TITLE_7257' },
                { id: 'e5d611ea-0cad-4000-b11f-0cbd0e67055f', title: 'PATENT_TITLE_1072' },
                { id: 'f842a0f4-899e-4873-96af-4d4d86e3e13f', title: 'PATENT_TITLE_9298' },
                { id: '1c8f4442-24d9-438c-b8f0-8136352c5f5e', title: 'PATENT_TITLE_1655' },
                { id: '67ba32f1-7e7a-46ca-86ce-7eafe83198ed', title: 'PATENT_TITLE_1083' },
            ]}
        />
    </Box>
)

export default App