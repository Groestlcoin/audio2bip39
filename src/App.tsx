import { useSpring, animated } from 'react-spring';
import toasty from 'toasty';
import AudioRecorder from './components/AudioRecorder';
import renderAnimation from './constants/renderAnimation';

const t = toasty();

export default () => {
  const animationProps = useSpring(renderAnimation);

  return (
    <animated.div style={animationProps}>
      <h1>
        <span onClick={() => t.trigger()}>
          audio2bip39<span className="tld">.groestlcoin.org</span>
        </span>
      </h1>
      <AudioRecorder />
    </animated.div>
  );
};
