import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import GltfModel from "./GltfModel";
import React from "react";

const canvasStyle = {
    width: '800px',
    height: '600px',
    margin: 'auto',
};

const Bonsai = () => {
    return (
        <div>
            <h1>Bonsai</h1>
            <div style={canvasStyle}>
                <Canvas>
                    <ambientLight intensity={2}/>
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                    <pointLight position={[-10, -10, -10]}/>
                    <OrbitControls target={[0, 0, 0]}/> {/* Add OrbitControls */}
                    <GltfModel modelPath={process.env.PUBLIC_URL + "/bonsai.glb"} scale={40}/>
                </Canvas>
            </div>
        </div>
    );
}

export default Bonsai;
