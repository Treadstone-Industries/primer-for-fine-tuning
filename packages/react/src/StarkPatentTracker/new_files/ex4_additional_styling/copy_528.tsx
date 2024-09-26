import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4c195c4e-29b0-4432-a160-4788e3e963cc', title: 'PATENT_TITLE_5272' },
                { id: '55bfa888-d22c-407c-8f43-e2ee9e6737c1', title: 'PATENT_TITLE_1833' },
                { id: '28077de9-00ab-444b-a779-e9d8befed432', title: 'PATENT_TITLE_3209' },
                { id: '48b521b5-346e-4140-ba41-b093bcb29c14', title: 'PATENT_TITLE_6008' },
                { id: '52703c3e-084d-4782-b8d9-2a7fde9f2d0f', title: 'PATENT_TITLE_4991' },
                { id: 'd7bb7db8-435a-4c43-a896-e9d2902d6c90', title: 'PATENT_TITLE_8065' },
                { id: '4495cbcc-94eb-4c1c-9846-f27a530ea2bc', title: 'PATENT_TITLE_3505' },
                { id: '347b8359-8f0e-4a89-a437-d4481107badb', title: 'PATENT_TITLE_1150' },
            ]}
        />
    </Box>
)

export default App