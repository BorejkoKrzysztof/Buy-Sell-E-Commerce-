import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import { FiSearch } from 'react-icons/fi'
import { RiShoppingBag2Fill, RiMenuFill } from 'react-icons/ri'

function Navbar() {

    const [activeMobileMenu, setActiveMobileMenu] = useState(false)

    return (
        <>
            <section className={styles.navbarBar}>
                <div className={!activeMobileMenu ? `${styles.iconWrapper}` : `${styles.iconWrapper} ${styles.activeIconWrapper}`}
                    onClick={() => setActiveMobileMenu(prev => !prev)}>
                    <RiMenuFill />
                </div>
                <div className={styles.brandWrapper}>
                    <h1 className={styles.brandIcon}><RiShoppingBag2Fill /></h1>
                    <div className={styles.brandNameWrapper}>
                        <div className={styles.brandNameOne}>Buy</div>
                        <div className={styles.brandNameTwo}>&</div>
                        <div className={styles.brandNameThree}>Sell</div>
                    </div>
                </div>
                <div className={styles.searchIcon}>
                    <FiSearch />
                </div>
            </section>


            <section className={styles.navigation}>

            </section>
        </>

    )
}

export default Navbar