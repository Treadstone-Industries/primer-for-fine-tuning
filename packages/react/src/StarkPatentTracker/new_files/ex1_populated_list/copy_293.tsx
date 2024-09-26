import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'a7e23941-7294-4a44-a668-00c41fc28285', title: 'PATENT_TITLE_5974' },
            { id: '14c8e8c6-8bf9-4139-aabc-cd1f46bc4bcd', title: 'PATENT_TITLE_6364' },
            { id: '6ef97002-13bd-44a4-8ff4-81553c727035', title: 'PATENT_TITLE_2781' },
            { id: '439ca8c0-1b29-4cf0-bdb5-d102028eb1b0', title: 'PATENT_TITLE_7267' },
            { id: 'bdf8bc3b-6b41-4959-988c-33779aaa3f65', title: 'PATENT_TITLE_7487' },
            { id: 'f4695b0e-9efe-4a23-994f-cff85fe1331e', title: 'PATENT_TITLE_7817' },
            { id: 'c4cdf5e1-8a95-4523-b8d2-787aa56196cc', title: 'PATENT_TITLE_6065' },
            { id: '466c1e4f-87fd-4302-93a5-9ea022dbe71b', title: 'PATENT_TITLE_9279' },
            { id: '55094e5d-9ba6-43c2-a4d0-031b1e2a425a', title: 'PATENT_TITLE_2908' },
            { id: 'd89a67a4-1249-4176-91a5-daddf37825ef', title: 'PATENT_TITLE_1428' },
        ]}
    />
)

export default App