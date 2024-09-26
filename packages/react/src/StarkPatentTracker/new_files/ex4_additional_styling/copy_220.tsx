import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '7fc5d3f3-fd62-43a5-b42a-b6265aec89d3', title: 'PATENT_TITLE_9814' },
                { id: '76876468-295c-465f-b3fa-524ff0177f23', title: 'PATENT_TITLE_9682' },
                { id: '231f1752-58b3-40e0-907c-b75d545fb7ee', title: 'PATENT_TITLE_1705' },
                { id: 'fe3df5f4-c1d4-4514-b7c0-7e1d5b34c951', title: 'PATENT_TITLE_5968' },
                { id: '52843c99-d8a7-4f03-bc76-e7b5ab620407', title: 'PATENT_TITLE_4473' },
                { id: '377c728d-22c4-444a-8eb9-2f5496d64576', title: 'PATENT_TITLE_5793' },
                { id: '862a0ceb-471a-474e-9dc5-aa365d2855b6', title: 'PATENT_TITLE_5725' },
                { id: 'c29a3743-ffc3-4fa5-ab83-648d1487d92c', title: 'PATENT_TITLE_5147' },
                { id: 'bd5ba817-508a-4089-99e3-484ea03768ca', title: 'PATENT_TITLE_3464' },
            ]}
        />
    </Box>
)

export default App