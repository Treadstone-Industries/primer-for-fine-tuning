import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '60855665-99c0-4097-9313-2ba9c3727eaf', title: 'PATENT_TITLE_2363' },
                { id: '28afbd60-1d0d-4668-943d-b18a49c6a729', title: 'PATENT_TITLE_7646' },
                { id: 'db643ff5-8ea7-470f-88da-68352fc8ce31', title: 'PATENT_TITLE_8652' },
            ]}
        />
    </Box>
)

export default App