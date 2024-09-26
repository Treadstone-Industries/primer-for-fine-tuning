import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '5273adec-9097-4d69-bc4e-e340e3ed679c', title: 'PATENT_TITLE_5140' },
                { id: '96b889d0-e3e7-4523-9157-9dc3dd61fac7', title: 'PATENT_TITLE_8342' },
                { id: '727369c3-dcdb-4e0c-a100-3d7aa12478b7', title: 'PATENT_TITLE_8329' },
                { id: 'cc5ea88e-7106-440d-9fa7-7def5013a1fb', title: 'PATENT_TITLE_4178' },
                { id: '5447b1fd-1467-47d1-b985-24060fd8a503', title: 'PATENT_TITLE_1359' },
                { id: 'c5373eb2-a045-43ea-9e28-8bf5f7a90526', title: 'PATENT_TITLE_2712' },
                { id: '6b5dadd5-5985-4122-98e8-4c57f1a0529d', title: 'PATENT_TITLE_5190' },
                { id: '94c896cc-485e-4fa8-80e9-e6aa81717090', title: 'PATENT_TITLE_9009' },
            ]}
        />
    </Box>
)

export default App