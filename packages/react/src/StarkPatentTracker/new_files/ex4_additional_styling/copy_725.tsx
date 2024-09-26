import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd3b8f954-5cd4-4070-977c-5ff19ffae30a', title: 'PATENT_TITLE_2410' },
                { id: '109f9344-f5d7-4a90-bdc0-7064d022e99a', title: 'PATENT_TITLE_6590' },
                { id: 'bbb74434-02a7-44d1-9bf6-449269ae8e17', title: 'PATENT_TITLE_5720' },
                { id: '9db9f8c8-73ff-469c-af29-ac14d1a4195d', title: 'PATENT_TITLE_2204' },
                { id: 'b7b12fa8-a684-423a-9fb5-104ed8559ca4', title: 'PATENT_TITLE_7831' },
                { id: 'c6ba607c-6690-422d-ab56-be97fc5fa5f3', title: 'PATENT_TITLE_1382' },
            ]}
        />
    </Box>
)

export default App