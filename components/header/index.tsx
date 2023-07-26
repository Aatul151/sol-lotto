import React from 'react'
import styles from './header.module.scss';
const Logo = 'assets/logo/slotto.svg';
const NotificationIcon = 'assets/icons/notification-md.svg';
const ProfileIcon = 'assets/icons/profile-md.svg';
const DownIcon = 'assets/icons/down-white.svg';
export default function Header() {
  return (
    <div>
          <div className={styles.header}>
            <div className={styles.headeralignment}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className={styles.rightcontnet}>
                  <a>User Flow</a>
                  <a>Admin Flow</a>
                  <div className={styles.twocontnetAlignment}>
                    <div className={styles.notification}>
                      <img src={NotificationIcon} alt="NotificationIcon"/>
                    </div>
                    <div className={styles.profilecontnet}>
                      <div>
                      <img src={ProfileIcon} alt="ProfileIcon"/>
                      </div>
                      <div className={styles.contnet}>
                        <p>John Deo</p>
                        <img src={DownIcon} alt="DownIcon"/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
