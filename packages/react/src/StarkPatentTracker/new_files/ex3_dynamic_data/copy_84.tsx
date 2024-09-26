import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'e826d02b-7607-44e7-a2a7-6557ec3dc2fa', title: 'PATENT_TITLE_4412' },
        { id: 'f93ef8e9-4396-495e-bc81-60ef983d8065', title: 'PATENT_TITLE_3694' },
        { id: '271457e4-78dc-4f0e-a920-23ad8b430dc8', title: 'PATENT_TITLE_2802' },
        { id: 'a5ee6d9c-acda-457c-8f29-6baf27d890ab', title: 'PATENT_TITLE_7803' },
        { id: '36ba3c57-735b-464a-8aac-70eb3d6ed45a', title: 'PATENT_TITLE_7504' },
        { id: '0db0a79d-caa6-4ff4-bccf-433a3e634f81', title: 'PATENT_TITLE_7254' },
        { id: '8f7d52ed-f122-4eee-b649-e9b019a99dfb', title: 'PATENT_TITLE_7653' },
        { id: '33c30a7d-e10f-417c-90ba-dcc937a6db19', title: 'PATENT_TITLE_4999' },
        { id: '6778d7a4-3c27-4111-bb51-57b41c692297', title: 'PATENT_TITLE_9506' },
        { id: '7f092cd0-5ffe-4c51-a98a-38b226512148', title: 'PATENT_TITLE_4476' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App