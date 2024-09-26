import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c471f880-d487-471c-bea5-b8385bda64e9', title: 'PATENT_TITLE_9365' },
                { id: '52639152-040b-4ac3-8115-0ca13d40e44c', title: 'PATENT_TITLE_3616' },
                { id: '1a43458f-4006-4b24-919c-60184d1c0c24', title: 'PATENT_TITLE_9906' },
            ]}
        />
    </Box>
)

export default App