import React from 'react';
import {Eva} from "@eva-ics/webengine";
import Gauge from "./components/gauge/Gauge";
import {useEvaState} from "@eva-ics/webengine-react";


const App = ({engine}: { engine: Eva }) => {
    const state = useEvaState({oid: "sensor:tests/temp", engine});
    const value = state.value || 0;

    return (
        <>
            <Gauge engine={engine} minValue={0} warnValue={30} critValue={60} maxValue={75} value={value}/>
        </>
    )
}

export default App
