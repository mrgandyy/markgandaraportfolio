import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const Terrain = () => {
    const meshRef = useRef();

    // Generate terrain data
    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(100, 100, 40, 40);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);
            // Simple wave terrain
            pos.setZ(i, Math.sin(x / 5) * 2 + Math.cos(y / 5) * 2);
        }
        geo.computeVertexNormals();
        return geo;
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = -5;
            // Slowly move forward
            meshRef.current.position.z = (state.clock.elapsedTime * 2) % 20;
            meshRef.current.rotation.x = -Math.PI / 2;
        }
    });

    return (
        <points ref={meshRef}>
            <primitive object={geometry} />
            <pointsMaterial
                size={0.15}
                color="#00f3ff"
                transparent
                opacity={0.6}
            />
        </points>
    );
};

const ConnectingLines = () => {
    // A second layer of wireframe or grid
    return (
        <gridHelper
            args={[100, 50, 0xff00ff, 0x221144]}
            position={[0, -5, 0]}
            rotation={[0, 0, 0]}
        />
    )
}


const CyberpunkBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-background">
            <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
                <fog attach="fog" args={['#050510', 5, 30]} />
                <ambientLight intensity={0.5} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Terrain />
                <ConnectingLines />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </div>
    );
};

export default CyberpunkBackground;
