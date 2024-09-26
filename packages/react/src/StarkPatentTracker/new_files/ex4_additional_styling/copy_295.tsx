import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3d0f5cd8-eaae-4d92-afdf-1b30ac9f9e10', title: 'PATENT_TITLE_4716' },
                { id: '6712bd25-7ce5-4cb6-bdb1-f0111341bacf', title: 'PATENT_TITLE_9592' },
                { id: '96538dac-6a76-4718-a1be-dc7d592005cf', title: 'PATENT_TITLE_4561' },
                { id: 'b5bd5c60-4026-452f-b2a9-1023871d1bb3', title: 'PATENT_TITLE_4080' },
                { id: '6dc5919a-0c5e-498a-8b67-4f66f5a2cd01', title: 'PATENT_TITLE_3344' },
                { id: '2c415195-4f7a-4eda-a49a-84ac4ceefdf3', title: 'PATENT_TITLE_7562' },
                { id: '840f49e0-2610-47de-80fb-a4b23131a4d5', title: 'PATENT_TITLE_8667' },
                { id: '3c782c14-e427-47b3-b493-7471c905c132', title: 'PATENT_TITLE_5220' },
            ]}
        />
    </Box>
)

export default App