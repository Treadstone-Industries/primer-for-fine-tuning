import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'dfa4c502-081e-4f94-a2f9-0115050fc279', title: 'PATENT_TITLE_5354' },
                { id: 'b5d4bf6f-5c29-4b10-995d-94375e7a66f0', title: 'PATENT_TITLE_4672' },
                { id: 'a2ea10ad-2069-4572-8195-2e5343843f9e', title: 'PATENT_TITLE_6333' },
                { id: 'b7e55f91-675c-419d-991c-13954ee46a72', title: 'PATENT_TITLE_4139' },
                { id: 'cbfb0728-3e16-4b76-bdb8-c8e9c3596193', title: 'PATENT_TITLE_7195' },
                { id: 'a46726a9-a8f9-4c78-ba15-6207575dd3ef', title: 'PATENT_TITLE_8789' },
            ]}
        />
    </Box>
)

export default App