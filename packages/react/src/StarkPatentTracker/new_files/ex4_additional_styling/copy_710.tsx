import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2c25e99f-f2f5-4a96-b074-6abac2fd2ae5', title: 'PATENT_TITLE_6621' },
                { id: '10ee3e90-653c-4900-a32e-ff5423ddcda2', title: 'PATENT_TITLE_6432' },
                { id: 'a783b4f6-0a2f-47c7-9ae0-011594a3beab', title: 'PATENT_TITLE_8675' },
                { id: '86942c03-dd05-447d-bb23-4aa7cda866c5', title: 'PATENT_TITLE_5969' },
                { id: '2e74831d-55e0-487d-99ec-8b36de9e981d', title: 'PATENT_TITLE_2599' },
                { id: '7129576d-08e5-485e-861a-f61e3b319cf2', title: 'PATENT_TITLE_2432' },
                { id: '0e401680-bdef-4534-8851-ffdcb1c6223a', title: 'PATENT_TITLE_8017' },
            ]}
        />
    </Box>
)

export default App