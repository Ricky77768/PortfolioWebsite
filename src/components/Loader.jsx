import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-loader'></span>
      <p style={{ fontSize: 18, color: "#FFFFFF", marginLeft: "-50px"}}>
        Loading...{progress}%
      </p>
    </Html>
  );
};

export default CanvasLoader;