import React, { useState } from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => {
    const [patents, setPatents] = useState([
        { id: '123456789', title: 'PATENT_TITLE' },
        { id: '3e4eb91c-a60b-4167-b80a-9cd57a6ded3e', title: 'PATENT_TITLE_3770' },
        { id: '45db41cd-025d-46fc-9a40-ac234ce2ff40', title: 'PATENT_TITLE_2285' },
        { id: '6c810f7e-1ad8-4987-844c-37455e66ae58', title: 'PATENT_TITLE_3767' },
        { id: '1b9749fd-e8ff-4072-80ad-96c797e00d30', title: 'PATENT_TITLE_9680' },
        { id: '82368cd1-abe6-490b-861b-132c7c5d46ed', title: 'PATENT_TITLE_8925' },
        { id: 'eae77eca-656e-4d91-a472-354636b7e173', title: 'PATENT_TITLE_1903' },
        { id: '7c733bba-55f9-457b-a115-b4c918f6673c', title: 'PATENT_TITLE_4222' },
        { id: '4d79c677-c9ae-401a-9138-10db3cafdfde', title: 'PATENT_TITLE_1033' },
    ])

    return <StarkPatentTracker patents={patents} />
}

export default App