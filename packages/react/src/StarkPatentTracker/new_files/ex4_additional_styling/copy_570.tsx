import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'df56abb2-f23b-44a1-8904-97071e211e62', title: 'PATENT_TITLE_6367' },
                { id: 'f78f92a3-2bb1-4835-8b80-ce30ba105c93', title: 'PATENT_TITLE_3551' },
                { id: '7fb230c2-5b77-4461-a5cc-32a09e8bba65', title: 'PATENT_TITLE_2579' },
            ]}
        />
    </Box>
)

export default App