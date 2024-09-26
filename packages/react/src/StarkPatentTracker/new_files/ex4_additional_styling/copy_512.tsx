import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4ab669a3-09e5-4dd9-bce8-fd0856f51818', title: 'PATENT_TITLE_4797' },
                { id: '38183b26-3be9-446c-82ec-a121cf4ba297', title: 'PATENT_TITLE_5646' },
            ]}
        />
    </Box>
)

export default App