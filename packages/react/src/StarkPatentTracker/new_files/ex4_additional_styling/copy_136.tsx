import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3a14ebeb-1033-44b5-8715-c09486f52f79', title: 'PATENT_TITLE_9381' },
                { id: 'd77244ac-8ead-4b57-8ecd-fdb53b189aeb', title: 'PATENT_TITLE_9902' },
                { id: '834c789c-3c26-4c33-a10a-f9d1bd09dfda', title: 'PATENT_TITLE_6767' },
                { id: '5d40ede0-2a1f-4e7f-b3bf-52af12e6a9b4', title: 'PATENT_TITLE_7160' },
                { id: 'c1766ae5-68dc-43ea-bc6f-ea1770b8be13', title: 'PATENT_TITLE_4819' },
            ]}
        />
    </Box>
)

export default App