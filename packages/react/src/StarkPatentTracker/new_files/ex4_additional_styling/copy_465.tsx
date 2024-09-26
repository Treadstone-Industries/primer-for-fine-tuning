import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '37b6de57-80eb-4bb4-a359-10b311bd12e1', title: 'PATENT_TITLE_7865' },
                { id: '6488a2c9-e991-497a-95f0-c4bef776e763', title: 'PATENT_TITLE_2312' },
                { id: 'aaaa2640-39eb-478c-ad2a-9a81afbf91d6', title: 'PATENT_TITLE_4406' },
                { id: '9fe8e69e-bafa-4126-a682-794cb2931d01', title: 'PATENT_TITLE_8845' },
                { id: 'd76f3358-47f6-4f11-98dd-45774fee5d93', title: 'PATENT_TITLE_5843' },
                { id: '22f9e90e-76d1-4f42-bbf2-244df0d2d53a', title: 'PATENT_TITLE_2305' },
                { id: '2f30a546-f8c3-4b0e-b56f-99ae08791f7b', title: 'PATENT_TITLE_7656' },
                { id: '5dfbbaf3-df9e-4ae5-862c-d5c1230fb8b0', title: 'PATENT_TITLE_6155' },
                { id: '1563a5d4-d2c5-45db-8d16-46fe428afbab', title: 'PATENT_TITLE_8229' },
            ]}
        />
    </Box>
)

export default App