import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a3720959-c753-4831-8e85-cce42f14b54d', title: 'PATENT_TITLE_6174' },
                { id: '22067597-c8ee-4bcd-b901-07ddc3e8ccc4', title: 'PATENT_TITLE_3359' },
                { id: 'eda47490-2ecc-4a99-8e9c-19634bf1253b', title: 'PATENT_TITLE_4412' },
                { id: 'de85541d-0da3-4b35-af23-78953df038e2', title: 'PATENT_TITLE_9654' },
                { id: 'c055d41e-3a6e-497d-b90a-c27250fc0a46', title: 'PATENT_TITLE_2638' },
                { id: '30d07b2d-b90f-4c58-bcc7-cd3d68f8f1bd', title: 'PATENT_TITLE_5274' },
                { id: '3006631f-6862-4434-b25e-79448378d662', title: 'PATENT_TITLE_3074' },
                { id: 'f6e7cca9-f2f9-4432-a8de-f069c0e5edce', title: 'PATENT_TITLE_9164' },
                { id: '2f32de23-f584-43b3-b87b-475116662454', title: 'PATENT_TITLE_3791' },
                { id: '1a62d418-4d8a-4264-96a9-cbf180ee3ec2', title: 'PATENT_TITLE_4809' },
            ]}
        />
    </Box>
)

export default App