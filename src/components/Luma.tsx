import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

const canvasStyle = {
    width: '800px',
    height: '600px',
    margin: 'auto',
};

const Luma = () => {
    return (
        <div>
            <h1>Bonsai</h1>
            <div style={canvasStyle}>
                <Canvas>
                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <GltfModel modelPath={process.env.PUBLIC_URL + "/textured_mesh_glb.glb"} scale={40} />
                </Canvas>
            </div>
        </div>
    );
};

export default Luma;
