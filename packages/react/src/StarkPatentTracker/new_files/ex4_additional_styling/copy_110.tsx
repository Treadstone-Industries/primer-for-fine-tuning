import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c5998b69-6c99-44a8-a30f-83fb9118552c', title: 'PATENT_TITLE_3977' },
                { id: '383e24c1-1466-4ede-a645-127ec3e511f9', title: 'PATENT_TITLE_3137' },
                { id: 'e050687e-b117-4aa6-82c7-282d78c1b6a6', title: 'PATENT_TITLE_2883' },
                { id: '78069901-2cb3-4f41-8a46-f45b26e312c1', title: 'PATENT_TITLE_9206' },
                { id: '835196c2-9423-4b63-b061-779cfb0f66d8', title: 'PATENT_TITLE_9432' },
                { id: '4ba5dd39-c020-4701-ab62-f5c9d9c5e1ec', title: 'PATENT_TITLE_4861' },
                { id: 'fb77800d-3f58-4413-b16d-a2411fb188c1', title: 'PATENT_TITLE_3505' },
            ]}
        />
    </Box>
)

export default App