import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text } from "@react-three/drei";

function CVCard({ position, title, description, emoji }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <group position={position}>
        <mesh>
          <boxGeometry args={[3.5, 1.5, 0.2]} />
          <meshStandardMaterial color="#4e73df" />
        </mesh>
        <Text
          position={[0, 0.3, 0.2]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {emoji} {title}
        </Text>
        <Text
          position={[0, -0.2, 0.2]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={3}
          lineHeight={1.2}
        >
          {description}
        </Text>
      </group>
    </Float>
  );
}

function BackgroundObjects() {
  return (
    <group>
      {/* MacBook */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={[-6, -2, -5]}>
          <mesh>
            <boxGeometry args={[2.5, 0.05, 1.5]} />
            <meshStandardMaterial color="#888" />
          </mesh>
          <Text
            position={[0, 0.1, 0.75]}
            fontSize={0.1}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            💻 MacBook
          </Text>
        </group>
      </Float>

      {/* Hammer */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <group position={[-3, -1.5, -5]}>
          <mesh>
            <boxGeometry args={[0.1, 1, 0.1]} />
            <meshStandardMaterial color="#6f4e37" />
          </mesh>
          <mesh position={[0, 0.6, 0]}>
            <boxGeometry args={[0.5, 0.2, 0.2]} />
            <meshStandardMaterial color="#444" />
          </mesh>
          <Text
            position={[0, 1.1, 0]}
            fontSize={0.12}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            🔨 Hammer
          </Text>
        </group>
      </Float>

      {/* Saw */}
      <Float speed={1} rotationIntensity={0.8} floatIntensity={0.8}>
        <group position={[3, -1.5, -5]}>
          <mesh>
            <boxGeometry args={[1.5, 0.1, 0.1]} />
            <meshStandardMaterial color="#666" />
          </mesh>
          <mesh position={[0.75, 0.25, 0]}>
            <boxGeometry args={[0.5, 0.5, 0.1]} />
            <meshStandardMaterial color="#888" />
          </mesh>
          <Text
            position={[0.75, 0.6, 0]}
            fontSize={0.12}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            🪚 Saw
          </Text>
        </group>
      </Float>
    </group>
  );
}

function CVScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Personal Info */}
      <CVCard
        position={[-4, 4, 0]}
        title="Momad Seyfi"
        description="Berlin, Germany | +49 1577 1446765"
        emoji="📍"
      />
      <CVCard
        position={[-4, 2.5, 0]}
        title="Birthdate"
        description="18.05.1985 | Iranian | Atheist"
        emoji="🎂"
      />

      {/* Berufserfahrung */}
      <CVCard
        position={[0, 4, 0]}
        title="Media & Entertainment"
        description="🎥 Managed a successful YouTube channel (2019–Present)"
        emoji="🌟"
      />
      <CVCard
        position={[0, 2.5, 0]}
        title="Restaurator"
        description="🖌️ RWB GmbH (2018–2019)"
        emoji="🏛️"
      />
      <CVCard
        position={[0, 1, 0]}
        title="Kunstrestaurator"
        description="🎨 Stadtmuseum Berlin (2012–2019)"
        emoji="🖼️"
      />

      {/* Skills */}
      <CVCard
        position={[4, 4, 0]}
        title="Languages"
        description="Persian (Native), German (C1), English (B2)"
        emoji="🌍"
      />
      <CVCard
        position={[4, 2.5, 0]}
        title="Technical Skills"
        description="💻 HTML, CSS, JavaScript, Adobe Suite"
        emoji="🛠️"
      />
      <CVCard
        position={[4, 1, 0]}
        title="Soft Skills"
        description="🤝 Communication, Organization, Creativity, Teamwork"
        emoji="✨"
      />

      {/* Background Objects */}
      <BackgroundObjects />

      <OrbitControls />
    </Canvas>
  );
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CVScene />
    </div>
  );
}
