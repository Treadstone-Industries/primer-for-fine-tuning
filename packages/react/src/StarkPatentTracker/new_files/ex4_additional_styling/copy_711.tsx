import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4f5c6732-19a6-46a3-8c59-3d493f4ee8dd', title: 'PATENT_TITLE_2059' },
                { id: 'c505e51a-df53-46b8-90f5-cc46f8814289', title: 'PATENT_TITLE_3195' },
                { id: 'c0116222-02e3-4dfe-8774-2dc1c3c27954', title: 'PATENT_TITLE_2089' },
                { id: 'f4feabab-4c34-4a83-88ea-14449041999a', title: 'PATENT_TITLE_1360' },
                { id: '36040e52-c29c-4703-943c-8ca57d72fa53', title: 'PATENT_TITLE_6853' },
                { id: '0ada135c-31aa-4686-9eaf-66beaa716af9', title: 'PATENT_TITLE_7414' },
                { id: '54844479-4b2c-4ea4-bd78-0b3296320915', title: 'PATENT_TITLE_1434' },
                { id: '17d27876-913b-412a-9be7-b8878033f02a', title: 'PATENT_TITLE_9645' },
                { id: 'd1fdb69b-484d-40ae-8691-f78972f31122', title: 'PATENT_TITLE_1107' },
            ]}
        />
    </Box>
)

export default App