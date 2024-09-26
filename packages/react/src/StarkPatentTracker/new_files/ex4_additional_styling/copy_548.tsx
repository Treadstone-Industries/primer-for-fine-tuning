import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '4f67b42c-02b8-4920-85bf-0150f0e3f0da', title: 'PATENT_TITLE_6787' },
                { id: 'd8f03de5-a2fd-4ef9-b4ca-2d78a5017073', title: 'PATENT_TITLE_9991' },
                { id: '15fae0aa-4356-4e1d-8a77-9ea5f0dea41a', title: 'PATENT_TITLE_3307' },
                { id: '121d32c4-f6d9-454a-9d68-be2eb1f102ec', title: 'PATENT_TITLE_1577' },
                { id: '512d8063-f976-4140-af67-4eccc14ceced', title: 'PATENT_TITLE_2728' },
                { id: 'e2dcb28d-27f1-4705-91e1-d188ff7a73c7', title: 'PATENT_TITLE_2899' },
                { id: '9b388d1e-3165-4084-aa65-1607052c21ac', title: 'PATENT_TITLE_5523' },
                { id: 'a7424e5a-f1ea-46ef-9134-7099e74f77cc', title: 'PATENT_TITLE_2515' },
                { id: 'fd1981c9-d8e1-4d65-8113-fe27eda85987', title: 'PATENT_TITLE_7901' },
                { id: 'f7979b07-39af-4ef0-bfce-79603e4f05fb', title: 'PATENT_TITLE_6094' },
            ]}
        />
    </Box>
)

export default App