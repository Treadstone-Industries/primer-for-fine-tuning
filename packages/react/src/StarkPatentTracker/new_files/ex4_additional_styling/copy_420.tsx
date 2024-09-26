import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5a786640-3937-4026-a2b6-91646f40d500', title: 'PATENT_TITLE_4790' },
                { id: 'dbf7bbe7-960e-4752-9b9e-461874a2c32d', title: 'PATENT_TITLE_5932' },
                { id: 'e0ef1381-741e-4e21-b55a-f07ccaa71d54', title: 'PATENT_TITLE_7416' },
                { id: '70ee0886-7c97-4feb-93e4-6bdc00bd6221', title: 'PATENT_TITLE_8944' },
                { id: 'e06117a7-d44f-434a-a14f-765ea8fbd087', title: 'PATENT_TITLE_9186' },
                { id: '70ce1b37-faee-421e-ba0a-e62c533b8575', title: 'PATENT_TITLE_7990' },
                { id: '5cf46abd-2533-4689-a697-833a12d2d070', title: 'PATENT_TITLE_4157' },
            ]}
        />
    </Box>
)

export default App