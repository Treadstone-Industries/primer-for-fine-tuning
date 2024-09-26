import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'cb1ccac3-ce03-4c67-a6b9-2d667cdddd09', title: 'PATENT_TITLE_1740' },
        { id: 'e573d582-3a26-4443-8f79-31ed4e20ab35', title: 'PATENT_TITLE_1048' },
        { id: 'b60a8745-eb24-4a0e-a346-1b8dc2ff6917', title: 'PATENT_TITLE_9011' },
        { id: '93e2bd05-f440-4ae7-84b4-31d997188869', title: 'PATENT_TITLE_4627' },
        { id: '80e4ddb3-4604-4054-83e2-cb8e03229826', title: 'PATENT_TITLE_4842' },
        { id: '2b8f3733-6938-4e78-af48-a265feb015b0', title: 'PATENT_TITLE_5622' },
        { id: '36257e8d-879b-42af-84dd-d38679f1e9db', title: 'PATENT_TITLE_9745' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App