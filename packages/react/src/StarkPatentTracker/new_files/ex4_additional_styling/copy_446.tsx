import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ae4f4162-7c6c-401c-8b7d-e0443354ea03', title: 'PATENT_TITLE_8273' },
                { id: '10ae7587-49e0-48ed-8b2c-2aa38c668936', title: 'PATENT_TITLE_3686' },
                { id: 'e1a56b9c-3fcd-46dd-ba5e-9d4dbc885b3b', title: 'PATENT_TITLE_7555' },
            ]}
        />
    </Box>
)

export default App