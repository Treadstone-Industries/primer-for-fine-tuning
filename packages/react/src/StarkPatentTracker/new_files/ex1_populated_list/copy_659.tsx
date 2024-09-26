import React from 'react'
import StarkPatentTracker from './StarkPatentTracker'

const App = () => (
    <StarkPatentTracker
        patents={[
            { id: '123456789', title: 'PATENT_TITLE' },
            { id: '930981ac-8940-4bfb-ba20-c95c36ca7792', title: 'PATENT_TITLE_3454' },
            { id: 'cf5fced2-4d41-4ee2-8d65-07ba2297bf35', title: 'PATENT_TITLE_3131' },
            { id: 'c2473860-7314-4e90-a770-be15c75f10e8', title: 'PATENT_TITLE_1944' },
            { id: 'dc20e513-49d1-4bb9-8ee3-3745b4a23c97', title: 'PATENT_TITLE_6252' },
            { id: '3486b69f-1d0b-4672-a246-969f5dd65fe8', title: 'PATENT_TITLE_8385' },
            { id: '3a8b3b67-797c-4487-91dc-d49d350ecc77', title: 'PATENT_TITLE_9110' },
            { id: '4a9c3afb-d50e-4f29-bd1c-72a42af54bea', title: 'PATENT_TITLE_8421' },
            { id: '12237883-0ed4-48dc-b207-5edcba85e939', title: 'PATENT_TITLE_5576' },
            { id: '99dbaff6-dade-4425-b048-7a76628c4ccd', title: 'PATENT_TITLE_3450' },
            { id: 'c293b7c8-e9db-4df0-915d-563fbb2edffa', title: 'PATENT_TITLE_8260' },
        ]}
    />
)

export default App