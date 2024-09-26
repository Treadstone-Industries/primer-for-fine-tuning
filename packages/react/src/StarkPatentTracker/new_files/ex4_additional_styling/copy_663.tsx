import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'dc99e86e-9a2a-41a1-b194-d8901659ebb5', title: 'PATENT_TITLE_8222' },
                { id: 'd4a74a07-690f-4559-a387-05bdaaa2cab3', title: 'PATENT_TITLE_9564' },
                { id: 'a994d05a-af6a-482d-b9d7-3df0c09892bb', title: 'PATENT_TITLE_3529' },
                { id: 'bb447ab0-ec8f-48a1-9630-cf4bbfd6cb24', title: 'PATENT_TITLE_8038' },
                { id: 'fd508c4b-764e-43b6-a086-2d72df483564', title: 'PATENT_TITLE_8270' },
                { id: '652bfcbd-dcad-4132-a516-307193f31d6d', title: 'PATENT_TITLE_7074' },
                { id: '6caf0063-aea2-4c8a-bf0a-21da3a97333b', title: 'PATENT_TITLE_6150' },
                { id: 'a94e6709-738a-4aac-9160-351b53186daf', title: 'PATENT_TITLE_3011' },
                { id: '75c7964b-fe9b-49af-8d96-cf4c2d3df2f5', title: 'PATENT_TITLE_7044' },
            ]}
        />
    </Box>
)

export default App