import React, { useEffect, useState } from "react";
import "./TransactionTable.css";
import axios from "axios";
// bootstrap imports
import Table from "react-bootstrap/Table";

const TransactionTable = () => {
    const [tableData, setTableData] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(4); //month picker default is April

    useEffect(() => {

        if (selectedMonth) {
            axios
                .get(`http://localhost:8080/sales_by_month?month=${selectedMonth}`)
                .then((res) => {
                    setTableData(res.data);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
    }, [selectedMonth]);


    // handling month chage
    const handleMonthPicker = (e) => {
        setSelectedMonth(parseInt(e.target.value))
    }


    return (
        <>
            <div className="search-select-div">
                <div className="month-picker-div">
                    <label htmlFor="month-picker" className="month-picker-label">Select
                        <select name="month-picker" id="month-picker" className="month-picker" value={selectedMonth} onChange={handleMonthPicker}>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option  value="3">Mar</option>
                            <option default value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>
                    </label>
                </div>


            </div>
            <div className="TransactionTable-comp">
                <Table className="tables" striped bordered hover variant="light" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Information</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Sold</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.description}</td>
                                    <td>{Math.floor(data.price)}</td>
                                    <td>{data.category}</td>
                                    <td>{`${data.sold}`}</td>
                                    <td className="trasaction-img">
                                        <img src={data.image} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>

        </>

    );
};

export default TransactionTable;
