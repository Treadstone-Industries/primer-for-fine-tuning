import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8980871f-f914-45be-b717-0d67e09e82bd', title: 'PATENT_TITLE_9427' },
                { id: 'b7910bfa-0b0d-4072-9beb-42cb2662468c', title: 'PATENT_TITLE_7257' },
                { id: 'dfe99373-e6a5-4e19-8f17-6d2de83f08d4', title: 'PATENT_TITLE_1468' },
            ]}
        />
    </Box>
)

export default App