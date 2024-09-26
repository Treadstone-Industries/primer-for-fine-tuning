import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e34220d8-0fb4-4452-8ec3-e00a74362438', title: 'PATENT_TITLE_3796' },
                { id: '46956e7e-cf56-4b6b-9332-f96026e2bed8', title: 'PATENT_TITLE_7380' },
                { id: 'ee02ef44-76e7-41ac-8bb4-b6228f247392', title: 'PATENT_TITLE_6134' },
            ]}
        />
    </Box>
)

export default App