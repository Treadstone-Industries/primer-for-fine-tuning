import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '92003a21-898d-4c81-b0bb-bbf8399676c9', title: 'PATENT_TITLE_5102' },
                { id: '60fe861c-7619-47fe-b893-fb7f61970add', title: 'PATENT_TITLE_6395' },
                { id: '54b76ebe-3f2d-40e3-b69b-ff08f9ebee27', title: 'PATENT_TITLE_9353' },
                { id: '84b9c126-57bb-4a9b-837e-5ac5fb026757', title: 'PATENT_TITLE_4777' },
            ]}
        />
    </Box>
)

export default App