import { useState, Suspense, useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Button } from 'antd'
import Model1 from './Model/Model1'
import Model2 from './Model/Model2'
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";

export default function ModelViewer() {
  const [activeModel, setActiveModel] = useState(null)
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Button style={{ backgroundColor: "#3949AB", color: "white" }} onClick={() => setActiveModel('1')}>
          {"Model A220-100 (40%" + t.done + ")"}
        </Button>
        <Button style={{ backgroundColor: "#3949AB", color: "white", marginLeft: '10px' }} onClick={() => setActiveModel('2')}>
          {"Model A319 (1%" + t.done + ")"}
        </Button>
        <Button danger style={{ marginLeft: '10px' }} onClick={() => setActiveModel(null)}>
          {t.close}
        </Button>
      </div>

      <Canvas camera={{ position: [0, 0, 8] }} style={{ height: '500px', width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />

        <Suspense fallback={null}>
          <group visible={activeModel === '1'}>
            <Model1 scale={1.5} position={[0, 0, 0]} />
          </group>
          <group visible={activeModel === '2'}>
            <Model2 scale={1.5} position={[0, 0, 0]} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}
