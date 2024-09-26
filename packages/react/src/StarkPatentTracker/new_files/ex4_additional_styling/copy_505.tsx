import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ff82a056-da4f-47fd-aa2c-5c0af31aaa34', title: 'PATENT_TITLE_2716' },
                { id: '16022b6c-c632-41df-b663-5241e7c2bd4b', title: 'PATENT_TITLE_7876' },
                { id: '2ccb4831-4a5a-461d-8e6a-de46fe4876cc', title: 'PATENT_TITLE_7504' },
                { id: '182c7a22-6e8f-473c-983e-857c9c450a1a', title: 'PATENT_TITLE_7023' },
            ]}
        />
    </Box>
)

export default App