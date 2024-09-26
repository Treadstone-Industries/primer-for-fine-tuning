import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '2e7bf048-38f6-4dac-aa0e-b644146fb35d', title: 'PATENT_TITLE_9521' },
                { id: 'f8279ecf-9189-4e95-ad81-ae92d439a561', title: 'PATENT_TITLE_1211' },
                { id: 'd55f13ef-7204-4396-84e0-9fd70c229c2e', title: 'PATENT_TITLE_9409' },
                { id: '84611fe6-72f1-4bed-bc92-25423df09e03', title: 'PATENT_TITLE_9750' },
                { id: '1d375de8-b3f6-4c86-86d2-b38d989a2e70', title: 'PATENT_TITLE_4393' },
                { id: '69a72e78-6ef7-40a1-9157-e41ea1628636', title: 'PATENT_TITLE_1312' },
                { id: '70b086a5-9242-4052-bacd-79ece1a1d66d', title: 'PATENT_TITLE_1809' },
                { id: '438ffb57-96aa-4a7f-9fdc-bcffd1228de0', title: 'PATENT_TITLE_3141' },
            ]}
        />
    </Box>
)

export default App