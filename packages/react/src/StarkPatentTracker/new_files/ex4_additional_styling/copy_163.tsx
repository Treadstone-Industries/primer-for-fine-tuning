import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '0871dd10-eaf8-4f69-ac8c-daeb97f525b9', title: 'PATENT_TITLE_6009' },
                { id: '223c22a1-0bc7-4079-aa7e-9b397057b63f', title: 'PATENT_TITLE_4469' },
                { id: '32af32ef-c0cb-442c-a5e3-ecc7a5443b15', title: 'PATENT_TITLE_9640' },
                { id: 'eacc154e-e336-4c74-917c-a1bd260f6e42', title: 'PATENT_TITLE_3367' },
                { id: 'f0cdedbf-d8ba-431d-bcb9-8395160c52fa', title: 'PATENT_TITLE_5584' },
            ]}
        />
    </Box>
)

export default App