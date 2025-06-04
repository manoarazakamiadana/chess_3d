import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Game from "./components/Game";
import { caseSize } from "./constants";

export default function () {
    return (
        <Canvas
            camera={{ position: [caseSize*5, caseSize*5, 0] }}
            style={{ width: "100vw", height: "100vh" }}
            shadows
        >
            <OrbitControls />
            <ambientLight />
            <directionalLight position={[0, caseSize*25, 0]} up={[0, 0, 0]} castShadow />
            <Game />
        </Canvas>
    )
}