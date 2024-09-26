import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c09e19ea-5dcc-40e0-a067-94ed1e5f657f', title: 'PATENT_TITLE_8864' },
                { id: 'edce0999-e1aa-432b-8c2d-eacf5b353db4', title: 'PATENT_TITLE_6706' },
                { id: '01c9abf7-265e-4d7b-b93f-6a1986111e42', title: 'PATENT_TITLE_7611' },
                { id: '35a070a8-af8c-44fe-a9e9-4c76a37d2c7c', title: 'PATENT_TITLE_1723' },
                { id: '7ef996da-e5fe-4eb0-a641-06f1693cad28', title: 'PATENT_TITLE_3597' },
                { id: 'd1ecd68d-0580-44f7-b4ae-47bdf7c06828', title: 'PATENT_TITLE_5287' },
                { id: '681203ba-9a2a-4b60-9650-c3e269232983', title: 'PATENT_TITLE_4208' },
            ]}
        />
    </Box>
)

export default App