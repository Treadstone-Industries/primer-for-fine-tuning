import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2641d5c0-f3cc-4e9a-96c6-3ffe46b92134', title: 'PATENT_TITLE_1821' },
                { id: '2660a395-73d5-4482-b0a8-7d9182a6b6ea', title: 'PATENT_TITLE_9223' },
                { id: '301b0f5a-4947-4f17-b3c8-02df01e83198', title: 'PATENT_TITLE_4339' },
                { id: 'c0d4136b-4ac1-4e90-b302-1f1e8f897e09', title: 'PATENT_TITLE_1663' },
                { id: 'c78c6c99-a586-4b7a-9cfa-d3a620571dcf', title: 'PATENT_TITLE_5457' },
                { id: 'fd470883-7a81-4389-bca6-e9fff8e7c123', title: 'PATENT_TITLE_3731' },
            ]}
        />
    </Box>
)

export default App