import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '69dc8315-b9ac-465e-ba76-8894244f6d3c', title: 'PATENT_TITLE_1253' },
                { id: '68516671-235f-4f4d-82d7-a6803c8207f5', title: 'PATENT_TITLE_8740' },
                { id: 'da7b9b34-7f4b-415a-a79f-e359cf059988', title: 'PATENT_TITLE_2620' },
                { id: '2e5d4e63-5a8a-4aa4-a301-5d61ebd04017', title: 'PATENT_TITLE_9671' },
                { id: '7ccf9e8a-0753-4539-b490-54f1ab3625ca', title: 'PATENT_TITLE_7362' },
                { id: 'a51031ad-5ac0-4a6c-8a2b-805084a0143c', title: 'PATENT_TITLE_6783' },
                { id: 'ce7fb8f0-6607-48ba-9ed1-e9d902c31747', title: 'PATENT_TITLE_5383' },
                { id: '337634be-971d-4800-bb3b-3fd54b2902b2', title: 'PATENT_TITLE_4678' },
            ]}
        />
    </Box>
)

export default App