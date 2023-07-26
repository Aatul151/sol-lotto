import React from 'react'
import styles from './sidebar.module.scss';
const AddIcon = 'assets/icons/add.svg';
export default function Sidebar() {
  return (
    <div>
          <div className={styles.sidebardesign}>
            <div className={styles.alignment}>
                <div className={styles.iconText}>
                    <div className={styles.icon}>
                        <img src={AddIcon} alt="AddIcon"/>
                    </div>
                    <div className={styles.text}>
                        <span>Create Lotto</span>
                    </div>
                </div>
                <div className={styles.iconText}>
                    <div className={styles.icon}>
                        <img src={AddIcon} alt="AddIcon"/>
                    </div>
                    <div className={styles.text}>
                        <span>Dashboard</span>
                    </div>
                </div>
                <div className={styles.iconText}>
                    <div className={styles.icon}>
                        <img src={AddIcon} alt="AddIcon"/>
                    </div>
                    <div className={styles.text}>
                        <span>Manage Partners</span>
                    </div>
                </div>
                <div className={styles.iconText}>
                    <div className={styles.icon}>
                        <img src={AddIcon} alt="AddIcon"/>
                    </div>
                    <div className={styles.text}>
                        <span>Manage Event</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
