import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6ac1f520-b896-4dc7-9d3c-747596eddf4a', title: 'PATENT_TITLE_3034' },
                { id: 'a247e9b4-d60b-47af-895e-458bda2b8a29', title: 'PATENT_TITLE_4117' },
                { id: 'f9232981-7935-4d8b-b074-339efb09b5cf', title: 'PATENT_TITLE_8526' },
                { id: '47cea97d-f597-4a89-85d3-5fd4b578ad97', title: 'PATENT_TITLE_9972' },
                { id: 'f5f11c48-129a-4c4b-b5d2-c8537ce43db0', title: 'PATENT_TITLE_3583' },
                { id: 'e5a166f2-e894-480e-8ce5-f3954ce35521', title: 'PATENT_TITLE_1520' },
            ]}
        />
    </Box>
)

export default App