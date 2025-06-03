import { Canvas } from "@react-three/fiber";
import Table from "./components/Table";
import { OrbitControls } from "@react-three/drei";


export default function () {
    return (
        <Canvas
            camera={{ position: [100, 100, 100] }}
            style={{ width: "100vw", height: "100vh" }}
        >
            <OrbitControls />
            <ambientLight />
            <Table />
        </Canvas>
    )
}