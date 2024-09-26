import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a69c2b32-fb83-4595-ad94-a79f7651337c', title: 'PATENT_TITLE_3411' },
                { id: '1c562f86-f3cb-4633-bb65-1c882fb46401', title: 'PATENT_TITLE_3808' },
                { id: 'a6d884ab-638b-4c1c-9d80-d3ea22d526df', title: 'PATENT_TITLE_8467' },
                { id: '9cea3d19-8b84-41fa-917d-cd0280449b33', title: 'PATENT_TITLE_3329' },
                { id: '6da09968-aa6b-42a6-9add-65ea0df15f9d', title: 'PATENT_TITLE_7514' },
                { id: '6c2c1780-8f40-4a62-a84d-88a38590ac07', title: 'PATENT_TITLE_9917' },
                { id: 'ae9aa34d-f691-4898-9725-8bf72d9ba930', title: 'PATENT_TITLE_6484' },
                { id: '6ed9dc28-6934-4100-a491-409e7a166fa3', title: 'PATENT_TITLE_3374' },
                { id: 'cbe3ffdb-e096-4455-b849-a78bad9fef66', title: 'PATENT_TITLE_4011' },
            ]}
        />
    </Box>
)

export default App