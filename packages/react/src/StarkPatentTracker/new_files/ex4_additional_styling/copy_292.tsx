import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3f7470ad-965f-458f-9f88-c124422b1133', title: 'PATENT_TITLE_3055' },
                { id: 'a146656b-6ed0-43ad-ae0d-737ce2b759fd', title: 'PATENT_TITLE_4733' },
                { id: '5280e136-537a-4ad6-a618-2560172573e0', title: 'PATENT_TITLE_4009' },
                { id: '1f88c3e0-e327-4d92-b1d7-e5c4fdbc9d84', title: 'PATENT_TITLE_8790' },
                { id: 'e5bdecfe-458f-413e-9ab3-8e848de5084c', title: 'PATENT_TITLE_6756' },
                { id: '57d1cb50-3e4f-446e-bd71-174929005d9a', title: 'PATENT_TITLE_2127' },
            ]}
        />
    </Box>
)

export default App