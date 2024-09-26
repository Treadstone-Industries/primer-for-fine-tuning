import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bd35b6d1-e961-428d-b646-269e56e5b230', title: 'PATENT_TITLE_6048' },
                { id: '3ad0c779-31fe-4e24-b801-355f07ce4f2c', title: 'PATENT_TITLE_4877' },
                { id: 'a6cfca8e-2e1d-4b83-9f20-d3e28cbc8183', title: 'PATENT_TITLE_7911' },
                { id: 'd7d61803-de4e-4e2d-b7e3-50e01268df76', title: 'PATENT_TITLE_5806' },
                { id: '902be875-404b-4f06-be95-63abedf08d6b', title: 'PATENT_TITLE_4374' },
                { id: '90940a5c-9689-440d-aa26-ddbe8c9849b1', title: 'PATENT_TITLE_2145' },
            ]}
        />
    </Box>
)

export default App