import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '42e13243-1b2d-4cc6-8fbb-7141030be080', title: 'PATENT_TITLE_9436' },
                { id: '4f79d785-d386-4782-b74c-7eeb77b58ba4', title: 'PATENT_TITLE_5365' },
                { id: 'ece5b444-8c52-4926-b77c-a485199ccfb1', title: 'PATENT_TITLE_9085' },
                { id: '70b27bb5-e2f3-4196-87dd-da341c05054f', title: 'PATENT_TITLE_3394' },
                { id: '87d3b4ab-a440-4aca-a390-0c689bbdc528', title: 'PATENT_TITLE_8573' },
                { id: '15b52bb9-25a0-47dc-b9f0-accb77fee060', title: 'PATENT_TITLE_1233' },
                { id: 'cca291e8-8c1b-46a7-b9ef-13128727d91c', title: 'PATENT_TITLE_4108' },
            ]}
        />
    </Box>
)

export default App