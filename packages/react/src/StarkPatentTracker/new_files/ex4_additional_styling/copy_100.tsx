import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'baf64942-da10-47e0-ada7-7b6f48b5ae79', title: 'PATENT_TITLE_9666' },
                { id: '50b351fa-8756-4508-b4a3-c08877e1b7b3', title: 'PATENT_TITLE_7116' },
                { id: 'efd15493-04aa-4cca-9606-5c1111352fd0', title: 'PATENT_TITLE_3635' },
                { id: '65642248-a741-42e5-af00-3405ec43e821', title: 'PATENT_TITLE_5480' },
            ]}
        />
    </Box>
)

export default App