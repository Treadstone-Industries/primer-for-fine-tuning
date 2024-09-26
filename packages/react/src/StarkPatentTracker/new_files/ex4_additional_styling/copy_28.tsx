import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b94491e8-0ff4-47b5-9462-83fe5988e1c8', title: 'PATENT_TITLE_7697' },
                { id: '09471145-dd17-4a38-a33e-97b7801472e6', title: 'PATENT_TITLE_3512' },
                { id: '3bc706b8-ba00-4976-afd1-7db7362fad17', title: 'PATENT_TITLE_5132' },
                { id: 'd1750c82-a7d2-44ef-9f35-217410bdd97e', title: 'PATENT_TITLE_7394' },
                { id: 'a9184cee-dfd4-4798-8d4a-80370cd4802e', title: 'PATENT_TITLE_7390' },
                { id: '3c8854a3-37fe-4295-a6c2-aeb02d1169de', title: 'PATENT_TITLE_9442' },
                { id: 'c8171a44-f98a-41f3-8743-c503d9b3aa0c', title: 'PATENT_TITLE_1657' },
                { id: '89b4345b-d4b1-427a-a26e-8c22b33504ef', title: 'PATENT_TITLE_4260' },
                { id: 'c46a87b9-70d1-40a9-abf9-160e0ff39f1b', title: 'PATENT_TITLE_9068' },
                { id: '56b2911a-4425-4324-93f9-6d3244e5fc13', title: 'PATENT_TITLE_3962' },
            ]}
        />
    </Box>
)

export default App