import { useState } from "react";

const Board = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));  //una matriz de 9 valores nulos que corresponden a los 9 cuadrados
    //const [value, setValue] = useState(null);
    //valuealmacena el valor y setValuees una función que se puede usar para cambiar el valor
    //null valor inicial
    //El Board componente puede indicar a cada uno Square qué mostrar pasándole una prop

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                 {/* Renderizando componentes Square dentro del componete Board */}
                {/* Board necesita pasar la value propiedad a cada elemento Squareque renderiza -> value={squares[0] */}
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            {/* agrupar los cuadrados en filas con div etiquetas `<span> */}
            </div>

        </>
    )
}
//componente Square
//{ value, onSquareClick } props del componente
function Square({ value, onSquareClick }) {
    //recibe la value propiedad del componente Board
    //function Square({ value })indica que al componente Square se le puede pasar una propiedad llamada value (props)
    // Cada cuadrado recibirá ahora un value objeto que será 'X', 'O', o null para los cuadrados vacíos.
    return <button className="square" onClick={onSquareClick}>{value}</button>;
    //pasarás una función del Board componente al Square componente, 
    // y tendrás que en Square llamar a esa función cuando se haga clic en un cuadrado

}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
const TicTacToe = () => {


    return (
        <div>
            <Board />
        </div>
    )
}
export { TicTacToe } // La exportpalabra clave de JavaScript hace que esta función sea accesible fuera de este archivo.

