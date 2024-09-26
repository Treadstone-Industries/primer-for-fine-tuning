import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'bc5b2f57-c7d2-49ea-a901-69290be20a17', title: 'PATENT_TITLE_6277' },
                { id: 'cab84684-59d9-4b6d-908d-c2ea1ec93150', title: 'PATENT_TITLE_4642' },
                { id: '2ab381bc-b40f-4c72-bad2-7a27fc900070', title: 'PATENT_TITLE_8308' },
                { id: '546df520-be68-4f38-b9e3-b8fca9284090', title: 'PATENT_TITLE_4242' },
                { id: '1c7f93ef-e018-44a7-9252-359de44d501e', title: 'PATENT_TITLE_7830' },
            ]}
        />
    </Box>
)

export default App