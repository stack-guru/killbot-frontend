import React from 'react';
import styles from './EmptyPage.module.scss';
import PageHeader from '../../../../Layouts/PageHeader/PageHeader';


const EmptyPage = () => {
  return (
  <div className={styles.EmptyPage}>
    <PageHeader titles="Empty" active="Empty" items={['Pages']} />
                            {/* <!-- ROW-1 OPEN --> */}
                        {/* <!-- Row --> */}
                        <div className="row ">
                            <div className="col-md-12">
                            </div>
                        </div>
                        {/* <!-- /Row --> */}
                    </div>

)
};

export default EmptyPage;
