import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '39f4148d-16ef-45a3-b802-6d201925cdc8', title: 'PATENT_TITLE_6546' },
                { id: 'e8fb8c64-d1b4-4c3b-a332-c093b63cbaf9', title: 'PATENT_TITLE_9383' },
                { id: '9389b600-460d-49cd-8182-9795edb29b67', title: 'PATENT_TITLE_3177' },
                { id: 'ec5d4ddb-ef0d-449f-8adb-5c43d99d0960', title: 'PATENT_TITLE_1230' },
                { id: '93643d3c-189f-4eae-bb66-a8235e4837db', title: 'PATENT_TITLE_9821' },
                { id: 'cb24a5bc-4daf-4026-9b52-9e257bf34871', title: 'PATENT_TITLE_1282' },
                { id: '1b3d85c6-8acb-47ca-95ab-d85b6b837cbe', title: 'PATENT_TITLE_9466' },
                { id: 'f9097a38-f105-4489-9561-48e6e62dfb0b', title: 'PATENT_TITLE_1856' },
            ]}
        />
    </Box>
)

export default App