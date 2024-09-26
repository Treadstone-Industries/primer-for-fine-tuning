import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'b08c2904-3e08-4389-9e37-3afe3ad62b91', title: 'PATENT_TITLE_4206' },
                { id: 'e8cf532b-7e77-4527-a436-a1c9157c42ed', title: 'PATENT_TITLE_2332' },
                { id: '8dd7247d-0cf7-4742-8c86-01b7281c022e', title: 'PATENT_TITLE_8859' },
                { id: 'c2da9e52-b8ad-4b4c-9f2e-40d89f46e319', title: 'PATENT_TITLE_6764' },
                { id: 'd921c18d-0654-45cb-8010-058fdca38900', title: 'PATENT_TITLE_1931' },
                { id: 'c5b2d221-90c9-4fdf-93b9-3c072308b468', title: 'PATENT_TITLE_7973' },
            ]}
        />
    </Box>
)

export default App