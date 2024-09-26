import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '61e3962c-7d2d-4ce2-8514-c18a70c26854', title: 'PATENT_TITLE_6798' },
                { id: '7197d06f-442f-4147-937a-c00e511101fc', title: 'PATENT_TITLE_5897' },
                { id: '2283c337-a338-458c-8703-6c78591ebff8', title: 'PATENT_TITLE_3911' },
                { id: 'd0c069b0-a59d-4c59-9875-595f705c7821', title: 'PATENT_TITLE_6442' },
                { id: 'f458f5f9-3538-48f2-bbcf-f0a0afefb69f', title: 'PATENT_TITLE_4438' },
                { id: 'ed92bd49-d434-47cf-9c2f-2e87d27a32d6', title: 'PATENT_TITLE_9948' },
                { id: '015e475b-3615-43eb-b46e-5c17fddbdc9b', title: 'PATENT_TITLE_5740' },
                { id: '53417ced-c272-49c0-8b87-d7ad77560cd6', title: 'PATENT_TITLE_3356' },
            ]}
        />
    </Box>
)

export default App