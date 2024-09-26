import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f34874bb-6b6f-4b59-9c57-6e2b2fe03a30', title: 'PATENT_TITLE_6858' },
                { id: '288f16dc-fdef-47f3-bc7a-a9f4c5828126', title: 'PATENT_TITLE_2592' },
                { id: '1a995b3c-3cb6-4d2f-a897-02a4ba05a725', title: 'PATENT_TITLE_2706' },
                { id: 'a571477e-63dd-41d0-90c8-672455620981', title: 'PATENT_TITLE_4706' },
                { id: '5bdc75e6-4aa2-4adc-9656-19979852bfa6', title: 'PATENT_TITLE_4913' },
            ]}
        />
    </Box>
)

export default App