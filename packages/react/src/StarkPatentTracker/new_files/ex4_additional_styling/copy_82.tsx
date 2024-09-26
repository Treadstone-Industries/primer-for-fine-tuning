import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2a2c36a4-db18-46c3-bcd3-ba7c33ccd19a', title: 'PATENT_TITLE_5236' },
                { id: '410ece60-3276-4250-ab77-6d603affdef9', title: 'PATENT_TITLE_1901' },
                { id: '5e9a2655-9b31-4cf7-9d1c-3240ea3c6f21', title: 'PATENT_TITLE_7699' },
                { id: '449e5172-4862-4baa-b4fe-0c592cf4b065', title: 'PATENT_TITLE_4275' },
                { id: 'd999519b-1708-475b-a788-68c0dbe0a5f2', title: 'PATENT_TITLE_7560' },
                { id: '2cfe609f-37b0-4715-9ef1-20c784d77401', title: 'PATENT_TITLE_2468' },
                { id: '5f197007-1deb-4959-a83f-18be529f4fcb', title: 'PATENT_TITLE_8826' },
                { id: '4de81de3-0bf4-4bea-b9ea-ae291050c457', title: 'PATENT_TITLE_2093' },
                { id: '9ca974cb-b0cd-4075-ace8-839589bc5414', title: 'PATENT_TITLE_8471' },
            ]}
        />
    </Box>
)

export default App