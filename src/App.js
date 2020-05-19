import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      board: [],
    };
  }

  getData = async () => {
    const board = await axios.get("http://localhost:5000/list");
    console.log(board.data);
    console.log(board.data);

    this.setState({ board: board.data, isLoading: false });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { isLoading, board } = this.state;

    const boardList = board.map((board, index) => (
      <tr key={index}>
        <td>{board.bno}</td>
        <td>{board.title}</td>
        <td>{board.writer}</td>
        <td>{moment(board.regdate).format("YYYY-MM-DD")}</td>
        <td>{board.viewcnt}</td>
      </tr>
    ));

    return (
      <div>
        {isLoading ? (
          <div style={{ textAlign: "center" }}>
            <span>Loading...</span>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <table>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody>{boardList}</tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

// <tr>
//   <td>{board.bno}</td>
//   <td>{board.title}</td>
//   <td>{board.name}</td>
//   <td>{board.regdate}</td>
//   <td>{board.viewcnt}</td>
// </tr>
export default App;
