import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '36d45e8f-0dd4-430c-b626-849d214e414d', title: 'PATENT_TITLE_1539' },
                { id: '670d4098-0727-4f06-8561-7011bcfeecd5', title: 'PATENT_TITLE_6782' },
                { id: '05fd3254-a80b-4207-a364-566ab868b7ba', title: 'PATENT_TITLE_9394' },
                { id: '416d260a-63df-41a3-b18a-fa303d6603f1', title: 'PATENT_TITLE_4516' },
                { id: '87b16642-c7b1-4948-ac86-ad42e0b225bb', title: 'PATENT_TITLE_7731' },
                { id: '1a294580-f7e6-4794-80d2-67d06c1e71a8', title: 'PATENT_TITLE_3898' },
                { id: '8c55e464-7200-45e1-b655-92d69b3b53df', title: 'PATENT_TITLE_3095' },
            ]}
        />
    </Box>
)

export default App