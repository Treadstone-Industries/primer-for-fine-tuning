import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4f9a9d16-eb05-4b17-b299-baef41a3ba10', title: 'PATENT_TITLE_5882' },
                { id: '9d268f98-d328-440a-8af8-4d2ceeb86f81', title: 'PATENT_TITLE_4146' },
                { id: '4a79572f-4a71-4915-850c-f6491fec913f', title: 'PATENT_TITLE_8819' },
                { id: 'ca80fdb0-de44-405d-8302-94b4044529e3', title: 'PATENT_TITLE_5683' },
                { id: '7634d817-8cb5-477b-ba01-3c399b90eb26', title: 'PATENT_TITLE_9615' },
                { id: 'eb7be706-a48f-4eca-ae64-d50b9aed678c', title: 'PATENT_TITLE_8783' },
                { id: 'b091b168-c886-490d-8cd0-6ab3e8f0cbca', title: 'PATENT_TITLE_3694' },
            ]}
        />
    </Box>
)

export default App