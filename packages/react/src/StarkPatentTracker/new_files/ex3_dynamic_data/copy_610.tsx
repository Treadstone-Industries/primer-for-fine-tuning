import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2d46c7cd-ea9d-4772-9a38-d316b5c29c93', title: 'PATENT_TITLE_7340' },
        { id: '6ca49cd7-5442-4747-9a49-5eb51212dc55', title: 'PATENT_TITLE_3997' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App