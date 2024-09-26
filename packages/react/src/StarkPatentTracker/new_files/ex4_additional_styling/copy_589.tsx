import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'cb2b6691-aa86-467b-8bc2-0f79f790190a', title: 'PATENT_TITLE_9758' },
                { id: 'a0781355-e051-4d91-85c6-00b7d3636ab9', title: 'PATENT_TITLE_7710' },
                { id: 'c154499e-416b-490f-8424-f7cd07762000', title: 'PATENT_TITLE_8747' },
                { id: '0bb49941-044d-449f-ab3d-8bfcbbdf1563', title: 'PATENT_TITLE_8905' },
                { id: 'aebbeeb4-8bd0-4bcd-b014-073c6b1376ef', title: 'PATENT_TITLE_9922' },
                { id: '4f60a3a4-4502-4b9f-ad07-95c56a9d6123', title: 'PATENT_TITLE_1651' },
                { id: '64539208-f1da-4b97-bd2f-e4edf236575e', title: 'PATENT_TITLE_9165' },
                { id: 'a3d48ba4-ee4f-47a9-9a81-722a3a16210e', title: 'PATENT_TITLE_6441' },
                { id: '31f09e05-7211-4c1c-a80a-2847b949bd0b', title: 'PATENT_TITLE_3133' },
                { id: '06758d6d-31fc-4730-ae78-0fe8daeedf34', title: 'PATENT_TITLE_6175' },
            ]}
        />
    </Box>
)

export default App