import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bdfd1114-e4bd-4969-9946-914f181421fd', title: 'PATENT_TITLE_3578' },
                { id: '2285dc30-6546-41b7-ba31-e66ae82196cc', title: 'PATENT_TITLE_8104' },
            ]}
        />
    </Box>
)

export default App