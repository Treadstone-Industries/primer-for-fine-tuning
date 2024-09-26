import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4dcf8dc9-62d5-4147-af36-e2324db49805', title: 'PATENT_TITLE_6628' },
                { id: '49c8e445-72d6-4254-983f-dba31eb1c65a', title: 'PATENT_TITLE_2170' },
            ]}
        />
    </Box>
)

export default App