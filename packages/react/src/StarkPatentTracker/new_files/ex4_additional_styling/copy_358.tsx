import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8311f26b-1889-4c6b-8c19-be6b6473542a', title: 'PATENT_TITLE_5894' },
                { id: 'abef027f-0eda-49e4-a419-3dce8ff02b56', title: 'PATENT_TITLE_5114' },
                { id: '6f0e3809-b2e1-448e-81b7-37d3cb02d0ed', title: 'PATENT_TITLE_7468' },
                { id: 'af5798e2-f465-4d28-9a1f-c120bc164b93', title: 'PATENT_TITLE_6945' },
                { id: 'ec173264-060e-46a5-af9c-62a96600090d', title: 'PATENT_TITLE_1447' },
                { id: '1fba8f99-6f19-448c-a856-fa33c63273ea', title: 'PATENT_TITLE_2077' },
                { id: 'bbef3595-0ff4-4e4e-bb81-08d4adfb4b5d', title: 'PATENT_TITLE_8052' },
            ]}
        />
    </Box>
)

export default App