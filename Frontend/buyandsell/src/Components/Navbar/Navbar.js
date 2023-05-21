import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'
import { FiSearch } from 'react-icons/fi'
import { RiShoppingBag2Fill, RiMenuFill } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import PromotionBar from './subComponents/PromotionBar/PromotionBar'
import { categoriesENG } from '../../Categories/ENG/CategoriesENG'
import { RiArrowDownSLine } from 'react-icons/ri'

function Navbar() {

    const [discountExists, setDiscountExists] = useState(false)
    const [activeMobileMenu, setActiveMobileMenu] = useState(false)
    const [activeDesktopSubMenu, setActiveDesktopSubMenu] = useState(false)
    const [searcherInput, setSearcherInput] = useState('')

    const checkDiscount = () => {
        // TODO: request to backend
        setDiscountExists(true)
    }

    const handleNavbarSearcher = (event) => {
        event.preventDefault()
        console.log(`szukam ${searcherInput}`)
    }

    const mobileMenuItemsListElement =
        <>
            {
                [...categoriesENG].map((mainCategoryItem, mainCategoryIndex) => {

                    return (
                        <div className={styles.mobileMenuSubItem} key={mainCategoryIndex}>
                            <span className={styles.mobileMenuSubItemTitle}>
                                {mainCategoryItem.name}
                            </span>
                            <div className={styles.mobileMenuSubItemsWrapper}>
                                <ul className={styles.mobileMenuSubItemsList}>
                                    {
                                        [...mainCategoryItem.subcategories].map((subCategoryItem, subCategoryIndex) => {

                                            return (
                                                <li className={styles.subCategoryItemTitle} key={subCategoryIndex}>
                                                    <a>{subCategoryItem.name}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        </>

    useEffect(() => {
        checkDiscount()
    }, [])

    return (
        <nav>
            {discountExists ? <PromotionBar /> : <></>}
            <section className={styles.navbarBar} style={discountExists ? { top: '20px' } : { top: '0' }}>
                <div className={!activeMobileMenu ? `${styles.menuIcon}` : `${styles.menuIcon} ${styles.activeMenuIcon}`}
                    onClick={() => setActiveMobileMenu(prev => !prev)}>
                    <RiMenuFill />
                </div>
                <div className={styles.mainNaviPart}>
                    <div className={styles.brandWrapper}>
                        <h1 className={styles.brandIcon}><RiShoppingBag2Fill /></h1>
                        <div className={styles.brandNameWrapper}>
                            <div style={{ fontFamily: 'Exo2-Regular' }}
                                className={styles.brandNameOne}>Buy</div>
                            <div className={styles.brandNameTwo}>&</div>
                            <div style={{ fontFamily: 'Exo2-Regular' }}
                                className={styles.brandNameThree}>Sell</div>
                        </div>
                    </div>
                    <div className={styles.naviCategoriesWrapper}>
                        <ul className={styles.naviCategoriesList}>
                            <li style={{ fontFamily: 'Exo2-Regular' }}
                                className={styles.naviCategoriesListItem}
                                onMouseEnter={() => { setActiveDesktopSubMenu(true) }}
                                onMouseLeave={() => { setActiveDesktopSubMenu(false) }}>Shop</li>
                            <li style={{ fontFamily: 'Exo2-Regular' }}
                                className={styles.naviCategoriesListItem}>Blog</li>
                            <li style={{ fontFamily: 'Exo2-Regular' }}
                                className={styles.naviCategoriesListItem}
                                onMouseEnter={() => { setActiveDesktopSubMenu(true) }}
                                onMouseLeave={() => { setActiveDesktopSubMenu(false) }}>Auctions</li>
                            <li style={{ fontFamily: 'Exo2-Regular' }}
                                className={styles.naviCategoriesListItem}
                                onMouseEnter={() => { setActiveDesktopSubMenu(true) }}
                                onMouseLeave={() => { setActiveDesktopSubMenu(false) }}>Sale</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.iconsWrapper}>
                    <div className={styles.searchWrapper}>
                        <form onSubmit={handleNavbarSearcher} className={styles.navbarForm}>
                            <input className={styles.searcherInput}
                                type='text' value={searcherInput}
                                placeholder='SEARCH...'
                                onChange={(event) => setSearcherInput(event.target.value)} />
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
                style={discountExists ? { top: '75px' } : { top: '55px' }}>
                <div className={styles.mobileMenuContent} style={{ color: 'white' }}>
                    <div className={styles.mobileMenuMainItem}>
                        <span className={styles.mobileMenuMainItemTitle}>
                            Shop
                        </span>
                        {
                            mobileMenuItemsListElement
                        }
                    </div>
                    <div className={styles.mainMobileMenuItem}>
                        <span className={styles.mobileMenuMainItemTitle}>
                            Blog
                        </span>
                    </div>
                    <div className={styles.mainMobileMenuItem}>
                        <span className={styles.mobileMenuMainItemTitle}>
                            Auctions
                        </span>
                        {
                            mobileMenuItemsListElement
                        }
                    </div>
                    <div className={styles.mainMobileMenuItem}>
                        <span className={styles.mobileMenuMainItemTitle}>
                            Sale
                        </span>
                        {
                            mobileMenuItemsListElement
                        }
                    </div>
                </div>
            </section>
























            <section className={!activeDesktopSubMenu ? `${styles.desktopSubMenu}` : `${styles.desktopSubMenu} ${styles.desktopSubMenuActive}`}
                style={discountExists ? { top: '108px' } : { top: '88px' }}
                onMouseEnter={() => { setActiveDesktopSubMenu(true) }}
                onMouseLeave={() => { setActiveDesktopSubMenu(false) }}
            >
                <div className={styles.desktopSubMenuWrapper} style={{ fontFamily: 'Exo2-Regular' }}>
                    {
                        [...categoriesENG].map((item, index) => {

                            return (
                                <ul className={styles.desktopSubMenuList} key={index}>
                                    <li className={styles.desktopSubMenuListItemMain}>
                                        {item.name}
                                    </li>
                                    {
                                        item.subcategories.map((subItem, index2) => {

                                            return (
                                                <li className={styles.desktopSubMenuListItem} key={index2}>
                                                    <a>{subItem.name}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        })
                    }
                </div>
            </section>
        </nav >

    )
}

export default Navbar