import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '1d078a64-8c8c-461b-865e-f6a134feea88', title: 'PATENT_TITLE_2069' },
        { id: '34d9362c-5b6c-4052-a74c-ef85555ecfa6', title: 'PATENT_TITLE_7336' },
        { id: '505634f9-c819-4dcc-bdd5-00efd45134d5', title: 'PATENT_TITLE_3856' },
        { id: '0f5bfa26-b7fe-4944-be17-cd2c08688990', title: 'PATENT_TITLE_7856' },
        { id: '897bd2cb-e500-4765-bc2a-61668a4e3001', title: 'PATENT_TITLE_5136' },
        { id: '7fd3511a-015b-4fa9-8a00-c01e462a26d4', title: 'PATENT_TITLE_5367' },
        { id: 'afdc8ba3-240f-4818-9fd0-85d529b9801a', title: 'PATENT_TITLE_4366' },
        { id: '0f166bed-ee81-485b-991c-6917c2bc8c63', title: 'PATENT_TITLE_7305' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App