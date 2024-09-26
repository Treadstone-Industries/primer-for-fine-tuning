import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '8088e5b6-3d75-4d60-aeb8-d07b9d3a7f8e', title: 'PATENT_TITLE_7114' },
        { id: 'e48ea127-730c-4a9e-835c-1f45e387a4a2', title: 'PATENT_TITLE_7311' },
        { id: '6e0e154a-8045-49ff-8239-5cea6f92bc9f', title: 'PATENT_TITLE_5400' },
        { id: '9553d336-1e97-491b-afad-cb9a34581f08', title: 'PATENT_TITLE_5955' },
        { id: '4a7037aa-c257-494f-bc95-dc8faa55575d', title: 'PATENT_TITLE_4549' },
        { id: '2e140a4a-8077-418b-9932-14edf047258b', title: 'PATENT_TITLE_1225' },
        { id: '95f6ae31-36d3-435e-9372-c2d7acac7e89', title: 'PATENT_TITLE_6843' },
        { id: 'a24a2738-149f-46d7-a136-cbca3639398b', title: 'PATENT_TITLE_7030' },
        { id: '4946cdad-d63e-4a4e-8e56-d6f63884ab25', title: 'PATENT_TITLE_6366' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App