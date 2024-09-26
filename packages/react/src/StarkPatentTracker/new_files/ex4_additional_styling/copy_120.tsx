import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7830fd61-238d-4f5b-bf88-23f6ee1b7ded', title: 'PATENT_TITLE_5630' },
                { id: 'cdfbfed6-0332-4d74-936a-4d1eb4d53ee1', title: 'PATENT_TITLE_1747' },
                { id: '3dbda067-44b5-49fb-8115-3fd231e373bf', title: 'PATENT_TITLE_5597' },
                { id: 'a1c956b8-dd58-4de4-8217-52f13b9aad90', title: 'PATENT_TITLE_3654' },
                { id: '739c843c-1362-435a-8af8-4af55e317b08', title: 'PATENT_TITLE_6162' },
                { id: '2f073aad-29d8-497d-b63b-65e1d41beadc', title: 'PATENT_TITLE_2738' },
            ]}
        />
    </Box>
)

export default App