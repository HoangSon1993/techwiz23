import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return <h2 className={cx('wrapper')}>Header</h2>;
}

export default Header;
