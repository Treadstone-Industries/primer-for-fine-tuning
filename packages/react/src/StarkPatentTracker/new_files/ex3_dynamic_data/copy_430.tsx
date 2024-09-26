import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8da47ed0-590a-403a-abfa-f3ffc49e9d5f', title: 'PATENT_TITLE_5850' },
        { id: '0d1b73c5-6892-420e-b1a9-99ce336c4e24', title: 'PATENT_TITLE_4748' },
        { id: '66b80ae2-1097-4eaa-9b72-e017b973f38b', title: 'PATENT_TITLE_7085' },
        { id: '0972d962-e264-4016-a35d-5ecdbbfc923e', title: 'PATENT_TITLE_3355' },
        { id: '83a55f24-2bc5-4cb2-a8a4-ebc1d2768d23', title: 'PATENT_TITLE_2742' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App