import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '93f8f82a-6b4a-4e53-889d-d5f8e2370a8b', title: 'PATENT_TITLE_2567' },
                { id: '8d37618e-8cf5-47a6-b6a7-3536c2d82b04', title: 'PATENT_TITLE_5630' },
                { id: '0b729ff3-8f3f-446e-83ce-3f1376ea7a2f', title: 'PATENT_TITLE_3499' },
                { id: 'ede2a9cb-1b54-4bea-89a4-b9d3ee5827c5', title: 'PATENT_TITLE_6789' },
                { id: 'b8a613fb-8b75-4267-96b3-dc2e7f3c01e3', title: 'PATENT_TITLE_5163' },
                { id: '8014b9d5-caa0-4480-b5ff-9930eedf71dc', title: 'PATENT_TITLE_4797' },
                { id: '42020871-9cbf-466f-8aca-0b4a69a43fd5', title: 'PATENT_TITLE_8759' },
            ]}
        />
    </Box>
)

export default App