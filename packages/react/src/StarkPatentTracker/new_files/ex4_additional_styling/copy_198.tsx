import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ca9a0a2a-7328-4664-938f-574c993edcf0', title: 'PATENT_TITLE_2732' },
                { id: '91f2e81a-461c-4a55-8f79-c83c552432d0', title: 'PATENT_TITLE_2161' },
                { id: 'c9d81b27-c334-4b02-b848-03973a8b891d', title: 'PATENT_TITLE_7579' },
                { id: '02bd20a6-d7d1-4efb-b2e9-bb516dd2344a', title: 'PATENT_TITLE_4081' },
            ]}
        />
    </Box>
)

export default App