import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c2a37010-9f99-40cd-be5e-c4b36fb849de', title: 'PATENT_TITLE_5095' },
                { id: 'aff7a195-8f94-4b78-acde-47082b0749c4', title: 'PATENT_TITLE_5704' },
                { id: '556698e4-8db6-4648-a1b2-b3f09558f1a1', title: 'PATENT_TITLE_5731' },
                { id: 'dce1304e-2c5f-44b6-9b74-8934b73721d3', title: 'PATENT_TITLE_5320' },
                { id: '7ce5d7d0-4946-44b6-b4e0-937e9799fd99', title: 'PATENT_TITLE_4878' },
                { id: '2e989ed8-072e-40bd-8630-21dd810ce75f', title: 'PATENT_TITLE_2443' },
            ]}
        />
    </Box>
)

export default App