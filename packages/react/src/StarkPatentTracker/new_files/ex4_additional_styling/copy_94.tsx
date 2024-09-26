import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '83cefea1-ae74-4734-8274-1863ffd766f9', title: 'PATENT_TITLE_3111' },
                { id: 'f72d0380-7393-425b-9da8-7334ffc4a7eb', title: 'PATENT_TITLE_3599' },
                { id: '822c0ac4-cbdc-4bd7-ab5f-dbdab3ba609c', title: 'PATENT_TITLE_1672' },
                { id: 'a3b5e501-5c66-4ddf-8d42-76cc83fdc0fd', title: 'PATENT_TITLE_5606' },
                { id: 'e80f1cc0-997e-4151-a01c-9faa324f4eb5', title: 'PATENT_TITLE_7802' },
            ]}
        />
    </Box>
)

export default App