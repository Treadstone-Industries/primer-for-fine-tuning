import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '6ad3d86b-492a-4e18-9daf-09cae1855aab', title: 'PATENT_TITLE_4017' },
            { id: '7028c167-b551-438d-8376-adc3e7f210dd', title: 'PATENT_TITLE_2782' },
            { id: '7917127a-3647-4542-8718-e675257e7e9c', title: 'PATENT_TITLE_7583' },
            { id: '2cb6625b-3db2-4dc7-8f73-8ddc8bb2e7f4', title: 'PATENT_TITLE_2603' },
            { id: '3bf41865-207f-4681-b605-631e5252fda1', title: 'PATENT_TITLE_9496' },
            { id: '929ea81b-4913-46d0-9bba-136298528944', title: 'PATENT_TITLE_4895' },
            { id: '4cd70b69-0f64-4f71-a41b-a47eb822c6a0', title: 'PATENT_TITLE_7712' },
            { id: '85dad513-fd00-4561-8914-f72445a0f710', title: 'PATENT_TITLE_6741' },
        ]}
    />
)

export default App