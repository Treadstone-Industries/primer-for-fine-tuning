import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9d1a3435-5314-488c-b9bd-07965ff3ebdd', title: 'PATENT_TITLE_4176' },
                { id: 'c0b58484-6180-46aa-ad21-4b61a6fb146f', title: 'PATENT_TITLE_4977' },
                { id: '1a8dd967-dee0-4a4f-bed1-258cad6642e4', title: 'PATENT_TITLE_7316' },
                { id: '6334ba68-e09e-4745-8230-1a46c216b4fb', title: 'PATENT_TITLE_6041' },
                { id: 'b929dd10-0778-465f-9ac2-c728dcb91045', title: 'PATENT_TITLE_3533' },
                { id: 'a02c8f54-1f1c-47ee-a2bc-df59ea142455', title: 'PATENT_TITLE_4474' },
                { id: '71e84ace-099e-4515-9e78-d8b3a5078b91', title: 'PATENT_TITLE_6353' },
            ]}
        />
    </Box>
)

export default App