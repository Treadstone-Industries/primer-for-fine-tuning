import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: 'b7e599d9-d23c-4278-aeb5-27426ae489cb', title: 'PATENT_TITLE_4933' },
            { id: '352a57de-2971-4255-9935-38f89e06e50c', title: 'PATENT_TITLE_7621' },
            { id: '1ca55901-8ba4-49e4-94c7-6a94fffa69a3', title: 'PATENT_TITLE_4484' },
            { id: '922cb13c-87e3-4f62-bf7d-53437e9ea02f', title: 'PATENT_TITLE_7042' },
            { id: '6423a808-2085-4204-aef9-1fd20d22896f', title: 'PATENT_TITLE_1491' },
        ]}
    />
)

export default App