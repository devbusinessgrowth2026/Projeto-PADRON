const ContactForm = () => {
    return (
        <div className="contact-content">
            <h2>Fale com a Padron</h2>
            <p>
                Envie sua dúvida ou solicite um orçamento sem compromisso. Responderemos o mais rápido possível.
            </p>
            <form action="contact.php" id="contact-form" method="POST" className="contact-form-items">
                <div className="row g-4">
                    <div className="col-lg-6 wow slideUp" data-delay=".3">
                        <div className="form-clt">
                            <span>Seu nome*</span>
                            <input type="text" name="name" id="name" placeholder="Seu nome" />
                        </div>
                    </div>
                    <div className="col-lg-6 wow slideUp" data-delay=".5">
                        <div className="form-clt">
                            <span>Seu e-mail*</span>
                            <input type="text" name="email" id="email" placeholder="Seu e-mail" />
                        </div>
                    </div>
                    <div className="col-lg-12 wow slideUp" data-delay=".7">
                        <div className="form-clt">
                            <span>Mensagem*</span>
                            <textarea name="message" id="message" placeholder="Descreva sua necessidade ou serviço desejado" defaultValue={""} />
                        </div>
                    </div>
                    <div className="col-lg-7 wow slideUp" data-delay=".9">
                        <button type="submit" className="theme-btn">
                            Enviar mensagem <i className="fa-solid fa-arrow-right-long" />
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default ContactForm