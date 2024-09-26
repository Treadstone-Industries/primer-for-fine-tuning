import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '910dcac3-029c-4e32-80eb-1ca99f4b27dd', title: 'PATENT_TITLE_2222' },
                { id: 'c8e0bf00-394c-481a-b4b4-f57474c79a7c', title: 'PATENT_TITLE_2816' },
                { id: '8678c621-920b-4f12-842a-8ab4a20ae1b3', title: 'PATENT_TITLE_2521' },
                { id: '3ece3f0d-d708-4ae7-8c40-bdbc9a7e4cdf', title: 'PATENT_TITLE_9271' },
                { id: '68d85156-bf20-4cf3-9543-49c3bfe43bf4', title: 'PATENT_TITLE_3781' },
                { id: '63d7299b-09fc-460c-a842-ec1bc9a680b9', title: 'PATENT_TITLE_7158' },
                { id: '7e288e2f-a9e6-4bd3-9472-9490522f00cb', title: 'PATENT_TITLE_7368' },
            ]}
        />
    </Box>
)

export default App