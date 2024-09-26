import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '3f91dd2e-ca6c-43bd-b899-f6ea3d9fda5d', title: 'PATENT_TITLE_2413' },
                { id: 'b2410433-4282-44d5-8182-dbff00ac4985', title: 'PATENT_TITLE_5696' },
                { id: 'c98764da-b074-4a4e-91d2-237b2e83c5de', title: 'PATENT_TITLE_6729' },
                { id: '1b3e70fd-920a-43ea-bda4-6243506a7bb7', title: 'PATENT_TITLE_6642' },
                { id: '435f497c-dbc3-414a-b421-cef9d1dc18d3', title: 'PATENT_TITLE_2992' },
                { id: '88be0e76-02ba-4925-86a7-e26e1ef5cae5', title: 'PATENT_TITLE_8522' },
                { id: '2c1f60db-6473-4bca-a37f-dee65789867a', title: 'PATENT_TITLE_4786' },
            ]}
        />
    </Box>
)

export default App