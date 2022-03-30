import '../styles/globals.scss';
import './Landing/landing.scss';
import '../pages/components/header/header.scss';
import '../pages/components/Hero/hero.scss';
import '../pages/components/DownloadApp/downloadapp.scss';
import '../pages/components/serving/serving.scss';
import '../pages/components/BlogCard/blogcard.scss';
import '../pages/components/FoodNearMe/foodnearme.scss';
import '../pages/components/FoodCategory/foodcat.scss';
import 'slick-carousel/slick/slick.css';
import '../pages/components/FoodCard/foodcard.scss';
import 'slick-carousel/slick/slick-theme.css';
import '../pages/components/banner/banner.scss';
import '../pages/category/category.scss';
import '../pages/components/CategoryBanner/categorybanner.scss';
import '../pages/shop/shop.scss';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import '../pages/cart/cart.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default MyApp;
