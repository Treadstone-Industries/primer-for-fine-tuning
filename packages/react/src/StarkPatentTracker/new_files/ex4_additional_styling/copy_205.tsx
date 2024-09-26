import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b43c9a01-7e99-4b27-b593-23cf86697f3b', title: 'PATENT_TITLE_3925' },
                { id: '446fed03-2a7c-4082-a211-80fbc74fccb3', title: 'PATENT_TITLE_9822' },
                { id: '51b33e6a-c001-4550-8250-8ff76916b076', title: 'PATENT_TITLE_8058' },
            ]}
        />
    </Box>
)

export default App