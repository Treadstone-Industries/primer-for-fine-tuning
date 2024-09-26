import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2f5b43d4-bfe6-4635-8866-d242cf6b3409', title: 'PATENT_TITLE_8902' },
                { id: '692bef69-0690-4e29-b62b-f6fa37ef29fc', title: 'PATENT_TITLE_1564' },
                { id: '1de6415a-3043-48ef-a5bb-4c7857f15d10', title: 'PATENT_TITLE_8919' },
                { id: 'c0d26b72-07ae-47ef-8910-7cc61cc655c5', title: 'PATENT_TITLE_9503' },
                { id: '09dcac3f-5fa5-468d-b18d-643f28a6c249', title: 'PATENT_TITLE_8196' },
                { id: 'a4406a3d-0883-4ec0-9cd7-478dc5f028cc', title: 'PATENT_TITLE_7645' },
                { id: '4a40c64a-15e4-4254-9336-168ca05e11ee', title: 'PATENT_TITLE_5829' },
            ]}
        />
    </Box>
)

export default App