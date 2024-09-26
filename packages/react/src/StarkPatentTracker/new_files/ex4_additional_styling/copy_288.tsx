import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '64d43bdf-82bd-4deb-94d5-c3dc8e23e974', title: 'PATENT_TITLE_9046' },
                { id: 'a4fea074-d99b-48cf-b790-08bd8711f2e8', title: 'PATENT_TITLE_8435' },
                { id: '0e476c44-da7f-461f-bcbc-8907d05f6024', title: 'PATENT_TITLE_8378' },
                { id: '78134b49-b00e-44a0-81b6-38841fc8d523', title: 'PATENT_TITLE_7323' },
                { id: '57f51b16-a0f5-43ec-8bec-994d72cab134', title: 'PATENT_TITLE_3359' },
                { id: '8d95b813-3e9b-4c2e-9702-ddb09d2fe1c4', title: 'PATENT_TITLE_7632' },
                { id: 'cfb1ea99-cc7c-4a3c-96f5-06fa82fcd3b6', title: 'PATENT_TITLE_3595' },
                { id: 'e98917ea-316a-4173-8ae5-a4af8cbf2f48', title: 'PATENT_TITLE_7121' },
            ]}
        />
    </Box>
)

export default App