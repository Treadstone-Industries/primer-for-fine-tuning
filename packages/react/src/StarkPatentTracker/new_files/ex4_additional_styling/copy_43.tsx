import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'c3ffe6a8-86f7-4664-b92d-08e97a1621a6', title: 'PATENT_TITLE_6209' },
                { id: '0d66d1bf-ab4d-4080-ad2f-899665a46347', title: 'PATENT_TITLE_1363' },
                { id: '7e96d2fe-1498-4416-99fb-eb14465ffb38', title: 'PATENT_TITLE_6850' },
                { id: '6c0ab6dd-5fef-4b36-ab79-81354fc0d3e4', title: 'PATENT_TITLE_3538' },
                { id: 'b20906d1-c484-47db-9aac-71b501447457', title: 'PATENT_TITLE_1864' },
                { id: '96d720b0-955b-43af-8019-4653de8d3f2c', title: 'PATENT_TITLE_4161' },
                { id: '892533bc-5094-4318-92f0-50f77e5632fc', title: 'PATENT_TITLE_8083' },
                { id: '30f65b78-dc8a-44c2-a4e4-6bb2e07cd0ee', title: 'PATENT_TITLE_6336' },
                { id: 'bb5bbaaf-52e6-4820-ae94-044935a9e360', title: 'PATENT_TITLE_9324' },
                { id: 'e6bdc9cd-a4d4-45b1-9caa-5d1e5a02fa43', title: 'PATENT_TITLE_9666' },
            ]}
        />
    </Box>
)

export default App