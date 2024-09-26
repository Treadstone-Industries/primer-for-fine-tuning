import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'a1ab4247-1097-42da-8b6d-42d96e42f89e', title: 'PATENT_TITLE_8598' },
        { id: 'c0eb816b-41c3-4732-8bb5-03cf35dd2f8d', title: 'PATENT_TITLE_2651' },
        { id: '73c7ecb5-b330-4f72-a14c-e4569a544b48', title: 'PATENT_TITLE_6092' },
        { id: '25069978-4ba9-4c23-b076-10565e5c8ec9', title: 'PATENT_TITLE_4719' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App