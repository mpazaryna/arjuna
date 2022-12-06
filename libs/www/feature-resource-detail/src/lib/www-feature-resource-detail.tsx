import styles from './www-feature-resource-detail.module.scss';

/* eslint-disable-next-line */
export interface WwwFeatureResourceDetailProps {}

export function WwwFeatureResourceDetail(props: WwwFeatureResourceDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WwwFeatureResourceDetail!</h1>
    </div>
  );
}

export default WwwFeatureResourceDetail;
