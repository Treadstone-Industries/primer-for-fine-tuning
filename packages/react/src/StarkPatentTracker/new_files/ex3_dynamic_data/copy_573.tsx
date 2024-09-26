import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'c314f629-1a53-4019-8e76-c45888b3843a', title: 'PATENT_TITLE_5919' },
        { id: '5b48b90b-6531-47ca-979e-295bc095bba0', title: 'PATENT_TITLE_4670' },
        { id: 'bc457646-26f3-436f-960d-23b70eeb9ab8', title: 'PATENT_TITLE_1058' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App