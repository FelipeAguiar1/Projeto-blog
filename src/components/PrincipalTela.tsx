import styles from '../components_css/PrincipalTela.module.css';

export function PrincipalTela() {
    return (
        <div className={styles.PrincipalTela}>
            <section>
                <a href="#">
                    <div>
                        <img src="/img/sistemas.jpg" alt="Contatos"/>
                        <h1>Fale conosco o que você deseja!</h1>
                    </div>
                </a>
                <a href="#">
                    <div>
                        <img src="/img/img-sobre.jpg" alt="Sobre"/>
                        <h1>Acompanhe um pouco sobre nossos trabalhos.</h1>
                    </div>
                </a>
            </section>
            <section style={{ margin:'-25px 0px 0px 0px' }}>
                <a href="#">
                    <div>

                    </div>
                </a>
                <a href="#">
                    <div> 

                    </div>
                </a>
            </section>
        </div>
    )
}