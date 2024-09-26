import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c9300112-7930-4dec-84fc-4920258b8467', title: 'PATENT_TITLE_5549' },
                { id: 'd900c891-144a-4f1b-81db-48e40c150635', title: 'PATENT_TITLE_7043' },
                { id: 'fec4195e-4b56-4bd7-8e86-91f4aaeda30b', title: 'PATENT_TITLE_8593' },
                { id: '2343e4e9-199c-4a33-85c7-2e6e952b2e79', title: 'PATENT_TITLE_9868' },
                { id: '5d0eeca3-750c-4725-acb4-bd568486373b', title: 'PATENT_TITLE_8457' },
            ]}
        />
    </Box>
)

export default App