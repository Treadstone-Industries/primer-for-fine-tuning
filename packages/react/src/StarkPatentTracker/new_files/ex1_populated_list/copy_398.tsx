import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4857963b-967e-4c6b-8cf8-4853f47fbfb2', title: 'PATENT_TITLE_9348' },
            { id: '8578a51c-87e1-411d-ba79-dc240d0237e6', title: 'PATENT_TITLE_9863' },
            { id: 'c9a811b4-b883-488e-85d8-b78674c766d1', title: 'PATENT_TITLE_9516' },
            { id: '9cac36ab-f9c0-4f7e-9667-36afc76f5f4a', title: 'PATENT_TITLE_2131' },
        ]}
    />
)

export default App