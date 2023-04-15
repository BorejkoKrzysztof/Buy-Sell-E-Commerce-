import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import { FiSearch } from 'react-icons/fi'
import { RiShoppingBag2Fill, RiMenuFill } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import PromotionBar from './subComponents/PromotionBar/PromotionBar'

function Navbar() {

    const [promotionExists, setPromotionExists] = useState(false)
    const [activeMobileMenu, setActiveMobileMenu] = useState(false)
    const [searcherInput, setSearcherInput] = useState('')

    const checkDiscount = () => {
        // TODO: request to backend
        setPromotionExists(true)
    }

    const handleNavbarSearcher = (event) => {
        event.preventDefault()
        console.log(`szukam ${searcherInput}`)
    }

    useEffect(() => {
        checkDiscount()
    }, [])

    return (
        <>
            {promotionExists ? <PromotionBar /> : <></>}
            <section className={styles.navbarBar} style={promotionExists ? { top: '20px' } : { top: '0' }}>
                <div className={!activeMobileMenu ? `${styles.menuIcon}` : `${styles.menuIcon} ${styles.activeMenuIcon}`}
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
                <div className={styles.iconsWrapper}>
                    <div className={styles.searchWrapper}>
                        <form onSubmit={handleNavbarSearcher} className={styles.navbarForm}>
                            <input className={styles.searcherInput} type='text' value={searcherInput} onChange={(event) => setSearcherInput(event.target.value)} />
                            <button type='submit' className={styles.searchIcon}>
                                <FiSearch />
                            </button>
                        </form>
                    </div>
                    <div className={styles.personIcon}>
                        <BsPerson />
                    </div>
                    <div className={styles.basketIcon}>
                        <AiOutlineShoppingCart />
                    </div>
                </div>
            </section >


            <section className={!activeMobileMenu ? `${styles.navigationWrapper}` : `${styles.navigationWrapper} ${styles.activenNavigationWrapper}`}
                style={promotionExists ? { top: '75px' } : { top: '55px' }}>

            </section>
        </>

    )
}

export default Navbar