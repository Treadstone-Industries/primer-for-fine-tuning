import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '82bf27c8-f889-4051-a35f-7171a33fb029', title: 'PATENT_TITLE_8961' },
                { id: 'fa863001-6cc3-419f-bede-de3ad0134b2d', title: 'PATENT_TITLE_8353' },
                { id: '76eb46ad-ef8f-4d06-9a84-99c9ec6f32ce', title: 'PATENT_TITLE_2866' },
                { id: 'e0606cd2-9811-4f72-bdb4-612cc0c91a4f', title: 'PATENT_TITLE_5635' },
            ]}
        />
    </Box>
)

export default App