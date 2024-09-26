import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '41b88176-9ef6-433f-8655-c0bab43ec562', title: 'PATENT_TITLE_8402' },
                { id: '90deb954-f769-4fe0-8160-d10daf5cc998', title: 'PATENT_TITLE_3473' },
                { id: '03c02a73-c4d8-4ed5-93d7-f6e5aa377db1', title: 'PATENT_TITLE_4128' },
                { id: 'cb046576-71be-4636-806d-46b12a2d64cf', title: 'PATENT_TITLE_7653' },
                { id: 'e57a43b0-7980-4343-9a73-bf2fb118ea99', title: 'PATENT_TITLE_3757' },
                { id: '9cc9ff58-eb31-41dc-ab47-52378b2d785c', title: 'PATENT_TITLE_1814' },
                { id: '8e5d38be-4ef5-4931-892e-dd8019cfcb93', title: 'PATENT_TITLE_7919' },
                { id: '3a1f20c7-6c82-432f-a5a7-dd81e2dafaf9', title: 'PATENT_TITLE_5055' },
                { id: 'a53fc13c-ecc5-4072-961a-736f53304eb9', title: 'PATENT_TITLE_7843' },
                { id: '3c8eeebb-0a5e-4054-aa37-107ec1f0cb79', title: 'PATENT_TITLE_5441' },
            ]}
        />
    </Box>
)

export default App