import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '44f2311a-7746-463e-9ec6-661a5bd0724b', title: 'PATENT_TITLE_8592' },
            { id: 'dadb04dc-7efd-4ef6-afa1-677f9bec1e8c', title: 'PATENT_TITLE_8055' },
            { id: '8882cc41-d4f0-42a7-b98d-28c835d528d0', title: 'PATENT_TITLE_9947' },
            { id: '415220db-be42-4de3-8010-6deb1eda6e6e', title: 'PATENT_TITLE_7328' },
            { id: 'de6719d7-f7df-4d99-97d4-0091f8ecc005', title: 'PATENT_TITLE_4801' },
            { id: '1fcfc62e-f983-43a8-8101-c1eefdb27970', title: 'PATENT_TITLE_2807' },
            { id: '237d0912-784d-46ed-be41-fd824a795f2b', title: 'PATENT_TITLE_4235' },
            { id: 'f2b64455-f921-4a7b-971a-535c57abe5ba', title: 'PATENT_TITLE_9137' },
            { id: '4587069f-d1d6-4f4b-9940-42764048630c', title: 'PATENT_TITLE_7559' },
            { id: '5218b03d-9b37-4ece-8e1f-3644ea7d588a', title: 'PATENT_TITLE_9546' },
        ]}
    />
)

export default App