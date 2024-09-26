import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c19bf3df-21e5-4970-aa4e-f5541bb351c6', title: 'PATENT_TITLE_2771' },
                { id: 'f6e8c7bc-d612-4430-9c90-51a14e2bb429', title: 'PATENT_TITLE_4943' },
                { id: '93e194e4-a4ed-468c-8999-8e14e618d0d3', title: 'PATENT_TITLE_1297' },
                { id: '3a5492a3-6f81-41e6-bb92-491ed5fd0ae3', title: 'PATENT_TITLE_9490' },
                { id: '245131f5-d473-4fc7-b955-eb4e31ec6bde', title: 'PATENT_TITLE_6408' },
            ]}
        />
    </Box>
)

export default App