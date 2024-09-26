import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5c252a22-2ba5-4863-a79e-4244fbea7eef', title: 'PATENT_TITLE_4837' },
                { id: '91b63761-fc61-4711-b4f0-4156aaa6e803', title: 'PATENT_TITLE_6037' },
                { id: 'c9cf758b-a40e-4a7f-b1b5-5e6f5160e9d3', title: 'PATENT_TITLE_9199' },
                { id: '145ab1cc-a4bc-40bf-81ee-9bef862e144f', title: 'PATENT_TITLE_7028' },
                { id: '7f7f707a-e70f-46d9-9da1-d213f32f2907', title: 'PATENT_TITLE_2602' },
            ]}
        />
    </Box>
)

export default App