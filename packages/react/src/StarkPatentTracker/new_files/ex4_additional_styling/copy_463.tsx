import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'a3e966b6-2e96-469d-bef0-e6adfc66cc67', title: 'PATENT_TITLE_4633' },
                { id: '477076f2-4e3a-4541-bc0d-5b748c0d2500', title: 'PATENT_TITLE_4315' },
                { id: 'a0d54878-c03e-4355-9cdc-f8ee27f7ce43', title: 'PATENT_TITLE_5483' },
                { id: '1663d2d4-2254-4bd9-b375-f49c6c3859ab', title: 'PATENT_TITLE_9494' },
                { id: 'c97e7b42-f364-4b8a-bf35-e567982feef6', title: 'PATENT_TITLE_1178' },
                { id: 'f861b202-2636-4dd0-92a6-fce69447b976', title: 'PATENT_TITLE_7766' },
            ]}
        />
    </Box>
)

export default App