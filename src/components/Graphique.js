import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis } from 'recharts';

const Graphique = (props) => {   

    /*
    const data2 = [
        {codeOk: 12, codeBug: 14, codePc: 15},
        {codeOk: 16, codeBug: 44, codePc: 15}, 

    ];*/

    return (
            <div>
                <LineChart width={730} height={250} data={props.data} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="scoreOk" stroke="#21b65a" name="Code Ok"/>
                    <Line type="monotone" dataKey="scoreBug" stroke="#c0392b" name="Code Bug"/>
                    <Line type="monotone" dataKey="scorePc" stroke="#5a0deb" name="Code PC"/>
                </LineChart>
            </div>
    );
};

export default Graphique;