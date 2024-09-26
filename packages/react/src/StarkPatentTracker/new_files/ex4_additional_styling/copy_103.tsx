import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '69432b95-1362-4ad0-909c-0f0c24fd5938', title: 'PATENT_TITLE_8198' },
                { id: '9f3e4ed6-d245-4e83-b4e0-f7821e700dfe', title: 'PATENT_TITLE_1796' },
                { id: '141701db-2c83-402e-aa90-c432dbd7fe93', title: 'PATENT_TITLE_7467' },
                { id: '6962d156-3559-43b2-8e4e-325666cf1466', title: 'PATENT_TITLE_6242' },
                { id: 'e127192d-86ec-4585-8b4a-c6df50c83f0d', title: 'PATENT_TITLE_5515' },
                { id: 'ff0c4aa9-048b-4220-8d6a-27fe536e28b9', title: 'PATENT_TITLE_7543' },
                { id: '1baa3619-0541-47af-88e5-358559bd3a01', title: 'PATENT_TITLE_6251' },
                { id: 'a844326f-1853-49a4-9bb6-2189fc89cdab', title: 'PATENT_TITLE_3772' },
            ]}
        />
    </Box>
)

export default App