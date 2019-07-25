import Header from '../components/Header';
import Footer from '../components/Footer';

export default props => {
  return (
    <div>
      <Header active={props.active} />
      <div id="LayoutContainer">{props.children}</div>
      <Footer />
    </div>
  );
};
