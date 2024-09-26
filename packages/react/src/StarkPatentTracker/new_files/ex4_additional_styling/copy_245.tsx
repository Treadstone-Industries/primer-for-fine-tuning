import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '23679ce2-80b6-41b4-9716-c78e959f00e1', title: 'PATENT_TITLE_5099' },
                { id: '13e673cc-741e-448f-b985-064d4926da08', title: 'PATENT_TITLE_5355' },
                { id: '5acddfa4-5994-4daf-9bfb-3ea0bc8e63c7', title: 'PATENT_TITLE_3887' },
                { id: '966d7484-f009-4962-bd8b-bf180db052db', title: 'PATENT_TITLE_8448' },
                { id: '631fa8a9-f024-451e-98ea-16b5878278ca', title: 'PATENT_TITLE_8536' },
                { id: '2235b0d4-da35-443b-b57c-e916105de38d', title: 'PATENT_TITLE_4020' },
                { id: '31ca6be5-9ee0-4512-b32b-df8266a22f6e', title: 'PATENT_TITLE_1353' },
                { id: '5bfbfdea-ad76-4dbe-8055-01b79b39cb92', title: 'PATENT_TITLE_9135' },
            ]}
        />
    </Box>
)

export default App