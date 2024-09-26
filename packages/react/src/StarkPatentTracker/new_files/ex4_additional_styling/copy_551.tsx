import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5caba528-4daf-44c8-a623-c735239570e6', title: 'PATENT_TITLE_4977' },
                { id: 'dd9ae862-cac2-4ea1-846d-25675305c1b1', title: 'PATENT_TITLE_9819' },
                { id: 'a0b703be-e73b-4a96-b5b2-99bf7fe146c3', title: 'PATENT_TITLE_6891' },
                { id: 'bb11c77a-b563-42b4-8c02-f216b96a4390', title: 'PATENT_TITLE_1734' },
                { id: 'dd8335b0-c839-4032-b7a5-94e06953febc', title: 'PATENT_TITLE_4781' },
                { id: 'ffc75353-bf9b-4d01-9e85-7c0291cf4aec', title: 'PATENT_TITLE_7321' },
                { id: '8859569b-eeaf-43a3-8189-9a506ee749e6', title: 'PATENT_TITLE_7546' },
                { id: 'a44f16db-6c89-4c63-a49e-6f643810c08e', title: 'PATENT_TITLE_8412' },
            ]}
        />
    </Box>
)

export default App