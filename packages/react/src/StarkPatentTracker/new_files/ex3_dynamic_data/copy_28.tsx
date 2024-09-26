import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '97f53e0a-7f41-45cb-90cd-1bb8960b7521', title: 'PATENT_TITLE_5265' },
        { id: '61a14fd1-3569-4f5f-8daa-701eab0aba24', title: 'PATENT_TITLE_2684' },
        { id: '27d11c9d-1c55-44bc-95f4-7108af75800a', title: 'PATENT_TITLE_2274' },
        { id: 'b5edc692-f0d1-40eb-9ad5-619c0bfae434', title: 'PATENT_TITLE_4819' },
        { id: '61508293-0b4b-426d-a50a-8aa7e4f3c286', title: 'PATENT_TITLE_4249' },
        { id: 'ebd1e347-7966-400b-9405-dac29c914a8e', title: 'PATENT_TITLE_5574' },
        { id: 'c0fc5d06-f556-4346-932c-480995218a81', title: 'PATENT_TITLE_4361' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App