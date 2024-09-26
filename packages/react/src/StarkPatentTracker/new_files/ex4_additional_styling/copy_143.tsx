import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'd69b3282-dee2-40be-ab34-a96f94a7a722', title: 'PATENT_TITLE_4563' },
                { id: '4161adb4-82ce-4958-9f15-ff47769ed8a2', title: 'PATENT_TITLE_5153' },
                { id: '8e6112c1-243c-4d28-b887-f6ac3ecba249', title: 'PATENT_TITLE_6811' },
                { id: '49567cbb-7397-4cc6-8dc9-2c901042dd31', title: 'PATENT_TITLE_2940' },
            ]}
        />
    </Box>
)

export default App