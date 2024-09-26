import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'da1c94f0-0e9f-44bb-8d9a-11b4cc7ca174', title: 'PATENT_TITLE_3815' },
                { id: '7017cf00-8cfe-45e4-ae1d-200eb4254d88', title: 'PATENT_TITLE_8252' },
                { id: 'bf116524-46da-43d8-b4e9-24942a0ebb9c', title: 'PATENT_TITLE_3140' },
            ]}
        />
    </Box>
)

export default App