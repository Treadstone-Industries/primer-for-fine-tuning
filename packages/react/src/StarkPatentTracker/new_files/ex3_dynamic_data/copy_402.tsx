import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '9de5e6bc-036c-47a7-ad1e-9390aa45a1c7', title: 'PATENT_TITLE_8270' },
        { id: 'ffb1f278-1435-40fc-9d85-542d0e5e71b9', title: 'PATENT_TITLE_2145' },
        { id: 'c684c053-f1ee-424d-9d88-14940d53157e', title: 'PATENT_TITLE_6203' },
        { id: 'a6f3b8da-73d1-4498-a857-f8e6b1d1309a', title: 'PATENT_TITLE_6210' },
        { id: '79342d60-a53a-43e8-9734-2de05e6e9c07', title: 'PATENT_TITLE_7095' },
        { id: 'd888d111-2726-44a1-ae72-edec865e6b60', title: 'PATENT_TITLE_2209' },
        { id: '211f8f55-e52a-4a07-9093-0c342ef9777c', title: 'PATENT_TITLE_5974' },
        { id: '58a58b6e-1ddc-4b9a-85d6-627db31916e5', title: 'PATENT_TITLE_1639' },
        { id: '2b56501e-9ec7-4766-a46c-f20f217a833d', title: 'PATENT_TITLE_9827' },
        { id: 'f7d38b92-ff4d-4eda-885a-93844d6d47a9', title: 'PATENT_TITLE_6898' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App