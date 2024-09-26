import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e7d33b21-a8e9-4f6c-862c-eee16b871926', title: 'PATENT_TITLE_2593' },
                { id: 'a52359fb-6e26-4328-9362-5b1193834cd7', title: 'PATENT_TITLE_1822' },
            ]}
        />
    </Box>
)

export default App