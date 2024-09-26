import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e0cd3dce-02ab-4297-964c-55fedb383a97', title: 'PATENT_TITLE_4092' },
                { id: 'dee8ec4e-efd9-497f-8b0f-8809cc8a2ff4', title: 'PATENT_TITLE_7918' },
                { id: 'da43d79d-dcf1-476c-a03b-8a7b0d743a59', title: 'PATENT_TITLE_4689' },
                { id: '893a14c9-bd0f-4d17-856e-d2adf6f02a27', title: 'PATENT_TITLE_5891' },
                { id: '183eee9a-3d65-47c9-9da8-f8c988ebc7c7', title: 'PATENT_TITLE_1958' },
                { id: 'f58e9739-5f3d-460c-a734-10ac9d74c701', title: 'PATENT_TITLE_3766' },
                { id: 'c920be63-3528-41d7-b3d2-273f169c6172', title: 'PATENT_TITLE_2830' },
            ]}
        />
    </Box>
)

export default App