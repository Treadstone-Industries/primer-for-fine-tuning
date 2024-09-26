import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9007e873-3057-4fd3-b163-7e19b497f585', title: 'PATENT_TITLE_4764' },
                { id: 'a922e3d3-1b1d-4dbb-977a-dc2207632ea5', title: 'PATENT_TITLE_5491' },
                { id: '43455ffb-4ad8-448a-8370-0dc3669809ab', title: 'PATENT_TITLE_4211' },
                { id: 'd213587d-abee-4787-a388-dadab84d5016', title: 'PATENT_TITLE_8491' },
                { id: '031987d2-32e8-4f4a-b9e4-db1d46a56488', title: 'PATENT_TITLE_6331' },
                { id: '4ef82826-e0d4-4367-85c1-79ddd3bc767e', title: 'PATENT_TITLE_7910' },
                { id: 'c0d61cf0-29a2-41ae-98fe-2fd99da39832', title: 'PATENT_TITLE_1080' },
                { id: 'ee164067-99d2-469c-9d1b-13f9820d9bc3', title: 'PATENT_TITLE_6531' },
                { id: '00ce0a27-a542-499e-8f5f-bc4b23441845', title: 'PATENT_TITLE_7241' },
            ]}
        />
    </Box>
)

export default App