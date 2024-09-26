import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'aabef85d-116f-44cb-a267-c15fa6ff7ad6', title: 'PATENT_TITLE_1384' },
                { id: 'e07839f3-20aa-4e2d-9e56-370265087f5a', title: 'PATENT_TITLE_5102' },
                { id: '05452cde-09a7-46cd-b12b-09b53ee87b95', title: 'PATENT_TITLE_6560' },
                { id: '3d720656-85b6-4316-9003-e59e09e76100', title: 'PATENT_TITLE_4072' },
                { id: '473d7353-3ab0-4d89-9c3c-305ddeb24848', title: 'PATENT_TITLE_1664' },
                { id: '0698ccb2-1c5e-40a8-9101-b696cccd2dd3', title: 'PATENT_TITLE_7251' },
                { id: '7dcb4a89-4980-422a-b845-7f5d6b40b0bf', title: 'PATENT_TITLE_2519' },
                { id: '55024a9a-56bb-41e0-9156-92047817563f', title: 'PATENT_TITLE_6254' },
            ]}
        />
    </Box>
)

export default App