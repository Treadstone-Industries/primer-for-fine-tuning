import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '2c57dd2b-6f6f-4331-93ee-fa507bc7b1d9', title: 'PATENT_TITLE_9096' },
        { id: '0c32eb1c-d320-44c1-be71-31bc2341fd6e', title: 'PATENT_TITLE_6253' },
        { id: 'abd27052-592f-48d1-a770-b7d9535b9612', title: 'PATENT_TITLE_7708' },
        { id: '6f9d8d6b-3a0e-41c5-b65d-43dd7438951b', title: 'PATENT_TITLE_9465' },
        { id: '9b5736f1-1de5-4e2a-9d7a-711ca2540601', title: 'PATENT_TITLE_2299' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App