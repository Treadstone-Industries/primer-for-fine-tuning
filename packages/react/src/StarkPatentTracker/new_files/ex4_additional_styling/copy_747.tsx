import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c9100f5c-ca10-4281-b38e-5ae326e1c7ed', title: 'PATENT_TITLE_8316' },
                { id: '4177d0e7-6296-45d0-a08b-8ecf5c04d469', title: 'PATENT_TITLE_8562' },
                { id: '99da62a4-e75a-48dd-87c9-56768a602079', title: 'PATENT_TITLE_7974' },
                { id: 'c81d9894-35c9-403b-90f8-c465d6b22ccc', title: 'PATENT_TITLE_7883' },
                { id: '19da797c-2a52-4671-9b20-9f9e08ab9a30', title: 'PATENT_TITLE_7071' },
                { id: '52749dcb-6c0f-4d63-9480-51483033704f', title: 'PATENT_TITLE_9572' },
                { id: '39faf37e-4a1b-412d-b238-597367ff556a', title: 'PATENT_TITLE_2505' },
            ]}
        />
    </Box>
)

export default App