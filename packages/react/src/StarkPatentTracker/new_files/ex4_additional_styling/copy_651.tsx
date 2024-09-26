import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bb2c251f-b0dc-4490-9331-57dfbbbfd294', title: 'PATENT_TITLE_4747' },
                { id: 'b7027a4f-982b-41a0-ab63-b11ea3d794f1', title: 'PATENT_TITLE_1174' },
                { id: '8ee22568-1ebf-45fc-8728-f91bd04f7a7e', title: 'PATENT_TITLE_3263' },
                { id: '12270caa-f574-4db8-adb1-cfc690cfdfef', title: 'PATENT_TITLE_3851' },
            ]}
        />
    </Box>
)

export default App