import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1b3fd453-f84c-43be-aa8a-2e3bfea22d95', title: 'PATENT_TITLE_3998' },
        { id: 'ec7c8da1-31da-4c5d-ab12-ed094f180036', title: 'PATENT_TITLE_7944' },
        { id: 'd292e069-5c61-490f-b251-e465e59dd33c', title: 'PATENT_TITLE_1444' },
        { id: '3e16bee2-05c1-4ca1-88b3-0e35d76c47eb', title: 'PATENT_TITLE_6243' },
        { id: 'b769e4bf-9897-46ba-b967-60d38a9e4ab7', title: 'PATENT_TITLE_4010' },
        { id: '54ffeb4a-ac6f-4b32-8942-44f0d17f3658', title: 'PATENT_TITLE_4733' },
        { id: '0dc01765-4787-4f08-973d-42eedffe3fc6', title: 'PATENT_TITLE_3447' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App