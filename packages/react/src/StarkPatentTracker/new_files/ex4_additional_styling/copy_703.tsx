import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fd9d68f2-eda7-4afa-bd74-8d16a048f832', title: 'PATENT_TITLE_1661' },
                { id: '9911de67-afc0-47fb-9b00-bfe4279be718', title: 'PATENT_TITLE_5734' },
                { id: '085ffa14-8f77-426b-b602-1dba62e3ff3a', title: 'PATENT_TITLE_5115' },
                { id: '0e62276a-c65e-49c3-9c70-d3f5f63608b5', title: 'PATENT_TITLE_4697' },
                { id: '5a2d644a-eb19-43a3-9d10-cac5ccb79e29', title: 'PATENT_TITLE_5954' },
                { id: 'f6675d56-9423-4ddf-863c-af3d6fa8b567', title: 'PATENT_TITLE_5338' },
                { id: '417372ae-dc18-4189-862f-fe37e70a0bc0', title: 'PATENT_TITLE_3539' },
            ]}
        />
    </Box>
)

export default App