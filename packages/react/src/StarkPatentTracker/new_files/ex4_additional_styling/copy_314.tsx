import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '576a1e73-5943-4cd8-b769-cdabef4c5a25', title: 'PATENT_TITLE_8100' },
                { id: 'ded3d0ca-d079-4e6a-a83a-5cd3e750aae2', title: 'PATENT_TITLE_3016' },
                { id: '39000b03-11e6-43b1-840c-8a0c611cee5d', title: 'PATENT_TITLE_5208' },
            ]}
        />
    </Box>
)

export default App