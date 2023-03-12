import React, { useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listBanners } from '../actions/bannerActions';

export default function Notificationbanner() {
  const dispatch = useDispatch();

  const bannerList = useSelector((state) => state.bannerList);
  const { loading, error, banners } = bannerList;
  

  useEffect(() => {
    dispatch(listBanners());
  }, [dispatch]);

  return (
    <div className="row center" >
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {banners.length === 0 && <MessageBox>No Banner Found , please run "api/banners/seed" </MessageBox>}
          <div>
        <img className="notification_banner row" src={banners[0].image} alt={banners[0].name} />
      
    </div>
        </>
      )}
    </div>
  )
}

