

export const BudgetSummary = () => {
    return (
        <div className="summary-container">
            <div className="summary-gral">
                <h2 className="summary-title">Resumen</h2>
                <div className="summary-item">
                    <h3 className="summary-subtitle">Total de gastos</h3>
                    <h4 className="summary-total">$20,087.75</h4>
                </div>
                <div className="summary-item">
                    <h3 className="summary-subtitle">Gasto promedio</h3>
                    <h4 className="summary-total small">$417.55</h4>
                </div>
                <div className="summary-item">
                    <h3 className="summary-subtitle">Número de gastos</h3>
                    <h4 className="summary-total small">5</h4>
                </div>
            </div>
            <div className="summary-categories-content">
                <div className="summary-gral">
                    <h2 className="summary-title">Resumen</h2>
                    <div className="graphic"></div>
                    <div className="summary-categories-list">
                        <div className="summary-item">
                            <div className="item-content-name">
                                <div className="point green"></div>
                                <h3 className="item-text">Comida</h3>
                                <h4 className="item-text">$850.00</h4>
                            </div>
                        </div>
                        <div className="summary-item">
                            <div className="item-content-name">
                                <div className="point yellow"></div>
                                <h3 className="item-text">Transporte</h3>
                                <h4 className="item-text">$500.00</h4>
                            </div>
                        </div>
                        <div className="summary-item">
                            <div className="item-content-name">
                                <div className="point purple"></div>
                                <h3 className="item-text">Entretenimiento</h3>
                                <h4 className="item-text">$348.00</h4>
                            </div>
                        </div>
                        <div className="summary-item">
                            <div className="item-content-name">
                                <div className="point green"></div>
                                <h3 className="item-text">Servicios</h3>
                                <h4 className="item-text">$389.00</h4>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}