import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9dd17559-f087-4240-97e5-05dd6d38b7ac', title: 'PATENT_TITLE_1381' },
                { id: 'bf07f7de-b5ae-490d-8425-4604b6f95259', title: 'PATENT_TITLE_6012' },
                { id: '2d37f67a-1b6c-4902-8337-4307e01eaf7a', title: 'PATENT_TITLE_6408' },
            ]}
        />
    </Box>
)

export default App