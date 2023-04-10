import BeatLoader from "react-spinners/BeatLoader";
import { Spiner } from './Loader.Styled';
const Loader = () => {
  return (
    <Spiner>
      <BeatLoader
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </Spiner>
  );
};

export default Loader;
