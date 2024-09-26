import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'f8487e64-1b03-4449-8db9-4f8dd57cfb61', title: 'PATENT_TITLE_6746' },
        { id: 'b0eca83e-86da-44a4-832d-8d8acf8801e0', title: 'PATENT_TITLE_9147' },
        { id: '59d7772f-81b8-45fa-b900-192b166afe09', title: 'PATENT_TITLE_8113' },
        { id: '979c04dc-54ea-48f8-8a02-af4296a379fa', title: 'PATENT_TITLE_1153' },
        { id: '2c2f91b3-4374-47a6-991e-a7d31a6a42d1', title: 'PATENT_TITLE_2851' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App