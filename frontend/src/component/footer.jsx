
export const Footer = () => {

    return (
        <footer className="footer">
            <div className="foot">
            <div>
                <h5 className="b">A propos de Mondi</h5><br />
                <p>
                    Mondi est un application permettant aux amoureux du tourisme de se divertir 
                    avec l'aide de nos guides touristique
                </p>
            </div>
            <div className='line'>
                <h5 className="b">Nos services</h5><br />
                <p> • Visites guidées</p>
                <p> • Hebergement</p>
                <p> • Transport</p>
                <p> • Restauration</p>
            </div>
            <div className='line'>
                <h5 className="b">Nous contacter</h5><br />
                <p><b>Tel :</b>070000000</p>
                <p><b>Fix :</b>010203040</p>
                <p><b>Localisation :</b> Abidjan CI</p>
            </div>
            <div>
                <h5 className="b">Envoyer un message</h5><br />
                <input type="text" placeholder='Entrer email' />
                <button>Envoyer</button>
            </div>
            </div>
            <div className='copyrigth'>
                <h6>2023 &copy; Fait avec <i className="fas fa-heart text-danger"></i> par Anne-Marie Agbonou</h6>
            </div>
            
        </footer>
    );
}

