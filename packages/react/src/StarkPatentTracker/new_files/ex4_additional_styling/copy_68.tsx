import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'de99eb0f-d67a-4d5c-a903-34495595777e', title: 'PATENT_TITLE_8341' },
                { id: 'f703cc63-b7a2-4e30-8ef9-a2149b74ab37', title: 'PATENT_TITLE_8164' },
            ]}
        />
    </Box>
)

export default App