import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'eacddda8-0595-4faf-945b-dd5ae26509ed', title: 'PATENT_TITLE_5240' },
                { id: 'af0a04c4-710f-4bac-b87d-012a453dfbec', title: 'PATENT_TITLE_3510' },
                { id: '02263ff0-fd62-4524-a0e5-dd58b5c32297', title: 'PATENT_TITLE_5601' },
                { id: '6d4c2f1e-b736-42bd-a521-e4af0c953646', title: 'PATENT_TITLE_3510' },
                { id: 'f1958810-bb94-4855-a369-415e4b6dfef6', title: 'PATENT_TITLE_4022' },
                { id: 'aa958b1c-dab4-4936-a45c-3e3c11e4ca06', title: 'PATENT_TITLE_5958' },
                { id: '688f53f3-710b-47d2-9ae1-0719bb2fde01', title: 'PATENT_TITLE_1490' },
            ]}
        />
    </Box>
)

export default App