import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1e2b9e3f-2582-4669-9279-2b5564001819', title: 'PATENT_TITLE_9108' },
                { id: 'ba55f854-718f-45ed-bb17-3690f07fe1ce', title: 'PATENT_TITLE_5615' },
                { id: '6e9605d1-d1e5-4f0b-8afc-6fcec71853e2', title: 'PATENT_TITLE_7609' },
                { id: 'bd1a8d58-46cb-4466-a02f-fc2f18cf444f', title: 'PATENT_TITLE_4405' },
                { id: '3a661316-f96a-4cb7-b4f7-cf572565fead', title: 'PATENT_TITLE_5537' },
                { id: '4c651e82-0c47-4029-8ab8-4c96a69ff033', title: 'PATENT_TITLE_7007' },
                { id: 'e475c00b-1de7-4f01-b75f-9ca5ee54ff33', title: 'PATENT_TITLE_7283' },
            ]}
        />
    </Box>
)

export default App