import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import { FiSearch } from 'react-icons/fi'
import { RiShoppingBag2Fill, RiMenuFill } from 'react-icons/ri'
import PromotionBar from './subComponents/PromotionBar/PromotionBar'

function Navbar() {

    const [promotionExists, setPromotionExists] = useState(false)
    const [activeMobileMenu, setActiveMobileMenu] = useState(false)

    const checkPromotion = () => {
        setPromotionExists(true)
    }

    useEffect(() => {
        checkPromotion()
    }, [])

    return (
        <>
            {promotionExists ? <PromotionBar /> : <></>}
            <section className={styles.navbarBar} style={promotionExists ? { top: '20px' } : { top: '0' }}>
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
            </section >


            <section className={!activeMobileMenu ? `${styles.navigationWrapper}` : `${styles.navigationWrapper} ${styles.activenNavigationWrapper}`}
                style={promotionExists ? { top: '75px' } : { top: '55px' }}>

            </section>
        </>

    )
}

export default Navbar