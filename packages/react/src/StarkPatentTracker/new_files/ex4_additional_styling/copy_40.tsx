import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5e393ae5-b4bc-4b4b-bf7e-0fabf19cbf9a', title: 'PATENT_TITLE_1720' },
                { id: '6f6fd313-cda2-4c33-9e0d-2aacab500192', title: 'PATENT_TITLE_8542' },
                { id: '127c0ff3-d15b-4d3b-a6aa-0f1d1355aeb8', title: 'PATENT_TITLE_8857' },
                { id: '96170fee-142c-4c8a-8b95-033b520cf3fb', title: 'PATENT_TITLE_5134' },
                { id: '9ab841c9-a453-4ff0-8e5a-05585aa9a1d9', title: 'PATENT_TITLE_8891' },
            ]}
        />
    </Box>
)

export default App