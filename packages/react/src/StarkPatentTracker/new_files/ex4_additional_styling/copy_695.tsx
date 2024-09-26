import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '319f5c88-4b55-49a5-9a3d-76eff0b369ec', title: 'PATENT_TITLE_3577' },
                { id: '93db3e9f-7973-4861-99b3-101ef69e0f91', title: 'PATENT_TITLE_4817' },
                { id: 'ddf8ca48-b4d9-4ef5-b829-0686b7457154', title: 'PATENT_TITLE_2695' },
                { id: '281135b8-4dc7-47e5-9c1c-b2556adf448f', title: 'PATENT_TITLE_4388' },
                { id: 'b9fb4a39-fb1d-48e3-8f34-ff01ed6b4d6c', title: 'PATENT_TITLE_9621' },
                { id: 'ea7db99e-77f9-4f40-9e75-8e54bb1475a5', title: 'PATENT_TITLE_3929' },
                { id: 'e8732d1e-7ffa-4090-9242-55e7504cb2fd', title: 'PATENT_TITLE_4250' },
                { id: '2935a99d-a081-4c44-8fdd-55eb38a20238', title: 'PATENT_TITLE_6601' },
                { id: '83eefc4d-2942-4b65-a74d-ba38df7ce868', title: 'PATENT_TITLE_5287' },
            ]}
        />
    </Box>
)

export default App