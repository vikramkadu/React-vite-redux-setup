import React,{ useState, useEffect } from 'react';

const DataTable = () => {
    const [jsonData, setJsonData] = useState(null);
    const [tableData, setTableData] = useState([]);

    const xmlData = `
  <table>
  <row>
    <cell id="1" type="name" float="0" editable="1" color="#FF0000">John Doe</cell>
    <cell id="2" type="age" float="0" editable="0" color="#00FF00">30</cell>
    <cell id="3" type="gender" float="1" editable="1" color="#0000FF">Male</cell>
  </row>
  <row>
    <cell id="4" type="name" float="0" editable="1" color="#FF00FF">Jane Smith</cell>
    <cell id="5" type="age" float="0" editable="0" color="#FFFF00">28</cell>
    <cell id="6" type="gender" float="1" editable="1" color="#00FFFF">Female</cell>
  </row>
  <row>
    <cell id="7" type="name" float="0" editable="1" color="#800080">Alex Johnson</cell>
    <cell id="8" type="age" float="1" editable="0" color="#008080">25</cell>
    <cell id="9" type="gender" float="0" editable="1" color="#800000">Non-Binary</cell>
  </row>

</table>

  `;
    console.log("xmlData", xmlData)

    const parseXMLtoJSON = () => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
        console.log("xmlDoc>>", xmlDoc)

        const jsonResult = xmlToJson(xmlDoc);
        setJsonData(jsonResult);
    };

    const xmlToJson = (xml) => {
        return {
            table: {
                row: Array.from(xml.querySelectorAll('row')).map((row, rowIndex) => ({
                    id: rowIndex + 1,
                    cells: Array.from(row.querySelectorAll('cell')).map((cell, cellIndex) => {
                        const attributes = Array.from(cell.attributes).reduce((acc, attribute) => {
                            acc[attribute.name] = attribute.value;
                            return acc;
                        }, {});

                        return {
                            id: cellIndex + 1,
                            data: cell.textContent.trim(),
                            attributes: attributes,
                        };
                    }),
                })),
            },
        };
    };

    useEffect(() => {
        parseXMLtoJSON();
    }, []);

    useEffect(() => {
        if (jsonData) {
            const rows = jsonData.table.row.map((row, rowIndex) => ({
                id: rowIndex + 1,
                cells: row.cells,
            }));
            setTableData(rows);
        }
    }, [jsonData]);
    console.log('tableData', tableData)

    return (
        <div style={{ marginLeft: '10px' }}>
            <h2>Data Table from XML</h2>
            <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        {tableData.length > 0 &&
                            tableData[0].cells.map((cell, index) => (
                                <th style={{ border: '1px solid black', padding: '8px' }} key={index}>{`${cell.attributes.type}`}</th>
                            ))}
                    </tr>
                </thead>

                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{row.id}</td>
                            {row.cells.map((cell, index) => (
                                <td
                                    key={index}
                                    contentEditable={cell.attributes.editable === '1'}
                                    style={{
                                        border: '1px solid black',
                                        padding: '8px', color: cell.attributes.color, float: cell.attributes.float
                                    }}
                                >
                                    {cell.data}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default DataTable;