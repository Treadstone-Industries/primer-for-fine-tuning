import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '9da4e87b-ce35-497b-8668-f8fc363428f8', title: 'PATENT_TITLE_9260' },
                { id: 'fed1f1c8-d3e3-4e21-9dcb-4045c5148f4f', title: 'PATENT_TITLE_1205' },
                { id: '44b4c995-3179-404b-864e-c2c1d376bd41', title: 'PATENT_TITLE_9934' },
                { id: '43621a00-8dc4-48ef-9c71-a30ceb9faa5b', title: 'PATENT_TITLE_5691' },
            ]}
        />
    </Box>
)

export default App