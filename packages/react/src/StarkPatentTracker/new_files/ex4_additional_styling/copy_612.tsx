import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '07657b27-31e3-45b6-bdbe-90ef9ecb7be2', title: 'PATENT_TITLE_7914' },
                { id: '56fe28f4-46c7-49c8-a3ec-5d8f8b9fe29b', title: 'PATENT_TITLE_9707' },
                { id: 'e4afb955-0250-4ef5-8e4b-36f7910ea2a1', title: 'PATENT_TITLE_5861' },
                { id: '437b13ac-3ccb-4856-8956-86c75675ba26', title: 'PATENT_TITLE_8967' },
                { id: 'a5b0c0f3-9132-44b2-a077-2e0f5e1c31aa', title: 'PATENT_TITLE_6070' },
            ]}
        />
    </Box>
)

export default App