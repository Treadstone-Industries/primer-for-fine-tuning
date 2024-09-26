import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd33100d2-4b91-4e07-86ac-3f57e6706a9d', title: 'PATENT_TITLE_8249' },
                { id: '4492deb2-bb65-4d0a-b9c2-be6e09ab0115', title: 'PATENT_TITLE_3690' },
                { id: 'fee6c67b-2ca7-4e75-a1c1-e5fa9b56936e', title: 'PATENT_TITLE_8130' },
                { id: 'e832e7cc-c610-4bc5-b02e-4b2a78941a0c', title: 'PATENT_TITLE_3748' },
                { id: '762a42d0-f386-4df8-b5ee-da3b4bfde7c1', title: 'PATENT_TITLE_3291' },
                { id: '35ed597d-84a3-44a6-b4c0-84628ce5857d', title: 'PATENT_TITLE_5824' },
            ]}
        />
    </Box>
)

export default App