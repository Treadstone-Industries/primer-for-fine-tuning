import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bbeaed23-12c4-41d5-959b-4fcbea8e0f70', title: 'PATENT_TITLE_9278' },
                { id: 'caccc716-92a4-46e1-99f7-0b1b95c3bd0f', title: 'PATENT_TITLE_3322' },
                { id: '41e0261d-4cb9-4776-97d4-505f45cad73a', title: 'PATENT_TITLE_5043' },
                { id: '1522b883-8d2c-4528-9a10-135f72e70b3e', title: 'PATENT_TITLE_1394' },
            ]}
        />
    </Box>
)

export default App