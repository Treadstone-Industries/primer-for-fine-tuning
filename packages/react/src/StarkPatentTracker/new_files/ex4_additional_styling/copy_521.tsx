import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8987a230-c7a1-4860-9ba2-c4582e81cb0b', title: 'PATENT_TITLE_3181' },
                { id: '5867b135-c14f-4c79-82b2-d13883c311b1', title: 'PATENT_TITLE_9087' },
                { id: 'ed0527a8-f4fd-45fe-9483-ea5c87f966c2', title: 'PATENT_TITLE_1210' },
                { id: '46f649c9-8406-460a-a7bd-1eb62a51b866', title: 'PATENT_TITLE_8542' },
                { id: 'df1deb13-c0e5-421b-80af-f61ba6bb447f', title: 'PATENT_TITLE_5731' },
                { id: '8533919e-6c47-4633-b51e-91758965190a', title: 'PATENT_TITLE_9535' },
            ]}
        />
    </Box>
)

export default App