import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4a20eb58-4005-41d7-b7e9-e9d212dca294', title: 'PATENT_TITLE_7869' },
                { id: '48c4806b-41d5-4cc9-a7b3-9473b70cc518', title: 'PATENT_TITLE_4242' },
                { id: '4cc9003d-9329-4070-84d9-a36be9a97f32', title: 'PATENT_TITLE_4174' },
                { id: '01aed784-35ba-4722-83bb-fa49a518b15c', title: 'PATENT_TITLE_2878' },
                { id: 'f442464e-6705-42d9-837c-505531e24a6a', title: 'PATENT_TITLE_9291' },
                { id: '64877ef1-aa45-4896-a334-0d843ad29fa4', title: 'PATENT_TITLE_8737' },
                { id: '9516eec0-c59f-4d24-952b-2822cf5b76b3', title: 'PATENT_TITLE_6435' },
            ]}
        />
    </Box>
)

export default App