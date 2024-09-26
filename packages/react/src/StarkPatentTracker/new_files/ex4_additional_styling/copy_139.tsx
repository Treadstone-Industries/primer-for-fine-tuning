import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a83747cf-9c17-460c-8b75-a104eb4dc50a', title: 'PATENT_TITLE_4991' },
                { id: 'b9afd894-0913-4dc9-927f-6260e7e9ff53', title: 'PATENT_TITLE_8512' },
                { id: '303ede04-1d8a-4ba7-af5d-9643604cc37e', title: 'PATENT_TITLE_9585' },
                { id: '0dc54dff-eb36-41d8-a77c-d1486bb8311c', title: 'PATENT_TITLE_9679' },
                { id: '56d48a2b-f337-4330-9854-adf9b65932a3', title: 'PATENT_TITLE_7023' },
                { id: 'b7cbffd3-f46f-4372-a837-fbd7d333c109', title: 'PATENT_TITLE_1738' },
                { id: 'dd64491f-8b97-44f5-be7e-9927dd48de2d', title: 'PATENT_TITLE_1503' },
            ]}
        />
    </Box>
)

export default App