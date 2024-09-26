import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4f81b939-e38e-4e68-a427-f0ed2288cd34', title: 'PATENT_TITLE_2691' },
                { id: '7ab743ee-4984-45d6-9acd-f27c4a2c590c', title: 'PATENT_TITLE_4342' },
                { id: '15af22d4-f94d-4b20-a66b-f48956460a9c', title: 'PATENT_TITLE_1502' },
                { id: '05e40cd9-2637-4dce-be06-525bd1d3b09a', title: 'PATENT_TITLE_4567' },
                { id: 'e3847386-17d4-46cd-96d5-99b963b877b4', title: 'PATENT_TITLE_2207' },
                { id: 'cb091515-61db-48a6-933e-b72149d2c864', title: 'PATENT_TITLE_7755' },
                { id: 'a5552861-cc09-4f36-829d-4d34be2b025e', title: 'PATENT_TITLE_4181' },
                { id: 'f20a4297-c3be-4a13-941d-321bc04d768f', title: 'PATENT_TITLE_7951' },
                { id: 'a07a01eb-3e75-4292-b8a8-0f2ea2fe360f', title: 'PATENT_TITLE_6221' },
                { id: 'cc02968a-6b2e-4a32-af32-653f32c9eaf0', title: 'PATENT_TITLE_6835' },
            ]}
        />
    </Box>
)

export default App