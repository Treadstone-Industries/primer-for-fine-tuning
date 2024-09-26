import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '92a7745c-e2e1-4707-bdf6-2618b5103b4b', title: 'PATENT_TITLE_2041' },
                { id: 'b11abdca-a546-46e4-a16b-416968d1478a', title: 'PATENT_TITLE_7957' },
                { id: '0659013c-47bf-4f06-a4f2-94c5b3d96152', title: 'PATENT_TITLE_9935' },
            ]}
        />
    </Box>
)

export default App