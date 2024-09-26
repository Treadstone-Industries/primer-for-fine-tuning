import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '362c8c47-1f25-4aa4-a9ab-d49eeca213c8', title: 'PATENT_TITLE_6348' },
                { id: '61a29aa4-b416-4162-b67a-7aaee94121fd', title: 'PATENT_TITLE_2169' },
                { id: '62c92077-bc26-48a3-abb1-a20b14555ddc', title: 'PATENT_TITLE_3565' },
                { id: '0c5b84fe-f6b4-4c32-a24f-08127bda7557', title: 'PATENT_TITLE_6251' },
                { id: 'aca773c9-3a5b-4fb5-8700-5937d3f0624e', title: 'PATENT_TITLE_2525' },
                { id: 'cd176691-b10b-4ca6-9030-43e2785b87db', title: 'PATENT_TITLE_2073' },
            ]}
        />
    </Box>
)

export default App