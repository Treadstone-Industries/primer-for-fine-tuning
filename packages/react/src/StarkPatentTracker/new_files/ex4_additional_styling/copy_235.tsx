import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2c5aa790-df93-45ae-8aa7-49bcf854d04a', title: 'PATENT_TITLE_1113' },
                { id: '21b87ac9-2ca2-406e-84f5-2a8cad245c28', title: 'PATENT_TITLE_2305' },
                { id: '31cbe7a0-839f-4e90-80c7-2224fee9db07', title: 'PATENT_TITLE_9504' },
                { id: '424e633a-dc60-488a-b401-ee0ac0f67203', title: 'PATENT_TITLE_7794' },
                { id: '78964acc-9ad2-489e-afea-3a67ce7eb987', title: 'PATENT_TITLE_4928' },
                { id: '527d2725-129b-40cf-b4c2-1fb878aa1129', title: 'PATENT_TITLE_7317' },
                { id: 'd4641935-9aa5-44cc-b8b4-bc8fcdda090c', title: 'PATENT_TITLE_3339' },
                { id: '969701ee-aede-4967-b8a5-8def4122284f', title: 'PATENT_TITLE_7266' },
            ]}
        />
    </Box>
)

export default App