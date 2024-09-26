import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '426e2685-142c-4257-a47c-3dc5dfa584c8', title: 'PATENT_TITLE_4228' },
                { id: '381ec5c9-98c0-4533-a79f-5ebdc67a8aa7', title: 'PATENT_TITLE_5480' },
                { id: 'a35bccb2-f189-4309-bc6a-da8c35a4d0db', title: 'PATENT_TITLE_9989' },
            ]}
        />
    </Box>
)

export default App