import styles from './www-ui-shared.module.scss';

/* eslint-disable-next-line */
export interface WwwUiSharedProps {}

export function WwwUiShared(props: WwwUiSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WwwUiShared!</h1>
    </div>
  );
}

export default WwwUiShared;
