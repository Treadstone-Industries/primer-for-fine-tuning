import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1dcb098b-5472-4f71-a35e-b8b230ccccbe', title: 'PATENT_TITLE_9695' },
        { id: '21e9760c-d5ca-439f-a6fe-10ba15cc93de', title: 'PATENT_TITLE_4231' },
        { id: '3363fc15-624c-40ff-ba7f-9da937fa0d4d', title: 'PATENT_TITLE_9620' },
        { id: '35947dd8-80ee-47d6-9b35-bbfbb3c59cfd', title: 'PATENT_TITLE_7235' },
        { id: 'a9258773-9213-4dcc-bb17-4991dcb5ac9a', title: 'PATENT_TITLE_7397' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App