import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '81ff66ed-1e63-4d7f-9ba3-4278a6627c80', title: 'PATENT_TITLE_3125' },
                { id: '7f70351b-679e-4834-a455-815744e7d75e', title: 'PATENT_TITLE_1134' },
                { id: 'c4cc45d4-ca67-4545-b7bb-9f94043a1c35', title: 'PATENT_TITLE_4088' },
                { id: '4cfa0947-90d3-40b0-9824-b44d3d138a96', title: 'PATENT_TITLE_3335' },
                { id: '558bf19c-10bc-41c6-8f21-4bc6ed16b0e6', title: 'PATENT_TITLE_1010' },
                { id: '8b9305ef-a1c8-473f-8380-99c6911bae7c', title: 'PATENT_TITLE_7548' },
            ]}
        />
    </Box>
)

export default App