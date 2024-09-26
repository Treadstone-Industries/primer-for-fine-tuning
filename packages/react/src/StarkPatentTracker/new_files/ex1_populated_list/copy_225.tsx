import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '4f289ddd-939a-4203-a193-be22f16cbb99', title: 'PATENT_TITLE_8769' },
            { id: 'ff53f210-ddac-4be0-959a-14e1f7f1af60', title: 'PATENT_TITLE_7510' },
            { id: '57818b5d-5313-44d0-97a7-29f88d10028c', title: 'PATENT_TITLE_8996' },
            { id: 'ba0a7528-e98d-4f20-80b5-941d36760159', title: 'PATENT_TITLE_2783' },
            { id: 'a3fdb367-ba97-4507-8400-f6413de7eb46', title: 'PATENT_TITLE_6246' },
            { id: 'ccc17cde-dc74-4feb-ab79-172f2d02183f', title: 'PATENT_TITLE_6051' },
            { id: '9bf34d5d-787a-4182-8742-925c1e0576a2', title: 'PATENT_TITLE_2240' },
        ]}
    />
)

export default App