import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a4687db6-8e8b-46c9-8e8a-383c68128d0f', title: 'PATENT_TITLE_4142' },
                { id: '906c81a1-072a-4173-bd26-4869171597ba', title: 'PATENT_TITLE_3280' },
                { id: 'de25c001-8847-4c9f-9ab2-5ade34e46853', title: 'PATENT_TITLE_9511' },
                { id: '16aad716-cb8d-4b66-bb33-ccea5be13bd0', title: 'PATENT_TITLE_5738' },
                { id: '14bdb494-862d-4e4f-a1ac-1ceb2b2d7c07', title: 'PATENT_TITLE_6175' },
                { id: '7a4b703a-eb9c-431b-9141-1fc07038d5fc', title: 'PATENT_TITLE_5290' },
                { id: '57ff41b9-9c26-41fa-9778-488c61526073', title: 'PATENT_TITLE_5253' },
                { id: '3f4b21a0-42f4-435b-8157-a6763c83e13e', title: 'PATENT_TITLE_6445' },
                { id: '1246b322-32f0-4112-89cd-95f81ae9739b', title: 'PATENT_TITLE_3077' },
                { id: '5055cf6e-7555-4a75-ae75-c7a660b7ce70', title: 'PATENT_TITLE_2284' },
            ]}
        />
    </Box>
)

export default App