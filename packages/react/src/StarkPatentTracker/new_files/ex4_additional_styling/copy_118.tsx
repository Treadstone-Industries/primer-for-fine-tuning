import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'eeffb61a-2524-4149-90ab-faec20c53955', title: 'PATENT_TITLE_8547' },
                { id: '96e1f9c3-1518-47f8-96ee-616ffc8aa8a9', title: 'PATENT_TITLE_9219' },
                { id: '1aaddc15-16d6-4f14-ab6b-a6ec93c3b4c3', title: 'PATENT_TITLE_4581' },
                { id: '128e1ef3-080b-403f-ba08-06b889554657', title: 'PATENT_TITLE_2022' },
                { id: 'eb19f5fc-b702-4595-913c-177e26ddca6e', title: 'PATENT_TITLE_1988' },
            ]}
        />
    </Box>
)

export default App