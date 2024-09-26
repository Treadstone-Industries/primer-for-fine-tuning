import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '1554fc8d-faca-4c53-a7f6-8025f4f4ba28', title: 'PATENT_TITLE_3000' },
                { id: '522dca1f-5449-44e3-9b57-10082a0c5796', title: 'PATENT_TITLE_7670' },
                { id: '43108227-6ef5-44e8-abbe-e44b9e932436', title: 'PATENT_TITLE_5878' },
                { id: 'ea88a1e5-73f4-4dbb-b913-82ecfb9a8f5d', title: 'PATENT_TITLE_9053' },
                { id: '4d1b562d-896c-46e6-80d4-e683882f556b', title: 'PATENT_TITLE_2043' },
                { id: '124373a5-b2b1-43cd-82f6-0e58fd6ca229', title: 'PATENT_TITLE_2991' },
                { id: 'b366c804-14c3-4ee3-8082-e37b3760de94', title: 'PATENT_TITLE_4711' },
                { id: '184741a5-5d2d-4f77-b98a-365864fd0be8', title: 'PATENT_TITLE_8651' },
                { id: 'c37d0aa1-cb2d-48fc-9de9-8f366b6632a5', title: 'PATENT_TITLE_6508' },
                { id: 'a6543012-7f90-4a75-81ba-62b5bf820114', title: 'PATENT_TITLE_7144' },
            ]}
        />
    </Box>
)

export default App