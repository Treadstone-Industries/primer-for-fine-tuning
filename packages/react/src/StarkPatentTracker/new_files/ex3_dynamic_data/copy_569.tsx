import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '38d36669-f839-4380-be29-3c72fa7ef3aa', title: 'PATENT_TITLE_5740' },
        { id: '6eeae6cc-8ca6-4a77-b92c-5e81c6dc5a80', title: 'PATENT_TITLE_5317' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App