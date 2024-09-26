import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '82d1d1a8-6f64-44ce-bc1f-004e0fb20140', title: 'PATENT_TITLE_6986' },
                { id: '9fb826df-e8cc-4450-bfd9-d14aed6e5de2', title: 'PATENT_TITLE_9591' },
                { id: '5175d7a2-b631-4dc7-9af2-70faeb71c5e7', title: 'PATENT_TITLE_6009' },
                { id: '5d5f586a-2e33-4ee2-8117-eedd0b62aac2', title: 'PATENT_TITLE_6424' },
                { id: '16ebec81-08a1-410c-86fc-4847bb1f875a', title: 'PATENT_TITLE_7590' },
                { id: '864fe986-0f45-4f61-b895-d564051697c3', title: 'PATENT_TITLE_9100' },
                { id: 'd869d47d-4b50-4396-a757-9076dd623b29', title: 'PATENT_TITLE_4840' },
                { id: '46ebb2c4-d106-41e2-88f2-6b857930d9ea', title: 'PATENT_TITLE_2784' },
                { id: '361be050-7211-4278-b1ed-703c49f2923f', title: 'PATENT_TITLE_8293' },
                { id: '76ae6dac-59f6-41f0-bcdd-d90682f13526', title: 'PATENT_TITLE_9496' },
            ]}
        />
    </Box>
)

export default App