import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1b3a97b2-077d-45a4-a716-1c38c15ed1bb', title: 'PATENT_TITLE_9915' },
                { id: '5f22bc53-e1d5-48c4-8fc4-1912a745b2e1', title: 'PATENT_TITLE_5089' },
                { id: '57f0e528-975d-4bca-9715-3b55b7202ae1', title: 'PATENT_TITLE_1757' },
                { id: '01943002-003f-41ba-b083-26964f8a8212', title: 'PATENT_TITLE_8022' },
                { id: 'b7ec96b4-a5f9-45ea-a220-ac32fa49202f', title: 'PATENT_TITLE_8407' },
                { id: 'a3deb12c-d37f-47bd-87fc-a4c2608c61c2', title: 'PATENT_TITLE_1351' },
                { id: '9c719abf-61f8-4545-a0cd-aacff2468561', title: 'PATENT_TITLE_3386' },
                { id: '992a482f-ad0e-49e4-b956-1bcbb13ef46d', title: 'PATENT_TITLE_1713' },
                { id: 'b8662df1-75b0-4530-a2cc-b9f0748d316c', title: 'PATENT_TITLE_5249' },
            ]}
        />
    </Box>
)

export default App