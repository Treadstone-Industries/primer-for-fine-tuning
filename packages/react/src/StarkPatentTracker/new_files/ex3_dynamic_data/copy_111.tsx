import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'fd1d386a-1779-42e7-a053-97fcf1c458cd', title: 'PATENT_TITLE_1207' },
        { id: 'c3732fe2-8873-418b-9516-7f4e1ff76045', title: 'PATENT_TITLE_4158' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App