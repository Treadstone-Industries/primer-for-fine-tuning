import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4df5e7a3-5aa7-48ef-aa66-cfccc6a05144', title: 'PATENT_TITLE_7558' },
                { id: 'b111b6a8-1e4b-4caf-829d-f3300d2e471e', title: 'PATENT_TITLE_7426' },
                { id: 'c5f456fa-b0f8-498c-b5a7-3dc5c551803b', title: 'PATENT_TITLE_9835' },
                { id: 'bf13f569-1c0c-4e8a-8f45-ca3ad85ed76a', title: 'PATENT_TITLE_3261' },
                { id: '77e3bc72-a0e3-4197-91bd-b8c1580df427', title: 'PATENT_TITLE_8773' },
                { id: 'ae077c5e-f53d-4741-8a51-62fea49e5b8c', title: 'PATENT_TITLE_9411' },
            ]}
        />
    </Box>
)

export default App