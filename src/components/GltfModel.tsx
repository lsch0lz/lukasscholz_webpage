import React, { useRef, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface GltfModelProps {
    modelPath: string;
    scale?: number;
    position?: [number, number, number];
}

const GltfModel: React.FC<GltfModelProps> = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
    const ref = useRef<THREE.Group>();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, hover] = useState(false);
    const { camera } = useThree();

    camera.position.set(0, 0, -120);
    camera.lookAt(0, 0, 0);

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.003;
        }
    });

    return (
        <primitive
            ref={ref}
            object={gltf.scene}
            position={position}
            scale={hovered ? [scale * 1.2, scale * 1.2, scale * 1.2] : [scale, scale, scale]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
        />
    );
};

export default GltfModel;
