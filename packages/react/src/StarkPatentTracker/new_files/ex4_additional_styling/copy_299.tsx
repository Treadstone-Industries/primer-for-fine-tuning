import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a4c4331d-29b5-49de-91ff-8f0859e2019d', title: 'PATENT_TITLE_8597' },
                { id: 'ba4e68b7-1420-4388-b6d3-0f13b71e0962', title: 'PATENT_TITLE_3919' },
                { id: 'ceebcdfa-93b2-47b8-b781-80a805b1bc2c', title: 'PATENT_TITLE_4557' },
                { id: '080fa7e3-d7ab-4709-bd0e-e23aeb0a8f13', title: 'PATENT_TITLE_6453' },
                { id: 'b13a9b66-9704-46e3-88f7-bc1936b5875c', title: 'PATENT_TITLE_3389' },
                { id: 'fbda0f92-74b0-4d67-8bbe-dc5d5f2fe283', title: 'PATENT_TITLE_4517' },
            ]}
        />
    </Box>
)

export default App