import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '009bc045-9544-4ac0-b31a-6c431b6148f0', title: 'PATENT_TITLE_6368' },
                { id: 'f12fdfd8-ce0f-43cc-bfcb-83596cb83098', title: 'PATENT_TITLE_7530' },
                { id: 'd527d02d-7973-4467-9716-a3c3b411e11b', title: 'PATENT_TITLE_8612' },
                { id: '3e04aaa0-e2b2-4894-a7c2-d83bafca8653', title: 'PATENT_TITLE_4935' },
                { id: '6296d153-052b-40c8-895e-6f2479af34e6', title: 'PATENT_TITLE_5374' },
                { id: 'e4c59a72-748b-4c72-8de7-35a64a0b40e6', title: 'PATENT_TITLE_5457' },
            ]}
        />
    </Box>
)

export default App