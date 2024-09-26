import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'
import Box from '../Box'

const App = () => (
    <Box sx={{ padding: 4 }}>
        <StarkPatentTracker
            patents={[
                { id: '123456789', title: 'PATENT_TITLE' },
                { id: '8ca6c568-0bcc-4933-8f76-096cd2947862', title: 'PATENT_TITLE_9212' },
                { id: 'dd2ca930-5ed5-45d8-a454-1560a53ebc72', title: 'PATENT_TITLE_1003' },
                { id: 'f0e2baa1-bb1e-4262-bd08-371767e7bfd2', title: 'PATENT_TITLE_7453' },
                { id: '77c70317-ca19-43a3-8036-71325ff7acc0', title: 'PATENT_TITLE_9602' },
                { id: '059243e7-e8f3-4263-b2ce-3148eb406159', title: 'PATENT_TITLE_5799' },
                { id: 'bf0b5ccb-20ed-45a9-92b7-0b08b47a703e', title: 'PATENT_TITLE_2841' },
                { id: 'dade2db0-3afe-474f-a072-fb7940f14998', title: 'PATENT_TITLE_9982' },
                { id: 'c80ce966-4e12-46bb-bc36-9444dd9e0b99', title: 'PATENT_TITLE_9908' },
                { id: 'f20406b9-7702-4244-bfef-e79ca58e2ee7', title: 'PATENT_TITLE_9031' },
            ]}
        />
    </Box>
)

export default App