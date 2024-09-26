import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '88d522fb-acf7-485a-b5e0-7231e0a883dc', title: 'PATENT_TITLE_7143' },
                { id: '5ce31524-95f8-4525-8cb3-d5561f9a12e8', title: 'PATENT_TITLE_8839' },
                { id: '9ec34ed8-b291-40b5-a004-13f858a26dca', title: 'PATENT_TITLE_4179' },
                { id: '1594c1ae-4458-4855-9f2e-9f3a4b6302be', title: 'PATENT_TITLE_8454' },
                { id: '59f88e93-b509-443f-9e66-01e96863b656', title: 'PATENT_TITLE_8437' },
                { id: '5a19685e-1c85-4758-82c7-3ada64098bb6', title: 'PATENT_TITLE_7712' },
                { id: '7dad2b35-f8d3-41af-a286-bb5cfdff4573', title: 'PATENT_TITLE_9909' },
                { id: '87ee6112-3a0b-487c-a0c6-06dfe7ea95a8', title: 'PATENT_TITLE_2198' },
                { id: 'b7f56d69-1e8e-418d-9203-b3b22695a63b', title: 'PATENT_TITLE_9804' },
            ]}
        />
    </Box>
)

export default App