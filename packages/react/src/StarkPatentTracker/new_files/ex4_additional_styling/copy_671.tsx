import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f86750d3-1a57-4c17-9d98-4b357d97a808', title: 'PATENT_TITLE_6567' },
                { id: '6ff9b00f-51e0-4d52-bd96-738e8279e5e2', title: 'PATENT_TITLE_4482' },
                { id: 'd73ddb86-bc0a-4de3-bb6b-32eac21ed290', title: 'PATENT_TITLE_8870' },
                { id: '0fb3df7b-f9f1-4d27-b1ce-7495496ab381', title: 'PATENT_TITLE_5659' },
                { id: 'b5283a62-1f49-483c-b331-ed6b4110db53', title: 'PATENT_TITLE_7700' },
            ]}
        />
    </Box>
)

export default App