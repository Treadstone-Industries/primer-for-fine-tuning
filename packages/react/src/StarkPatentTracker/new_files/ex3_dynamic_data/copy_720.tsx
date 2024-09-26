import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'dfd19874-3f07-4881-a056-217b2613faab', title: 'PATENT_TITLE_6302' },
        { id: '9577902b-7c44-4fd3-b33f-197e941d283c', title: 'PATENT_TITLE_8287' },
        { id: 'e7856812-ced2-4011-93ea-eaec2c9f79f4', title: 'PATENT_TITLE_1376' },
        { id: '68569229-972d-4103-821e-ed517456d38a', title: 'PATENT_TITLE_6085' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App