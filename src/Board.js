import React from "react";
import "./App.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: Array(9).fill(null),
      curPlayer: "X",
      rows: [0, 0, 0],
      columns: [0, 0, 0],
      diagonals: [0, 0],
      winner: false,
    };
  }

  toggleWinner = () => {
    this.setState({
      winner: true,
    });
  };

  update(i) {
    let shift = 0;
    if (this.state.curPlayer === "X") {
      this.setState({ curPlayer: "O" });
      shift = 1;
    } else {
      this.setState({ curPlayer: "X" });
      shift = -1;
    }
    let columns = this.state.columns.slice();
    let rows = this.state.rows.slice();
    let diagonals = this.state.diagonals.slice();

    if (i % 3 === 0) {
      columns[0] += shift;
    } else if ((i - 1) % 3 === 0) {
      columns[1] += shift;
    } else if ((i - 2) % 3 === 0) {
      columns[2] += shift;
    }
    if (i < 3) {
      rows[0] += shift;
    } else if (i < 6) {
      rows[1] += shift;
    } else {
      rows[2] += shift;
    }
    if (i === 0 || i === 4 || i === 8) {
      diagonals[0] += shift;
    }
    if (i === 2 || i === 4 || i === 6) {
      diagonals[1] += shift;
    }
    this.setState(
      {
        rows: rows,
        columns: columns,
        diagonals: diagonals,
      },
      () => {
        this.check();
      }
    );
  }

  renderBox(i) {
    return (
      <Box
        className={this.handleFill(i)}
        value={this.state.tiles[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleFill(i) {
    const squares = this.state.tiles.slice();
    if (squares[i] === null) {
      return "box";
    }
    return "occupied";
  }

  handleClick(i) {
    const squares = this.state.tiles.slice();
    if (squares[i] != null || this.state.winner) {
      return;
    }
    squares[i] = this.state.curPlayer;
    this.setState({ tiles: squares });
    this.update(i);
  }

  clear() {
    this.setState({
      tiles: Array(9).fill(null),
      curPlayer: "X",
      rows: [0, 0, 0],
      columns: [0, 0, 0],
      diagonals: [0, 0],
      winner: false,
    });
  }
  check() {
    let i;
    for (i = 0; i < 3; i++) {
      if (
        Math.abs(this.state.columns[i]) === 3 ||
        Math.abs(this.state.rows[i]) === 3 ||
        (i !== 2 && Math.abs(this.state.diagonals[i]) === 3)
      ) {
        this.setState({ winner: true });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <h2>
          {this.state.winner
            ? this.state.curPlayer === "X"
              ? "Player O has won!"
              : "Player X has won!"
            : !this.state.tiles.includes(null)
            ? "There is a draw."
            : "Current Player: " + this.state.curPlayer}
        </h2>
        <button
          onClick={() => {
            this.clear();
          }}
        >
          <h2>Reset</h2>
        </button>
        <div className="grid">
          {this.renderBox(0)}
          {this.renderBox(1)}
          {this.renderBox(2)}
          {this.renderBox(3)}
          {this.renderBox(4)}
          {this.renderBox(5)}
          {this.renderBox(6)}
          {this.renderBox(7)}
          {this.renderBox(8)}
        </div>
      </div>
    );
  }
}

function Box(props) {
  return (
    <button className={props.className} onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Board;
