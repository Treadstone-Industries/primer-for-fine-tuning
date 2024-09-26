import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '539a822c-fc0c-4bdd-826c-294c5ffc277b', title: 'PATENT_TITLE_6508' },
                { id: '0c2d4c6a-3d4e-4325-8140-408a1eb2cfb6', title: 'PATENT_TITLE_6736' },
                { id: '119eea12-05cf-4d95-acac-e2da0deab75e', title: 'PATENT_TITLE_5214' },
                { id: '0dfed387-8b15-4deb-aa45-a84f072a3f81', title: 'PATENT_TITLE_7162' },
                { id: 'f1910e12-27c5-4681-8492-c9e30040022d', title: 'PATENT_TITLE_5134' },
                { id: '329d46ce-a1f5-4c7e-9654-dca57935c284', title: 'PATENT_TITLE_6571' },
                { id: '698354fa-0c4b-4753-8370-4acc224e8d51', title: 'PATENT_TITLE_8859' },
                { id: 'ce62c80e-4973-408d-a6c9-56e75bcfb29e', title: 'PATENT_TITLE_5289' },
                { id: '0adcf2a2-2ba2-4611-af9e-f839510c1879', title: 'PATENT_TITLE_7960' },
                { id: 'ffb24e56-bbbe-4a1d-93a6-1253403aedbe', title: 'PATENT_TITLE_2431' },
            ]}
        />
    </Box>
)

export default App