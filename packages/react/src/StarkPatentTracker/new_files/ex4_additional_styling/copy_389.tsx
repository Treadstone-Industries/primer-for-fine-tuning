import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c412fa58-fbee-4a9e-b154-a8cfd14f01e5', title: 'PATENT_TITLE_7271' },
                { id: '4b507057-e0ae-4ab7-9ae5-fcada4444ad5', title: 'PATENT_TITLE_1127' },
                { id: 'fa2499ac-6988-4475-9313-d8eb34f2c89d', title: 'PATENT_TITLE_1981' },
                { id: 'f13754ca-db0e-4c5c-87e0-0a22c402c0fc', title: 'PATENT_TITLE_1581' },
                { id: '1bf63636-4d10-4c3f-a2dc-abe8dfcae038', title: 'PATENT_TITLE_6735' },
                { id: '2c1bd9ed-0c1f-42c9-9d2a-8c65277b93d6', title: 'PATENT_TITLE_8115' },
                { id: '5dd7e328-5b51-40b0-b0ff-2983cff392ec', title: 'PATENT_TITLE_9669' },
                { id: '1fdb0312-6aa3-423b-8566-5bc4beb91cf3', title: 'PATENT_TITLE_6265' },
                { id: '64102945-525b-4a94-85f3-4bdf9f9d8093', title: 'PATENT_TITLE_2128' },
            ]}
        />
    </Box>
)

export default App