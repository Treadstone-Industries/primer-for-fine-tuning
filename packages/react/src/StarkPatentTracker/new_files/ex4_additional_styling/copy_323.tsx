import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '237e0f66-0fe9-445c-b090-04a32219e2b4', title: 'PATENT_TITLE_6029' },
                { id: '2891ae2f-e175-4f58-97ed-f87e30c25890', title: 'PATENT_TITLE_3996' },
                { id: 'fa861617-f18b-4096-8fcb-1d8ed6903043', title: 'PATENT_TITLE_3167' },
                { id: '1cc09c09-0afb-4fd1-8779-f5d5380f9f3e', title: 'PATENT_TITLE_5682' },
                { id: '099f6f6a-e91f-4de9-996d-b6cb59e403e6', title: 'PATENT_TITLE_5592' },
                { id: '87b1fac2-b16d-40c9-a66a-84c2fad5cde8', title: 'PATENT_TITLE_7954' },
                { id: 'fc279e14-06e0-40bb-b39e-4b13d8f87c10', title: 'PATENT_TITLE_7585' },
                { id: '6e79995a-8586-455d-af8c-cc7a8dddd49a', title: 'PATENT_TITLE_9774' },
                { id: 'e2c03c1d-1f6b-4f8b-b4a9-49d6c6dfec36', title: 'PATENT_TITLE_1875' },
            ]}
        />
    </Box>
)

export default App