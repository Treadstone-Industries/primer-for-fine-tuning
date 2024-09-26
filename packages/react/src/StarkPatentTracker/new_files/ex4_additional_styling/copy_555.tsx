import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e731caef-e408-4e2e-970f-a1f93dc3e676', title: 'PATENT_TITLE_7578' },
                { id: '54ceee74-df2b-4e65-b76a-46941a7b4b76', title: 'PATENT_TITLE_4349' },
                { id: '5c636ea8-d3fd-44a9-bcf3-6add8daea2f2', title: 'PATENT_TITLE_4736' },
            ]}
        />
    </Box>
)

export default App