import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: 'd6246fa9-e14c-4e9c-a3ea-6e7ff79c3198', title: 'PATENT_TITLE_6750' },
        { id: 'e413906c-f6ee-405f-bb89-03a897247a3a', title: 'PATENT_TITLE_7872' },
        { id: '398ee572-06fc-4a66-81fd-70e5583b8203', title: 'PATENT_TITLE_5584' },
        { id: '35089b99-2f5f-4284-b1f5-11c821c7e5b2', title: 'PATENT_TITLE_4857' },
        { id: 'e0711865-a084-43e8-acc7-936f21ac9397', title: 'PATENT_TITLE_8934' },
        { id: '14eac104-f455-4704-a66f-18dc585d4b40', title: 'PATENT_TITLE_9048' },
        { id: 'd9c05b37-195f-47e4-a029-369190048011', title: 'PATENT_TITLE_2315' },
        { id: '8b9a170f-c917-400e-aa83-32586865acb4', title: 'PATENT_TITLE_9556' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App