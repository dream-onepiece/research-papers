import { Table } from "react-bootstrap";

import "./index.css";

const CustomTable = ( props ) => {

    const { columns, rows } = props;

    return <Table className="primary-font" bordered>
    <thead>
      <tr>
        { columns.map(column => <th key={column}>{ column }</th>) }
      </tr>
    </thead>
    <tbody>
        {
            rows.map((row, outerIndex) => {
                return <tr key={outerIndex}>
                    {
                    row.map((item, innerIndex)=> {
                        let value;

                        if( typeof item === 'string' ) {
                            value = item;
                        } else {
                            value = <p className="nested">{item.title} <span className="sub">{item.subTitle}</span></p>;
                        }

                        return <td key={innerIndex}>{value}</td>
                    }
                )
            }
                </tr>
            })
        }
      
    </tbody>
  </Table>
} 

export default CustomTable;