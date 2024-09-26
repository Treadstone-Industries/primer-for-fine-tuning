import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7dc004d1-4ac3-4d78-af74-2bec4db2319f', title: 'PATENT_TITLE_5401' },
                { id: '77cb824b-01ac-475d-82bd-94724014a176', title: 'PATENT_TITLE_9468' },
                { id: 'b00dfec2-14e0-4c20-b1bf-4cb3942c0f05', title: 'PATENT_TITLE_5621' },
                { id: '5bf932cc-485f-4492-834b-778aa742fb9a', title: 'PATENT_TITLE_9720' },
                { id: '124e096c-6847-43ff-bae5-a615d216a32e', title: 'PATENT_TITLE_9329' },
                { id: 'db5fb192-14a9-4222-85ce-e3a6d8629cd8', title: 'PATENT_TITLE_3757' },
            ]}
        />
    </Box>
)

export default App