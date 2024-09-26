import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5adf0bac-3a76-4642-ac56-fc53bf031dd1', title: 'PATENT_TITLE_3362' },
        { id: '647d781c-ddbb-4de9-bbab-9f2bfcbd8c37', title: 'PATENT_TITLE_6671' },
        { id: '9c0463da-802b-4881-b6a9-cc9fdf4e1668', title: 'PATENT_TITLE_2191' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App