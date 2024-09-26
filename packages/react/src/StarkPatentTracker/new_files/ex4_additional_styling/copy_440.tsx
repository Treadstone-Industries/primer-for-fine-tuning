import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'dd5f3108-04c9-414b-93c9-a423c724193d', title: 'PATENT_TITLE_2649' },
                { id: '7bc1a22e-6e1a-4945-add1-6e1357ff5cac', title: 'PATENT_TITLE_3858' },
                { id: '1b848359-9478-4d66-97d6-bb1bcef54ea3', title: 'PATENT_TITLE_2208' },
            ]}
        />
    </Box>
)

export default App