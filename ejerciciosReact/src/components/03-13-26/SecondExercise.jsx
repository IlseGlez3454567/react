const SecondExercise = () => {

    function sendMessage() {
        console.log('Estoy aprendiendo React')

    }

    return (
        <div>
            <button onClick={sendMessage}>
                Enviar mensaje
            </button>
        </div>
    )
}

export { SecondExercise }