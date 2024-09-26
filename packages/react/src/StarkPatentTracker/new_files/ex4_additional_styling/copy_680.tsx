import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'e2f9b804-0ad8-42ba-92c1-e4c567173dd3', title: 'PATENT_TITLE_9030' },
                { id: '8e891e8f-d578-4d4d-84dc-0745b06c3d78', title: 'PATENT_TITLE_4410' },
                { id: '5ab2d9eb-51c4-4b54-94d8-d0f7cd4af43f', title: 'PATENT_TITLE_7049' },
                { id: '800db074-c3dc-4d91-9f84-0e55c7476de1', title: 'PATENT_TITLE_1458' },
                { id: 'e05eb53b-1eab-4476-8179-c8f96df3cd9b', title: 'PATENT_TITLE_7801' },
                { id: 'a8426a84-743e-4a5c-9bdb-3daa21415d66', title: 'PATENT_TITLE_7418' },
                { id: '0043f402-326a-4998-9212-45093d2b6b0a', title: 'PATENT_TITLE_9223' },
                { id: '17271a35-19c0-440e-9bef-ff13df54e57b', title: 'PATENT_TITLE_7372' },
                { id: 'd1109538-af3a-4844-a109-b16de55bed18', title: 'PATENT_TITLE_7299' },
                { id: 'e5ad0772-79b4-4e60-89f8-52c9f5807380', title: 'PATENT_TITLE_9861' },
            ]}
        />
    </Box>
)

export default App