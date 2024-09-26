import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '08488bdd-8ee5-4a2e-8de3-067a0bffab8c', title: 'PATENT_TITLE_7019' },
                { id: '72043a66-82e2-4655-ae1c-ac0cb640b792', title: 'PATENT_TITLE_4806' },
                { id: 'ad094f51-5e74-4838-8516-dfad898a2097', title: 'PATENT_TITLE_5911' },
                { id: '25815ffe-91a3-4c2f-ba48-0511c49c501f', title: 'PATENT_TITLE_9809' },
                { id: '28237296-6324-452f-8e68-31b398af9a7d', title: 'PATENT_TITLE_4463' },
                { id: 'd02f8ca0-8602-45bc-b667-44e1d1a57722', title: 'PATENT_TITLE_2913' },
                { id: '9d31ef10-f820-43e1-865c-ad6b1a21f88d', title: 'PATENT_TITLE_6640' },
                { id: 'dc86d44c-5087-49da-ad28-bd8ef10958f6', title: 'PATENT_TITLE_3829' },
                { id: '19b56a95-bb6e-430f-8305-4ce947a20ea6', title: 'PATENT_TITLE_7480' },
            ]}
        />
    </Box>
)

export default App