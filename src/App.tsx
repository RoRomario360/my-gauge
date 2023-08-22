import React from 'react';
import {Eva} from "@eva-ics/webengine";
import {Gauge} from "./components/gauge/index";


const App = ({engine}: { engine: Eva }) => {

    return (

        <Gauge engine={engine} minValue={0} warnValue={30} critValue={65}
               maxValue={95}/>

    )
}

export default App
