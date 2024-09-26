import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '801f2eb4-8ece-48b1-ad0c-2b1f4907e822', title: 'PATENT_TITLE_9724' },
                { id: '51c1647d-1d97-4b79-9700-89b472a4fb15', title: 'PATENT_TITLE_3886' },
                { id: '8fc2671a-52eb-45c7-b4ad-78af303ad2cc', title: 'PATENT_TITLE_5925' },
                { id: '613daa67-fb08-4d24-973e-8cb06fcc91af', title: 'PATENT_TITLE_7682' },
                { id: '3070e4cd-a8ef-48a8-a2e5-430a51d38f31', title: 'PATENT_TITLE_8310' },
            ]}
        />
    </Box>
)

export default App