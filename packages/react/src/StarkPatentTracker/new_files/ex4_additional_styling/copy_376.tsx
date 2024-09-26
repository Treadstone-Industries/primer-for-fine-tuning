import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '6ce483eb-2506-492d-9013-31aef6f3efe0', title: 'PATENT_TITLE_7479' },
                { id: '84efaa57-0ecd-4d03-ad1c-1ccc11479893', title: 'PATENT_TITLE_5915' },
                { id: 'ae266ac8-e6e5-4ffe-9edc-e1a8eb8dc401', title: 'PATENT_TITLE_8006' },
            ]}
        />
    </Box>
)

export default App