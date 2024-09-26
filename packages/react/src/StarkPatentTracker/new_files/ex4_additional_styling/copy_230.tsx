import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5c86776d-7413-4ccf-9d8a-a6bc7c7332ad', title: 'PATENT_TITLE_6706' },
                { id: '35f3268f-f1cb-44ff-b784-6c4da8b75d9f', title: 'PATENT_TITLE_6834' },
                { id: '27f701c7-af2f-46bf-8f4a-71eaf84d30c3', title: 'PATENT_TITLE_2904' },
                { id: '5aac14db-49db-451f-9ed3-97e4b2766fe8', title: 'PATENT_TITLE_8955' },
                { id: '1037ebd5-3830-41ae-823d-085fca5e4bcb', title: 'PATENT_TITLE_7750' },
            ]}
        />
    </Box>
)

export default App