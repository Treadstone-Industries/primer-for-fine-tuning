import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '211ccc53-bda7-492b-beee-49106303980a', title: 'PATENT_TITLE_4200' },
                { id: '4eaf0bd7-c1c7-44a2-be8c-f3574c5572c3', title: 'PATENT_TITLE_5656' },
                { id: 'df87396f-3614-4f01-bd96-1acadaf9bee2', title: 'PATENT_TITLE_2295' },
                { id: '03b4c1b7-a58d-4beb-b3a1-32fd7b04e120', title: 'PATENT_TITLE_3564' },
                { id: '0e147202-f837-4967-aff3-d8154f04d20f', title: 'PATENT_TITLE_9063' },
                { id: '306f4c22-4fae-4235-bca7-54684a474d2e', title: 'PATENT_TITLE_7714' },
                { id: 'a989beff-8948-46dd-82f7-6c65bf4fcd43', title: 'PATENT_TITLE_9246' },
                { id: '397008d1-de9e-497b-90ba-0607671e876a', title: 'PATENT_TITLE_3480' },
                { id: 'e69705c2-8070-4c8d-a29e-7b11a9e347f7', title: 'PATENT_TITLE_2715' },
            ]}
        />
    </Box>
)

export default App