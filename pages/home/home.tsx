import HeaderFooter from '../../layouts/HeaderFooter';
import dynamic from 'next/dynamic';
const Olddriver = dynamic(import('../../components/OldDriver'), {
  loading: () => <p>loading...</p>
});

const style = {
  color: 'red',
  fontSize: '46px'
};

export default () => {
  return (
    <HeaderFooter active="home">
      <div id="homepage" style={style}>
        <Olddriver />
      </div>
    </HeaderFooter>
  );
};
