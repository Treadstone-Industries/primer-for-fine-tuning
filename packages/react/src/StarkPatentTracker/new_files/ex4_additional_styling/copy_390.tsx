import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5a6b3444-0aba-4726-9252-8e1b9e71ec1c', title: 'PATENT_TITLE_7538' },
                { id: 'fc62b3f0-3eaa-47f4-8e47-b2f2f1a1b51f', title: 'PATENT_TITLE_4992' },
                { id: 'e34f5fa1-81b0-42f5-bf39-41c0f93a515a', title: 'PATENT_TITLE_2187' },
                { id: '06b612f9-11ef-422e-bb4f-c739a3b12e8b', title: 'PATENT_TITLE_5868' },
                { id: '042378a2-7c89-4b45-a7c7-4dc3d56863ae', title: 'PATENT_TITLE_3688' },
            ]}
        />
    </Box>
)

export default App