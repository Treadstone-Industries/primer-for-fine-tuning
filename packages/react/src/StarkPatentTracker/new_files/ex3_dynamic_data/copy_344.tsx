import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8b120461-8c9b-4d27-bc21-305a3544e80f', title: 'PATENT_TITLE_8697' },
        { id: '7dc06791-51fa-4565-a193-080c8faf85fe', title: 'PATENT_TITLE_2507' },
        { id: 'df110adc-f326-48ec-b263-04ec149309fc', title: 'PATENT_TITLE_4778' },
        { id: 'a27c77c2-29f4-47f4-b48a-81ffa914acac', title: 'PATENT_TITLE_4388' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App