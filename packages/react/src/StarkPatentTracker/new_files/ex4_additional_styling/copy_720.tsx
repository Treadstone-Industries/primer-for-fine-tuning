import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '816f5168-5ebc-4c0b-ba4e-9fcb804c1fd1', title: 'PATENT_TITLE_6483' },
                { id: 'a8667570-b5c6-48b7-b21e-57b6eeb1caf3', title: 'PATENT_TITLE_1390' },
            ]}
        />
    </Box>
)

export default App