import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '91a36013-bfad-4d6e-8f55-c850a875d269', title: 'PATENT_TITLE_4122' },
                { id: 'a51b85c7-3387-45bd-8cd9-9e1e98d5b847', title: 'PATENT_TITLE_9421' },
                { id: 'c058f8a1-b508-41b7-8182-afc7587c0316', title: 'PATENT_TITLE_2555' },
                { id: '58aa1965-3310-417d-b001-7ee871d53b1f', title: 'PATENT_TITLE_1222' },
                { id: '64bdd517-fa81-497c-ac83-4e012c145195', title: 'PATENT_TITLE_8503' },
                { id: 'e41f00d6-730f-4195-80ec-a79a339f0488', title: 'PATENT_TITLE_2267' },
                { id: 'd1a7f2b0-ec86-428d-9e56-475276e814a3', title: 'PATENT_TITLE_1518' },
                { id: 'ac0ce0a7-533f-4118-a051-4d5b5522ab23', title: 'PATENT_TITLE_7119' },
                { id: '57e3bd5f-311f-4dc9-8b99-74153394bf19', title: 'PATENT_TITLE_1188' },
            ]}
        />
    </Box>
)

export default App