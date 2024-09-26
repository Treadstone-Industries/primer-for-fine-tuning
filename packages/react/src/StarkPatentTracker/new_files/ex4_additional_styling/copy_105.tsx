import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7c860918-03fe-4fe8-b837-33a5833366d8', title: 'PATENT_TITLE_5139' },
                { id: '62e544c2-66ba-4241-9b82-5dc96f1afb3e', title: 'PATENT_TITLE_8381' },
                { id: 'ef5c08e7-893e-4151-a5ba-3df0be51e0df', title: 'PATENT_TITLE_8810' },
                { id: '900a3495-cb52-445c-9df5-80c2ec031943', title: 'PATENT_TITLE_3718' },
            ]}
        />
    </Box>
)

export default App