import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { caseSize } from "./constants";
import Table from "./components/Table";
import Pieces from "./components/Pieces";

export default function () {
    return (
        <Canvas
            camera={{ position: [caseSize*5, caseSize*5, -caseSize*5] }}
            style={{ width: "100vw", height: "100vh" }}
            shadows
        >
            <OrbitControls />
            <ambientLight />
            <directionalLight position={[0, caseSize*25, 0]} up={[0, 0, 0]} castShadow />
            <Table />
            <Pieces />
        </Canvas>
    )
}