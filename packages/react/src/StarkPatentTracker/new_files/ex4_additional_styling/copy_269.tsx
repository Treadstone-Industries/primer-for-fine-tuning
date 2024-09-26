import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '827650b4-c830-43fc-8113-2e8a5a4b9f12', title: 'PATENT_TITLE_5753' },
                { id: '10d55590-f76f-4ca0-a81a-1c4ba4a3ae86', title: 'PATENT_TITLE_1223' },
                { id: 'e5fa7f7e-6661-409e-85a5-8b12ffcc6015', title: 'PATENT_TITLE_9562' },
                { id: '7f16892f-8d3c-42b9-a206-02e37b9b756a', title: 'PATENT_TITLE_7086' },
                { id: '415d4060-bd18-483f-bba1-cc3f875768f0', title: 'PATENT_TITLE_7473' },
                { id: '76093d3b-0d74-4114-984c-861610350a3a', title: 'PATENT_TITLE_8099' },
                { id: 'cab3e050-d22b-4876-aee8-213ba79534f3', title: 'PATENT_TITLE_8160' },
            ]}
        />
    </Box>
)

export default App