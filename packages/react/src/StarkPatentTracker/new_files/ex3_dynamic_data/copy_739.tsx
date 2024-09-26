import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e8054c26-5ff4-4e73-abe7-cca20f843faa', title: 'PATENT_TITLE_4920' },
        { id: '10037492-185d-417b-a556-8bbb46016874', title: 'PATENT_TITLE_2977' },
        { id: '09205526-e157-42da-ab13-973d239d0d14', title: 'PATENT_TITLE_9522' },
        { id: '2f4d05af-4816-4362-b54c-37532db7eb4d', title: 'PATENT_TITLE_8052' },
        { id: '8359f19e-1ff9-478d-be2d-40bc437fa1df', title: 'PATENT_TITLE_2666' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App