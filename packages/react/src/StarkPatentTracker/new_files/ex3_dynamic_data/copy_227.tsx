import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8600e8e8-b0fd-4dc3-817c-dde0480d71a2', title: 'PATENT_TITLE_9134' },
        { id: '03ac5012-ea69-4be4-ab58-387719aa3245', title: 'PATENT_TITLE_7698' },
        { id: '012e7763-64bc-4f6a-9720-f9aedd18405d', title: 'PATENT_TITLE_8876' },
        { id: '1ed98f60-474f-4796-9cc0-bf9aca41861f', title: 'PATENT_TITLE_5850' },
        { id: 'a526265c-e463-4bb1-874b-c257c1933bcf', title: 'PATENT_TITLE_6786' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App