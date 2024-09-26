import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9e8f69ec-1516-48ae-9367-c74e32a85dcf', title: 'PATENT_TITLE_8062' },
        { id: 'b7ef42f0-d912-4304-97e8-87a4398890c8', title: 'PATENT_TITLE_1944' },
        { id: '65ce44cc-b3fb-475e-9135-2f9f7792cd14', title: 'PATENT_TITLE_4433' },
        { id: '2396344b-351c-4756-ada4-9d8863a4085e', title: 'PATENT_TITLE_8437' },
        { id: '8c6ff6ed-f944-4c22-ab87-c31c43d5a5cb', title: 'PATENT_TITLE_3133' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App