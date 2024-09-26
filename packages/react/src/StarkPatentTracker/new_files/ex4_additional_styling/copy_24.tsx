import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: 'f7d0cbcc-10e5-4ff7-b64c-e329cbbc5b27', title: 'PATENT_TITLE_7310' },
                { id: '066d1968-4ca4-4caa-9005-f2211edff48c', title: 'PATENT_TITLE_5139' },
                { id: '40ec3b4a-e9af-4bca-a7fb-3fe9d1e532e3', title: 'PATENT_TITLE_4361' },
                { id: '09db3819-049a-41fe-84e4-988ef40e8719', title: 'PATENT_TITLE_1507' },
                { id: 'c4067dd8-a5db-4d77-8ba8-bb0e15da6c4b', title: 'PATENT_TITLE_1288' },
                { id: '81aad15e-6848-4207-b24f-afff65993216', title: 'PATENT_TITLE_6374' },
                { id: '70817bb2-6f9f-44ae-ad5f-71e1343f05d0', title: 'PATENT_TITLE_8250' },
                { id: '0fa08ee6-b6e9-4d7b-87d7-34beb2f2c5d0', title: 'PATENT_TITLE_3132' },
                { id: '4b092e4c-35fb-4972-b1f5-a5915d6fad1b', title: 'PATENT_TITLE_1887' },
                { id: 'b0f27570-6737-4f9e-84ca-2e25e8b529a3', title: 'PATENT_TITLE_3412' },
            ]}
        />
    </Box>
)

export default App