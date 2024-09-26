import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '5ef68176-58f5-49d7-9c0f-f70780a79528', title: 'PATENT_TITLE_5750' },
        { id: '27041de8-cf75-40bc-9c14-25335737d836', title: 'PATENT_TITLE_4004' },
        { id: 'c0646fca-79c4-4708-8f1f-05a5e3ae1b14', title: 'PATENT_TITLE_8592' },
        { id: '0a579ad5-0f84-4ac0-923f-df607e694e35', title: 'PATENT_TITLE_9548' },
        { id: '52dc7ebd-91ea-44fd-a742-d94b4010811b', title: 'PATENT_TITLE_3697' },
        { id: '9c86e254-7256-4fa0-91ff-8168c79bf3f1', title: 'PATENT_TITLE_7480' },
        { id: '6195c064-c556-431c-b255-52cfdd21fec3', title: 'PATENT_TITLE_7024' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App