import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'ef0da6f6-17bb-4fea-8e9e-b0a0666f456f', title: 'PATENT_TITLE_2513' },
                { id: '9ee4968f-9b02-4197-af2f-2e99145e0cd3', title: 'PATENT_TITLE_1885' },
                { id: 'fe52bc2e-98a1-4947-8bb3-a1219a9db3bd', title: 'PATENT_TITLE_8672' },
                { id: '6c234d8f-7e8a-4377-8d6b-e62e27384807', title: 'PATENT_TITLE_3348' },
                { id: 'bacbc84a-4a4b-484d-be18-5ebd23d878c0', title: 'PATENT_TITLE_3260' },
                { id: '4be276a4-ac19-48df-9b28-5f1797389f33', title: 'PATENT_TITLE_7185' },
                { id: 'a5643360-8eb4-42b5-8b19-77e85e80aaf4', title: 'PATENT_TITLE_7045' },
                { id: 'c1563099-475c-4202-97cd-bb1924d4aa71', title: 'PATENT_TITLE_5124' },
                { id: '8997ee3e-1168-49d7-b912-37e6eb90c56c', title: 'PATENT_TITLE_7714' },
                { id: '0eb26bc4-d32f-4490-a149-f478b173a83b', title: 'PATENT_TITLE_4716' },
            ]}
        />
    </Box>
)

export default App