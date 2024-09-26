import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '52251866-2331-4a09-bccc-812fb0bdd62d', title: 'PATENT_TITLE_4155' },
        { id: 'ddf0904c-7cf2-40e4-809f-81a2ec72dc2c', title: 'PATENT_TITLE_6060' },
        { id: '3fe81abd-70d0-4c23-919a-506b4b3e3407', title: 'PATENT_TITLE_9771' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App