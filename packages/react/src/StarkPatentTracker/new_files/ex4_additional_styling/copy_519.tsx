import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '336e1796-0240-44b7-ad70-559b4d6d6b4f', title: 'PATENT_TITLE_6594' },
                { id: '8e55e63f-4a73-4004-b246-1f33db7532aa', title: 'PATENT_TITLE_1124' },
                { id: '9c34b105-4035-48f6-a0b9-7a66311430db', title: 'PATENT_TITLE_5646' },
                { id: '0c3962ee-ac28-4906-8cc9-01e2ae711846', title: 'PATENT_TITLE_7784' },
                { id: 'a49c65be-3c51-4f17-888c-3aa545e3b246', title: 'PATENT_TITLE_5795' },
                { id: 'f32716ab-f96a-4dc5-a658-771ec4509e2d', title: 'PATENT_TITLE_1590' },
            ]}
        />
    </Box>
)

export default App