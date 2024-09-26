import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '20f4790f-4abf-43f4-b938-ed30bc86fb13', title: 'PATENT_TITLE_8491' },
                { id: '07444131-d6e0-4a48-9812-cca72b27635e', title: 'PATENT_TITLE_8330' },
                { id: '99ed3b88-9fe5-47b0-b5c7-9e33506a3cdd', title: 'PATENT_TITLE_8466' },
                { id: '0b8c7c8f-53be-4005-85c6-d189a43af10f', title: 'PATENT_TITLE_7075' },
                { id: '312b6244-b9a5-44ab-9a3a-76c1ad8ebfd6', title: 'PATENT_TITLE_2053' },
                { id: '27f7e73e-9698-4da4-82e6-58716b9eef4f', title: 'PATENT_TITLE_5505' },
                { id: '6e56c0e4-41df-46af-b104-438ca6f9e851', title: 'PATENT_TITLE_2311' },
                { id: 'ac5f7232-5d00-47fb-a508-0a9e4ad98b6a', title: 'PATENT_TITLE_4802' },
            ]}
        />
    </Box>
)

export default App