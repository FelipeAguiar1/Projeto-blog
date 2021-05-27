import styles from "../components_css/Menu.module.css";

export function Menu() {
    return (
        <div className={styles.menu}>
            <header>
                <div>
                    <p>DevFULL</p>
                </div>
                <p>Utilize o melhor</p>
            </header>
            <footer>
                <div>
                    <p><a href="#">Principal</a></p>
                    <p><a href="#">Blog</a></p>
                    <p><a href="#">Sobre</a></p>
                    <p><a href="#">Contatos</a></p>
                </div>
            </footer>
            <div style={{width: '85%'}}/>
            <input type="search" placeholder="    Pesquisar" />
            <i className={"fa fa-search"}></i>
        </div>
    )
}