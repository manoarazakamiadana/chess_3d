import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Game from "./components/Game";

export default function () {
    return (
        <Canvas
            camera={{ position: [0, 100, 0] }}
            style={{ width: "100vw", height: "100vh" }}
        >
            <OrbitControls />
            <ambientLight />
            <Game />
        </Canvas>
    )
}