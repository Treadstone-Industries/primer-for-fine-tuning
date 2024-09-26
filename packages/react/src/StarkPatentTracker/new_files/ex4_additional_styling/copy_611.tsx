import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'fbdca8c4-05fd-47f5-90e0-f5e798cad668', title: 'PATENT_TITLE_4242' },
                { id: '52a7e6a6-53b8-4598-b88d-63738eefde36', title: 'PATENT_TITLE_4255' },
                { id: '561ad8c3-f462-4d11-8ecf-3fb0a2158c16', title: 'PATENT_TITLE_2654' },
                { id: '238e1124-b85b-465f-8566-295af6091760', title: 'PATENT_TITLE_5771' },
                { id: '17c1fc11-0f3c-459c-b97e-652683de7440', title: 'PATENT_TITLE_8568' },
                { id: 'fb81dd10-0b09-4241-b358-a767631deb21', title: 'PATENT_TITLE_9988' },
                { id: '5f6b53fd-da91-4c79-9dc4-c404a7ec8591', title: 'PATENT_TITLE_2871' },
            ]}
        />
    </Box>
)

export default App