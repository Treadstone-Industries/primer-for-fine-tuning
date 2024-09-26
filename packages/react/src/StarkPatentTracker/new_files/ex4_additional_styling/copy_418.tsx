import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bbe6b5fe-3762-46c1-802e-506e37a818f6', title: 'PATENT_TITLE_5090' },
                { id: 'ea0e8a8c-d067-4a09-b497-2e34b3e956e8', title: 'PATENT_TITLE_7064' },
                { id: 'b2c16898-8db3-4293-84b8-d32a4353200a', title: 'PATENT_TITLE_2801' },
                { id: '250fb9f5-a394-4bd2-988a-299cdfaad1b2', title: 'PATENT_TITLE_3263' },
                { id: 'bcd89679-f749-42e8-b761-a5218d3b04a4', title: 'PATENT_TITLE_9695' },
                { id: '328d5820-4967-41fd-987a-ecd47fe12718', title: 'PATENT_TITLE_3751' },
            ]}
        />
    </Box>
)

export default App