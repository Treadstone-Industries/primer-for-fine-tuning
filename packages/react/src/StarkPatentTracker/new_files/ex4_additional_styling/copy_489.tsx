import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '31661568-65eb-449f-bdd4-39ec7f6c31e2', title: 'PATENT_TITLE_1396' },
                { id: '4549cfe8-e786-4c54-9a21-a0887295c147', title: 'PATENT_TITLE_4688' },
                { id: '88c1b4c6-76d7-49af-869e-907a07544268', title: 'PATENT_TITLE_8815' },
                { id: '4c0d0e0d-6442-4bde-958e-4b5a76630705', title: 'PATENT_TITLE_5112' },
                { id: 'cdba81cd-5336-4b96-bf7e-7c572ba37400', title: 'PATENT_TITLE_2755' },
                { id: '301bc357-923b-43c2-80d6-72d640ce65d2', title: 'PATENT_TITLE_7932' },
                { id: '0ecb9207-73bf-47de-9966-2255d6f83960', title: 'PATENT_TITLE_6793' },
                { id: '3e8bd86f-ea51-412e-9472-7ea91d98aa34', title: 'PATENT_TITLE_2453' },
            ]}
        />
    </Box>
)

export default App