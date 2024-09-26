import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '0c4bc3c1-8fbe-4d57-bd2a-32042c902764', title: 'PATENT_TITLE_9014' },
        { id: '36fefb77-1fa0-497e-a4fb-5942863bb01b', title: 'PATENT_TITLE_5154' },
        { id: '2490f8f0-73f7-4aaf-9225-78e21d827a15', title: 'PATENT_TITLE_2961' },
        { id: '534ea7f3-2ffd-4f7f-9daf-2c7fcde59e9d', title: 'PATENT_TITLE_2395' },
        { id: '604bd735-728a-4886-9060-c19bc0b7a250', title: 'PATENT_TITLE_4436' },
        { id: '035cb5c6-0a82-4dec-af74-8820652010a5', title: 'PATENT_TITLE_4033' },
        { id: '1457a823-228f-4849-a51c-8a2a2c0fc8a7', title: 'PATENT_TITLE_1784' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App