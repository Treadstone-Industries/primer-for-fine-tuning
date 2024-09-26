import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '43d8ec9b-61fc-4b9d-a674-fc837d061dd3', title: 'PATENT_TITLE_5792' },
                { id: '2ec92c7a-1b34-41f4-a28a-c8e6f332090d', title: 'PATENT_TITLE_2833' },
                { id: '780d563c-d5af-4dbb-a226-d93f55b4045c', title: 'PATENT_TITLE_2633' },
                { id: '62e75abe-ca54-4037-8e82-b28f1014c032', title: 'PATENT_TITLE_8585' },
            ]}
        />
    </Box>
)

export default App