import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '883a77ee-9bce-4a52-b51f-80e56a013af7', title: 'PATENT_TITLE_6183' },
                { id: '31e2191f-07d4-4978-b338-c118ee3114be', title: 'PATENT_TITLE_9195' },
                { id: 'c0b9f185-ac6f-4cc8-b535-5c71965bfc8b', title: 'PATENT_TITLE_4405' },
                { id: '3e1eecaa-bc95-4ea5-b9db-447e5cd91bdb', title: 'PATENT_TITLE_6079' },
            ]}
        />
    </Box>
)

export default App