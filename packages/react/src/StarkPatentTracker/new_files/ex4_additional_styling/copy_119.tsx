import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7cfc2488-3d6d-4cef-8f37-ec64f4af4d4a', title: 'PATENT_TITLE_9293' },
                { id: 'b7324104-b77f-42ac-b0e6-7884c2160e9c', title: 'PATENT_TITLE_4106' },
                { id: '9c0abe32-06db-42c2-94ff-4d3015ae7af5', title: 'PATENT_TITLE_6365' },
                { id: '3f18604a-0b8b-4010-97f2-de9ebc0121e0', title: 'PATENT_TITLE_7359' },
                { id: 'c6808756-aac8-4d3c-9edb-895400c847bb', title: 'PATENT_TITLE_1154' },
            ]}
        />
    </Box>
)

export default App